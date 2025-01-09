"use client";
import Link from "next/link";
import { PostMetadata } from "../../types";

export default function PostItem(props: PostMetadata) {
  const { title, subtitle, slug, } = props;

  return (
    <div className="border border-border rounded-md p-4 w-full group ">
      <Link href={`/blog/${slug}`}>
        <h1 className="font-bold group-hover:text-blue-600 line-clamp-2">{title}</h1>
        <p className="mt-2">{subtitle}</p>
      </Link>
    </div>
  );
}
