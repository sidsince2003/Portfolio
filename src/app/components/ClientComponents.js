'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Loading component for Blogs
const BlogsLoading = () => (
  <div className="min-h-screen py-20 px-4 md:px-6 flex items-center justify-center">
    <div className="text-xl">Loading...</div>
  </div>
);

// Dynamically import components with no SSR
const ParticlesBackground = dynamic(() => import('./ParticlesBackground'), {
  ssr: false,
});

const Blogs = dynamic(() => import('./Blogs'), {
  ssr: false,
  loading: () => <BlogsLoading />
});

export function ClientParticles() {
  return <ParticlesBackground />;
}

export function ClientBlogs() {
  return (
    <Suspense fallback={<BlogsLoading />}>
      <Blogs />
    </Suspense>
  );
}