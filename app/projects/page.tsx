import type { Metadata } from 'next';
import Projects from './projects';

export const metadata: Metadata = {
  title: 'Projects | Galuh Satria ',
  description: 'This is a list of my projects',
};

export default function Page() {
  return <Projects />;
}
