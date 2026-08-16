import React from 'react';
import { ArrowRight } from 'lucide-react';

const insightsData = [
  {
    image: '/images/insights-fintech.jpg',
    date: 'Dec/11/2024',
    category: 'FinTech',
    title: 'Loan Origination Systems - A Complete Guide'
  },
  {
    image: '/images/insights-immersive.jpg',
    date: 'Dec/31/2024',
    category: 'ImmersiveTech',
    title: 'A Year in Innovation: AR, VR and MR’s Evolution in 2024 and a...'
  },
  {
    image: '/images/insights-fintech-trend.jpg',
    date: 'Feb/20/2025',
    category: 'FinTech',
    title: 'Top Digital Lending Trends to Watch in 2025'
  }
];

export default function Insights() {
  return (
    <section id="insights" className="py-24 bg-[#040026] relative">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16" data-aos="fade-up">
          <h2 className="text-[36px] md:text-[44px] font-normal text-white">
            Insights Hub
          </h2>
          <a href="#blog" className="group flex items-center gap-3 text-white font-medium hover:text-[#00A2FF] transition-colors mt-6 md:mt-0">
            View All 
            <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:border-[#00A2FF] transition-colors">
              <ArrowRight size={16} />
            </div>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insightsData.map((post, idx) => (
            <div 
              key={idx} 
              className="group cursor-pointer flex flex-col"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              {/* Image Container */}
              <div className="relative w-full h-[240px] overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#040026]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Event Badge */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[#212529] text-sm font-medium shadow-md">
                  Event
                </div>
              </div>

              {/* Meta data */}
              <div className="flex items-center gap-4 text-[#B0B3C6] text-[15px] font-normal mb-4">
                <span>{post.date}</span>
                <span className="font-medium text-white">{post.category}</span>
              </div>

              {/* Title */}
              <h3 className="text-[22px] leading-[32px] font-normal text-white mb-6 group-hover:text-[#00A2FF] transition-colors">
                {post.title}
              </h3>

              {/* Bottom Border line */}
              <div className="w-full h-px bg-white/10 mt-auto"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
