"use client";
import React from 'react';
import { Stethoscope, Landmark, GraduationCap, Building, Factory, ShoppingCart, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const solutions = [
  {
    title: 'Healthcare',
    desc: 'HIPAA-compliant health platforms, patient portals, and hospital management.',
    icon: <Stethoscope size={32} className="text-[#ffb916]" />,
    link: '/solutions/healthcare'
  },
  {
    title: 'Finance',
    desc: 'Fintech, banking & payment systems for modern financial operations.',
    icon: <Landmark size={32} className="text-[#ffb916]" />,
    link: '/solutions/finance'
  },
  {
    title: 'Education',
    desc: 'LMS, EdTech & virtual classrooms designed for global learning.',
    icon: <GraduationCap size={32} className="text-[#ffb916]" />,
    link: '/solutions/education'
  },
  {
    title: 'Real Estate',
    desc: 'PropTech, CRM & listing platforms with advanced search and lead generation.',
    icon: <Building size={32} className="text-[#ffb916]" />,
    link: '/solutions/real-estate'
  },
  {
    title: 'Manufacturing',
    desc: 'IIoT, MES & supply chain software to optimize industrial workflows.',
    icon: <Factory size={32} className="text-[#ffb916]" />,
    link: '/solutions/manufacturing'
  },
  {
    title: 'Retail & E-commerce',
    desc: 'Custom e-commerce & marketplace solutions built for massive scale.',
    icon: <ShoppingCart size={32} className="text-[#ffb916]" />,
    link: '/solutions/retail'
  }
];

export default function OurSolutions() {
  return (
    <section id="our-solutions" className="py-24 bg-[#020012] relative border-t border-white/5">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16" data-aos="fade-up">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#ffb916]/30 bg-[#ffb916]/10 text-[#ffb916] text-sm font-medium mb-4">Industry Solutions</div>
            <h2 className="text-[36px] md:text-[44px] font-light leading-[1.2] text-white">
              Tailored for <span className="font-semibold text-[#ffb916]">Your Industry</span>
            </h2>
          </div>
          <p className="text-[#B0B3C6] mt-6 md:mt-0 max-w-md text-lg">
            We deliver highly specialized software solutions engineered to address the unique challenges of your sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, idx) => (
            <Link
              href={solution.link}
              key={idx}
              className="group block bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffb916]/10 rounded-bl-full -mr-16 -mt-16 transition-transform duration-500 group-hover:scale-150 z-0 blur-xl"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <h3 className="text-[22px] font-medium text-white mb-4 group-hover:text-[#ffb916] transition-colors">
                  {solution.title}
                </h3>

                <p className="text-[#B0B3C6] leading-relaxed h-auto lg:h-16">
                  {solution.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

