"use client";
import React from 'react';
import { Code, Smartphone, Bot, PenTool, Wifi, Cpu, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    title: 'Web Development',
    desc: 'Building scalable, secure, and modern web applications tailored to your business needs.',
    icon: <Code size={32} className="text-[#00A2FF]" />,
    link: '/services/web-development'
  },
  {
    title: 'Mobile App Development',
    desc: 'Creating intuitive and high-performance native and cross-platform mobile experiences.',
    icon: <Smartphone size={32} className="text-[#00A2FF]" />,
    link: '/services/mobile-app-development'
  },
  {
    title: 'AI & Automation',
    desc: 'Streamlining operations with intelligent automation and AI-driven data insights.',
    icon: <Bot size={32} className="text-[#00A2FF]" />,
    link: '/services/ai-and-automation'
  },
  {
    title: 'UX/UI Design',
    desc: 'Designing user-centric, aesthetically pleasing, and highly functional digital interfaces.',
    icon: <PenTool size={32} className="text-[#00A2FF]" />,
    link: '/services/ux-ui-design'
  },
  {
    title: 'IoT Solutions',
    desc: 'Connecting devices and enterprise systems for smarter, data-driven environments.',
    icon: <Wifi size={32} className="text-[#00A2FF]" />,
    link: '/services/iot'
  },
  {
    title: 'Robotics',
    desc: 'Advanced robotic systems and RPA to automate complex physical and digital tasks.',
    icon: <Cpu size={32} className="text-[#00A2FF]" />,
    link: '/services/robotics'
  }
];

export default function OurServices() {
  return (
    <section id="our-services" className="py-10 md:py-20 lg:py-24 bg-gray-50 relative">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[22px] md:text-[44px] font-light leading-[1.2] text-[#111]">
            Comprehensive <span className="font-semibold text-[#0A3A7A]">Services</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Delivering robust digital solutions to transform your business and drive scalable growth in the modern era.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150 z-0"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#040026] rounded-2xl flex items-center justify-center mb-8 shadow-md transform group-hover:-translate-y-2 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-[22px] font-medium text-[#111] mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8 h-auto lg:h-16">
                  {service.desc}
                </p>
                
                <Link href={service.link} className="inline-flex items-center gap-2 text-[#0A3A7A] font-semibold hover:text-[#00A2FF] transition-colors mt-auto pt-4">
                  Explore Service
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
