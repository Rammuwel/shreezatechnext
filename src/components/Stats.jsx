"use client";
import React from 'react';

const statsData = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '5+', label: 'Years of Experience' },
  { value: '98%', label: 'Client Satisfaction' }
];

export default function Stats() {
  return (
    <section className="py-12 md:py-20 bg-white border-y border-gray-100">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-center">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-[100px] md:text-[150px] lg:text-[200px] font-black text-[#154EA1] mb-2 md:mb-4 tabular-nums tracking-tighter leading-none">{stat.value}</h3>
              <p className="text-gray-500 font-medium uppercase tracking-wider text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
