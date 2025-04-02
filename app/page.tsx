'use client';

import Image from 'next/image';
import { projects } from './data/projects';
import { FeaturedProject } from './components/utils/ProjectContent';
import Link from 'next/link';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import useLoaded from './hooks/useLoaded';
import Experience from './components/ui/Experience';

export default function Home() {
  const isLoaded = useLoaded();
  return (
    <main className="max-w-4xl mx-auto max-md:px-4 my-28">
      <section className={`${isLoaded && 'fade-in-start'}`}>
        <div className=" flex sm:flex-row flex-col sm:items-center gap-6 ">
          <Image src={'/avatar.jpeg'} alt="profil-picture" width={150} height={100} className="rounded-full object-cover h-32 w-32" data-fade="0" unoptimized/>
          <div data-fade="1">
            <h1 className="text-4xl font-bold ">Galuh Satria</h1>
            <p className="text-lg mt-2 font-medium text-muted-foreground transition-colors">Frontend Developer</p>
          </div>
        </div>
        <div className="mt-8" data-fade="2">
          <h1 className="text-2xl font-bold mb-2">Hi Im Galuh</h1>
          <p>Frontend Developer who likes to build a product that can be useful for everyone. I usually work using technologies such as Next Js, Tailwind CSS, Prisma and some other great technologies.</p>
          <div className="flex gap-5 mt-4">
            <Link href={'https://github.com/galuhsatria'} className="flex flex-row items-center gap-[6px] text-muted-foreground hover:text-primary transition-colors  group w-max">
              <BsGithub className="group-hover:text-black dark:group-hover:text-white mt-1" />
              galuhsatria
            </Link>
            <Link href={'https://twitter.com/galuhsatria___'} className="flex flex-row items-center gap-[6px] text-muted-foreground hover:text-primary transition-colors group w-max">
              <BsTwitter className="group-hover:text-blue-500 mt-1" />
              galuhsatria___
            </Link>
          </div>
        </div>

        <div className="mt-12" data-fade="3">
          <h1 className="text-2xl font-bold">Featured Projects</h1>
          <FeaturedProject projects={projects} />
          <Link href="/projects" className="flex items-center group mt-4 text-muted-foreground hover:text-primary transition-colors font-semibold w-max">
            See All Projects <HiOutlineArrowNarrowRight className="group-hover:ml-2 transition-all" />
          </Link>
        </div>

        <div data-fade="4" className='mt-12'>
        <h1 className="text-2xl font-bold dark:text-white text-black">Experience</h1>
          <Experience />
        </div>
      </section>
    </main>
  );
}
