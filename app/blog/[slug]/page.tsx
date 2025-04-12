import { MDXContent } from '@content-collections/mdx/react';
import type { Metadata } from 'next';
import { allPosts } from 'content-collections';

export const metadata: Metadata = {
  title: 'Blog | Galuh Satria ',
};

const PostPage = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const post = allPosts.find((p) => p.slug === params.slug);

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

  return (
    <main className="max-w-4xl mx-auto py-4 max-md:px-4 mt-7">
      <div className="mt-14">
        <h1 className="text-4xl max-md:text-2xl font-bold my-7">{post.title}</h1>
        <p className="mt-2 text-muted-foreground">
          Written on {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' })}
        </p>
      </div>

      <article className="prose dark:text-white prose-th:text-blue-700 dark:prose-strong:text-white dark:prose-blockquote:text-white dark:prose-headings:text-white prose-headings:font-bold prose-a:text-blue-700 dark:prose-code:text-white pt-4">
        <MDXContent code={post.mdx} />
      </article>
    </main>
  );
};

export default PostPage;
