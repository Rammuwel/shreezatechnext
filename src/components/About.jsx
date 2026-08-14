"use client";
import React, { useEffect, useState, useRef } from 'react';

const statsData = [
  { value: 200, suffix: '+', label: 'Clients' },
  { value: 8, suffix: '+', label: 'Products' },
  { value: 10, suffix: '+', label: 'Offices across India' },
  { value: 12, suffix: '+', label: 'Awards' }
];

function AnimatedCounter({ end, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let startTime;
    let animationFrame;
    const duration = 2000; // 2 seconds animation

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const updateCounter = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            
            if (progress < duration) {
              const t = progress / duration;
              const easeOutQuart = 1 - Math.pow(1 - t, 4);
              setCount(Math.floor(easeOutQuart * end));
              animationFrame = requestAnimationFrame(updateCounter);
            } else {
              setCount(end);
            }
          };
          animationFrame = requestAnimationFrame(updateCounter);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-white text-[#212529]">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        {/* Top Heading */}
        <div className="w-full mb-12" data-aos="fade-up">
          <h2 className="text-[38px] md:text-[46px] leading-[1.2] font-normal text-[#212529] max-w-5xl">
            Elevating Lenders by Sculpting <span className="text-[#459C75]">Lending Experiences</span> that Transcends Boundaries and Transforms Lives
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          <div className="lg:col-span-6 relative" data-aos="fade-right">
            {/* Slanted Image like Novac */}
            <div 
              className="relative w-full h-[350px] lg:h-[450px] overflow-hidden"
              style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 100px) 100%, 0 100%)' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Tech Team Collaboration" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center h-full pt-2 md:pt-6" data-aos="fade-left" data-aos-delay="200">
            <p className="text-[#212529] text-[20px] md:text-[22px] leading-[36px] font-normal mb-8">
              Digital transformation disrupts the fintech industry by making the sector more customer-centric and technologically relevant. With fresh perspectives in place, your financial company can gain the needed agile growth with a proven approach and dynamic experiences for sustained outcomes.
            </p>
            <p className="text-gray-700 text-[16px] md:text-[18px] leading-[30px] font-normal mb-10">
              By embracing this paradigm shift, financial companies can position themselves at the forefront, which not only enhances customer experiences but also empowers them to adapt swiftly to changing market trends and demands.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4AF37] border border-[#D4AF37] text-white font-medium hover:bg-transparent hover:text-[#0A3A7A] hover:border-[#0A3A7A] transition-all shadow-sm w-fit group">
              Partner With Us
              <svg className="w-5 h-5 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

        </div>

        {/* Stats Section integrated immediately below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="text-center px-4"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-4xl md:text-5xl font-extrabold text-[#0A3A7A] mb-2 tabular-nums">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-500 font-medium text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
