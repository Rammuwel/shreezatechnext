import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Contact({ title, subtitle }) {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-4 flex flex-col pt-0 lg:pt-8" data-aos="fade-right">
            <h2 className="text-[36px] md:text-[44px] leading-[1.25] font-normal text-[#212529] mb-6">
              {title || (
                <>
                  Technology to <br />
                  Redefine Lending !
                </>
              )}
            </h2>
            
            <p className="text-[#212529] text-[18px] md:text-[20px] leading-[34px] font-normal">
              {subtitle || "Let's make things happen! Drop us a line, and we'll reach out to you promptly"}
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-8" data-aos="fade-left">
            <form className="flex flex-col gap-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full bg-[#EEEEEE] border-none outline-none px-6 py-4 text-gray-700 placeholder-gray-400"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full bg-[#EEEEEE] border-none outline-none px-6 py-4 text-gray-700 placeholder-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex bg-[#EEEEEE]">
                  <div className="px-4 py-4 border-r border-[#DDDDDD] text-gray-600 flex items-center justify-center bg-[#E5E5E5] cursor-pointer">
                    +91 <span className="ml-1 text-[10px]">▼</span>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="Phone No" 
                    className="w-full bg-transparent border-none outline-none px-4 py-4 text-gray-700 placeholder-gray-400"
                  />
                </div>
                <input 
                  type="email" 
                  placeholder="Business Email" 
                  className="w-full bg-[#EEEEEE] border-none outline-none px-6 py-4 text-gray-700 placeholder-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="Job Title" 
                  className="w-full bg-[#EEEEEE] border-none outline-none px-6 py-4 text-gray-700 placeholder-gray-400"
                />
                <input 
                  type="text" 
                  placeholder="Company Name" 
                  className="w-full bg-[#EEEEEE] border-none outline-none px-6 py-4 text-gray-700 placeholder-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="Company Website" 
                  className="w-full bg-[#EEEEEE] border-none outline-none px-6 py-4 text-gray-700 placeholder-gray-400"
                />
                <input 
                  type="text" 
                  placeholder="City" 
                  className="w-full bg-[#EEEEEE] border-none outline-none px-6 py-4 text-gray-700 placeholder-gray-400"
                />
              </div>

              <div className="relative">
                <select 
                  defaultValue=""
                  className="w-full bg-[#EEEEEE] border-none outline-none px-6 py-4 text-gray-400 appearance-none cursor-pointer"
                >
                  <option value="" disabled>Lending Solutions</option>
                  <option value="retail">Retail Lending</option>
                  <option value="nbfc">NBFC Solutions</option>
                  <option value="microfinance">Microfinance</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-6 pointer-events-none text-gray-500">
                  <ChevronDown size={20} strokeWidth={1.5} />
                </div>
              </div>

              <textarea 
                placeholder="Message" 
                rows="4"
                className="w-full bg-[#EEEEEE] border-none outline-none px-6 py-4 text-gray-700 placeholder-gray-400 resize-none"
              ></textarea>
              
              <div className="flex justify-end mt-4">
                <button type="button" className="px-10 py-3.5 bg-[#F97316] border border-[#F97316] hover:bg-transparent hover:text-[#2F65E0] hover:border-[#2F65E0] text-white font-medium transition-all rounded shadow-sm">
                  Submit
                </button>
              </div>

            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
