"use client";
import React from 'react';

const statsData = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '200+', label: 'Happy Clients' },
  { value: '10+', label: 'Years of Experience' },
  { value: '99%', label: 'Client Satisfaction' }
];

export default function Stats() {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-[1300px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <h3 className="text-4xl font-bold text-[#0A3A7A] mb-2">{stat.value}</h3>
              <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
