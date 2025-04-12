'use client';
import useLoaded from '@/hooks/useLoaded';
import { AllProjects } from '../components/ProjectContent';
import { projects } from '../data/projects';

export default function Projects() {
  const isLoaded = useLoaded();

  return (
    <main>
      <section className={`my-28 max-w-4xl max-md:px-4 mx-auto ${isLoaded && 'fade-in-start'}`}>
        <h1 className="text-4xl font-bold " data-fade="1">
          <span className="dark:text-white text-black">Projects</span>
        </h1>
        <AllProjects projects={projects} />
      </section>
    </main>
  );
}
