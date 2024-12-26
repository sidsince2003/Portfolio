'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { PortableText } from '@portabletext/react';
import { CalendarDays, Tag } from 'lucide-react';
import Link from 'next/link';
import ParticlesBackground from '../../components/ParticlesBackground';  // Import the ParticlesBackground component

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

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
  });
};

// Add the components configuration for PortableText
const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="my-8 relative">
          <img
            src={urlFor(value).url()}
            alt={value.alt || ''}
            className="rounded-lg w-full"
          />
          {value.caption && (
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
              {value.caption}
            </div>
          )}
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="mb-4 text-gray-700 dark:text-gray-300">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      );
    },
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2">{children}</li>,
    number: ({ children }) => <li className="mb-2">{children}</li>,
  },
};

export default function BlogPost({ slug }) {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('light'); // Default theme is light

  useEffect(() => {
    const fetchPost = async () => {
      console.log('Fetching post with slug:', slug);

      if (!slug) {
        console.error('No slug provided');
        setError('No slug provided');
        setIsLoading(false);
        return;
      }

      try {
        const query = `*[_type == "blog" && slug.current == $slug][0] {
          _id,
          title,
          mainImage,
          publishedAt,
          content,
          tags,
          excerpt
        }`;

        const fetchedPost = await client.fetch(query, { slug });
        console.log('Fetched post:', fetchedPost);

        if (!fetchedPost) {
          setError('Post not found');
        } else {
          setPost(fetchedPost);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen py-20 px-4 md:px-6 flex items-center justify-center">
        <div className="text-xl">Loading post...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-20 px-4 md:px-6 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Error: {error}</h1>
        <Link 
          href="/"
          className="text-blue-600 hover:text-blue-700 dark:hover:text-blue-400"
        >
          Back to home
        </Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen py-20 px-4 md:px-6 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Link 
          href="/"
          className="text-blue-600 hover:text-blue-700 dark:hover:text-blue-400"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen py-20 px-4 md:px-6 relative">
      {/* Background Particles */}
      <ParticlesBackground />

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg z-10 relative">
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-200"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        <Link 
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:hover:text-blue-400 mb-8"
        >
          ← Back to home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            {post.publishedAt && (
              <div className="flex items-center gap-2">
                <CalendarDays size={20} />
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
              </div>
            )}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1 text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                >
                  <Tag size={14} />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {post.mainImage && (
            <div className="relative aspect-video mb-8 rounded-lg overflow-hidden">
              <img
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}

          {post.excerpt && (
            <div className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {post.excerpt}
            </div>
          )}
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <PortableText value={post.content} components={components} />
        </div>
      </div>
    </article>
  );
}
