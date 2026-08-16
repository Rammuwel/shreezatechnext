"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { CreditCard, ShieldCheck, Monitor, Box } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="min-h-[750px] md:h-[85vh] w-full relative overflow-hidden bg-[#040026]">
      <style>{`
        .mySwiper .swiper-pagination-bullet {
          width: 24px;
          height: 2px;
          border-radius: 0px;
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
          margin: 0 4px !important;
          transition: all 0.4s ease;
        }
        .mySwiper .swiper-pagination-bullet-active {
          width: 48px;
          background: #ffffff;
        }
        .mySwiper .swiper-pagination {
          bottom: 175px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          width: 90% !important;
          max-width: 1000px !important;
          text-align: right !important;
          padding-right: 90px !important; /* Space for the fraction */
        }
      `}</style>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Parallax]}
        effect="fade"
        speed={1500}
        parallax={true}
        fadeEffect={{ crossFade: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        className="w-full h-full mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide className="w-full h-full relative flex items-center">
          <div className="absolute inset-0 z-0">
            <img src="/images/hero-slide-1.jpg" alt="Digital Innovation" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#040026]/70"></div>
          </div>
          <div className="max-w-[1300px] mx-auto px-6 h-full flex flex-col justify-center relative z-10 pt-16 pb-64 md:pb-72 w-full">
            <div className="max-w-4xl">
              <h1 className="text-[40px] leading-[56px] font-normal mb-6 text-white text-balance" data-swiper-parallax="-300">
                Tech Consulting & <br />
                <span className="text-[#D4AF37]">Software Solutions</span>
              </h1>
              <p className="text-[20px] leading-[34px] font-normal text-gray-300 max-w-2xl mb-10 text-balance" data-swiper-parallax="-200">
                We build enterprise software, AI-powered platforms, and scalable cloud infrastructure that transform businesses worldwide.
              </p>
              <div data-swiper-parallax="-100">
                <Link href="/contact-us" className="inline-block px-8 py-3 bg-[#D4AF37] text-white rounded font-bold transition-all hover:bg-[#0A3A7A] hover:text-white hover:shadow-lg">Get in Touch</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 (Requested BFSI Content) */}
        <SwiperSlide className="w-full h-full relative flex items-center">
          <div className="absolute inset-0 z-0">
            <img src="/images/hero-slide-2.jpg" alt="Deep Domain Solutions" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#040026]/60"></div>
          </div>
          <div className="max-w-[1300px] mx-auto px-6 h-full flex flex-col justify-center relative z-10 pt-16 pb-64 md:pb-72 w-full">
            <div className="max-w-4xl">
              <h1 className="text-[40px] leading-[56px] font-normal mb-6 text-white text-balance" data-swiper-parallax="-300">
                Deep-Domain Solutions <br />
                <span className="text-[#D4AF37]">for Every Industry</span>
              </h1>
              <p className="text-[20px] leading-[34px] font-normal text-gray-300 max-w-2xl mb-10 text-balance" data-swiper-parallax="-200">
                Delivering highly specialized, HIPAA-compliant and secure software platforms for Healthcare, Finance, Education, and Real Estate.
              </p>
              <div data-swiper-parallax="-100">
                <Link href="/contact-us" className="inline-block px-8 py-3 bg-[#D4AF37] text-white rounded font-bold transition-all hover:bg-[#0A3A7A] hover:text-white hover:shadow-lg">Explore</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="w-full h-full relative flex items-center">
          <div className="absolute inset-0 z-0">
            <img src="/images/hero-slide-3.jpg" alt="Cloud and AI" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#040026]/70"></div>
          </div>
          <div className="max-w-[1300px] mx-auto px-6 h-full flex flex-col justify-center relative z-10 pt-16 pb-64 md:pb-72 w-full">
            <div className="max-w-4xl">
              <h1 className="text-[40px] leading-[56px] font-normal mb-6 text-white text-balance" data-swiper-parallax="-300">
                Scalable Digital Products <br />
                <span className="text-[#D4AF37]">for Enterprises</span>
              </h1>
              <p className="text-[20px] leading-[34px] font-normal text-gray-300 max-w-2xl mb-10 text-balance" data-swiper-parallax="-200">
                From custom web and mobile applications to complete digital transformation, we engineer scalable solutions from idea to launch.
              </p>
              <div data-swiper-parallax="-100">
                <a href="#solutions" className="inline-block px-8 py-3 bg-[#D4AF37] text-white rounded font-bold transition-all hover:bg-[#0A3A7A] hover:text-white hover:shadow-lg">Discover More</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide className="w-full h-full relative flex items-center">
          <div className="absolute inset-0 z-0">
            <img src="/images/hero-slide-4.jpg" alt="Technical Excellence" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#040026]/70"></div>
          </div>
          <div className="max-w-[1300px] mx-auto px-6 h-full flex flex-col justify-center relative z-10 pt-16 pb-64 md:pb-72 w-full">
            <div className="max-w-4xl">
              <h1 className="text-[40px] leading-[56px] font-normal mb-6 text-white text-balance" data-swiper-parallax="-300">
                The New Age of <br />
                <span className="text-[#D4AF37]">Cloud & AI Engineering</span>
              </h1>
              <p className="text-[20px] leading-[34px] font-normal text-gray-300 max-w-2xl mb-10 text-balance" data-swiper-parallax="-200">
                Leveraging advanced LLMs, intelligent automation, and robust AWS/Azure cloud infrastructure to drive real business outcomes.
              </p>
              <div data-swiper-parallax="-100">
                <a href="#about" className="inline-block px-8 py-3 bg-[#D4AF37] text-white rounded font-bold transition-all hover:bg-[#0A3A7A] hover:text-white hover:shadow-lg">Our Journey</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Pagination Fraction */}
      <div className="absolute bottom-[165px] left-1/2 -translate-x-1/2 w-[90%] max-w-[1000px] z-20 flex justify-end items-center pointer-events-none hidden md:flex">
        <div className="text-white text-sm tracking-widest font-light mr-1 opacity-90">
          0{currentSlide + 1} / 04
        </div>
      </div>

      {/* Bottom Glassmorphic Overlay Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[1000px] z-20 hidden md:block">
        <div className="flex items-stretch h-28 bg-white/5 backdrop-blur-md overflow-hidden rounded-none border border-white/10 shadow-2xl">
          <div className="flex-1 flex flex-col items-center justify-center border-r border-white/20 cursor-pointer transition-all duration-300 hover:bg-gradient-to-t hover:from-[#00A2FF]/20 hover:to-transparent group">
            <CreditCard className="w-8 h-8 text-white group-hover:text-[#00A2FF] mb-3 stroke-1 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-125" />
            <span className="text-white group-hover:text-[#00A2FF] font-medium tracking-wide text-sm md:text-base transition-all duration-300">FinTech</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center border-r border-white/20 cursor-pointer transition-all duration-300 hover:bg-gradient-to-t hover:from-[#00A2FF]/20 hover:to-transparent group">
            <ShieldCheck className="w-8 h-8 text-white group-hover:text-[#00A2FF] mb-3 stroke-1 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-125" />
            <span className="text-white group-hover:text-[#00A2FF] font-medium tracking-wide text-sm md:text-base transition-all duration-300">InsurTech</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center border-r border-white/20 cursor-pointer transition-all duration-300 hover:bg-gradient-to-t hover:from-[#00A2FF]/20 hover:to-transparent group">
            <Monitor className="w-8 h-8 text-white group-hover:text-[#00A2FF] mb-3 stroke-1 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-125" />
            <span className="text-white group-hover:text-[#00A2FF] font-medium tracking-wide text-sm md:text-base transition-all duration-300">Digital Learning</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:bg-gradient-to-t hover:from-[#00A2FF]/20 hover:to-transparent group">
            <Box className="w-8 h-8 text-white group-hover:text-[#00A2FF] mb-3 stroke-1 transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-125" />
            <span className="text-white group-hover:text-[#00A2FF] font-medium tracking-wide text-sm md:text-base transition-all duration-300">ImmersiveTech</span>
          </div>
        </div>
      </div>
    </section>
  );
}
