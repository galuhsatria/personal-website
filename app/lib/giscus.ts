export type ReactionGroup = {
  content: string;
  count: number;
};

export type DiscussionStat = {
  reactionCount: number;
  commentCount: number;
  url: string;
  reactionGroups: ReactionGroup[];
};

const GISCUS_REPO = 'galuhsatria/personal-website';
const GISCUS_CATEGORY_ID = 'DIC_kwDOKKHOfc4Cp8ei';

export const REACTION_EMOJI: Record<string, string> = {
  THUMBS_UP: '👍',
  THUMBS_DOWN: '👎',
  LAUGH: '😄',
  HOORAY: '🎉',
  CONFUSED: '😕',
  HEART: '❤️',
  ROCKET: '🚀',
  EYES: '👀',
};

type RawReactionGroup = {
  content: string;
  reactors: { totalCount: number };
};

type RawDiscussionNode = {
  title: string;
  url: string;
  comments: { totalCount: number };
  reactions: { totalCount: number };
  reactionGroups: RawReactionGroup[];
};

export async function getAllDiscussionStats(): Promise<Record<string, DiscussionStat>> {
  const [owner, name] = GISCUS_REPO.split('/');
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn('[giscus] GITHUB_TOKEN belum di-set, stats akan kosong');
    return {};
  }

  const stats: Record<string, DiscussionStat> = {};
  let after: string | null = null;
  let hasNextPage = true;

  const query = `
    query($owner: String!, $name: String!, $after: String, $categoryId: ID!) {
      repository(owner: $owner, name: $name) {
        discussions(first: 100, after: $after, categoryId: $categoryId) {
          pageInfo { hasNextPage endCursor }
          nodes {
            title
            url
            comments { totalCount }
            reactions { totalCount }
            reactionGroups {
              content
              reactors { totalCount }
            }
          }
        }
      }
    }
  `;

  while (hasNextPage) {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { owner, name, after, categoryId: GISCUS_CATEGORY_ID },
      }),
      cache: 'no-store',
    });

    if (!res.ok) {
      console.error('[giscus] gagal fetch stats:', await res.text());
      break;
    }

    const json = await res.json();

    if (json.errors) {
      console.error('[giscus] GraphQL errors:', json.errors);
      break;
    }

    const discussions = json?.data?.repository?.discussions;
    if (!discussions) break;

    for (const node of discussions.nodes as RawDiscussionNode[]) {
      // title dari GitHub: "blog/nama-slug" (tanpa leading slash)
      const pathname = node.title.startsWith('/') ? node.title : `/${node.title}`;

      const reactionGroups: ReactionGroup[] = node.reactionGroups
        .filter((g) => g.reactors.totalCount > 0)
        .map((g) => ({ content: g.content, count: g.reactors.totalCount }))
        .sort((a, b) => b.count - a.count);

      stats[pathname] = {
        reactionCount: node.reactions.totalCount,
        commentCount: node.comments.totalCount,
        url: node.url,
        reactionGroups,
      };
    }

    hasNextPage = discussions.pageInfo.hasNextPage;
    after = discussions.pageInfo.endCursor;
  }

  return stats;
}
