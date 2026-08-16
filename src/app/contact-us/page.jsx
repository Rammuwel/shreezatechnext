"use client";
import React from 'react';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#081229] font-sans overflow-x-hidden pt-[80px]">
      {/* Hero Section */}
      <section className="h-[40vh] min-h-[300px] w-full relative overflow-hidden bg-[#081229] flex items-center border-b border-[#ffffff10]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop" alt="Contact Us Hero" className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040026] via-[#040026]/95 to-transparent"></div>
        </div>
        
        <div className="max-w-[1300px] mx-auto px-6 h-full flex flex-col justify-center relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium mb-6">Get In Touch</div>
            <h1 className="text-[48px] md:text-[64px] leading-[1.1] font-light mb-6 text-white tracking-tight">
              Let's build the <br />
              <span className="text-[#D4AF37] font-semibold">future together.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative z-30 bg-gray-50 py-24 md:py-32">
         <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
               
               {/* Contact Information */}
               <div className="w-full lg:w-[40%] flex flex-col gap-12">
                  <div>
                     <h2 className="text-[32px] md:text-[40px] font-light leading-[1.2] text-[#0A3A7A] mb-4">
                        We're here to help you <span className="font-semibold text-[#111]">innovate.</span>
                     </h2>
                     <p className="text-[16px] leading-[1.8] font-light text-gray-600">
                        Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                     </p>
                  </div>

                  <div className="flex flex-col gap-8 mt-4">
                     <div className="flex items-start gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100 group-hover:border-[#D4AF37]/50 group-hover:scale-110 transition-all duration-300">
                           <svg className="w-6 h-6 text-[#0A3A7A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <div>
                           <h4 className="text-[14px] text-gray-500 mb-1 tracking-wider uppercase font-medium">Email Us</h4>
                           <a href="mailto:contact@shreezatech.com" className="text-[18px] text-[#111] hover:text-[#0A3A7A] transition-colors font-medium">contact@shreezatech.com</a>
                        </div>
                     </div>
                     
                     <div className="flex items-start gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100 group-hover:border-[#D4AF37]/50 group-hover:scale-110 transition-all duration-300">
                           <svg className="w-6 h-6 text-[#0A3A7A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        </div>
                        <div>
                           <h4 className="text-[14px] text-gray-500 mb-1 tracking-wider uppercase font-medium">Call Us</h4>
                           <a href="tel:+910000000000" className="text-[18px] text-[#111] hover:text-[#0A3A7A] transition-colors font-medium">+91 0000 000 000</a>
                        </div>
                     </div>

                     <div className="flex items-start gap-6 group">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100 group-hover:border-[#D4AF37]/50 group-hover:scale-110 transition-all duration-300">
                           <svg className="w-6 h-6 text-[#0A3A7A]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <div>
                           <h4 className="text-[14px] text-gray-500 mb-1 tracking-wider uppercase font-medium">Visit Us</h4>
                           <p className="text-[18px] text-[#111] font-medium leading-[1.4]">
                              Technology Park, Phase II <br/>
                              Digital City, 500081
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Contact Form */}
               <div className="w-full lg:w-[60%]">
                  <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 md:p-14 border border-gray-100">
                     <h3 className="text-[24px] text-[#111] font-medium mb-8">Send us a message</h3>
                     <form className="flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="relative group">
                              <input type="text" id="fname" className="peer w-full bg-transparent border-b-2 border-gray-200 text-gray-900 py-3 focus:outline-none focus:border-[#0A3A7A] transition-colors placeholder-transparent" placeholder="First Name" required />
                              <label htmlFor="fname" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#0A3A7A]">First Name *</label>
                           </div>
                           <div className="relative group">
                              <input type="text" id="lname" className="peer w-full bg-transparent border-b-2 border-gray-200 text-gray-900 py-3 focus:outline-none focus:border-[#0A3A7A] transition-colors placeholder-transparent" placeholder="Last Name" required />
                              <label htmlFor="lname" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#0A3A7A]">Last Name *</label>
                           </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="relative group">
                              <input type="email" id="email" className="peer w-full bg-transparent border-b-2 border-gray-200 text-gray-900 py-3 focus:outline-none focus:border-[#0A3A7A] transition-colors placeholder-transparent" placeholder="Email" required />
                              <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#0A3A7A]">Work Email *</label>
                           </div>
                           <div className="relative group">
                              <input type="text" id="company" className="peer w-full bg-transparent border-b-2 border-gray-200 text-gray-900 py-3 focus:outline-none focus:border-[#0A3A7A] transition-colors placeholder-transparent" placeholder="Company Name" />
                              <label htmlFor="company" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#0A3A7A]">Company Name</label>
                           </div>
                        </div>
                        
                        <div className="relative group mt-4">
                           <textarea id="message" rows="5" className="peer w-full bg-transparent border-b-2 border-gray-200 text-gray-900 py-3 focus:outline-none focus:border-[#0A3A7A] transition-colors resize-none placeholder-transparent" placeholder="Message" required></textarea>
                           <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#0A3A7A]">How can we help? *</label>
                        </div>
                        
                        <div className="pt-6">
                           <button type="button" className="inline-flex items-center justify-center gap-2 px-12 py-4 bg-[#0A3A7A] hover:bg-[#D4AF37] text-white font-medium rounded-lg transition-colors duration-300 shadow-lg w-full md:w-auto">
                              Submit Inquiry
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Global Locations Map Placeholder */}
      <section className="relative z-30 bg-[#040026] py-24 border-t border-white/5">
         <div className="max-w-[1300px] mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-[32px] md:text-[40px] font-light leading-[1.2] text-white mb-4">
               Our <span className="font-semibold text-[#D4AF37]">Global Presence</span>
            </h2>
            <p className="text-[16px] text-gray-400 font-light leading-[1.6] max-w-2xl mx-auto mb-16">
               Delivering excellence across borders. We have strategically located offices to serve our clients worldwide.
            </p>
            
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" alt="Global Map" className="w-full h-full object-cover opacity-60" />
               <div className="absolute inset-0 bg-[#0A3A7A]/30 mix-blend-multiply"></div>
               
               {/* Location Pins Placeholder */}
               <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-[#D4AF37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)] animate-pulse"></div>
               <div className="absolute top-1/2 left-2/3 w-4 h-4 bg-[#D4AF37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
               <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#D4AF37] rounded-full shadow-[0_0_15px_rgba(212,175,55,0.8)] animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
         </div>
      </section>
    </div>
  );
}
