"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, BarChart2, Umbrella, Monitor, Box, Bot, Code, Smartphone, PenTool, Wifi, Cpu, Stethoscope, Landmark, GraduationCap, Building, Factory, ShoppingCart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100" data-aos="fade-down">
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center h-20">

        {/* Left Side: Logo + Brand Name */}
        <Link href="/" className="flex items-center gap-2 group/logo">
          <Image src="/logo.png" alt="Shreezatech" width={240} height={72} className="h-10 w-auto object-contain transition-transform duration-300 group-hover/logo:scale-105" priority />
          <div className="flex flex-col justify-center">
            <h1 className="text-[20px] font-extrabold tracking-widest text-[#2F65E0] leading-none mb-1.5">
              Shreezatech
            </h1>
            <p className="text-[9px] text-gray-500 tracking-widest font-bold leading-none">
              Tech Consulting & Software Solutions
            </p>
          </div>
        </Link>

        {/* Right Side: Links + Actions */}
        <div className="flex items-center gap-10 h-full">
          <div className="hidden lg:flex gap-6 xl:gap-10 items-center h-full">
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

            <Link href="/about-us" className="text-gray-600 hover:text-[#2F65E0] font-medium transition-colors">
              About Us
            </Link>
            <Link href="/contact-us" className="text-gray-600 hover:text-[#2F65E0] font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 border-l border-gray-100 pl-4 xl:pl-8 ml-2">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#2F65E0] hover:bg-blue-50 transition-colors shadow-sm">
              <Phone size={18} className="fill-[#2F65E0]" />
            </button>
            <Link href="#demo" className="px-7 py-2.5 bg-[#D4AF37] text-white font-medium hover:bg-[#0A3A7A] hover:text-white transition-all rounded shadow-sm">
              Book a Demo
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-[#2F65E0] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-6 z-50">
          <Link href="/" className="py-3 border-b border-gray-50 text-[#2F65E0] font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/services" className="py-3 border-b border-gray-50 text-gray-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/solutions" className="py-3 border-b border-gray-50 text-gray-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Solutions</Link>
          <Link href="/about-us" className="py-3 border-b border-gray-50 text-gray-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href="/contact-us" className="py-3 border-b border-gray-50 text-gray-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link href="#demo" className="mt-6 text-center px-7 py-3 bg-[#D4AF37] text-white font-medium hover:bg-[#0A3A7A] transition-all rounded shadow-sm" onClick={() => setIsMobileMenuOpen(false)}>
            Book a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}
