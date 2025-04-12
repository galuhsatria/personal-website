'use client';

import { allPosts } from 'content-collections';
import Link from 'next/link';
import useLoaded from '@/hooks/useLoaded';

export default function Blog() {
  const isLoaded = useLoaded();

  return (
    <section className={`my-28 max-w-4xl max-md:px-4 mx-auto min-h-screen ${isLoaded && 'fade-in-start'}`}>
      <h1 className="text-4xl font-bold " data-fade="1">
        <span className="dark:text-white text-black">Blog</span>
      </h1>
      <div className="mt-6">
        {allPosts.map((post, index) => (
          <div key={index} data-fade={index + 1}>
            <Link href={`/blog/${post.slug}`} className="mb-4 border border-border rounded-md p-4 flex gap-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 justify-between max-sm:flex-col">
              <div className="w-[80%] max-sm:w-full">
                <p className="text-lg max-sm:text-base dark:text-white text-black">{post.title}</p>
                <p className="text-sm text-zinc-400 max-sm:mt-1.5 max-sm:text-xs">{post.summary}</p>
              </div>
              <p className="text-zinc-400 text-sm">{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
