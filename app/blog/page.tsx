import type { Metadata } from 'next';
import { allPosts } from 'content-collections';
import Link from 'next/link';
import Blog from './blog';

export const metadata: Metadata = {
  title: 'Galuh Satria | Blog',
  description: 'This is a personal blog by Galuh Satria',
};

export default function Page() {
  return (
    <main>
      <Blog />
    </main>
  );
}
