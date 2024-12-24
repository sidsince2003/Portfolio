import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import { CalendarDays } from 'lucide-react';

const client = createClient({
  projectId: 'r3s7jco8',
  dataset: 'production',
  apiVersion: '2024-03-24',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

async function getPost(slug) {
  const query = `*[_type == "blog" && slug.current == $slug][0]{
    title,
    slug,
    mainImage,
    publishedAt,
    content,
    tags
  }`;

  const post = await client.fetch(query, { slug });
  return post;
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-24">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        
        <div className="flex items-center gap-6 text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }).format(new Date(post.publishedAt))}
            </span>
          </div>
        </div>

        {post.tags && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {post.mainImage && (
        <div className="mb-8">
          <img
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}

      <div className="prose dark:prose-invert max-w-none">
        <PortableText value={post.content} />
      </div>
    </article>
  );
}