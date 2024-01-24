import getPostMetadata from '../components/utils/getPostMetaData';
import { AllPost } from '../components/utils/PostContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Galuh Satria ',
  description: 'This is a personal blog by Galuh Satria',
};

export default function Blog() {
  const postMetadata = getPostMetadata();
  return (
    <main>
      <div className="my-28 max-w-4xl mx-auto px-4 min-h-screen">
        <AllPost posts={postMetadata} />
      </div>
    </main>
  );
}
