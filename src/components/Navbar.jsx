"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, BarChart2, Umbrella, Monitor, Box, Bot, Code, Smartphone, PenTool, Wifi, Cpu, Stethoscope, Landmark, GraduationCap, Building, Factory, ShoppingCart } from 'lucide-react';

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

            {/* Services Menu */}
            <div className="h-full flex items-center group">
              <Link href="/services" className="text-gray-600 group-hover:text-[#2F65E0] font-medium flex items-center gap-1 transition-colors h-full">
                Services
              </Link>
              
              {/* Mega Menu */}
              <div className="absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100 py-12 px-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-12">
                  {/* Left Column */}
                  <div className="col-span-4 pr-8">
                    <h2 className="text-[32px] text-gray-700 font-light mb-4">Services</h2>
                    <p className="text-gray-500 text-[15px] leading-relaxed">
                      Comprehensive digital solutions to transform your business and drive robust growth.
                    </p>
                  </div>

                  {/* Right Column Grid */}
                  <div className="col-span-8 grid grid-cols-2 gap-x-16 gap-y-10">
                    <Link href="/services/web-development" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Code className="text-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">Web Development</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Building scalable, secure, and modern web applications tailored to your needs.
                      </p>
                    </Link>

                    <Link href="/services/mobile-app-development" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Smartphone className="text-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">Mobile App Development</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Creating intuitive and high-performance native and cross-platform mobile apps.
                      </p>
                    </Link>

                    <Link href="/services/ai-and-automation" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Bot className="text-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">AI & Automation</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Streamlining operations with intelligent automation and AI-driven insights.
                      </p>
                    </Link>

                    <Link href="/services/ux-ui-design" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <PenTool className="text-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">UX/UI Design</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Designing user-centric, aesthetically pleasing, and highly functional interfaces.
                      </p>
                    </Link>

                    <Link href="/services/iot" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Wifi className="text-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">IoT Solutions</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Connecting devices and systems for smarter, data-driven environments.
                      </p>
                    </Link>

                    <Link href="/services/robotics" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Cpu className="text-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">Robotics</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Advanced robotic systems and RPA to automate complex physical and digital tasks.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full flex items-center group">
              <Link href="/solutions" className="text-gray-600 group-hover:text-[#2F65E0] font-medium flex items-center gap-1 transition-colors h-full">
                Solutions
              </Link>

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
                    <Link href="/solutions/healthcare" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Stethoscope className="text-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">Healthcare</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        HIPAA-compliant health platforms, patient portals, and hospital management.
                      </p>
                    </Link>

                    <Link href="/solutions/finance" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Landmark className="text-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">Finance</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Fintech, banking & payment systems for modern financial operations.
                      </p>
                    </Link>

                    <Link href="/solutions/education" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <GraduationCap className="text-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">Education</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        LMS, EdTech & virtual classrooms designed for global learning.
                      </p>
                    </Link>

                    <Link href="/solutions/real-estate" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Building className="text-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">Real Estate</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        PropTech, CRM & listing platforms with advanced search and lead generation.
                      </p>
                    </Link>

                    <Link href="/solutions/manufacturing" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Factory className="text-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">Manufacturing</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        IIoT, MES & supply chain software to optimize industrial workflows.
                      </p>
                    </Link>

                    <Link href="/solutions/retail" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <ShoppingCart className="text-[#2F65E0]" size={22} />
                        <h3 className="text-[17px] font-medium text-gray-800 group-hover/item:text-[#2F65E0] transition-colors">Retail & E-commerce</h3>
                      </div>
                      <p className="text-gray-500 text-[15px] leading-relaxed border-b border-gray-100 pb-8">
                        Custom e-commerce & marketplace solutions built for scale.
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
