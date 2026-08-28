"use client";

import { useState } from 'react';
import PageTemplate from '../../components/PageTemplate';

const annualReports = [
  {
    title: "FY 2024 - 2025",
    pdfUrl: "https://cdn.novactech.com/uploads/AB_6739618l_Signed_pdf_b7e19bbc1a.pdf"
  },
  {
    title: "FY 2023 - 2024",
    pdfUrl: "https://uatcdn.novactech.com/uploads/Form_MGT_7_2023_2024_0a33562773.pdf"
  },
  {
    title: "FY 2022 - 2023",
    pdfUrl: "https://cdn.novactech.com/uploads/Form_MGT_7_2022_2023_0a673d7beb.pdf"
  }
];

export default function AnnualReportsPage() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <PageTemplate title="Annual Reports">
      <section className="py-10 md:py-20 lg:py-24 bg-white min-h-[70vh]">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
          
          <h1 className="text-3xl md:text-4xl md:text-5xl font-light text-center text-black mb-16">
            Annual Reports
          </h1>
          
          <div className="flex flex-col gap-4">
            {annualReports.map((report, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                >
                  <span className="text-xl md:text-2xl font-light text-black group-hover:text-blue-600 transition-colors">
                    {report.title}
                  </span>
                  <span className="text-gray-400 shrink-0 ml-4">
                    <svg 
                      className={`w-6 h-6 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <a 
                    href={report.pdfUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-[#f89520] font-medium hover:text-[#e0861c] inline-block"
                  >
                    View & Download
                  </a>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </PageTemplate>
  );
}
