"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, BarChart2, Umbrella, Monitor, Box, Bot, Code, Smartphone, PenTool, Wifi, Cpu, Stethoscope, Landmark, GraduationCap, Building, Factory, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const getLinkClass = (path) => {
    return isActive(path)
      ? "text-[#154EA1] font-medium transition-colors h-full flex items-center gap-1"
      : "text-gray-600 hover:text-[#154EA1] font-medium flex items-center gap-1 transition-colors h-full";
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300" data-aos="fade-down">
      <div className="max-w-[1400px] mx-auto px-2 md:px-6 flex justify-between items-center h-16 md:h-20">

        {/* Left Side: Logo + Brand Name */}
        <Link href="/" className="flex items-center gap-[4px] shrink-0 scale-[0.75] md:scale-100 origin-left transition-transform duration-300">
          <Image src="/logo.png" alt="Shreezatech" width={56} height={56} className="h-[56px] w-auto object-contain drop-shadow-sm" priority />
          <div className="flex flex-col justify-center">
            <span
              className="text-[28px] font-semibold tracking-[0.03em] leading-none uppercase"
              style={{ fontFamily: 'var(--font-family-logo-main)' }}
            >
              <span style={{ color: 'var(--color-logo-primary-blue)' }}>SHREEZA</span>
              <span style={{ color: 'var(--color-logo-accent-orange)' }}>TECH</span>
            </span>
            <span
              className="text-[13px] font-normal tracking-[0.04em] leading-tight mt-0"
              style={{ fontFamily: 'var(--font-family-logo-tag)', color: 'var(--color-logo-text-subtitle)' }}
            >
              Consulting & Software Solutions
            </span>
          </div>
        </Link>

        {/* Right Side: Links + Actions */}
        <div className="flex items-center gap-10 h-full">
          <div className="hidden lg:flex gap-6 xl:gap-10 items-center h-full">
            <Link href="/" className={getLinkClass('/')}>Home</Link>

            {/* Services Menu */}
            <div className="h-full flex items-center group">
              <Link href="/services" className={getLinkClass('/services')}>
                Services
              </Link>

              {/* Mega Menu */}
              <div className="absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100 py-12 px-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-12">
                  {/* Left Column */}
                  <div className="col-span-4 pr-8">
                    <h2 className="text-[32px] text-gray-700 font-light mb-4">Services</h2>
                    <p className="text-gray-500 text-[15px]! leading-relaxed">
                      Comprehensive digital solutions to transform your business and drive robust growth.
                    </p>
                  </div>

                  {/* Right Column Grid */}
                  <div className="col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                    <Link href="/services/web-development" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Code className="text-[#154EA1]" size={22} />
                        <h3 className="text-[16px]! font-medium text-gray-800 group-hover/item:text-[#154EA1] transition-colors">Web Development</h3>
                      </div>
                      <p className="text-gray-500 text-[15px]! leading-relaxed border-b border-gray-100 pb-8">
                        Modern, scalable web applications built with React, Next.js, and Node.
                      </p>
                    </Link>

                    <Link href="/services/mobile-app-development" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Smartphone className="text-[#154EA1]" size={22} />
                        <h3 className="text-[16px]! font-medium text-gray-800 group-hover/item:text-[#154EA1] transition-colors">Mobile Apps</h3>
                      </div>
                      <p className="text-gray-500 text-[15px]! leading-relaxed border-b border-gray-100 pb-8">
                        Native iOS and Android experiences for maximum performance and engagement.
                      </p>
                    </Link>

                    <Link href="/services/ai-and-automation" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Bot className="text-[#154EA1]" size={22} />
                        <h3 className="text-[16px]! font-medium text-gray-800 group-hover/item:text-[#154EA1] transition-colors">AI & Automation</h3>
                      </div>
                      <p className="text-gray-500 text-[15px]! leading-relaxed border-b border-gray-100 pb-8">
                        Leveraging machine learning to automate workflows and drive intelligent insights.
                      </p>
                    </Link>

                    <Link href="/services/ux-ui-design" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <PenTool className="text-[#154EA1]" size={22} />
                        <h3 className="text-[16px]! font-medium text-gray-800 group-hover/item:text-[#154EA1] transition-colors">UI/UX Design</h3>
                      </div>
                      <p className="text-gray-500 text-[15px]! leading-relaxed border-b border-gray-100 pb-8">
                        Intuitive, user-centric interfaces that elevate brand perception and usability.
                      </p>
                    </Link>

                    <Link href="/services/iot" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Wifi className="text-[#154EA1]" size={22} />
                        <h3 className="text-[16px]! font-medium text-gray-800 group-hover/item:text-[#154EA1] transition-colors">Internet of Things (IoT)</h3>
                      </div>
                      <p className="text-gray-500 text-[15px]! leading-relaxed border-b border-gray-100 pb-8">
                        Connecting devices to the cloud for real-time analytics and remote control.
                      </p>
                    </Link>

                    <Link href="/services/robotics" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Cpu className="text-[#154EA1]" size={22} />
                        <h3 className="text-[16px]! font-medium text-gray-800 group-hover/item:text-[#154EA1] transition-colors">Robotics</h3>
                      </div>
                      <p className="text-gray-500 text-[15px]! leading-relaxed border-b border-gray-100 pb-8">
                        Advanced robotic systems and RPA to automate complex physical and digital tasks.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full flex items-center group">
              <Link href="/solutions" className={getLinkClass('/solutions')}>
                Solutions
              </Link>

              {/* Mega Menu */}
              <div className="absolute top-20 left-0 w-full bg-white shadow-xl border-t border-gray-100 py-12 px-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-12">
                  {/* Left Column */}
                  <div className="col-span-4 pr-8">
                    <h2 className="text-[32px] text-gray-700 font-light mb-4">Solutions</h2>
                    <p className="text-gray-500 text-[15px]! leading-relaxed">
                      Crafting tailored, tech-driven excellence for diverse business landscapes.
                    </p>
                  </div>

                  {/* Right Column Grid */}
                  <div className="col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                    <Link href="/solutions/healthcare" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Stethoscope className="text-[#154EA1]" size={22} />
                        <h3 className="text-[16px]! font-medium text-gray-800 group-hover/item:text-[#154EA1] transition-colors">Healthcare</h3>
                      </div>
                      <p className="text-gray-500 text-[15px]! leading-relaxed border-b border-gray-100 pb-8">
                        HIPAA-compliant health platforms, patient portals, and hospital management.
                      </p>
                    </Link>

                    <Link href="/solutions/finance" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Landmark className="text-[#154EA1]" size={22} />
                        <h3 className="text-[16px]! font-medium text-gray-800 group-hover/item:text-[#154EA1] transition-colors">Finance</h3>
                      </div>
                      <p className="text-gray-500 text-[15px]! leading-relaxed border-b border-gray-100 pb-8">
                        Fintech, banking & payment systems for modern financial operations.
                      </p>
                    </Link>

                    <Link href="/solutions/education" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <GraduationCap className="text-[#154EA1]" size={22} />
                        <h3 className="text-[16px]! font-medium text-gray-800 group-hover/item:text-[#154EA1] transition-colors">Education</h3>
                      </div>
                      <p className="text-gray-500 text-[15px]! leading-relaxed border-b border-gray-100 pb-8">
                        LMS, EdTech & virtual classrooms designed for global learning.
                      </p>
                    </Link>

                    <Link href="/solutions/real-estate" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Building className="text-[#154EA1]" size={22} />
                        <h3 className="text-[16px]! font-medium text-gray-800 group-hover/item:text-[#154EA1] transition-colors">Real Estate</h3>
                      </div>
                      <p className="text-gray-500 text-[15px]! leading-relaxed border-b border-gray-100 pb-8">
                        PropTech, CRM & listing platforms with advanced search and lead generation.
                      </p>
                    </Link>

                    <Link href="/solutions/manufacturing" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <Factory className="text-[#154EA1]" size={22} />
                        <h3 className="text-[16px]! font-medium text-gray-800 group-hover/item:text-[#154EA1] transition-colors">Manufacturing</h3>
                      </div>
                      <p className="text-gray-500 text-[15px]! leading-relaxed border-b border-gray-100 pb-8">
                        IIoT, MES & supply chain software to optimize industrial workflows.
                      </p>
                    </Link>

                    <Link href="/solutions/retail" className="group/item cursor-pointer block">
                      <div className="flex items-center gap-3 mb-3">
                        <ShoppingCart className="text-[#154EA1]" size={22} />
                        <h3 className="text-[16px]! font-medium text-gray-800 group-hover/item:text-[#154EA1] transition-colors">Retail & E-commerce</h3>
                      </div>
                      <p className="text-gray-500 text-[15px]! leading-relaxed border-b border-gray-100 pb-8">
                        Custom e-commerce & marketplace solutions built for scale.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about-us" className={getLinkClass('/about-us')}>
              About Us
            </Link>
            <Link href="/contact-us" className={getLinkClass('/contact-us')}>
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 border-l border-gray-100 pl-4 xl:pl-8 ml-2">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-[#2F65E0] hover:bg-blue-50 transition-colors shadow-sm">
              <Phone size={18} className="fill-[#2F65E0]" />
            </button>
            <Link href="#demo" className="px-7 py-2.5 bg-[#ffb916] border-2 border-[#ffb916] cursor-pointer text-white font-medium transition-all rounded shadow-sm hover:bg-transparent hover:border-[#154EA1] hover:text-[#154EA1]">
              Book a Demo
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-0 text-gray-600 hover:text-[#2F65E0] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col p-6 z-50 max-h-[85vh] overflow-y-auto">
          <Link href="/" className="py-3 border-b border-gray-50 text-gray-800 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          
          <div className="border-b border-gray-50">
            <button className="w-full py-3 flex justify-between items-center text-gray-800 font-medium" onClick={() => setOpenMobileDropdown(openMobileDropdown === 'services' ? null : 'services')}>
              Services
              <ChevronDown size={18} className={`text-gray-500 transition-transform duration-300 ${openMobileDropdown === 'services' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileDropdown === 'services' && (
              <div className="flex flex-col pl-4 pb-3 space-y-3">
                <Link href="/services" className="text-[#154EA1] font-medium text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>All Services</Link>
                <Link href="/services/web-development" className="text-gray-500 text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>Web Development</Link>
                <Link href="/services/mobile-app-development" className="text-gray-500 text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>Mobile Apps</Link>
                <Link href="/services/ai-and-automation" className="text-gray-500 text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>AI & Automation</Link>
                <Link href="/services/ux-ui-design" className="text-gray-500 text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>UI/UX Design</Link>
                <Link href="/services/iot" className="text-gray-500 text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>Internet of Things (IoT)</Link>
                <Link href="/services/robotics" className="text-gray-500 text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>Robotics</Link>
              </div>
            )}
          </div>

          <div className="border-b border-gray-50">
            <button className="w-full py-3 flex justify-between items-center text-gray-800 font-medium" onClick={() => setOpenMobileDropdown(openMobileDropdown === 'solutions' ? null : 'solutions')}>
              Solutions
              <ChevronDown size={18} className={`text-gray-500 transition-transform duration-300 ${openMobileDropdown === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
            {openMobileDropdown === 'solutions' && (
              <div className="flex flex-col pl-4 pb-3 space-y-3">
                <Link href="/solutions" className="text-[#154EA1] font-medium text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>All Solutions</Link>
                <Link href="/solutions/healthcare" className="text-gray-500 text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>Healthcare</Link>
                <Link href="/solutions/finance" className="text-gray-500 text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>Finance</Link>
                <Link href="/solutions/education" className="text-gray-500 text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>Education</Link>
                <Link href="/solutions/real-estate" className="text-gray-500 text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>Real Estate</Link>
                <Link href="/solutions/manufacturing" className="text-gray-500 text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>Manufacturing</Link>
                <Link href="/solutions/retail" className="text-gray-500 text-[15px]" onClick={() => setIsMobileMenuOpen(false)}>Retail & E-commerce</Link>
              </div>
            )}
          </div>

          <Link href="/about-us" className="py-3 border-b border-gray-50 text-gray-800 font-medium" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href="/contact-us" className="py-3 border-b border-gray-50 text-gray-800 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link href="#demo" className="mt-6 text-center px-7 py-3 bg-[#ffb916] border-2 border-[#ffb916] cursor-pointer text-white font-medium transition-all rounded shadow-sm hover:bg-transparent hover:border-[#154EA1] hover:text-[#154EA1]" onClick={() => setIsMobileMenuOpen(false)}>
            Book a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}

