import { Projects } from '@/components/ProjectContent';
import { projects } from '@/data/projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galuh Satria | Projects',
  description: 'This is a list of my projects',
};

export default function Page() {
  return <Projects projects={projects} />;
}
