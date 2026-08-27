"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';

export default function StatimPage() {
  return (
    <div className="font-sans text-gray-800 selection:bg-[#ff7f00] selection:text-white">
{/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 lg:px-12 min-h-[85vh] flex items-center bg-[#070b0d]">
        <div 
          className="absolute inset-0 bg-cover bg-right z-0 opacity-40" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b0d] via-[#070b0d]/90 to-transparent z-0"></div>

        <div className="max-w-[1300px] mx-auto relative z-10 w-full">
          <div className="max-w-2xl">
            <h3 className="text-[20px] font-medium text-white mb-6">STATIM®</h3>
            <h1 className="text-[48px] md:text-[64px] leading-[1.1] font-medium mb-8 text-white tracking-tight">
              Transform Insurance
            </h1>
            <p className="text-[18px] md:text-[20px] font-normal text-gray-300 mb-12 max-w-xl leading-[1.6]">
              An intelligent general and health insurance system delivering end-to-end insurance transformation.
            </p>
            <Link 
              href="#" 
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#f0ac3d] to-[#d67d1a] text-white font-medium text-[16px] hover:opacity-90 transition-opacity rounded-sm"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <div className="w-full bg-white py-5 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-[1300px] mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center text-[14px] text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#ff7f00] transition-colors focus-visible:outline-none rounded px-1 -ml-1 flex items-center">
              <HomeIcon size={16} />
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <Link href="#" className="hover:text-[#ff7f00] transition-colors focus-visible:outline-none rounded">
              InsurTech
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-800" aria-current="page">STATIM®</span>
          </nav>
        </div>
      </div>

      {/* Comprehensive Suite Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1300px] mx-auto">
          
          <h2 className="text-[32px] md:text-[44px] font-medium text-[#111] mb-16">
            The Comprehensive Insurance Suite
          </h2>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Slanted Image (Left) */}
            <div className="w-full lg:w-1/2 relative h-[500px]">
              <div className="absolute inset-0 w-full h-full" style={{ clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0% 100%)' }}>
                <img src="https://images.unsplash.com/photo-1576267423445-b2e0073d3ebb?auto=format&fit=crop&q=80" alt="Family looking at laptop" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Text (Right) */}
            <div className="w-full lg:w-1/2">
              <p className="text-[17px] text-gray-700 leading-[1.8] mb-10">
                STATIM accelerates the transformation of each stage of the insurance lifecycle. From policy proposal through underwriting, policy issuance, policy administration, payments, claims, and reinsurance, every process is finely streamlined. By digitizing the entire ecosystem of the insurer, the insured, brokers and agents, STATIM® delivers a hassle-free insurance experience for all stakeholders.
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#ebb152] hover:bg-[#d99f43] text-white font-medium transition-colors"
              >
                Know More
              </Link>
            </div>
            
          </div>
        </div>
      </section>

      {/* Robust Modules Section (Dark) */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#0c0904]">
        <div className="max-w-[1400px] mx-auto">
          
          <h2 className="text-[32px] md:text-[44px] font-medium text-white leading-tight mb-4 max-w-3xl">
            Robust Modules for Each Stage of the Insurance Process
          </h2>
          <p className="text-[18px] text-gray-300 mb-16 max-w-3xl">
            Thoughtfully built modules for a powerful core with intelligent automation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white p-8 flex flex-col h-full shadow-lg">
              <div className="flex justify-between items-start mb-12">
                <div className="text-gray-800">
                  <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="16" cy="10" r="4" />
                    <path d="M8 22H24M16 14V22" strokeLinecap="round" />
                    <rect x="6" y="22" width="4" height="4" />
                    <rect x="22" y="22" width="4" height="4" />
                  </svg>
                </div>
                <div className="text-[28px] font-light text-gray-300">01</div>
              </div>
              <h3 className="text-[20px] font-medium text-[#111] mb-4 leading-tight">Entity Management</h3>
              <p className="text-[15px] text-gray-600 leading-[1.6]">Manage all entities in one place - the insured, brokers and partners</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 flex flex-col h-full shadow-lg">
              <div className="flex justify-between items-start mb-12">
                <div className="text-gray-800">
                  <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="8" y="4" width="16" height="24" rx="2" />
                    <path d="M12 10H20M12 14H20M12 18H16" strokeLinecap="round" />
                    <circle cx="20" cy="22" r="4" className="text-[#ebb152]" stroke="currentColor" />
                    <path d="M19 22L20 23L22 21" className="text-[#ebb152]" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="text-[28px] font-light text-gray-300">02</div>
              </div>
              <h3 className="text-[20px] font-medium text-[#111] mb-4 leading-tight">Policy Administration</h3>
              <p className="text-[15px] text-gray-600 leading-[1.6]">End-to-end policy lifecycle management across business lines</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 flex flex-col h-full shadow-lg">
              <div className="flex justify-between items-start mb-12">
                <div className="text-gray-800">
                  <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 4V12M12 8L20 8" strokeLinecap="round" />
                    <path d="M8 28C8 22 12 18 16 18C20 18 24 22 24 28" strokeLinecap="round" />
                    <circle cx="16" cy="14" r="4" />
                  </svg>
                </div>
                <div className="text-[28px] font-light text-gray-300">03</div>
              </div>
              <h3 className="text-[20px] font-medium text-[#111] mb-4 leading-tight">Claims Management</h3>
              <p className="text-[15px] text-gray-600 leading-[1.6]">Fully configurable for efficient and accurate claims processing</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 flex flex-col h-full shadow-lg">
              <div className="flex justify-between items-start mb-12">
                <div className="text-gray-800">
                  <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="6" y="8" width="20" height="16" rx="2" />
                    <path d="M10 16H22M10 12H16" strokeLinecap="round" />
                    <circle cx="22" cy="8" r="4" className="text-[#ebb152]" stroke="currentColor" fill="white" />
                  </svg>
                </div>
                <div className="text-[28px] font-light text-gray-300">04</div>
              </div>
              <h3 className="text-[20px] font-medium text-[#111] mb-4 leading-tight">Billing and Collections</h3>
              <p className="text-[15px] text-gray-600 leading-[1.6]">Automated billing and collections with seamless payment support</p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 flex flex-col h-full shadow-lg">
              <div className="flex justify-between items-start mb-12">
                <div className="text-gray-800">
                  <svg className="w-10 h-10" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M8 8H24V24H8V8Z" strokeLinejoin="round" />
                    <path d="M12 16H20M16 12V20" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="text-[28px] font-light text-gray-300">05</div>
              </div>
              <h3 className="text-[20px] font-medium text-[#111] mb-4 leading-tight">Re-insurance Management</h3>
              <p className="text-[15px] text-gray-600 leading-[1.6]">Proportional and non-proportional treaties and facultative offers</p>
            </div>

          </div>
        </div>
      </section>

      {/* Low-Code Agility Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-[#fbfdfc] to-[#f4ebe1]">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          
          <div className="w-full">
            <h2 className="text-[32px] md:text-[44px] font-medium text-[#111] leading-tight mb-6 max-w-xl">
              Insurance Transformation Through Low-Code Agility
            </h2>
            <p className="text-[17px] text-gray-600 leading-[1.8] mb-16 max-w-lg">
              Rapidly configure insurance products, workflows, and business rules with minimal development dependency.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              
              {/* Feature 1 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 bg-[#e88d1c]"></div>
                  <h3 className="text-[20px] font-medium text-[#111]">Product Configurator</h3>
                </div>
                <p className="text-[15px] text-gray-600 leading-[1.6] pl-4 border-b border-gray-200 pb-8">
                  Easily configure and launch both traditional and micro insurance products.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 bg-[#e88d1c]"></div>
                  <h3 className="text-[20px] font-medium text-[#111]">Migration Engine</h3>
                </div>
                <p className="text-[15px] text-gray-600 leading-[1.6] pl-4 border-b border-gray-200 pb-8">
                  Accelerate implementation and modernization with simplified data migration.
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 bg-[#e88d1c]"></div>
                  <h3 className="text-[20px] font-medium text-[#111]">Workflow Engine</h3>
                </div>
                <p className="text-[15px] text-gray-600 leading-[1.6] pl-4">
                  Smoothly configure workflows to streamline operations across digital
                </p>
              </div>

              {/* Feature 4 */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 bg-[#e88d1c]"></div>
                  <h3 className="text-[20px] font-medium text-[#111]">Rule Engine</h3>
                </div>
                <p className="text-[15px] text-gray-600 leading-[1.6] pl-4">
                  Seamlessly automate business logic - flexible rules and validation, for
                </p>
              </div>

            </div>
          </div>

          {/* Graphic Element */}
          <div className="hidden lg:flex absolute bottom-0 right-0 w-[500px] h-[400px] justify-end items-end">
             <div className="relative w-full h-[80%] flex gap-2">
                <div className="w-1/3 h-full bg-[#e3d6bc] transform origin-bottom-left -skew-x-[20deg] scale-y-[0.8] opacity-80"></div>
                <div className="w-2/3 h-full overflow-hidden transform origin-bottom-right skew-x-[15deg]">
                   <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" alt="Business Man" className="w-[150%] max-w-none h-[120%] object-cover -translate-x-[20%] -skew-x-[15deg]" />
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1300px] mx-auto">
          
          <h2 className="text-[32px] md:text-[44px] font-medium text-[#111] leading-tight mb-4 text-center">
            Every Capability Your Platform Requires for a Seamless Transformation
          </h2>
          <p className="text-[18px] text-gray-600 mb-16 text-center">
            Accelerating insurance transformation with enterprise-ready capabilities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { icon: <path d="M8 8H24V24H8V8Z" />, title: "Low-Code", desc: "Simple and fast configuration" },
              { icon: <circle cx="16" cy="16" r="8" />, title: "Modular Architecture", desc: "Easy and flexible customization" },
              { icon: <rect x="4" y="4" width="24" height="24" />, title: "Open API Ecosystem", desc: "Experience limitless integrations" },
              { icon: <path d="M16 2L20 12L30 16L20 20L16 30L12 20L2 16L12 12L16 2Z" />, title: "AI-Ready", desc: "Smart systems and intelligent automation" },
              { icon: <path d="M10 20A6 6 0 1110 8 8 8 0 0122 10 6 6 0 1122 22H10" />, title: "Cloud and DB Agnostic", desc: "Infrastructure of your choice" },
              { icon: <rect x="8" y="10" width="16" height="20" rx="2" />, title: "Multi-Company", desc: "One platform for multiple companies" },
              { icon: <path d="M12 22C12 22 16 26 16 26C16 26 24 18 24 18" />, title: "Multi-Currency, Multi-Lingual", desc: "Transact globally without boundaries" },
              { icon: <circle cx="16" cy="16" r="10" strokeDasharray="4 4" />, title: "Takaful Compliant", desc: "In accordance with Islamic laws" },
            ].map((cap, i) => (
              <div key={i} className="bg-[#f8f9fa] p-8 rounded-2xl flex flex-col h-full hover:shadow-lg transition-shadow border border-gray-100">
                <div className="mb-12 text-gray-700">
                  <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {cap.icon}
                  </svg>
                </div>
                <h3 className="text-[20px] font-medium text-[#111] mb-4 leading-tight">{cap.title}</h3>
                <p className="text-[15px] text-gray-500 leading-[1.6] mt-auto">{cap.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Seamless Digital Journeys */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white border-t border-gray-100">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="w-full">
            <h2 className="text-[36px] md:text-[48px] font-medium text-[#111] leading-tight mb-6 max-w-sm">
              Seamless Digital Journeys Across Every Touchpoint
            </h2>
            <p className="text-[18px] text-gray-600 leading-[1.8] mb-12">
              Smart solutions built for a smooth and hassle-free digital experience.
            </p>
            <div className="w-48 h-0.5 bg-[#e88d1c]"></div>
          </div>

          <div className="w-full">
            {/* Accordion 1 (Expanded) */}
            <div className="border-b border-gray-300 pb-8 mb-8">
              <div className="flex justify-between items-center cursor-pointer mb-6 text-[#111]">
                <div className="flex gap-8 items-center text-[20px] md:text-[24px]">
                  <span className="text-gray-400 font-light text-[18px]">01.</span>
                  <h3 className="font-medium">Persona-Based Portals</h3>
                </div>
                <span className="text-[24px] font-light leading-none">-</span>
              </div>
              <p className="text-[16px] text-gray-500 leading-[1.8] pl-[3.25rem] md:pl-[4.5rem]">
                Role-based portals built for different user groups like customers, agents, and brokers. These customizable portals enable onboarding, servicing, policy management, claims, payments and day-to-day insurance interactions.
              </p>
            </div>

            {/* Accordion 2 */}
            <div className="border-b border-gray-300 pb-8 mb-8">
              <div className="flex justify-between items-center cursor-pointer text-[#111] hover:text-[#e88d1c] transition-colors">
                <div className="flex gap-8 items-center text-[20px] md:text-[24px]">
                  <span className="text-gray-400 font-light text-[18px]">02.</span>
                  <h3 className="font-medium">Digital Journey</h3>
                </div>
                <span className="text-[24px] font-light leading-none">+</span>
              </div>
            </div>

            {/* Accordion 3 */}
            <div className="border-b border-gray-300 pb-8 mb-8">
              <div className="flex justify-between items-center cursor-pointer text-[#111] hover:text-[#e88d1c] transition-colors">
                <div className="flex gap-8 items-center text-[20px] md:text-[24px]">
                  <span className="text-gray-400 font-light text-[18px]">03.</span>
                  <h3 className="font-medium">Integration Layer</h3>
                </div>
                <span className="text-[24px] font-light leading-none">+</span>
              </div>
            </div>

            {/* Accordion 4 */}
            <div className="border-b border-gray-300 pb-8">
              <div className="flex justify-between items-center cursor-pointer text-[#111] hover:text-[#e88d1c] transition-colors">
                <div className="flex gap-8 items-center text-[20px] md:text-[24px]">
                  <span className="text-gray-400 font-light text-[18px]">04.</span>
                  <h3 className="font-medium">Analytics Platform</h3>
                </div>
                <span className="text-[24px] font-light leading-none">+</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Strong Foundations of Trust */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#0c0904]">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="w-full">
            <h2 className="text-[40px] md:text-[52px] font-medium text-white leading-tight mb-8 max-w-sm">
              Built on Strong Foundations of Trust
            </h2>
            <p className="text-[18px] text-gray-300 leading-[1.8] max-w-md">
              The trusted partner in insurance transformation for insurers around the world.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
            {[
              { title: "Fully Secure Architecture", desc: "Security at the core of everything" },
              { title: "Proven Implementation Capability", desc: "Powering 4.3 million policies" },
              { title: "CMMi Level 5 Certified", desc: "Highest level of process maturity" },
              { title: "Meet Regulatory Requirements", desc: "Hassle-free compliance" },
              { title: "Long-term Partnerships", desc: "Not a vendor, but a solution partner" },
              { title: "Global Presence", desc: "Across Asia, Africa, Europe and the Middle East" },
            ].map((feature, i) => (
              <div key={i} className="border-b border-gray-800 pb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1.5 h-1.5 bg-[#e88d1c] rounded-full shrink-0"></div>
                  <h3 className="text-[18px] font-medium text-white">{feature.title}</h3>
                </div>
                <p className="text-[15px] text-gray-400 pl-4">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose STATIM */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#f8fbfa]">
        <div className="max-w-[1400px] mx-auto overflow-hidden">
          
          <h2 className="text-[32px] md:text-[44px] font-medium text-[#111] mb-16 text-center md:text-left">
            Why Choose STATIM?
          </h2>

          <div className="flex overflow-x-auto gap-6 pb-8 snap-x" style={{ scrollbarWidth: 'thin', scrollbarColor: '#e88d1c transparent' }}>
            {[
              { num: "01", val: "< 90", text: "Days Rapid Go Live", icon: <path d="M13.5 13.5L3 24L5 26L15.5 15.5M20 2L13.5 13.5L25.5 25.5L30 14L20 2Z" /> },
              { num: "02", val: "100K+", text: "Policies Per Day", icon: <path d="M6 4H18V28H6V4Z M10 12H14M10 16H14" /> },
              { num: "03", val: "90%", text: "Of Policy Origination Done On Hand Held Device", icon: <rect x="8" y="4" width="16" height="24" rx="2" /> },
              { num: "04", val: "< 2 Sec", text: "Policy Issuance TAT", icon: <path d="M16 22C20.418 22 24 18.418 24 14H8C8 18.418 11.582 22 16 22Z M16 4V8" /> },
              { num: "05", val: "3x", text: "Faster Claims Processing", icon: <path d="M4 22L12 14L18 20L28 10" /> },
              { num: "06", val: "60%", text: "Reduction In Operational Overheads", icon: <circle cx="16" cy="16" r="6" /> },
            ].map((stat, i) => (
              <div key={i} className="min-w-[280px] bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col snap-start shrink-0">
                <div className="flex justify-between items-center mb-12">
                  <div className="text-gray-800">
                    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {stat.icon}
                    </svg>
                  </div>
                  <div className="text-[20px] font-medium text-gray-400">{stat.num}</div>
                </div>
                <div className="text-[32px] md:text-[40px] font-light text-[#111] mb-4">{stat.val}</div>
                <p className="text-[15px] text-gray-600 leading-[1.6] max-w-[200px]">{stat.text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Journeying Together */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white text-center">
        <div className="max-w-[1000px] mx-auto">
          
          <h2 className="text-[40px] md:text-[56px] font-medium mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e88d1c] to-[#f5a623]">Journeying</span> <span className="text-[#111]">Together</span>
          </h2>
          <p className="text-[18px] md:text-[22px] text-gray-600 leading-[1.6] mb-24 max-w-4xl mx-auto font-light">
            Leading insurers partner with us to streamline core operations, accelerate product innovation, and drive sustainable growth across the insurance value chain.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32">
            <div className="text-[#111] text-[24px] font-medium opacity-60 hover:opacity-100 transition-opacity flex flex-col gap-2">
              <svg className="w-12 h-12 mx-auto text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 19.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              Monarch
            </div>
            <div className="text-[#111] text-[24px] font-medium opacity-60 hover:opacity-100 transition-opacity flex flex-col gap-2">
              <svg className="w-12 h-12 mx-auto text-teal-600" viewBox="0 0 24 24" fill="currentColor"><path d="M4 10h3v7H4zM10.5 10h3v7h-3zM17 10h3v7h-3zM12 4l-9 5v2h18V9z"/></svg>
              YAS
            </div>
            <div className="text-[#111] text-[24px] font-bold opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2">
              <svg className="w-8 h-8 text-blue-900" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z"/></svg>
              Santam
            </div>
            <div className="text-[#111] text-[24px] font-bold opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2">
              <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v16H4V4z"/></svg>
              SHRIRAM
            </div>
          </div>

        </div>
      </section>

      {/* Let's Talk Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#faf9f8]">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          <div className="lg:col-span-5">
            <h2 className="text-[32px] md:text-[44px] font-medium text-[#111] leading-tight mb-8">
              Let's Talk
            </h2>
            <p className="text-[18px] text-gray-700 leading-[1.6] max-w-sm">
              Bring in the change to your Insurance business with STATIM®
            </p>
          </div>

          <div className="lg:col-span-7">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="w-full bg-[#f0f0f0] border-none p-4 text-[16px] text-gray-800 placeholder-gray-500 focus:ring-1 focus:ring-[#e88d1c] outline-none" />
              <input type="text" placeholder="Last Name" className="w-full bg-[#f0f0f0] border-none p-4 text-[16px] text-gray-800 placeholder-gray-500 focus:ring-1 focus:ring-[#e88d1c] outline-none" />
              
              <div className="flex bg-[#f0f0f0] focus-within:ring-1 focus-within:ring-[#e88d1c]">
                <select className="bg-[#e8e8e8] border-none px-4 py-4 text-[16px] text-gray-700 outline-none cursor-pointer">
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>
                <input type="tel" placeholder="Phone No" className="w-full bg-transparent border-none p-4 text-[16px] text-gray-800 placeholder-gray-500 outline-none" />
              </div>
              <input type="email" placeholder="Business Email" className="w-full bg-[#f0f0f0] border-none p-4 text-[16px] text-gray-800 placeholder-gray-500 focus:ring-1 focus:ring-[#e88d1c] outline-none" />
              
              <input type="text" placeholder="Job Title" className="w-full bg-[#f0f0f0] border-none p-4 text-[16px] text-gray-800 placeholder-gray-500 focus:ring-1 focus:ring-[#e88d1c] outline-none" />
              <input type="text" placeholder="Company Name" className="w-full bg-[#f0f0f0] border-none p-4 text-[16px] text-gray-800 placeholder-gray-500 focus:ring-1 focus:ring-[#e88d1c] outline-none" />
              
              <input type="url" placeholder="Company Website" className="w-full bg-[#f0f0f0] border-none p-4 text-[16px] text-gray-800 placeholder-gray-500 focus:ring-1 focus:ring-[#e88d1c] outline-none" />
              <input type="text" placeholder="City" className="w-full bg-[#f0f0f0] border-none p-4 text-[16px] text-gray-800 placeholder-gray-500 focus:ring-1 focus:ring-[#e88d1c] outline-none" />
              
              <div className="sm:col-span-2 relative bg-[#f0f0f0]">
                <select defaultValue="" className="w-full bg-transparent border-none p-4 text-[16px] text-gray-500 outline-none cursor-pointer appearance-none focus:ring-1 focus:ring-[#e88d1c]">
                  <option value="" disabled>Insurance Solutions</option>
                  <option value="1">Core Platform</option>
                  <option value="2">Digital Portals</option>
                  <option value="3">Analytics</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </form>
          </div>

        </div>
      </section>
</div>
  );
}
