"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Rocket, Target } from 'lucide-react';
import { projects, filters } from './data';

export default function PortfolioClient() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* 1. Impact-Driven Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#040026] overflow-hidden">
        {/* Background Image & Decorative Elements */}
        <div className="absolute inset-0 z-0">
          <img src="/images/portfolio-hero-bg.jpg" alt="Hero Background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040026] via-[#040026]/90 to-transparent"></div>
        </div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ffb916]/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="max-w-[1300px] mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Transforming Ideas into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffb916] to-[#ff9500]">Digital Masterpieces.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of high-performance, scalable technologies engineered to solve complex business challenges.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
                <Rocket className="text-[#ffb916]" size={20} />
                <span className="text-white font-medium">50+ Projects Delivered</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-full px-5 py-2.5">
                <Target className="text-[#ffb916]" size={20} />
                <span className="text-white font-medium">99% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Category Filtering */}
      <section className="py-10 bg-white border-b border-gray-200 sticky top-[72px] z-30 shadow-sm">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${activeFilter === filter
                    ? 'bg-[#040026] text-white shadow-md transform scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Premium Case Study Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-[1300px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-[0_20px_50px_rgba(4,0,38,0.08)] transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                {/* Card Image Wrapper */}
                <Link href={`/portfolio/${project.id}`} className="relative h-[320px] overflow-hidden bg-gray-100 block cursor-pointer">
                  <div className="absolute inset-0 bg-[#040026]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="bg-white/95 backdrop-blur text-[#040026] px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </Link>

                {/* Card Content */}
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="flex items-center space-x-2 text-sm font-medium text-gray-500 mb-4">
                    <span>Client: {project.client}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#040026] transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-8 leading-relaxed flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-50 border border-gray-200 text-gray-600 rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link / CTA */}
                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <Link 
                      href={`/portfolio/${project.id}`} 
                      className="inline-flex items-center text-[#040026] font-bold hover:text-[#ffb916] transition-colors group/link w-fit"
                    >
                      Read Full Case Study 
                      <ArrowRight className="ml-2 transform group-hover/link:translate-x-1 transition-transform" size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-500">We're currently updating our case studies for this category.</p>
              <button
                onClick={() => setActiveFilter('All')}
                className="mt-6 text-[#ffb916] font-semibold hover:underline"
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Strong Footer CTA */}
      <section className="py-24 bg-[#040026] relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040026] to-[#0a0f44] z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full z-0"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to start your next big project?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals through innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact"
              className="bg-[#ffb916] hover:bg-[#e5a613] text-[#040026] font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center shadow-[0_0_20px_rgba(255,185,22,0.3)]"
            >
              Let's Talk <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
