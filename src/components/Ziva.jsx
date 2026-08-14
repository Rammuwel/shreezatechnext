import React from 'react';
import { Inbox, Home, TrendingUp, Shield } from 'lucide-react';

const cardData = [
  { title: 'NBFCs', icon: <Inbox size={32} strokeWidth={1.5} /> },
  { title: 'Retail Lenders', icon: <Home size={32} strokeWidth={1.5} /> },
  { title: 'Microfinance', icon: <TrendingUp size={32} strokeWidth={1.5} /> },
  { title: 'Credit Unions', icon: <Shield size={32} strokeWidth={1.5} /> },
];

export default function Insights() {
  return (
    <section id="ziva" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        
        {/* Top Button */}
        <div className="flex justify-center md:justify-end mb-16" data-aos="fade-left">
          <a href="#know-more" className="px-8 py-3 bg-gradient-to-r from-[#A5A23C] to-[#459C75] text-white font-medium rounded hover:shadow-lg transition-all">
            Know more
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Content */}
          <div className="flex flex-col pt-0 md:pt-12" data-aos="fade-right">
            <h3 className="text-[28px] md:text-[32px] font-normal text-[#459C75] mb-2">
              Shreezatech Ziva®
            </h3>
            <h2 className="text-[36px] md:text-[44px] leading-[1.25] font-normal text-[#212529] mb-8">
              Digital Lending Software
            </h2>
            
            <p className="text-gray-700 text-[16px] md:text-[18px] leading-[30px] font-normal">
              Shreezatech ZIVA® is a cloud lending management software with a complete suite of modules backed with state-of-the-art technology. As a next-gen digital lending platform, ZIVA® is intuitively designed to cater to the requirements of lending businesses of all sizes across various spectrums, including NBFCs, Retail Lenders, and more.
            </p>
          </div>

          {/* Right Side: Staggered Cards */}
          <div className="relative w-full" data-aos="fade-left" data-aos-delay="200">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              
              {/* Column 1 (Normal) */}
              <div className="flex flex-col gap-4 md:gap-6">
                <div className="border border-[#4DB6AC] rounded-2xl p-6 md:p-8 bg-white h-[200px] md:h-[240px] flex flex-col justify-between hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="flex justify-end text-[#212529] group-hover:text-[#459C75] transition-colors">
                    {cardData[0].icon}
                  </div>
                  <h4 className="text-[18px] md:text-[22px] font-normal text-[#212529]">
                    {cardData[0].title}
                  </h4>
                </div>
                
                <div className="border border-[#4DB6AC] rounded-2xl p-6 md:p-8 bg-white h-[200px] md:h-[240px] flex flex-col justify-between hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="flex justify-end text-[#212529] group-hover:text-[#459C75] transition-colors">
                    {cardData[2].icon}
                  </div>
                  <h4 className="text-[18px] md:text-[22px] font-normal text-[#212529]">
                    {cardData[2].title}
                  </h4>
                </div>
              </div>

              {/* Column 2 (Shifted down for staggered look) */}
              <div className="flex flex-col gap-4 md:gap-6 mt-8 md:mt-16">
                <div className="border border-[#4DB6AC] rounded-2xl p-6 md:p-8 bg-white h-[200px] md:h-[240px] flex flex-col justify-between hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="flex justify-end text-[#212529] group-hover:text-[#459C75] transition-colors">
                    {cardData[1].icon}
                  </div>
                  <h4 className="text-[18px] md:text-[22px] font-normal text-[#212529]">
                    {cardData[1].title}
                  </h4>
                </div>
                
                <div className="border border-[#4DB6AC] rounded-2xl p-6 md:p-8 bg-white h-[200px] md:h-[240px] flex flex-col justify-between hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="flex justify-end text-[#212529] group-hover:text-[#459C75] transition-colors">
                    {cardData[3].icon}
                  </div>
                  <h4 className="text-[18px] md:text-[22px] font-normal text-[#212529]">
                    {cardData[3].title}
                  </h4>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
