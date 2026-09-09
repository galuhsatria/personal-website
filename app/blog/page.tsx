import type { Metadata } from 'next';
import { allPosts } from 'content-collections';
import Link from 'next/link';
import Image from 'next/image';
import { getAllDiscussionStats } from '@/lib/giscus';
import PostActions from '@/components/PostActions';
import { VscVerifiedFilled } from 'react-icons/vsc';

export const metadata: Metadata = {
  title: 'Galuh Satria | Blog',
  description: 'This is a personal blog by Galuh Satria',
};

export default async function Blog() {
  const sortedPosts = allPosts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  const stats = await getAllDiscussionStats();

  return (
    <section className="min-h-screen mt-4">
      <ul>
        {sortedPosts.map((post, index) => {
          const pathname = `/blog/${post.slug}`;
          const stat = stats[pathname];

          return (
            <li key={index} className="flex gap-2 items-start">
              <Image src="/avatar.png" alt="profil-picture" width={20} height={20} className="h-8 w-8 rounded-full object-cover" unoptimized />
              <div className="w-full">
                <p className="font-semibold text-sm mb-2 flex gap-1 items-center">
                  galuhsatria <VscVerifiedFilled className="text-blue-500 text-lg"/> <span className="text-muted-foreground font-light text-xs">{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}</span>
                </p>
                <div className="border border-border rounded-md p-4 mb-4">
                  <Link href={pathname} className="w-full mb-4 flex gap-4 justify-between max-sm:flex-col">
                    <div className="w-full">
                      <p className="text-lg max-sm:text-base hover:!text-blue-500 transition-colors duration-200">{post.title}</p>
                      <p className="text-sm text-zinc-400 mt-1.5 max-sm:text-xs">{post.summary}</p>
                    </div>
                  </Link>
                  <PostActions
                    slug={post.slug}
                    title={post.title}
                    reactionCount={stat?.reactionCount ?? 0}
                    commentCount={stat?.commentCount ?? 0}
                    reactionGroups={stat?.reactionGroups ?? []}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
