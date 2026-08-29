"use client";

import { useState } from 'react';
import PageTemplate from '../../components/PageTemplate';

const locationsData = {
  Chennai: [
    {
      title: "Corporate Office",
      address: "“The Pavilion”, New # 10,13 & 100, Abiramapuram 4th Street, TTK Road, Alwarpet, Chennai, Tamil Nadu - 600018.\n044 4291 3000 , info@novactech.com",
      mapLink: "https://goo.gl/maps/opfDKSfegfohhFTz8"
    },
    {
      title: "Digital Learning and Immersive Solutions",
      address: "No 38, Industrial Estate, Perungudi, Chennai, Tamil Nadu - 600 096.",
      mapLink: "https://maps.app.goo.gl/2bn5UJGtVH81WPgN9"
    },
    {
      title: "Global Delivery Center - I",
      address: "Office 275, 'Statesman One' Ramakrishna Mutt Road, Mylapore, Chennai, Tamil Nadu - 600 004.",
      mapLink: "https://goo.gl/maps/SJtzVdUZU741UsGRA"
    },
    {
      title: "Global Delivery Center - II",
      address: "#51/24, Floor I, Chaitanya “EXOTICA”, Venkatanarayana Road, T Nagar, Chennai, Tamil Nadu - 600 017",
      mapLink: "https://www.google.com/maps/place/..."
    },
    {
      title: "Global Delivery Center - III",
      address: "New No:26, Old No:45, KB Dasan Rd, Seetammal Colony, MIG Colony, Teynampet, Chennai, Tamil Nadu - 600018",
      mapLink: "https://goo.gl/maps/9mxLowbMu5QiSBBHA"
    },
    {
      title: "Digital Services Unit",
      address: "#2, Floor II, Developed Industrial Estate, Perungudi, Chennai - 600 096.",
      mapLink: "https://maps.app.goo.gl/2bn5UJGtVH81WPgN9"
    },
    {
      title: "Regional Processing Center",
      address: "#51/24, Floor I, Chaitanya “EXOTICA”, Venkatanarayana Road, T Nagar, Chennai, Tamil Nadu - 600 017.",
      mapLink: "https://goo.gl/maps/K224zJTe3gCc6Vqq9"
    }
  ],
  Mumbai: [
    {
      title: "Regional Processing Center",
      address: "#104, Floor I, Rupa Solitaire, Millennium Business Park(MBP), Mahape, Navi Mumbai - 400 710.",
      mapLink: "https://goo.gl/maps/UqxfuXLE2pEVXroD6"
    },
    {
      title: "Digital Services Unit",
      address: "B-1506, Level 15, Rupa Solitaire, Millenium Business Park (MBP), Mahape, Navi Mumbai - 400 709.",
      mapLink: "https://goo.gl/maps/xyKPtKeShYWEFB7u9"
    }
  ],
  Dubai: [
    {
      title: "Novac Technology FZCO",
      address: "IFZA Business Park, Dubai Silicon Oasis, DDP, Building A1, Dubai - United Arab Emirates",
      mapLink: "https://www.google.com/maps/..."
    },
    {
      title: "Novac GT , (Gibraltar Technologies LLC)",
      address: "Office#3505, The Citadel Tower, Marasi Drive, Business Bay, Dubai - United Arab Emirates",
      mapLink: "https://goo.gl/maps/smWVQUM16Nu1QesMA"
    }
  ]
};

export default function LocateUsPage() {
  const [activeTab, setActiveTab] = useState("Chennai");

  return (
    <PageTemplate title="Locate Us">
      {/* Hero Banner */}
      <section className="relative w-full h-[500px] flex items-center bg-[#13072e] overflow-hidden">
        {/* Background Glowing Globe Placeholder */}
        <div className="absolute top-0 right-0 w-[800px] h-full opacity-30 pointer-events-none">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] mix-blend-screen"></div>
          {/* A wireframe globe could go here via an img tag, using a placeholder for now */}
          <img src="/images/digital_learning_hero_1787090023062.jpg" alt="Globe" className="w-full h-full object-cover mix-blend-screen opacity-50" />
        </div>
        
        <div className="max-w-[1300px] w-full mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="text-3xl md:text-4xl md:text-6xl font-light text-white mb-4 leading-tight">
            <span className="text-[#3b82f6]">Navigating</span> Our <br/> Presence
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-xl">
            Discover Novac's footprint across India and the Middle East.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-[1300px] mx-auto px-6 lg:px-12 py-6 border-b border-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          <span>›</span>
          <span className="text-gray-900">Locate Us</span>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-10 md:py-20 lg:py-24 bg-white relative">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-16 overflow-x-auto hide-scrollbar">
            {Object.keys(locationsData).map((city) => (
              <button
                key={city}
                onClick={() => setActiveTab(city)}
                className={`px-8 py-4 text-xl md:text-2xl font-light whitespace-nowrap transition-all ${
                  activeTab === city 
                    ? 'text-black border-b-4 border-black' 
                    : 'text-gray-400 hover:text-gray-700 border-b-4 border-transparent'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationsData[activeTab].map((loc, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow group flex flex-col h-full">
                <h3 className="text-[20px] font-medium text-black mb-4 leading-snug">
                  {loc.title.split(' - ').map((part, i) => (
                    <span key={i}>
                      {part}
                      {i < loc.title.split(' - ').length - 1 && <><br/> - </>}
                    </span>
                  ))}
                </h3>
                
                <p className="text-[15px] text-gray-500 leading-relaxed font-light mb-8 flex-grow whitespace-pre-line">
                  {loc.address}
                </p>
                
                <a 
                  href={loc.mapLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-[#f89520] font-medium text-[15px] group-hover:text-[#e0861c] transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  View Map
                </a>
              </div>
            ))}
          </div>

        </div>
        
        {/* Bottom Background Decoration */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none z-0"></div>
      </section>
    </PageTemplate>
  );
}
