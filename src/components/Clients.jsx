import React from 'react';

const clients = [
  'GLOBAL BANK', 'FINCORP', 'EDU SPHERE', 'TECH INNOVATORS',
  'HEALTH PLUS', 'ESTATE PRO', 'NEXUS RETAIL', 'CLOUD NINE',
  'LOGIC SYSTEMS', 'DATA CORE', 'CYBER NET', 'FUTURE AI'
];

export default function Clients() {
  return (
    <section id="portfolio" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1300px] mx-auto px-6 text-center">
        <h2 className="text-[40px] leading-[56px] font-normal mb-6 text-[#212529]">
          Journeying <span className="text-[#0A3A7A]">Together</span>
        </h2>
        <p className="text-gray-500 text-[20px] leading-[34px] font-normal max-w-2xl mx-auto mb-16">
          Discover our varied client base, showcasing our prowess in delivering customized products &amp; solutions across industries. Experience excellence in every partnership.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {clients.map((client, idx) => (
            <div 
              key={idx} 
              className="w-full h-24 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center grayscale hover:grayscale-0 hover:border-[#D4AF37]/30 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={(idx % 6) * 50}
            >
              <span className="font-bold text-gray-400 tracking-wider text-xs md:text-sm text-center px-2">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
