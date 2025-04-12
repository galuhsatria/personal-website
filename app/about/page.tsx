import type { Metadata } from 'next';
import About from './about';

export const metadata: Metadata = {
  title: 'Galuh Satria | About Me',
};

export default function Page() {
  return <About />;
}
