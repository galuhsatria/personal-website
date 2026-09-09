import Experience from './components/ui/Experience';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galuh Satria | Experience',
};

export default function Home() {
  return (
    <section>
      <Experience />
    </section>
  );
}
