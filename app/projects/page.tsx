import type { Metadata } from 'next';
import Projects from './projects';

export const metadata: Metadata = {
  title: 'Galuh Satria | Projects',
  description: 'This is a list of my projects',
};

export default function Page() {
  return <Projects />;
}
