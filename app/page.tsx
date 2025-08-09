'use client';

import Image from 'next/image';
import { projects } from './data/projects';
import { FeaturedProject } from './components/ProjectContent';
import Link from 'next/link';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';
import useLoaded from './hooks/useLoaded';
import Experience from './components/ui/Experience';
import { GrDocumentUser } from 'react-icons/gr';
import EmailForm from './components/EmailForm';

export default function Home() {
  const isLoaded = useLoaded();
  return (
    <main className="max-w-4xl mx-auto max-md:px-4 mt-32 mb-20">
      <section className={`${isLoaded && 'fade-in-start'}`}>
        <div className=" flex sm:flex-row flex-col sm:items-center gap-6 ">
          <Image src={'/avatar.jpeg'} alt="profil-picture" width={150} height={100} className="rounded-full object-cover h-32 w-32" data-fade="0" unoptimized />
          <div data-fade="1">
            <h1 className="text-4xl font-bold dark:text-white text-black">Galuh Satria</h1>
            <p className="text-lg mt-2 font-medium text-muted-foreground transition-colors">Frontend Developer</p>
          </div>
        </div>
        <div className="mt-8" data-fade="2">
          <h1 className="text-2xl font-bold mb-2 dark:text-white text-black">Hi Im Galuh</h1>
          <p className="dark:text-white text-black">
            Frontend Developer who likes to build a product that can be useful for everyone. I usually work using technologies such as Next Js, Tailwind CSS, Prisma and some other great technologies.
          </p>
          <div className="flex gap-5 mt-4">
            <Link href={'https://github.com/galuhsatria'} className="flex flex-row items-center gap-[6px] text-muted-foreground hover:text-primary transition-colors  group w-max" target="_blank">
              <BsGithub className="group-hover:text-black dark:group-hover:text-white mt-1" />
              galuhsatria
            </Link>
            <Link href={'https://www.linkedin.com/in/galuhsatria/'} className="flex flex-row items-center gap-[6px] text-muted-foreground hover:text-primary transition-colors group w-max" target="_blank">
              <BsLinkedin className="group-hover:text-blue-500" />
              Galuh Satria
            </Link>
            <Link
              href={'https://drive.google.com/file/d/1SO1WQpkYn9pb8zckrvbirpNoPrcYYFWG/view?usp=sharing'}
              target="_blank"
              className="flex flex-row items-center gap-[6px] text-muted-foreground hover:text-primary transition-colors group w-max"
            >
              <GrDocumentUser className="group-hover:text-green-500" />
              Resume
            </Link>
          </div>
        </div>

        <div className="mt-12" data-fade="3">
          <h1 className="text-2xl font-bold dark:text-white text-black">Featured Projects</h1>
          <FeaturedProject projects={projects} />
          <Link href="/projects" className="flex items-center group mt-4 text-muted-foreground hover:text-primary transition-colors font-semibold w-max">
            See All Projects <HiOutlineArrowNarrowRight className="group-hover:ml-2 transition-all" />
          </Link>
        </div>

        <div data-fade="4" className="mt-12">
          <h1 className="text-2xl font-bold dark:text-white text-black">Experience</h1>
          <Experience />
        </div>

        <div className="mt-12 bg-secondary p-4 rounded-lg" data-fade="4">
          <div className="flex max-md:flex-col md:flex-row items-center gap-8">
            <div className="w-full">
              <h1 className="text-2xl font-bold dark:text-white text-black">Get it touch</h1>
              <p className="text-sm text-muted-foreground mt-4">
                I&apos;m always interested in exploring new opportunities, collaborating, or exchanging ideas with like-minded individuals. Feel free to email me if you&apos;d like to see my portfolio deck or to discuss a potential project.
              </p>
            </div>
            <div className="w-full">
              <EmailForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
