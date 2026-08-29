"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';

import Contact from './Contact';

export default function PageTemplate({ title, breadcrumbText }) {
  return (
    <div className="bg-[#000000] min-h-screen text-white selection:bg-[#ff7f00] selection:text-white">


      {/* HERO SECTION */}
      <section className="relative bg-[#040026] pt-32 pb-24 px-6 lg:px-12 overflow-hidden min-h-[40vh] flex items-center">
        {/* Abstract background elements using CSS gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[100%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00A2FF]/20 via-[#040026] to-transparent blur-3xl"></div>
          <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff7f00]/10 via-[#040026] to-transparent blur-3xl"></div>
        </div>

        <div className="max-w-[1300px] mx-auto relative z-10 w-full text-center mt-12">
          <h1 className="text-[24px] leading-[32px] md:text-[56px] md:leading-[64px] font-normal mb-6 text-white text-balance">
            {title}
          </h1>
          <p className="text-[16px] leading-[26px] md:text-[20px] md:leading-[34px] font-normal text-gray-300 max-w-2xl mx-auto text-balance">
            We are working on bringing you more information about {title}. Please check back soon!
          </p>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <div className="w-full bg-white pt-6 pb-4 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-[1300px] mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center text-[14px] text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#0A3A7A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7f00] rounded px-1 -ml-1 flex items-center">
              <HomeIcon size={16} />
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-800" aria-current="page">{breadcrumbText || title}</span>
          </nav>
        </div>
      </div>

      <main className="w-full bg-gray-50 text-black py-10 md:py-16 lg:py-32 px-6 lg:px-12 min-h-[50vh] flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl">
          <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-blue-100">
            <svg className="w-10 h-10 text-[#2F65E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
          </div>
          <h2 className="text-[24px] md:text-[32px] font-medium text-[#212529] mb-4">Under Construction</h2>
          <p className="text-[16px] md:text-[18px] text-gray-600 mb-10 leading-relaxed">
            The <strong>{title}</strong> page is currently being updated with fresh content and detailed insights. Our team is actively crafting an engaging experience tailored just for you.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#ffb916] border-2 border-[#ffb916] cursor-pointer text-white font-medium transition-all shadow-sm rounded hover:bg-transparent hover:border-[#154EA1] hover:text-[#154EA1]">
            Return to Home
          </Link>
        </div>
      </main>
      
      {/* Contact Section */}
      <div className="bg-[#041b25]">
        <Contact />
      </div>


    </div>
  );
}

