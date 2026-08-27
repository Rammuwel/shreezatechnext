import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { projects } from '../data';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id.toString() === resolvedParams.id);
  if (!project) return { title: 'Project Not Found | ShreezaTech' };
  
  return {
    title: `${project.title} | Case Study | ShreezaTech`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id.toString() === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040026] via-[#040026]/80 to-transparent"></div>
        </div>
        
        <div className="max-w-[900px] mx-auto px-6 relative z-10 w-full">
          <Link href="/portfolio" className="inline-flex items-center text-[#ffb916] hover:text-white transition-colors mb-6 font-semibold">
            <ArrowLeft className="mr-2" size={20} /> Back to Portfolio
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-white/10 backdrop-blur border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-gray-300 font-medium">Client: {project.client}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {project.title}
          </h1>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#040026] mb-6">Overview</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          <hr className="border-gray-100 mb-16" />

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-[#040026] mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 text-lg">!</span>
                The Challenge
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#040026] mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 text-lg">✓</span>
                Our Solution
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-[#040026] mb-6">The Impact & Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {project.results.map((result, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-[#ffb916] flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-800 font-medium text-lg leading-relaxed">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#040026] mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-5 py-2.5 bg-white border border-gray-200 shadow-sm text-gray-700 rounded-lg font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="py-24 bg-[#040026] relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#040026] to-[#0a0f44] z-0"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to achieve similar results?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's discuss how we can build a scalable, high-performance solution tailored to your business needs.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-[#ffb916] hover:bg-[#e5a613] text-[#040026] font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,185,22,0.3)]"
          >
            Start Your Project <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
