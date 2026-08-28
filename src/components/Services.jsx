"use client";
import React from 'react';
import { Users, TrendingUp, Zap, PieChart } from 'lucide-react';

const benefitsData = [
  { 
    title: 'Enhanced Customer Experience', 
    desc: 'Customer experience is the top priority for digital transformation. To keep up with tech-savvy customers, tracking, attracting, and engaging customers is critical to delivering consistent and personalized products and services.', 
    icon: <Users size={56} strokeWidth={1} /> 
  },
  { 
    title: 'Improved Operational Efficiency and Agility', 
    desc: 'Deploying the right transformation tools streamlines operational processes by automating manual tasks and integrating data across cloud platforms, resulting in increased agility and profits.', 
    icon: <TrendingUp size={56} strokeWidth={1} /> 
  },
  { 
    title: 'Scalable & Secure Architecture', 
    desc: 'A well-structured digital ecosystem enables seamless scaling and robust security adaptations, allowing enterprises to bring innovative software products to market significantly faster.', 
    icon: <Zap size={56} strokeWidth={1} /> 
  },
  { 
    title: 'Insight-Driven Decision Making', 
    desc: 'Advanced data analytics, machine learning, and AI-driven intelligence provide deep visibility into market trends and user behavior, empowering leaders to make proactive strategic moves.', 
    icon: <PieChart size={56} strokeWidth={1} /> 
  }
];

export default function Services() {
  return (
    <section id="services" className="py-10 md:py-20 lg:py-24 relative bg-[#040026] text-white">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20 max-w-4xl" data-aos="fade-up">
          <h2 className="text-[36px] md:text-[44px] leading-[1.3] font-normal text-white">
            Why Digital Transformation is a <br className="hidden md:block" /> Strategic Imperative for <span className="text-[#00A2FF]">Modern Enterprises</span>
          </h2>
        </div>

        {/* 2-Column Grid exactly like screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {benefitsData.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon with green accent */}
              <div className="mb-8 text-white relative w-fit">
                {item.icon}
                {/* Accent element (simulating the green accents from their custom SVGs) */}
                <div className="absolute top-1 right-0 w-3 h-3 bg-[#8CE57F] rounded-full translate-x-2 -translate-y-1 shadow-[0_0_8px_rgba(140,229,127,0.6)]"></div>
              </div>
              
              <h3 className="text-[24px] font-normal text-white mb-4 leading-[1.3]">
                {item.title}
              </h3>
              
              <p className="text-[#B0B3C6] text-[18px] leading-[30px] font-normal">
                {item.desc}
              </p>
              
              {/* Subtle Divider (just like the screenshot) */}
              <div className="w-[85%] h-px bg-white/10 mt-12"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
