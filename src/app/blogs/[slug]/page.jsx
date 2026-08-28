import React from 'react';
import Link from 'next/link';
import { Clock, Calendar, Share2, Link as LinkIcon, ChevronRight } from 'lucide-react';
import { blogs } from '../data';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import ShareButtons from './ShareButtons';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);
  if (!blog) return { title: 'Blog Not Found | ShreezaTech' };
  
  return {
    title: `${blog.title} | ShreezaTech Blog`,
    description: blog.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }
  // Get trending blogs (excluding the current one)
  const trendingBlogs = blogs.filter(b => b.slug !== blog.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white font-sans py-10 md:py-16 px-6 border-t border-gray-100">
      
      <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* LEFT COLUMN: Main Content (8/12) */}
        <div className="lg:w-2/3">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm font-medium text-gray-500 mb-10">
            <Link href="/" className="hover:text-[#ffb916] transition-colors">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link href="/blogs" className="hover:text-[#ffb916] transition-colors">Blogs</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-[#040026]">{blog.category}</span>
          </nav>

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-sm aspect-video bg-gray-100 mb-12 border border-gray-100">
            <img 
              src={blog.image} 
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title & Metadata */}
          <h1 className="text-3xl md:text-4xl md:text-5xl font-extrabold text-[#040026] mb-8 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-500 font-medium text-sm mb-12 pb-12 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#040026] flex items-center justify-center text-[#ffb916] font-bold mr-4">
                S
              </div>
              <span className="text-gray-900 font-bold">{blog.author}</span>
            </div>
            <span className="flex items-center"><Calendar size={18} className="mr-2" /> {blog.date}</span>
            <span className="flex items-center"><Clock size={18} className="mr-2" /> {blog.readTime}</span>
          </div>

          {/* Content & Sticky Share Row */}
          <div className="flex flex-col md:flex-row gap-10">
            
            {/* Sticky Share (Left of content) */}
            <div className="md:w-16 flex-shrink-0 hidden md:block">
              <div className="sticky top-[120px] flex flex-col gap-5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center mb-2" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>Share</span>
                <div className="w-[1px] h-12 bg-gray-200 mx-auto mb-2"></div>
                <ShareButtons title={blog.title} text={blog.excerpt} />
              </div>
            </div>

            {/* Markdown Content */}
            <article className="md:flex-1 text-gray-800 text-lg leading-relaxed [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-[#040026] [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-[#040026] [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:mb-8 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>li]:mb-3 [&>strong]:text-[#040026] [&>blockquote]:border-l-4 [&>blockquote]:border-[#ffb916] [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>blockquote]:my-8 [&>blockquote]:bg-gray-50 [&>blockquote]:py-4 [&>blockquote]:rounded-r-lg">
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </article>

            {/* Mobile Share Buttons (Visible only on small screens) */}
            <div className="md:hidden flex gap-4 mt-8 pt-8 border-t border-gray-200 justify-center">
              <ShareButtons title={blog.title} text={blog.excerpt} />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Sidebar (4/12) */}
        <aside className="lg:w-1/3">
          <div className="sticky top-[100px]">
            
            <h3 className="text-2xl font-bold text-[#040026] mb-8 pb-4 border-b border-gray-200">
              Trending Topics
            </h3>
            
            <div className="flex flex-col space-y-8 mb-12">
              {trendingBlogs.map((trendingBlog, idx) => (
                <Link key={idx} href={`/blogs/${trendingBlog.slug}`} className="flex gap-6 group">
                  <div className="w-1/3 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 aspect-square">
                    <img 
                      src={trendingBlog.image} 
                      alt={trendingBlog.title} 
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="w-2/3 flex flex-col justify-center">
                    <span className="text-[#ffb916] text-[10px] font-bold tracking-wider uppercase mb-2">
                      {trendingBlog.category}
                    </span>
                    <h4 className="text-base font-bold text-[#040026] group-hover:text-[#ffb916] transition-colors line-clamp-3">
                      {trendingBlog.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>

            {/* Call to Action Box */}
            <div className="bg-[#040026] p-8 rounded-3xl text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#040026] to-[#0a0f44] z-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">Need help with {blog.category}?</h3>
                <p className="text-gray-300 mb-8 text-sm leading-relaxed">
                  Our experts are ready to help you implement cutting-edge solutions for your business.
                </p>
                <Link 
                  href="/contact-us" 
                  className="inline-block bg-[#ffb916] hover:bg-[#e5a613] text-[#040026] font-bold py-3 px-8 rounded-full transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

          </div>
        </aside>

      </div>
    </div>
  );
}
