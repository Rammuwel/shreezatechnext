"use client";
import React from 'react';

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

export default function TechStack() {
   return (
      <section className="relative z-30 bg-white py-16 md:py-32 border-t border-gray-100">
         <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
            {/* Technologies Grid */}
            <div className="text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up">
               <h2 className="text-[20px] md:text-[40px] font-light leading-[1.2] text-[#111] mb-4">
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
               <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]">
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
               <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">
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
   );
}
