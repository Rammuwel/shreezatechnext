"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function AxlePage() {
  const [activeTab, setActiveTab] = useState('klass');

  return (
    <div className="min-h-screen bg-white">
{/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-12 bg-gradient-to-br from-[#fef5ef] via-white to-[#fef5ef] overflow-hidden">
        {/* Background shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#fae8db] to-transparent rounded-full opacity-50 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-[#fae8db] to-transparent rounded-full opacity-50 blur-3xl translate-y-1/4 pointer-events-none"></div>

        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-[40px] md:text-[56px] font-bold text-[#442c1d] leading-[1.1] mb-6">
              AXLE LMS®<br />
              <span className="text-[#f58634]">Your Go-To LMS Platform for </span>
              <span className="text-[#f58634]">Modern Workforce Training</span>
            </h1>
            <p className="text-[18px] md:text-[20px] text-gray-700 mb-10 font-medium">
              A scalable LMS software designed to scale with your learning needs!
            </p>
            <button className="bg-[#f58634] hover:bg-[#e07525] text-white px-8 py-4 rounded font-medium text-[16px] transition-colors shadow-lg shadow-orange-500/20">
              Book a Free Demo
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            {/* The circular crop with the image inside */}
            <div className="relative w-full max-w-[600px] aspect-square rounded-full overflow-hidden border-[12px] border-white shadow-xl bg-[#f7f0e9]">
                 <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="LMS Training" className="w-full h-full object-cover" />
                 {/* Floating screen representation */}
                 <div className="absolute top-[15%] left-[10%] right-[10%] bottom-[30%] bg-white rounded shadow-2xl overflow-hidden hidden md:flex flex-col">
                    {/* Mock dashboard header */}
                    <div className="h-6 bg-gray-100 flex items-center px-4 border-b border-gray-200 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-red-400 mr-1.5"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mr-1.5"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    {/* Mock dashboard content */}
                    <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dashboard" className="w-full h-full object-cover opacity-80" />
                 </div>
            </div>
          </div>

        </div>
      </section>

      {/* Logo Banner */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <h3 className="text-center text-[22px] md:text-[28px] font-medium text-[#111] mb-12">
            Shaping Engaging Digital Learning Experiences for 200+ Global Businesses
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            <div className="text-red-700 font-bold text-xl flex items-center gap-2"><div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-red-600"></div> ADITYA BIRLA<br/>CAPITAL</div>
            <div className="text-gray-800 font-bold text-xl flex items-center gap-2"><div className="w-8 h-8 rounded-full border-4 border-purple-500 border-r-transparent border-b-yellow-400 border-l-blue-400"></div> AMARA RAJA</div>
            <div className="text-gray-600 font-bold text-xl flex items-center gap-2"><span className="text-3xl text-orange-400">A</span> Ascent</div>
            <div className="text-pink-800 font-bold text-xl flex items-center gap-2"><div className="w-6 h-6 bg-pink-800 rotate-45"></div> AXIS BANK</div>
            <div className="text-gray-800 font-bold text-xl">bharat <span className="text-red-500">RE</span></div>
            <div className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center font-bold text-gray-500">BHR</div>
            <div className="text-blue-900 font-bold text-xl flex flex-col items-center leading-none"><div className="flex gap-1 mb-1"><div className="w-2 h-4 bg-blue-500 transform skew-x-12"></div><div className="w-2 h-4 bg-green-500 transform skew-x-12"></div><div className="w-2 h-4 bg-blue-900 transform skew-x-12"></div></div> BLACKSTONE<span className="text-[10px] font-normal tracking-widest text-gray-500">SHIPPING</span></div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center gap-3 mt-16">
            <div className="w-3 h-3 rounded-full bg-[#f58634]"></div>
            <div className="w-3 h-3 rounded-full bg-[#f58634] opacity-30"></div>
            <div className="w-3 h-3 rounded-full bg-[#f58634] opacity-30"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#281604] overflow-hidden relative">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Image Area */}
          <div className="w-full lg:w-1/2 relative h-[500px]">
             {/* Background glowing rings */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-[1px] border-[#f58634]/20 rounded-full"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-[2px] border-[#f58634]/40 rounded-full shadow-[0_0_50px_rgba(245,134,52,0.2)]"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border-[1px] border-[#f58634]/60 rounded-full"></div>
             
             {/* People Image */}
             <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Professionals" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[450px] object-cover object-top z-10" style={{ maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)' }} />
             
             {/* Base glowing line */}
             <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1.5 rounded-full bg-gradient-to-r from-transparent via-[#f58634] to-transparent blur-[3px] z-20"></div>
             <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-1/2 h-0.5 rounded-full bg-[#ffb076] z-20"></div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 relative z-10 text-white">
            <h2 className="text-[32px] md:text-[44px] font-medium leading-[1.2] mb-8">
              An <span className="text-[#f58634]">LMS Platform</span> Designed For Today's Workforce With The Vision Of Tomorrow
            </h2>
            <p className="text-[16px] md:text-[18px] text-gray-300 mb-6 leading-[1.8]">
              AXLE LMS®, Novac's flagship learning management system, is competent, efficient, and one of the best LMS platforms for delivering result-driven learning while also meeting the changing needs of modern enterprises.
            </p>
            <p className="text-[16px] md:text-[18px] text-gray-300 mb-10 leading-[1.8]">
              With extensive experience across diverse industries, AXLE LMS® is designed to adapt to your organization's diverse roles, departments, and geographies. Our platforms under AXLE LMS®, Axle Korp®, Axle Klass®, and Axle Kampus® cater to businesses, training institutes, schools, and colleges, efficiently managing and tracking learning programs, all under one centralized LMS platform.
            </p>
            <button className="bg-[#f58634] hover:bg-[#e07525] text-white px-8 py-4 rounded font-medium text-[16px] transition-colors">
              Get Started Today
            </button>
          </div>

        </div>
      </section>

      {/* Versatile LMS Platforms */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1300px] mx-auto text-center">
          
          <h2 className="text-[32px] md:text-[44px] font-medium text-[#111] leading-tight mb-4">
            Versatile <span className="text-[#f58634]">LMS Platforms</span> For All Training Needs
          </h2>
          <p className="text-[18px] text-gray-600 mb-16 max-w-4xl mx-auto leading-[1.6]">
            Whether you're a growing enterprise, training institute, or academic institution, AXLE LMS® is designed to support your unique training goals.
          </p>

          {/* Tabs Navigation */}
          <div className="flex justify-center mb-0 relative z-10">
            <div className="flex bg-[#fff9f5] rounded-t-lg overflow-hidden border-b-0 border border-[#f58634]/20 w-full max-w-[500px]">
              <button 
                onClick={() => setActiveTab('korp')}
                className={`flex-1 py-5 text-[20px] font-medium transition-colors ${activeTab === 'korp' ? 'bg-[#333] text-[#f58634]' : 'bg-transparent text-[#f58634] hover:bg-[#ffe5d0]'}`}
              >
                Axle Korp®
              </button>
              <button 
                onClick={() => setActiveTab('klass')}
                className={`flex-1 py-5 text-[20px] font-medium transition-colors ${activeTab === 'klass' ? 'bg-[#333] text-[#f58634]' : 'bg-transparent text-[#f58634] hover:bg-[#ffe5d0]'}`}
              >
                Axle Klass®
              </button>
            </div>
          </div>

          {/* Tab Content Container */}
          <div className="border border-gray-200 rounded-xl rounded-t-none bg-white p-8 md:p-16 text-left shadow-sm max-w-[1100px] mx-auto -mt-[1px]">
            
            {activeTab === 'klass' && (
              <div className="flex flex-col lg:flex-row gap-16">
                
                {/* Left Content */}
                <div className="w-full lg:w-[45%]">
                  <h3 className="text-[28px] md:text-[36px] font-bold text-[#442c1d] leading-[1.2] mb-6">
                    Axle Klass®<br />
                    <span className="text-[#f58634] font-medium">LMS for Training Institutes</span>
                  </h3>
                  <p className="text-[16px] text-gray-600 leading-[1.8] mb-10">
                    Our LMS software is built for the unique learning needs of individual professionals, freelancers, and corporate teams. Be it upskilling, reskilling, or simply wanting to learn something new, Axle Klass®'s extensive content library is just the right start.
                  </p>
                  <button className="bg-[#f5a623] hover:bg-[#e09513] text-white px-10 py-4 rounded font-medium text-[16px] transition-colors">
                    Book a Demo
                  </button>
                </div>

                {/* Right Grid */}
                <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                  {[
                    { icon: <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" strokeWidth="1.5" />, title: "Diverse Course Offerings" },
                    { icon: <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" fill="none" strokeWidth="1.5" />, title: "Interactive Learning Tools" },
                    { icon: <polygon points="10 8 16 12 10 16 10 8" stroke="currentColor" fill="none" strokeWidth="1.5" />, title: "Interactive Videos" },
                    { icon: <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" fill="none" strokeWidth="1.5" />, title: "E-Commerce Capabilities" },
                    { icon: <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" fill="none" strokeWidth="1.5" />, title: "Collaborative Learning Tool" },
                    { icon: <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" fill="none" strokeWidth="1.5" />, title: "Course Recommendation" },
                    { icon: <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" fill="none" strokeWidth="1.5" />, title: "Certificate Management" },
                    { icon: <path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" stroke="currentColor" fill="none" strokeWidth="1.5" />, title: "Progress Tracking" },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                        {/* Decorative background representing the icons from screenshot */}
                        <div className="absolute inset-0 border border-gray-400 rounded-full bg-white"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 bg-[#f58634] rounded-full translate-x-1 -translate-y-1"></div>
                        <svg className="w-5 h-5 text-gray-700 relative z-10" viewBox="0 0 24 24">
                          {feature.icon}
                        </svg>
                      </div>
                      <h4 className="text-[15px] text-gray-700 font-medium">{feature.title}</h4>
                    </div>
                  ))}
                </div>

              </div>
            )}
            
            {activeTab === 'korp' && (
              <div className="flex flex-col lg:flex-row gap-16">
                {/* Axle Korp placeholder content */}
                <div className="w-full lg:w-[45%]">
                  <h3 className="text-[28px] md:text-[36px] font-bold text-[#442c1d] leading-[1.2] mb-6">
                    Axle Korp®<br />
                    <span className="text-[#f58634] font-medium">LMS for Enterprises</span>
                  </h3>
                  <p className="text-[16px] text-gray-600 leading-[1.8] mb-10">
                    Empower your workforce with scalable and customizable learning solutions tailored for modern enterprises. Streamline onboarding, compliance training, and professional development.
                  </p>
                  <button className="bg-[#f5a623] hover:bg-[#e09513] text-white px-10 py-4 rounded font-medium text-[16px] transition-colors">
                    Book a Demo
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Not sure where to begin? CTA */}
      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-[1300px] mx-auto bg-[#382010] rounded-3xl overflow-hidden relative flex flex-col md:flex-row items-center">
          <div className="w-full md:w-5/12 h-[300px] md:h-[400px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#382010] z-10 hidden md:block"></div>
            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Consultation" className="w-full h-full object-cover" />
          </div>
          <div className="w-full md:w-7/12 p-10 md:p-16 relative z-20">
            <h2 className="text-[32px] md:text-[44px] font-medium text-white leading-tight mb-4">
              <span className="text-[#f58634]">Not sure</span> where to begin?
            </h2>
            <p className="text-[20px] md:text-[24px] text-white leading-[1.4] mb-8 font-light max-w-xl">
              Schedule a free demo, and we'll find the best solution together.
            </p>
            <button className="bg-[#f58634] hover:bg-[#e07525] text-white px-8 py-3 rounded font-medium text-[16px] transition-colors">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* How AXLE LMS Leads */}
      <section className="py-20 px-6 lg:px-12 bg-white text-center">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-medium text-[#111] mb-4">
            How AXLE LMS® Leads Among <span className="text-[#f58634]">LMS Providers</span>
          </h2>
          <p className="text-[16px] text-gray-600 mb-16 max-w-2xl mx-auto">
            Meet your diverse training needs with our feature-rich platform, built for businesses that think ahead.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <rect x="4" y="4" width="16" height="16" rx="2" />, title: "Enterprise-Ready Features:", desc: "Supports user roles, compliance tracking, and integrations with HRMS, ERPs, and video conferencing tools alike." },
              { icon: <circle cx="12" cy="12" r="10" />, title: "Mobile & Multilingual Support:", desc: "Access training content anywhere, on any device, at anytime with responsive design and language localization." },
              { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, title: "Secure & Compliant:", desc: "Cloud-based, with enterprise-grade security, data privacy controls, and regular backups." }
            ].map((feature, i) => (
              <div key={i} className="border border-gray-200 rounded-xl p-8 text-left shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <div className="mb-6 text-[#f58634]">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-[20px] font-medium text-[#111] mb-4">{feature.title}</h3>
                <p className="text-[15px] text-gray-600 leading-[1.6]">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mb-10">
            <div className="w-3 h-3 rounded-full bg-[#f58634] opacity-30"></div>
            <div className="w-3 h-3 rounded-full bg-[#f58634] opacity-30"></div>
            <div className="w-3 h-3 rounded-full bg-[#f58634] opacity-30"></div>
            <div className="w-3 h-3 rounded-full bg-[#f58634]"></div>
          </div>

          <button className="bg-[#f58634] hover:bg-[#e07525] text-white px-8 py-3 rounded font-medium text-[16px] transition-colors inline-flex justify-center">
            Experience AXLE LMS®
          </button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#fffdfa] border-y border-gray-100">
        <div className="max-w-[1300px] mx-auto text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-medium text-[#111] mb-4">
            The Benefits of Our LMS Platform
          </h2>
          <p className="text-[16px] text-gray-600 max-w-4xl mx-auto leading-[1.6]">
            AXLE LMS® helps build a future-ready workforce to deliver smart, scalable, personalized training, whether you're onboarding new hires or upskilling seasoned leaders.
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col gap-0">
            {/* Accordion Item 1 */}
            <div className="border-b border-gray-200 py-6">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-[20px] font-medium text-[#111]">Seamless Employee Onboarding</h3>
                <svg className="w-6 h-6 text-gray-400 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
            
            {/* Accordion Item 2 */}
            <div className="border-b border-gray-200 py-6">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-[20px] font-medium text-[#111]">Sales & Product Training That Drives Results</h3>
                <svg className="w-6 h-6 text-gray-400 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>

            {/* Accordion Item 3 */}
            <div className="border-b border-gray-200 py-6">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-[20px] font-medium text-[#111]">Compliance & Technical Training Made Easy</h3>
                <svg className="w-6 h-6 text-gray-400 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>

            {/* Accordion Item 4 - Expanded */}
            <div className="bg-[#fff3e5] rounded-xl p-8 mt-4 shadow-sm border border-[#ffe3c2]">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[22px] font-medium text-[#f58634]">Leadership & Soft Skills Development</h3>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
                </div>
              </div>
              <p className="text-[16px] text-gray-700 leading-[1.8]">
                Equip emerging and existing leaders with the tools to inspire, lead, and grow. Offer modular learning paths focused on communication, critical thinking, emotional intelligence, and other essential soft skills that drive a healthy workplace culture.
              </p>
            </div>
          </div>
          
          <div className="w-full relative h-[450px] md:h-[500px]">
            {/* The angled mask shape from the design */}
            <div className="absolute inset-0 bg-gray-200 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Learning" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Smart Integrations */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white text-center">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-[32px] md:text-[44px] font-medium text-[#111] mb-4">
            <span className="text-[#f58634]">Smart Integrations</span> For Smart Learning
          </h2>
          <p className="text-[18px] text-gray-600 mb-16 max-w-3xl mx-auto leading-[1.6]">
            No more fragmented training ecosystems! Integrate AXLE LMS® securely and seamlessly with your existing tools and tech stack.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {/* Mock logos for integrations */}
            {Array.from({length: 24}).map((_, i) => (
              <div key={i} className="h-[80px] bg-white border border-gray-100 rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow">
                <div className="w-full h-full bg-gray-100/50 rounded flex items-center justify-center text-gray-400 text-xs font-medium">Integration {i+1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#fffdfa] border-t border-gray-100">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-[32px] md:text-[44px] font-medium text-center mb-16">
            <span className="text-[#f58634]">Industries Our LMS Platform</span> Serves
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <rect x="2" y="2" width="20" height="20" />, title: "Banking and Financial Services" },
              { icon: <circle cx="12" cy="12" r="10" />, title: "Healthcare and Pharmaceutical" },
              { icon: <path d="M12 2L2 22h20L12 2z" />, title: "Manufacturing" },
              { icon: <rect x="4" y="4" width="16" height="16" rx="2" />, title: "Retail" },
              { icon: <circle cx="12" cy="12" r="8" />, title: "Hospitality" },
              { icon: <path d="M4 4h16v16H4V4z" />, title: "Oil and Gas" },
              { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />, title: "Energy and Mining" },
              { icon: <rect x="2" y="2" width="20" height="20" />, title: "Transportation and Logistics" },
              { icon: <circle cx="12" cy="12" r="10" />, title: "Chemical" },
              { icon: <path d="M12 2L2 22h20L12 2z" />, title: "News, Media and Publishing" },
              { icon: <rect x="4" y="4" width="16" height="16" rx="2" />, title: "Non-Governmental Organization" },
              { icon: <circle cx="12" cy="12" r="8" />, title: "IT and ITES" }
            ].map((industry, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-50 flex items-center gap-6 hover:shadow-md transition-shadow">
                <div className="text-[#f58634] w-12 h-12 flex items-center justify-center bg-[#fff8f3] rounded-full">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {industry.icon}
                  </svg>
                </div>
                <h3 className="text-[18px] text-gray-700 font-medium">{industry.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Novac Advantage */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#fcf9f5]">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-[32px] md:text-[44px] font-medium text-center mb-16">
            The <span className="text-[#f58634]">Novac Advantage</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Block 1 */}
            <div className="md:col-span-5 bg-[#ffce99] p-8 md:p-12 rounded-[20px] flex items-center gap-6">
              <div className="text-[40px] md:text-[56px] font-bold text-[#111]">200+</div>
              <div className="text-[18px] text-[#333] font-medium leading-tight border-l border-black/10 pl-6">Happy Clients and counting<br/>across <span className="font-bold text-black">15+</span> Industries</div>
            </div>

            {/* Block 2 */}
            <div className="md:col-span-3 bg-[#f58634] p-8 md:p-10 rounded-[20px] flex flex-col justify-center text-white">
              <div className="text-[20px] font-medium mb-2">Recognized for</div>
              <div className="text-[22px] font-bold mb-2 leading-tight">Excellence in the PSU Sector</div>
              <div className="text-[15px] opacity-90">with decades worth of accolades under our belt</div>
            </div>

            {/* Block 3 */}
            <div className="md:col-span-4 bg-[#ffce99] p-8 md:p-10 rounded-[20px] flex flex-col justify-center">
              <div className="text-[40px] font-bold text-[#111] mb-2">3000+</div>
              <div className="text-[16px] text-[#333]">hours of content developed and delivered</div>
            </div>

            {/* Block 4 */}
            <div className="md:col-span-4 bg-[#f58634] p-8 md:p-10 rounded-[20px] flex flex-col justify-center text-white">
              <div className="text-[20px] mb-2">Validated with</div>
              <div className="text-[24px] font-bold leading-tight">CMMI Level 5 Accreditation</div>
            </div>

            {/* Block 5 */}
            <div className="md:col-span-4 bg-[#6c6f71] p-8 md:p-10 rounded-[20px] flex items-center gap-6 text-white">
              <div className="text-[40px] font-bold">250+</div>
              <div className="text-[16px] border-l border-white/20 pl-6">experienced team members who are passionate about delivering the best</div>
            </div>

            {/* Block 6 */}
            <div className="md:col-span-4 bg-[#ffce99] p-8 md:p-10 rounded-[20px] flex flex-col justify-center">
              <div className="text-[40px] font-bold text-[#111] mb-2">2,00,000+</div>
              <div className="text-[16px] text-[#333]">Learners On-boarded Successfully</div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Platform CTA */}
      <section className="py-20 px-6 lg:px-12 bg-[#fcf9f5]">
        <div className="max-w-[1300px] mx-auto bg-[#382010] rounded-[40px] overflow-hidden relative">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Background" className="absolute inset-0 w-full h-full object-cover object-top" />
          
          <div className="relative z-20 py-24 md:py-32 px-8 flex flex-col items-center text-center">
            <h2 className="text-[32px] md:text-[48px] font-medium text-white max-w-3xl leading-[1.2] mb-10">
              Experience a unified LMS platform built to support continuous learning at every level
            </h2>
            <button className="bg-[#f58634] hover:bg-[#e07525] text-white px-10 py-4 rounded font-medium text-[16px] transition-colors">
              Book a Demo
            </button>
          </div>
        </div>
        
        <div className="text-center mt-20">
          <h2 className="text-[32px] md:text-[40px] font-medium text-[#111]">
            Trusted By Businesses
          </h2>
        </div>
      </section>

      {/* Trusted By Businesses Logos */}
      <section className="pb-20 px-6 lg:px-12 bg-[#fcf9f5]">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
             <p className="text-[18px] text-gray-600">Join leading organizations that believe that the key to successful businesses is in great training.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center opacity-80 mb-12">
            <div className="h-12 w-full bg-white rounded border border-gray-100 flex items-center justify-center p-2"><span className="text-xs font-bold text-red-600">ADITYA BIRLA</span></div>
            <div className="h-12 w-full bg-white rounded border border-gray-100 flex items-center justify-center p-2"><span className="text-xs font-bold text-purple-600">AMARA RAJA</span></div>
            <div className="h-12 w-full bg-white rounded border border-gray-100 flex items-center justify-center p-2"><span className="text-xs font-bold text-gray-600">Ascent</span></div>
            <div className="h-12 w-full bg-white rounded border border-gray-100 flex items-center justify-center p-2"><span className="text-xs font-bold text-pink-600">AXIS BANK</span></div>
            <div className="h-12 w-full bg-white rounded border border-gray-100 flex items-center justify-center p-2"><span className="text-xs font-bold text-gray-800">bharat <span className="text-red-500">RE</span></span></div>
            <div className="h-12 w-full bg-white rounded border border-gray-100 flex items-center justify-center p-2"><span className="text-xs font-bold text-gray-500">BHR</span></div>
            <div className="h-12 w-full bg-white rounded border border-gray-100 flex items-center justify-center p-2"><span className="text-xs font-bold text-blue-800">BLACKSTONE</span></div>
            <div className="h-12 w-full bg-white rounded border border-gray-100 flex items-center justify-center p-2"><span className="text-xs font-bold text-blue-600">HP</span></div>
            <div className="h-12 w-full bg-white rounded border border-gray-100 flex items-center justify-center p-2"><span className="text-xs font-bold text-red-800">IDFC FIRST</span></div>
            <div className="h-12 w-full bg-white rounded border border-gray-100 flex items-center justify-center p-2"><span className="text-xs font-bold text-teal-600">INDOSTAR</span></div>
            <div className="h-12 w-full bg-white rounded border border-gray-100 flex items-center justify-center p-2"><span className="text-xs font-bold text-blue-900">ITC Limited</span></div>
            <div className="h-12 w-full bg-white rounded border border-gray-100 flex items-center justify-center p-2"><span className="text-xs font-bold text-red-600">Leica</span></div>
            <div className="h-12 w-full bg-white rounded border border-gray-100 flex items-center justify-center p-2"><span className="text-xs font-bold text-orange-600">Naandi</span></div>
            <div className="h-12 w-full bg-white rounded border border-gray-100 flex items-center justify-center p-2"><span className="text-xs font-bold text-green-600">nivara</span></div>
          </div>
          
          <div className="flex justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#f58634]"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
            <div className="w-3 h-3 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 lg:px-12 bg-[#fcf9f5]">
        <div className="max-w-[1300px] mx-auto bg-[#1a0f08] rounded-[40px] overflow-hidden relative">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Background" className="absolute inset-0 w-full h-full object-cover object-top opacity-30" />
          
          <div className="relative z-20 py-24 md:py-32 px-8 flex flex-col items-center text-center">
            {/* Quote marks */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 opacity-20 hidden md:block">
              <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            </div>
            <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-20 hidden md:block rotate-180">
              <svg className="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            </div>

            <h2 className="text-[32px] md:text-[40px] font-medium text-white mb-8 bg-[#1e40af] px-4 leading-[1.3] inline-block">
              Look what our customers are saying about us!
            </h2>
            <div className="bg-[#1e40af] p-2 inline-block">
              <p className="text-[16px] md:text-[18px] text-white leading-[1.8] max-w-4xl text-center">
                We would like to sincerely thank NOVAC for the insightful and thorough overview you provided during the implementation & training session on the NOVAC LMS. Your invaluable guidance ensured a smooth onboarding experience, and the training on every aspect of the system has given us a much clearer understanding of its functionalities and potential. We look forward to applying this knowledge in practice and maximizing the platform's capabilities. Thank you once again—we look forward to working more with the NOVAC LMS platform.
              </p>
            </div>
            
            <div className="mt-10">
              <div className="bg-[#1e40af] px-2 py-1 inline-block text-[20px] font-bold text-white mb-1">
                Vandana Ali
              </div>
              <br/>
              <div className="bg-[#1e40af] px-2 py-1 inline-block text-[16px] text-white">
                Amway
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-12">
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Offerings */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#281604]">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-[32px] md:text-[44px] font-medium text-center text-white mb-16">
            Here For An <span className="text-[#f58634]">LMS Software</span>?<br/>We've Got The Content To Make It Work.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Content Development Services",
                desc: "Create bespoke learning experiences tailored to your audience and organizational goals.",
                image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Pre-Built Courses",
                desc: "Fast-track learning with our 300+ diverse range of pre-built courses covering POSH, compliance, ISMS, and more.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                title: "Other eLearning Solutions",
                desc: "End-to-end eLearning solutions, from ideation and planning to development and execution.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((card, i) => (
              <div key={i} className="bg-[#fff9f5] rounded-[24px] p-8 md:p-10 flex flex-col h-[400px] relative overflow-hidden">
                <h3 className="text-[22px] font-bold text-[#111] mb-4 leading-tight pr-8">{card.title}</h3>
                <p className="text-[16px] text-gray-700 leading-[1.6] mb-8 relative z-10">{card.desc}</p>
                <div className="mt-auto relative z-10">
                  <button className="bg-[#f58634] hover:bg-[#e07525] text-white px-8 py-3 rounded font-medium text-[15px] transition-colors shadow-md">
                    Know More
                  </button>
                </div>
                
                {/* Decorative circle & Image */}
                <div className="absolute bottom-0 right-0 w-[180px] h-[180px]">
                  <div className="absolute bottom-[-20%] right-[-10%] w-[150px] h-[150px] bg-gradient-to-tr from-[#ffe0c4] to-transparent rounded-full opacity-60"></div>
                  <img src={card.image} alt={card.title} className="absolute bottom-0 right-4 h-[120px] w-[120px] object-cover rounded-full border-4 border-white shadow-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure */}
      <section className="py-20 lg:py-24 px-6 lg:px-12 bg-[#fffdfa]">
        <div className="max-w-[1300px] mx-auto bg-gradient-to-r from-[#281604] via-[#4a2810] to-[#281604] rounded-3xl overflow-hidden relative flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-12 md:p-20 relative z-20">
            <h2 className="text-[32px] md:text-[44px] font-medium text-white leading-tight mb-4">
              Explore The AXLE LMS® Brochure
            </h2>
            <p className="text-[18px] text-gray-300 leading-[1.6] mb-10 font-light">
              All The Features, Benefits, And Use Cases At Your Fingertips!
            </p>
            <button className="bg-[#f58634] hover:bg-[#e07525] text-white px-8 py-4 rounded font-medium text-[16px] transition-colors shadow-lg shadow-orange-500/20">
              Download Brochure
            </button>
          </div>
          <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px] flex items-center justify-center p-8">
            <div className="bg-white w-[280px] h-[360px] rounded shadow-2xl transform rotate-[15deg] translate-x-8 overflow-hidden border border-gray-100 flex flex-col">
              <div className="p-4 border-b border-gray-100 flex items-center gap-2">
                 <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-green-500 flex shrink-0"></div>
                 <span className="text-[10px] font-bold text-gray-800">NOVAC</span>
              </div>
              <div className="p-6">
                <h3 className="text-[#f58634] font-bold text-[20px] leading-tight mb-4">Experience<br/><span className="text-[#333]">the Next Level of</span><br/>Digital Learning</h3>
                <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Brochure Cover" className="w-full h-[150px] object-cover rounded mb-4" />
              </div>
              <div className="mt-auto h-8 flex">
                 <div className="w-1/4 h-full bg-[#333]"></div>
                 <div className="w-1/4 h-full bg-[#f58634]"></div>
                 <div className="w-1/4 h-full bg-[#ffe0c4]"></div>
                 <div className="w-1/4 h-full bg-[#f58634]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-[45%]">
            <h2 className="text-[40px] md:text-[56px] font-medium text-[#111] leading-[1.1] mb-6">
              Take The First Step Towards Implementing The Best <span className="text-[#f58634]">LMS Platform</span>
            </h2>
            <p className="text-[20px] md:text-[24px] text-gray-700 leading-[1.4] font-light">
              Your journey to smart learning starts here.
            </p>
          </div>
          
          <div className="w-full lg:w-[55%]">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <input type="text" placeholder="First Name" className="w-full bg-[#f8f9fa] border-none rounded py-4 px-6 text-[15px] focus:outline-none focus:ring-1 focus:ring-[#f58634]" />
              </div>
              <div className="md:col-span-1">
                <input type="text" placeholder="Last Name" className="w-full bg-[#f8f9fa] border-none rounded py-4 px-6 text-[15px] focus:outline-none focus:ring-1 focus:ring-[#f58634]" />
              </div>
              
              <div className="md:col-span-1 flex">
                <select className="bg-[#e9ecef] border-none rounded-l py-4 px-4 text-[15px] focus:outline-none text-gray-700 w-24">
                  <option>+91</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>
                <input type="tel" placeholder="Phone No" className="w-full bg-[#f8f9fa] border-none rounded-r py-4 px-4 text-[15px] focus:outline-none focus:ring-1 focus:ring-[#f58634]" />
              </div>
              <div className="md:col-span-1">
                <input type="email" placeholder="Business Email" className="w-full bg-[#f8f9fa] border-none rounded py-4 px-6 text-[15px] focus:outline-none focus:ring-1 focus:ring-[#f58634]" />
              </div>
              
              <div className="md:col-span-1">
                <input type="text" placeholder="Job Title" className="w-full bg-[#f8f9fa] border-none rounded py-4 px-6 text-[15px] focus:outline-none focus:ring-1 focus:ring-[#f58634]" />
              </div>
              <div className="md:col-span-1">
                <input type="text" placeholder="Company name" className="w-full bg-[#f8f9fa] border-none rounded py-4 px-6 text-[15px] focus:outline-none focus:ring-1 focus:ring-[#f58634]" />
              </div>
              
              <div className="md:col-span-1">
                <input type="text" placeholder="Company Website" className="w-full bg-[#f8f9fa] border-none rounded py-4 px-6 text-[15px] focus:outline-none focus:ring-1 focus:ring-[#f58634]" />
              </div>
              <div className="md:col-span-1">
                <input type="text" placeholder="City" className="w-full bg-[#f8f9fa] border-none rounded py-4 px-6 text-[15px] focus:outline-none focus:ring-1 focus:ring-[#f58634]" />
              </div>
              
              <div className="md:col-span-2">
                <textarea placeholder="Message" rows="5" className="w-full bg-[#f8f9fa] border-none rounded py-4 px-6 text-[15px] focus:outline-none focus:ring-1 focus:ring-[#f58634] resize-none"></textarea>
              </div>
              
              <div className="md:col-span-2 flex items-start gap-3 mt-2">
                <input type="checkbox" id="consent" className="mt-1 accent-[#f58634]" />
                <label htmlFor="consent" className="text-[14px] text-gray-500 leading-[1.5]">
                  By submitting this form, I consent Novac Technology to use my data for contacting through Call/SMS/Email.
                </label>
              </div>
              
              <div className="md:col-span-2 mt-4">
                <button type="button" className="w-full md:w-auto bg-[#f58634] hover:bg-[#e07525] text-white px-12 py-4 rounded font-bold text-[16px] tracking-wide transition-colors">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#fcf9f5]">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12 gap-4">
            <h2 className="text-[32px] md:text-[44px] font-medium text-[#f58634] leading-[1.2]">
              All Insights You Need, In One Place
            </h2>
            <button className="flex items-center gap-2 border border-gray-300 rounded-full px-6 py-2 hover:border-[#f58634] hover:text-[#f58634] transition-colors bg-white">
              <span className="font-medium">View All</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Featured Article */}
            <div className="w-full lg:w-1/2 relative rounded-[20px] overflow-hidden group cursor-pointer h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Main Insight" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <h3 className="text-[22px] md:text-[28px] font-bold text-white leading-[1.3]">
                  Beyond the Office: How AXLE LMS® Enhances Remote Learning Strategies
                </h3>
              </div>
            </div>

            {/* List of Articles */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-between">
              {[
                {
                  title: "10 Common LMS Implementation Challenges & Solutions for Enterprises",
                  img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                },
                {
                  title: "5 Effective Ways A LMS Platform Can Help Streamline The Employee Onboarding Process",
                  img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                },
                {
                  title: "How an LMS Ensures High ROI on Training Investments",
                  img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                }
              ].map((article, i) => (
                <div key={i} className="flex gap-6 items-center group cursor-pointer bg-white/50 hover:bg-white p-4 rounded-xl transition-colors border border-transparent hover:border-gray-200">
                  <div className="w-[160px] h-[110px] shrink-0 rounded-lg overflow-hidden relative">
                    {/* Simulated thumbnail similar to screenshot */}
                    <div className="absolute inset-0 bg-[#fff5ec] flex items-center justify-center border border-gray-100">
                      <img src={article.img} className="w-full h-full object-cover opacity-60 mix-blend-multiply" alt="Thumbnail" />
                    </div>
                  </div>
                  <h4 className="text-[18px] md:text-[20px] font-medium text-[#111] leading-[1.4] group-hover:text-[#f58634] transition-colors">
                    {article.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#fcf9f5]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-[32px] md:text-[44px] font-medium text-center text-[#111] mb-12">
            Frequently asked questions
          </h2>
          
          <div className="flex flex-col gap-4">
            {/* FAQ Item 1 - Expanded */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-8 py-6 flex justify-between items-center cursor-pointer border-b border-gray-100">
                <h3 className="text-[18px] font-medium text-[#f58634]">How is AXLE LMS® different from other LMS platforms?</h3>
                <div className="shrink-0 ml-4 border border-black rounded-full p-1">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4"></path></svg>
                </div>
              </div>
              <div className="px-8 py-6">
                <p className="text-[16px] text-gray-700 leading-[1.6]">
                  AXLE LMS® stands out with its customizable platform, which supports multi-format content with innovative features, analytics, personalized learning paths, and much more!
                </p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-8 py-6 flex justify-between items-center cursor-pointer">
                <h3 className="text-[18px] font-medium text-gray-700">Is AXLE LMS® customizable to meet different industry and training requirements?</h3>
                <div className="shrink-0 ml-4 border border-black rounded-full p-1">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path></svg>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-8 py-6 flex justify-between items-center cursor-pointer">
                <h3 className="text-[18px] font-medium text-gray-700">Do you offer eLearning content development services along with the LMS?</h3>
                <div className="shrink-0 ml-4 border border-black rounded-full p-1">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path></svg>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-8 py-6 flex justify-between items-center cursor-pointer">
                <h3 className="text-[18px] font-medium text-gray-700">Do you provide pre-built courses like POSH, ISMS, etc., that can be integrated into the LMS?</h3>
                <div className="shrink-0 ml-4 border border-black rounded-full p-1">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path></svg>
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-8 py-6 flex justify-between items-center cursor-pointer">
                <h3 className="text-[18px] font-medium text-gray-700">What types of training content can we upload and manage on AXLE LMS®?</h3>
                <div className="shrink-0 ml-4 border border-black rounded-full p-1">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path></svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
</div>
  );
}
