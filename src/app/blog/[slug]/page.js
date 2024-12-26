// src/app/blog/[slug]/page.js
import BlogPost from './BlogPost';

export default function Page({ params }) {
  // Log the params to verify we're receiving them
  console.log('Page params:', params);
  
  return (
    <main className="min-h-screen bg-background/80 dark:bg-gray-900 backdrop-blur-sm">
      <BlogPost slug={params.slug} />  {/* Pass slug directly */}
    </main>
  );
}