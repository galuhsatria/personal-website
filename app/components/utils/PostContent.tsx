"use client";

import useLoaded from "@/hooks/useLoaded";
import PostItem from "../ui/PostItem";


export function AllPost({ posts }: any) {
  const isLoaded = useLoaded();
  return (
    <section className={`${isLoaded && "fade-in-start"}`}>
      {posts.length > 0 ? (
        <ul className="mt-6 grid md:grid-cols-2 gap-4">
          {posts.map(({ title, date, subtitle, slug}: any, index: number) => (
            <li key={index} data-fade={index + 1}>
              <PostItem title={title} date={date} subtitle={subtitle} slug={slug}  />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center font-bold text-xl">No posts yet😁</p>
      )}
    </section>
  );
}
