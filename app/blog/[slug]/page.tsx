import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '../../components/utils/getPostMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Galuh Satria ',
};

const getPostContent = (slug: string) => {
  const folder = 'posts/';
  const file = `${folder}${slug}.md`;
  try {
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
  } catch (error) {
    return null;
  }
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  if (!post) {
    return (
      <main className="max-w-4xl min-h-screen mx-auto py-4 mt-7 max-md:px-4">
        <div className="mt-14">
          <h1 className="text-4xl font-bold my-7">Blog Tidak Ditemukan</h1>
          <p className="mt-2 text-muted-foreground">Maaf konten blog yang ada cari tidak ada</p>
        </div>
      </main>
    );
  }

  const { title, date } = post.data;

  return (
    <main className="max-w-4xl mx-auto py-4 max-md:px-4 mt-7">
      <div className="mt-14">
        <h1 className="text-4xl font-bold my-7">{title}</h1>
        <p className="mt-2 text-muted-foreground">Written on {date} by Galuh</p>
      </div>
      
      <article className="prose dark:text-white prose-th:text-blue-700 dark:prose-strong:text-white dark:prose-blockquote:text-white dark:prose-headings:text-white prose-headings:font-bold prose-a:text-blue-700 dark:prose-code:text-white">
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
};

export default PostPage;