"use client";
import Image from "next/image";
import Link from "next/link";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { PostMetadata } from "../../types";

export default function PostItem(props: PostMetadata) {
  const { title, date, subtitle, slug, header } = props;

  return (
    <div className="border border-border shadow-sm py-4 px-4 rounded-md md:w-full scale-100 hover:scale-[1.02] active:scale-[0.97] transition-all motion-safe:transform-gpu">
      <div className="h-40">
        <Image src={"/coming-soon.png"} alt={title} width={1440} height={792} className="rounded pointer-events-none object-cover w-full h-full shadow dark:shadow-none" />
      </div>

      <div className="mt-4">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-sm dark:text-zinc-400 text-black">{subtitle}</p>
        <p className="mt-3">{date}</p>
        <div className="flex gap-4 items-center mt-4">
          <Link href={`/posts/${slug}`} className="bg-black rounded-3xl px-4 py-2 text-white flex gap-2 items-center">
            Visit
            <BsFillRocketTakeoffFill />
          </Link>
        </div>
      </div>
    </div>
  );
}
