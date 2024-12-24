'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { CalendarDays } from 'lucide-react';
import Link from 'next/link';

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

// Format date with consistent formatting
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'  // Use UTC to ensure consistent dates
  });
};

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const fetchPosts = async () => {
      try {
        const query = `
          *[_type == "blog"] | order(publishedAt desc) {
            _id,
            title,
            slug,
            mainImage,
            publishedAt,
            excerpt,
            tags
          }
        `;
        
        const fetchedPosts = await client.fetch(query);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (!mounted) return null;

  if (isLoading) {
    return (
      <div className="min-h-screen py-20 px-4 md:px-6 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <section id="blog" className="min-h-screen py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Blog Posts
          </span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Thoughts, tutorials, and insights about web development and technology
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {posts.map((post) => (
          <article 
            key={post._id} 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
          >
            {post.mainImage && (
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {post.title}
              </h2>
              
              <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-2">
                  <CalendarDays size={16} />
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                </div>
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
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

              {post.excerpt && (
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
              )}

              <Link 
                href={`/blog/${post.slug.current}`}
                className="text-blue-600 hover:text-blue-700 dark:hover:text-blue-400 font-medium flex items-center gap-2"
              >
                Read more
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blogs;