'use client';

import Link from 'next/link';
import { MessageCircle, SendHorizonal } from 'lucide-react';
import { REACTION_EMOJI, type ReactionGroup } from '@/lib/giscus';

type Props = {
  slug: string;
  title: string;
  reactionCount: number;
  commentCount: number;
  reactionGroups: ReactionGroup[];
};

export default function PostActions({ slug, title, reactionCount, commentCount, reactionGroups }: Props) {
  const handleShare = async () => {
    const url = `${window.location.origin}/blog/${slug}`;
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert('Link disalin ke clipboard');
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Link
        href={`/blog/${slug}#comment`}
        className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        {reactionGroups.length > 0 ? (
          <div className="flex items-center bg-muted rounded-full pl-1 pr-2 py-0.5">
            <div className="flex -space-x-1">
              {reactionGroups.slice(0, 3).map((g) => (
                <span
                  key={g.content}
                  className="text-sm bg-background rounded-full w-5 h-5 flex items-center justify-center border border-border"
                >
                  {REACTION_EMOJI[g.content] ?? '👍'}
                </span>
              ))}
            </div>
            <span className="ml-1.5 text-xs">{reactionCount}</span>
          </div>
        ) : (
          <span className="text-xs text-muted-foreground">Beri reaksi</span>
        )}
      </Link>

      <Link
        href={`/blog/${slug}#comment`}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <MessageCircle className="h-5 w-5" />
        <span>{commentCount}</span>
      </Link>

      <button onClick={handleShare} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Share post">
        <SendHorizonal className="h-5 w-5" />
      </button>
    </div>
  );
}
