'use client';
import useLoaded from '@/hooks/useLoaded';
import { AllProjects } from '../components/ProjectContent';
import { projects } from '../data/projects';
import { useTranslations } from 'next-intl';

export default function Projects() {
  const isLoaded = useLoaded();
  const t = useTranslations('projects');

  return (
    <main>
      <section className={`mt-28 mb-20 max-w-4xl max-lg:px-4 mx-auto ${isLoaded && 'fade-in-start'}`}>
        <h1 className="text-4xl font-bold " data-fade="1">
          <span className="dark:text-white text-black">{t('title')}</span>
        </h1>
        <AllProjects projects={projects} />
      </section>
    </main>
  );
}
