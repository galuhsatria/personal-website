"use client";
import Image from "next/image";
import profilPicture from "@/assets/images/profile/profil-picture.jpeg";
import { projects } from "./data/projects";
import { FeaturedProject } from "./components/utils/ProjectContent";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsGithub, BsTwitter } from "react-icons/bs";
import useLoaded from "./hooks/useLoaded";

export default function Home() {
  const isLoaded = useLoaded();
  return (
    <main className="max-w-4xl mx-auto my-28 px-4">
      <section className={`${isLoaded && "fade-in-start"}`}>
        <div className=" flex sm:flex-row flex-col sm:items-center gap-6 ">
          <Image src={profilPicture} alt="profil-picture" width={150} height={100} className="rounded-full object-contain" data-fade="0" placeholder="blur" />
          <div data-fade="1">
            <h1 className="text-4xl font-bold">Galuh Satria</h1>
            <p className="text-lg mt-2 font-medium text-muted-foreground transition-colors">Software Developer</p>
          </div>
        </div>
        <div className="mt-8" data-fade="2">
          <h1 className="text-2xl font-bold mb-2">Hi Im Galuh</h1>
          <p>I contribute to the development of applications specializing in frontend web. Learning about web development, React / Next Js.</p>
          <div className="flex gap-5 mt-4">
            <Link href={"https://github.com/galuhsatria"} className="flex flex-row items-center gap-[6px] text-muted-foreground hover:text-primary transition-colors transition-all group w-max">
              <BsGithub className="group-hover:text-black dark:group-hover:text-white mt-1" />
              galuhsatria
            </Link>
            <Link href={"https://twitter.com/galuhsatria___"} className="flex flex-row items-center gap-[6px] text-muted-foreground hover:text-primary transition-colors transition-all group w-max">
              <BsTwitter className="group-hover:text-blue-500 mt-1" />
              galuhsatria___
            </Link>
          </div>
        </div>

        <div className="mt-12" data-fade="3">
          <h1 className="text-2xl font-bold">Featured Projects</h1>
          <FeaturedProject projects={projects} />
          <Link href={"/projects"} className="flex items-center group mt-4 text-muted-foreground hover:text-primary transition-colors font-semibold w-max">
            See All Projects <HiOutlineArrowNarrowRight className="group-hover:ml-2 transition-all" />
          </Link>
        </div>
      </section>
    </main>
  );
}
