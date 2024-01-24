import type { Metadata } from 'next';
import About from './about';

export const metadata: Metadata = {
  title: 'About | Galuh Satria '
};

export default function Page() {
  return <About />;
}
