"use client";
import React from 'react';
import Contact from '../../components/Contact';

const techRow1 = [
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg"
];

const techRow2 = [
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original-wordmark.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain-wordmark.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
];

export default function AboutUsPage() {
   return (
      <div className="min-h-screen bg-[#040026] font-sans">
         {/* Hero Section */}
         <section className="h-[50vh] min-h-[400px] w-full relative overflow-hidden bg-[#040026] flex items-center border-b border-[#ffffff10]">
            <div className="absolute inset-0 z-0">
               <img src="/images/about_hero_1786877430368.jpg" alt="About Us Hero" className="w-full h-full object-cover opacity-50" />
               <div className="absolute inset-0 bg-gradient-to-r from-[#040026] via-[#040026]/70 to-[#040026]/20"></div>
            </div>

            <div className="max-w-[1300px] mx-auto px-6 h-full flex flex-col justify-center relative z-10 w-full">
               <div className="max-w-4xl">
                  <h1 className="text-[32px] md:text-[40px] leading-[42px] md:leading-[56px] font-normal mb-6 text-white text-balance">
                     Scale up to New Heights <br />
                     <span className="text-[#D4AF37]">with Shreeza Tech</span>
                  </h1>
                  <p className="text-[16px] md:text-[20px] leading-[28px] md:leading-[34px] font-normal text-gray-300 max-w-2xl mb-10 text-balance">
                     We are pioneers in technology and digital transformation, empowering enterprises to seamlessly embrace the future.
                  </p>
               </div>
            </div>
         </section>

         {/* Introduction & Core Expertise Section */}
         <section className="relative z-30 bg-white py-24 md:py-32">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

               <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 mb-16 md:mb-24">
                  <div className="w-full lg:w-[45%]" data-aos="fade-right">
                     <h2 className="text-[36px] md:text-[48px] font-light leading-[1.2] text-[#0A3A7A] tracking-tight">
                        Architecting the Future<br />
                        <span className="font-semibold text-[#111]">of Digital Innovation.</span>
                     </h2>
                  </div>

                  <div className="w-full lg:w-[55%] flex flex-col gap-8 text-[#333]" data-aos="fade-left" data-aos-delay="200">
                     <p className="text-[20px] md:text-[24px] font-light leading-[1.6] text-[#111]">
                        Welcome to <span className="font-medium text-[#D4AF37]">Shreeza Tech</span>, your trusted partner in full-stack engineering and intelligent software development.
                     </p>
                     <p className="text-[16px] leading-[1.8] font-light text-gray-600">
                        We specialize in transforming complex business challenges into intuitive, scalable digital products. From high-performance websites and immersive mobile applications to entirely custom software architectures, our team delivers solutions engineered for growth and reliability.
                     </p>
                     <p className="text-[16px] leading-[1.8] font-light text-gray-600">
                        At the heart of our capability lies deep expertise in emerging technologies. We seamlessly integrate Artificial Intelligence (AI) and Machine Learning into your workflows, enabling intelligent automation, data-driven insights, and a powerful competitive edge in today's fast-paced market.
                     </p>
                  </div>
               </div>

               {/* Modern Bento Grid */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

                  {/* Web Development - Wide Card */}
                  <div data-aos="fade-up" data-aos-delay="100" className="md:col-span-2 relative p-8 lg:p-10 rounded-[32px] bg-gray-50 border border-gray-100 overflow-hidden group flex flex-col justify-between min-h-[280px]">
                     <div className="relative z-10">
                        <div className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                           <svg className="w-6 h-6 text-[#0A3A7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <h3 className="text-[28px] text-[#111] font-medium mb-3 tracking-tight">Web Development</h3>
                        <p className="text-[16px] text-gray-500 font-light leading-relaxed max-w-md">
                           High-performance, scalable enterprise web platforms and portals built with modern architectures.
                        </p>
                     </div>
                     <div className="absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 translate-x-1/4 translate-y-1/4">
                        <svg className="w-64 h-64 text-[#0A3A7A]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                     </div>
                  </div>

                  {/* Mobile Apps - Square Card */}
                  <div data-aos="fade-up" data-aos-delay="200" className="md:col-span-1 relative p-8 lg:p-10 rounded-[32px] bg-white border border-gray-100 overflow-hidden group flex flex-col justify-between min-h-[280px]">
                     <div>
                        <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                           <svg className="w-6 h-6 text-[#0A3A7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                        </div>
                        <h3 className="text-[24px] text-[#111] font-medium mb-3 tracking-tight">Mobile Apps</h3>
                        <p className="text-[15px] text-gray-500 font-light leading-relaxed">
                           Immersive iOS & Android applications tailored for rapid growth.
                        </p>
                     </div>
                  </div>

                  {/* Custom Solutions - Square Card */}
                  <div data-aos="fade-up" data-aos-delay="300" className="md:col-span-1 relative p-8 lg:p-10 rounded-[32px] bg-white border border-gray-100 overflow-hidden group flex flex-col justify-between min-h-[280px]">
                     <div>
                        <div className="w-14 h-14 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                           <svg className="w-6 h-6 text-[#0A3A7A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>
                        </div>
                        <h3 className="text-[24px] text-[#111] font-medium mb-3 tracking-tight">Custom Solutions</h3>
                        <p className="text-[15px] text-gray-500 font-light leading-relaxed">
                           Bespoke software architectures designed for unique needs.
                        </p>
                     </div>
                  </div>

                  {/* AI Integration - Dark Wide Card */}
                  <div data-aos="fade-up" data-aos-delay="400" className="md:col-span-2 relative p-8 lg:p-10 rounded-[32px] bg-[#040026] overflow-hidden group flex flex-col justify-between min-h-[280px]">
                     <div className="absolute inset-0 bg-gradient-to-br from-[#0A3A7A]/20 to-transparent opacity-50"></div>
                     <div className="relative z-10">
                        <div className="w-14 h-14 rounded-full bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
                           <svg className="w-6 h-6 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" /></svg>
                        </div>
                        <h3 className="text-[28px] text-white font-medium mb-3 tracking-tight">AI & Machine Learning</h3>
                        <p className="text-[16px] text-gray-400 font-light leading-relaxed max-w-md">
                           Intelligent automation and predictive algorithms seamlessly integrated into your enterprise ecosystem.
                        </p>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* Values Section (Formerly Mantra) */}
         <section className="relative z-30 bg-[#040026] py-16 md:py-32">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
               <div className="text-center mb-12 md:mb-20 max-w-3xl mx-auto" data-aos="fade-up">
                  <h2 className="text-[32px] md:text-[48px] font-light text-white leading-[1.2] mb-6">
                     Our <span className="text-[#D4AF37] font-semibold">Core Values</span>
                  </h2>
                  <p className="text-[16px] md:text-[18px] text-gray-400 font-light leading-[1.8]">
                     At Shreeza Tech, we leverage modern software architecture, AI, and cloud technology to engineer enterprise solutions primed for the future.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                     { title: "Client-Centric Engineering", text: "We prioritize our clients' strategic goals, delivering tailored technology solutions that exceed expectations and drive measurable impact.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
                     { title: "Agile & Adaptive", text: "We embrace change and iterate rapidly. Our agile methodology ensures we deliver high-quality software that scales with your evolving needs.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                     { title: "Empowered Talent", text: "Our engineers and strategists are our greatest asset. We foster a culture of continuous learning to remain at the cutting edge of tech.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
                     { title: "Uncompromising Security", text: "We adhere to the highest standards of data security, transparency, and ethical engineering practices in every line of code we write.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
                     { title: "Tech-Driven Innovation", text: "From AI integration to cloud-native architectures, we constantly explore emerging technologies to build future-proof digital products.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
                     { title: "Flawless Execution", text: "We combine deep technical expertise with rigorous QA and DevOps practices to deliver robust, high-performance solutions on time.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
                  ].map((item, idx) => (
                     <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} className="p-8 rounded-2xl bg-transparent border border-white/10 hover:bg-white/5 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col h-full group">
                        <div className="w-12 h-12 rounded-full bg-[#0A3A7A] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                           {item.icon}
                        </div>
                        <h4 className="text-[20px] font-medium text-white mb-3 tracking-wide">{item.title}</h4>
                        <p className="text-[15px] leading-[1.7] font-light text-gray-400">
                           {item.text}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Diversity Section */}
         <section className="relative z-30 bg-gray-50 py-24 md:py-32">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
               <div className="flex flex-col lg:flex-row gap-16 items-center">
                  <div className="w-full lg:w-1/2" data-aos="fade-right">
                     <div className="relative rounded-3xl overflow-hidden border border-gray-200">
                        <img
                           src="/images/about_diversity_1786877446906.jpg"
                           alt="Diversity and Inclusivity"
                           className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-[#0A3A7A]/10 mix-blend-multiply"></div>
                     </div>
                  </div>

                  <div className="w-full lg:w-1/2 flex flex-col gap-6" data-aos="fade-left" data-aos-delay="200">
                     <h2 className="text-[32px] md:text-[44px] font-light leading-[1.2] text-[#111]">
                        A Culture of <br />
                        <span className="font-semibold text-[#0A3A7A]">Innovation & Excellence.</span>
                     </h2>
                     <p className="text-[18px] font-light leading-[1.6] text-gray-700 mt-2">
                        At Shreeza Tech, our culture is rooted in continuous learning, agile collaboration, and technological excellence.
                     </p>
                     <p className="text-[16px] leading-[1.8] font-light text-gray-600">
                        We believe that diverse perspectives drive the most robust engineering solutions. By fostering an inclusive environment, we empower our developers and strategists to experiment freely, push boundaries, and build transformative digital products that solve real-world problems.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Minds Behind Shreeza Section */}
         <section className="relative z-30 bg-[#040026] py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
               <div className="text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up">
                  <h2 className="text-[32px] md:text-[44px] font-light leading-[1.2] text-white">
                     The Minds Behind <br />
                     <span className="font-semibold text-[#D4AF37]">Shreeza Tech</span>
                  </h2>
                  <p className="text-[18px] font-light leading-[1.6] text-gray-300 mt-6">
                     Visionary leadership driving digital transformation and technological excellence across industries.
                  </p>
               </div>



               <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
                  {/* Founder */}
                  <div className="flex flex-col group" data-aos="fade-up" data-aos-delay="100">
                     <div className="relative w-[90%] md:w-[80%] lg:w-[300px] aspect-[4/5] mb-8 overflow-hidden rounded-sm border-b-[3px] border-[#D4AF37]">
                        <img
                           src="/images/founder_CEO.png"
                           alt="Ram Muwel"
                           className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-all duration-700 ease-in-out"
                        />
                        {/* Elegant minimalist social link that slides in */}
                        <div className="absolute top-4 right-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                           <a href="#" className="text-white hover:text-[#D4AF37] transition-colors drop-shadow-lg">
                              <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                           </a>
                        </div>
                     </div>

                     <div className="flex flex-col text-left">
                        <div className="mb-6">
                           <h3 className="text-[32px] md:text-[40px] text-white font-light tracking-tight mb-2">Ram Muwel</h3>
                           <p className="text-[#D4AF37] text-[13px] font-medium tracking-[0.25em] uppercase">Founder &amp; CEO</p>
                        </div>

                        <div className="relative pl-6 border-l border-white/20">
                           <p className="text-gray-400 font-light leading-[1.8] text-[16px] md:text-[18px]">
                              "Our goal has always been to build solutions that not only solve today's challenges but are scalable enough to embrace tomorrow's innovations."
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Co-founder & CTO */}
                  <div className="flex flex-col group" data-aos="fade-up" data-aos-delay="200">
                     <div className="relative w-[90%] md:w-[80%] lg:w-[300px] aspect-[4/5] mb-8 overflow-hidden rounded-sm border-b-[3px] border-[#D4AF37]">
                        <img
                           src="/images/lokendra.webp"
                           alt="Lokendra Jatav"
                           className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-all duration-700 ease-in-out"
                        />
                        {/* Elegant minimalist social link that slides in */}
                        <div className="absolute top-4 right-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                           <a href="#" className="text-white hover:text-[#D4AF37] transition-colors drop-shadow-lg">
                              <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                           </a>
                        </div>
                     </div>

                     <div className="flex flex-col text-left">
                        <div className="mb-6">
                           <h3 className="text-[32px] md:text-[40px] text-white font-light tracking-tight mb-2">Lokendra Jatav</h3>
                           <p className="text-[#D4AF37] text-[13px] font-medium tracking-[0.25em] uppercase">Co-founder &amp; CTO</p>
                        </div>

                        <div className="relative pl-6 border-l border-white/20">
                           <p className="text-gray-400 font-light leading-[1.8] text-[16px] md:text-[18px]">
                              "We harness emerging technologies and engineering excellence to empower businesses to lead their digital transformation journey."
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Technologies Section */}
         <section className="relative z-30 bg-white py-24 md:py-32 border-t border-gray-100">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
               {/* Technologies Grid */}
               <div className="text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up">
                  <h2 className="text-[32px] md:text-[40px] font-light leading-[1.2] text-[#111] mb-4">
                     Technologies <span className="font-semibold text-[#0A3A7A]">We Master</span>
                  </h2>
                  <p className="text-[16px] text-gray-500 font-light leading-[1.6]">
                     Leveraging modern, scalable, and secure technologies to build the future of your enterprise.
                  </p>
               </div>

               <div className="relative w-full overflow-hidden flex flex-col gap-12 py-4">
                  {/* Left and Right Fade overlays for seamless entry/exit */}
                  <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                  {/* Row 1 - Scrolling Left */}
                  <div className="flex w-max animate-marquee-left">
                     <div className="flex items-center justify-center gap-16 px-8">
                        {techRow1.map((img, idx) => (
                           <div key={idx} className="w-[80px] md:w-[100px] h-12 relative transition-transform duration-300 hover:scale-110 flex-shrink-0 cursor-pointer">
                              <img src={img} alt="Technology Logo" className="w-full h-full object-contain" />
                           </div>
                        ))}
                     </div>
                     <div className="flex items-center justify-center gap-16 px-8">
                        {techRow1.map((img, idx) => (
                           <div key={idx + 12} className="w-[80px] md:w-[100px] h-12 relative transition-transform duration-300 hover:scale-110 flex-shrink-0 cursor-pointer">
                              <img src={img} alt="Technology Logo" className="w-full h-full object-contain" />
                           </div>
                        ))}
                     </div>
                  </div>

                  {/* Row 2 - Scrolling Right */}
                  <div className="flex w-max animate-marquee-right">
                     <div className="flex items-center justify-center gap-16 px-8">
                        {techRow2.map((img, idx) => (
                           <div key={idx} className="w-[80px] md:w-[100px] h-12 relative transition-transform duration-300 hover:scale-110 flex-shrink-0 cursor-pointer">
                              <img src={img} alt="Technology Logo" className="w-full h-full object-contain" />
                           </div>
                        ))}
                     </div>
                     <div className="flex items-center justify-center gap-16 px-8">
                        {techRow2.map((img, idx) => (
                           <div key={idx + 12} className="w-[80px] md:w-[100px] h-12 relative transition-transform duration-300 hover:scale-110 flex-shrink-0 cursor-pointer">
                              <img src={img} alt="Technology Logo" className="w-full h-full object-contain" />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Careers Section */}
         <section className="relative z-30 bg-[#040026] py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-16">
               <div className="w-full md:w-1/2" data-aos="fade-right">
                  <h2 className="text-[32px] md:text-[56px] font-light text-white mb-6 leading-[1.1]">
                     Become a <span className="font-semibold text-[#D4AF37]">Shreezan</span>
                  </h2>
                  <p className="text-[18px] text-gray-400 font-light leading-[1.8] mb-10 max-w-lg">
                     Are you someone who revels in doing the unexpected and extraordinary? Join us in our journey to innovate, create, and make a lasting global impact.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-white hover:bg-[#0A3A7A] hover:text-white font-medium rounded-lg transition-colors w-full md:w-auto justify-center">
                     Explore Opportunities
                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
               </div>

               <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 h-[300px] md:h-[500px] mt-8 md:mt-0" data-aos="fade-left" data-aos-delay="200">
                  <div className="rounded-2xl overflow-hidden border border-white/10 h-full translate-y-4 md:translate-y-8">
                     <img src="/images/about_careers_one_1786878027023.jpg" alt="Team Discussion" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-white/10 h-full -translate-y-4 md:-translate-y-8">
                     <img src="/images/about_careers_two_1786878213755.jpg" alt="Team Work" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
         </section>

         {/* Contact Section */}
         <div className="bg-[#041b25]">
            <Contact />
         </div>

      </div>
   );
}
