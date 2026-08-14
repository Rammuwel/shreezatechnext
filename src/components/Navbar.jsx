"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, BarChart2, Umbrella, Monitor, Box, Bot } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100" data-aos="fade-down">
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center h-20">
        
        {/* Left Side: Logo + Brand Name */}
        <Link href="/" className="flex items-center gap-4 group/logo">
          <Image src="/logo.png" alt="Shreezatech" width={240} height={72} className="h-10 w-auto object-contain transition-transform duration-300 group-hover/logo:scale-105" priority />
          <div className="flex flex-col justify-center">
            <h1 className="text-[20px] font-extrabold tracking-widest text-[#2F65E0] uppercase leading-none mb-1.5">
              SHREEZATECH
            </h1>
            <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold leading-none">
              Consulting & Software Solutions
            </p>
          </div>
        </Link>
        
        {/* Right Side: Links + Actions */}
        <div className="flex items-center gap-10 h-full">
          <div className="hidden md:flex gap-10 items-center h-full">
            <Link href="/" className="text-[#2F65E0] font-medium transition-colors">Home</Link>
            
            <div className="h-full flex items-center group">
              <button className="text-gray-600 group-hover:text-[#2F65E0] font-medium flex items-center gap-1 transition-colors h-full">
                Solutions
              </button>
              
              {/* Mega Menu */}
              <div className="absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100 py-12 px-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-12">
                  {/* Left Column */}
                  <div className="col-span-4 pr-8">
                    <h2 className="text-[32px] text-gray-700 font-light mb-4">Solutions</h2>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                      Crafting tailored, tech-driven excellence for diverse business landscapes.
                    </p>
                  </div>
                  
                  {/* Right Column Grid */}
                  <div className="col-span-8 grid grid-cols-2 gap-x-16 gap-y-10">
                    <Link href="/solutions/fintech" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <BarChart2 className="text-[#2F65E0] fill-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">FinTech</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        A cutting-edge lending platform customised for diverse lenders.
                      </p>
                    </Link>
                    
                    <Link href="/solutions/insurtech" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Umbrella className="text-[#2F65E0] fill-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">InsurTech</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Revolutionising insurance through tech-driven solutions.
                      </p>
                    </Link>
                    
                    <Link href="/solutions/digital-learning" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Monitor className="text-[#2F65E0] fill-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">Digital Learning</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Learn how we recognize your team's capabilities in creating motivating, engaging training contents.
                      </p>
                    </Link>
                    
                    <Link href="/solutions/immersivetech" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Box className="text-[#2F65E0] fill-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">ImmersiveTech</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Elevate experiences with immersive technology that redefines engagement and interaction.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-full flex items-center group">
              <button className="text-gray-600 group-hover:text-[#2F65E0] font-medium flex items-center gap-1 transition-colors h-full">
                Platforms
              </button>
              
              {/* Mega Menu */}
              <div className="absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100 py-12 px-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-12">
                  {/* Left Column */}
                  <div className="col-span-4 pr-8">
                    <h2 className="text-[32px] text-gray-700 font-light mb-4">Platforms</h2>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                      Empowering diverse sectors through innovative technology and tailored enterprise solutions.
                    </p>
                  </div>
                  
                  {/* Right Column Grid */}
                  <div className="col-span-8 grid grid-cols-2 gap-x-16 gap-y-10">
                    <Link href="/platforms/ziva" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <BarChart2 className="text-[#2F65E0] fill-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">ZIVA®</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Gain efficiency and speed time to value with high-fit, best-practice lending solution.
                      </p>
                    </Link>
                    
                    <Link href="/platforms/statim" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Umbrella className="text-[#2F65E0] fill-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">STATIM®</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Transform and modernise your insurance business step by step, starting wherever you are.
                      </p>
                    </Link>
                    
                    <Link href="/platforms/axle" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Monitor className="text-[#2F65E0] fill-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">AXLE™</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        We deliver personalized learning experiences for your team to drive business success.
                      </p>
                    </Link>
                    
                    <Link href="/platforms/migoto-ai" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Bot className="text-[#2F65E0] fill-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">Migoto AI™</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Discover our AI-powered training simulator, where employees can learn with role-specific training while also tracking performance, all in one integrated platform
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-full flex items-center group">
              <button className="text-gray-600 group-hover:text-[#2F65E0] font-medium flex items-center gap-1 transition-colors h-full">
                Discover Us
              </button>
              
              {/* Mega Menu */}
              <div className="absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100 py-12 px-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-12">
                  {/* Left Column */}
                  <div className="col-span-4 pr-8">
                    <h2 className="text-[32px] text-gray-700 font-light mb-4">Discover us</h2>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                      Discover our presence and experience innovation firsthand.
                    </p>
                  </div>
                  
                  {/* Right Column Grid */}
                  <div className="col-span-8 grid grid-cols-2 gap-x-16 gap-y-10">
                    <Link href="/about-us" className="group/item cursor-pointer block">
                      <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors mb-3">About us</h3>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        We are looking forward to the future and to every challenge where we can grow further.
                      </p>
                    </Link>
                    
                    <Link href="/locate-us" className="group/item cursor-pointer block">
                      <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors mb-3">Locate us</h3>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Connect and Visit: Addresses, contact information, and expert teams at your fingertips
                      </p>
                    </Link>
                    
                    <Link href="/leadership" className="group/item cursor-pointer block">
                      <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors mb-3">Leadership</h3>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        A strong leadership at the helm will result in successful beginnings and future.
                      </p>
                    </Link>
                    
                    <Link href="/csr" className="group/item cursor-pointer block">
                      <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors mb-3">CSR</h3>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Empowering communities with sustainable CSR initiatives.
                      </p>
                    </Link>
                    
                    <Link href="/join-us" className="group/item cursor-pointer block">
                      <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors mb-3">Join Us</h3>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        It doesn't matter who brings the idea home, it's that we create something better!
                      </p>
                    </Link>
                    
                    <Link href="/annual-reports" className="group/item cursor-pointer block">
                      <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors mb-3">Annual Reports</h3>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        View Our Financial Reports
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="h-full flex items-center group">
              <button className="text-gray-600 group-hover:text-[#2F65E0] font-medium flex items-center gap-1 transition-colors h-full">
                Resources
              </button>
              
              {/* Mega Menu */}
              <div className="absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100 py-12 px-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-12">
                  {/* Left Column */}
                  <div className="col-span-4 pr-8">
                    <h2 className="text-[32px] text-gray-700 font-light mb-4">Resources</h2>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                      It doesn't matter who brings the idea home, it's that we create something better!
                    </p>
                  </div>
                  
                  {/* Right Column Grid */}
                  <div className="col-span-8 grid grid-cols-2 gap-x-16 gap-y-10">
                    <Link href="/resources/blogs" className="group/item cursor-pointer block">
                      <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors mb-3">Blogs</h3>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Explore What We Think
                      </p>
                    </Link>
                    
                    <Link href="/resources/brochures" className="group/item cursor-pointer block">
                      <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors mb-3">Brochures</h3>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Know more about our products and services
                      </p>
                    </Link>
                    
                    <Link href="/resources/webinars" className="group/item cursor-pointer block">
                      <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors mb-3">Webinars</h3>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Discover our expert-led webinars featuring thought leadership from Novac
                      </p>
                    </Link>
                    
                    <Link href="/resources/techbrewers" className="group/item cursor-pointer block">
                      <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors mb-3">Techbrewers</h3>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Brew the perfect idea
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-6 border-l border-gray-100 pl-8 ml-2">
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#2F65E0] hover:bg-blue-50 transition-colors shadow-sm">
            <Phone size={18} className="fill-[#2F65E0]" />
          </button>
          <Link href="#demo" className="px-7 py-2.5 bg-[#D4AF37] border border-[#D4AF37] text-white font-medium hover:bg-transparent hover:text-[#2F65E0] hover:border-[#2F65E0] transition-all">
            Book a Demo
          </Link>
        </div>
        </div>
      </div>
    </nav>
  );
}
