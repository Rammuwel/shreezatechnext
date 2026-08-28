"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar, ChevronRight } from 'lucide-react';
import { blogs } from './data';

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState('All Posts');

  // Extract unique categories from the blog data
  const categories = ['All Posts', ...Array.from(new Set(blogs.map(b => b.category)))];

  // For the NovacTech style hero, we need 1 featured and 2 trending
  const featuredBlog = blogs[0];
  const trendingBlogs = blogs.slice(1, 3);
  
  // Filtered blogs for the grid
  const filteredBlogs = activeCategory === 'All Posts' 
    ? blogs 
    : blogs.filter(blog => blog.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* NovacTech Style Hero Section */}
      <section className="bg-white py-10 md:py-16 px-6 border-b border-gray-100">
        <div className="max-w-[1300px] mx-auto">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm font-medium text-gray-500 mb-12">
            <Link href="/" className="hover:text-[#ffb916] transition-colors">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-[#040026]">Blogs</span>
          </nav>

          <h1 className="text-3xl md:text-4xl md:text-5xl font-extrabold text-[#040026] mb-12">ShreezaTech Blog</h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Column: Featured Article (span 7) */}
            <div className="lg:col-span-7">
              {featuredBlog && (
                <Link href={`/blogs/${featuredBlog.slug}`} className="block group">
                  <div className="rounded-2xl overflow-hidden mb-6 relative aspect-video bg-gray-100">
                    <img 
                      src={featuredBlog.image} 
                      alt={featuredBlog.title} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center space-x-3 text-xs font-bold text-gray-500 mb-3 tracking-wider uppercase">
                    <span className="text-[#ffb916]">{featuredBlog.category}</span>
                    <span>•</span>
                    <span>{featuredBlog.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-[#040026] mb-4 group-hover:text-[#ffb916] transition-colors">
                    {featuredBlog.title}
                  </h2>
                  <span className="inline-flex items-center font-bold text-[#040026] group-hover:text-[#ffb916] transition-colors">
                    Read Full Article <ArrowRight className="ml-2" size={16} />
                  </span>
                </Link>
              )}
            </div>

            {/* Right Column: Trending Topics (span 5) */}
            <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-gray-100">
              <h3 className="text-xl font-bold text-[#040026] mb-8 flex items-center">
                Trending Topics
              </h3>
              
              <div className="flex flex-col space-y-8">
                {trendingBlogs.map((blog, idx) => (
                  <Link key={idx} href={`/blogs/${blog.slug}`} className="flex gap-6 group">
                    <div className="w-1/3 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                      <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 aspect-square sm:aspect-video"
                      />
                    </div>
                    <div className="w-2/3 flex flex-col justify-center">
                      <span className="text-[#ffb916] text-xs font-bold tracking-wider uppercase mb-2">
                        {blog.category}
                      </span>
                      <h4 className="text-lg font-bold text-[#040026] group-hover:text-[#ffb916] transition-colors line-clamp-3">
                        {blog.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Category Filter & Grid Section */}
      <section className="py-12 md:py-20 px-6 bg-gray-50">
        <div className="max-w-[1300px] mx-auto">
          
          <h3 className="text-2xl font-extrabold text-[#040026] mb-8">Recent Articles by Topic</h3>
          
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 mb-12 border-b border-gray-200 pb-8">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === category 
                    ? 'bg-[#040026] text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredBlogs.map((blog, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(4,0,38,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col group border border-gray-100"
                >
                  <Link href={`/blogs/${blog.slug}`} className="relative h-56 overflow-hidden block">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-[#ffb916] text-[#040026] px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm">
                        {blog.category}
                      </span>
                    </div>
                  </Link>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center space-x-4 text-xs font-medium text-gray-500 mb-4">
                      <span className="flex items-center"><Calendar size={14} className="mr-1" /> {blog.date}</span>
                    </div>

                    <Link href={`/blogs/${blog.slug}`}>
                      <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#ffb916] transition-colors line-clamp-2">
                        {blog.title}
                      </h4>
                    </Link>

                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3 text-sm">
                      {blog.excerpt}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[#040026] font-bold text-sm">{blog.author}</span>
                      <Link 
                        href={`/blogs/${blog.slug}`} 
                        className="inline-flex items-center text-[#ffb916] font-bold hover:text-[#e5a613] transition-colors"
                      >
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 md:py-20 bg-white rounded-2xl border border-gray-100">
              <p className="text-gray-500 font-medium">No results found for {activeCategory}.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
