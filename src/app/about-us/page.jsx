"use client";
import React from 'react';

export default function AboutUsPage() {
   return (
      <div className="min-h-screen bg-[#081229] font-sans overflow-x-hidden">
         {/* Hero Section */}
         <section className="h-[50vh] min-h-[400px] w-full relative overflow-hidden bg-[#081229] flex items-center border-b border-[#ffffff10]">
            <div className="absolute inset-0 z-0">
               <img src="/images/about-hero.jpg" alt="About Us Hero" className="w-full h-full object-cover opacity-20 grayscale" />
               <div className="absolute inset-0 bg-gradient-to-r from-[#040026] via-[#040026]/95 to-transparent"></div>
            </div>

            <div className="max-w-[1300px] mx-auto px-6 h-full flex flex-col justify-center relative z-10 w-full">
               <div className="max-w-4xl">
                  <div className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium mb-6">About Our Company</div>
                  <h1 className="text-[48px] md:text-[64px] leading-[1.1] font-light mb-6 text-white tracking-tight">
                     Scale up to New Heights <br />
                     <span className="text-[#D4AF37] font-semibold">with Shreeza Tech</span>
                  </h1>
                  <p className="text-[18px] md:text-[20px] text-gray-400 max-w-2xl leading-[1.6] font-light">
                     We are pioneers in technology and digital transformation, empowering enterprises to seamlessly embrace the future.
                  </p>
               </div>
            </div>
         </section>

         {/* Introduction & Industries Section */}
         <section className="relative z-30 bg-white py-24 md:py-32">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

               <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24">
                  <div className="w-full lg:w-[45%]">
                     <h2 className="text-[36px] md:text-[48px] font-light leading-[1.2] text-[#0A3A7A] tracking-tight">
                        Building Solutions<br />
                        <span className="font-semibold text-[#111]">for the Future.</span>
                     </h2>
                  </div>

                  <div className="w-full lg:w-[55%] flex flex-col gap-8 text-[#333]">
                     <p className="text-[20px] md:text-[24px] font-light leading-[1.6] text-[#111]">
                        Welcome to <span className="font-medium">Shreeza Tech</span>, a leader in software engineering and digital transformation.
                     </p>
                     <p className="text-[16px] leading-[1.8] font-light text-gray-600">
                        We are driven by a passion for excellence, enabling us to deliver cutting-edge solutions across diverse industries. Our expertise spans Financial Services, Insurance, Digital Learning, and Immersive Technology, empowering businesses to lead their digital transformation journey.
                     </p>
                     <p className="text-[16px] leading-[1.8] font-light text-gray-600">
                        Guided by an unwavering commitment to quality, we harness emerging technologies to help our clients optimize costs and secure competitive advantages. Our offerings are characterized by efficiency, integrity, and a forward-looking perspective, poised to tackle the challenges of tomorrow.
                     </p>
                  </div>
               </div>

               {/* Minimal Industries Grid */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                     { name: 'FinTech', icon: <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg> },
                     { name: 'InsurTech', icon: <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
                     { name: 'Digital Learning', icon: <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
                     { name: 'Immersive Tech', icon: <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /></svg> }
                  ].map((item, idx) => (
                     <div key={idx} className="p-8 border border-gray-100 rounded-2xl bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col items-start justify-between h-40">
                        <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                           {item.icon}
                        </div>
                        <span className="text-[16px] text-[#111] font-medium tracking-wide">{item.name}</span>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Values Section (Formerly Mantra) */}
         <section className="relative z-30 bg-[#040026] py-24 md:py-32">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
               <div className="text-center mb-20 max-w-3xl mx-auto">
                  <h2 className="text-[36px] md:text-[48px] font-light text-white leading-[1.2] mb-6">
                     Our <span className="text-[#D4AF37] font-semibold">Mantra & Promise</span>
                  </h2>
                  <p className="text-[16px] md:text-[18px] text-gray-400 font-light leading-[1.8]">
                     At Shreeza Tech, we leverage design, engineering, and cloud technology to create enterprise solutions primed for the future.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                     { title: "Customer First", text: "Prioritize customer experience with discipline, exceeding expectations effortlessly.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
                     { title: "Ardent Pursuits", text: "We go the extra mile to strive for excellence and have fun in what we do.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                     { title: "Employee Primus", text: "We take care of our employees, who are the pillars of strength that the company is built on.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
                     { title: "Unyielding Integrity", text: "We are consistent, honest, and fair to maintain ethics across all our services.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
                     { title: "Constant Innovation", text: "We strive to make our mark in cloud technology and continually look to improve ourselves.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
                     { title: "Disciplined Wisdom", text: "Responsibility is in our DNA. We deliver on all commitments honoring our discipline.", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> }
                  ].map((item, idx) => (
                     <div key={idx} className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col h-full group">
                        <div className="w-12 h-12 rounded-full bg-[#0A3A7A] text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(10,58,122,0.5)]">
                           {item.icon}
                        </div>
                        <h4 className="text-[20px] font-medium text-white mb-3 tracking-wide">{item.title}</h4>
                        <p className="text-[15px] leading-[1.7] font-light text-gray-400">
                           {item.text}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Diversity Section */}
         <section className="relative z-30 bg-gray-50 py-24 md:py-32">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
               <div className="flex flex-col lg:flex-row gap-16 items-center">
                  <div className="w-full lg:w-1/2">
                     <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img
                           src="/images/about-diversity.jpg"
                           alt="Diversity and Inclusivity"
                           className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-[#0A3A7A]/10 mix-blend-multiply"></div>
                     </div>
                  </div>

                  <div className="w-full lg:w-1/2 flex flex-col gap-6">
                     <div className="inline-block px-4 py-1.5 rounded-full border border-[#0A3A7A]/30 bg-[#0A3A7A]/5 text-[#0A3A7A] text-sm font-medium w-fit mb-2">Our Culture</div>
                     <h2 className="text-[32px] md:text-[44px] font-light leading-[1.2] text-[#111]">
                        Fostering Inclusivity <br />
                        <span className="font-semibold text-[#0A3A7A]">and Diversity.</span>
                     </h2>
                     <p className="text-[18px] font-light leading-[1.6] text-gray-700 mt-2">
                        At Shreeza Tech, we are committed to creating an inclusive work culture that supports all voices, values, and thoughts.
                     </p>
                     <p className="text-[16px] leading-[1.8] font-light text-gray-600">
                        We believe that a diverse workforce fosters creativity, innovation, and productivity. We actively recruit talent from all backgrounds and strive to create a safe and supportive environment for all employees.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Minds Behind Shreeza Section */}
         <section className="relative z-30 bg-[#040026] py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
               <div className="text-center mb-16 max-w-3xl mx-auto">
                  <div className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium w-fit mb-6">Leadership</div>
                  <h2 className="text-[32px] md:text-[44px] font-light leading-[1.2] text-white">
                     The Minds Behind <br />
                     <span className="font-semibold text-[#D4AF37]">Shreeza Tech</span>
                  </h2>
                  <p className="text-[18px] font-light leading-[1.6] text-gray-300 mt-6">
                     Visionary leadership driving digital transformation and technological excellence across industries.
                  </p>
               </div>

               {/* Featured MD & CEO */}
               <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center bg-white/5 border border-white/10 p-8 lg:p-12 rounded-3xl mb-24 max-w-5xl mx-auto">
                  <div className="w-full lg:w-2/5">
                     <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-[350px] mx-auto">
                        <img
                           src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=800&q=80"
                           alt="N.S. Nanda Kishore"
                           className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#040026] via-transparent to-transparent opacity-80"></div>
                     </div>
                  </div>
                  <div className="w-full lg:w-3/5 flex flex-col justify-center text-center lg:text-left">
                     <h3 className="text-[32px] md:text-[40px] text-white font-medium mb-2">N.S. Nanda Kishore</h3>
                     <p className="text-[#D4AF37] text-[16px] lg:text-[18px] font-medium tracking-wide uppercase mb-6">Managing Director &amp; Chief Executive Officer</p>

                     <div className="text-[16px] leading-[1.8] font-light text-gray-300 space-y-4">
                        <p>
                           Nanda Kishore plays a pivotal role in guiding the company's mission to empower businesses to transform their technology models.
                        </p>
                        <p>
                           A graduate in Electronics and Communications Engineering from Osmania University, he progressed from an Executive Trainee to CTO at Shriram Group, where he led various technology initiatives, including software applications, IT infrastructure, data centres, disaster recovery, and information security.
                        </p>
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
                  {/* Founder */}
                  <div className="flex flex-col items-center group">
                     <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-[350px] aspect-[4/5] mb-8">
                        <img
                           src="/images/founder.jpg"
                           alt="Ram M"
                           className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#040026] via-transparent to-transparent opacity-80"></div>
                     </div>
                     <h3 className="text-[28px] text-white font-medium mb-2">Ram Muwel</h3>
                     <p className="text-[#D4AF37] text-[16px] font-medium tracking-wide uppercase mb-4">Founder &amp; CEO</p>
                     <p className="text-center text-gray-400 font-light leading-[1.7] max-w-sm">
                        "Our goal has always been to build solutions that not only solve today's challenges but are scalable enough to embrace tomorrow's innovations."
                     </p>
                  </div>

                  {/* Co-founder & CTO */}
                  <div className="flex flex-col items-center group">
                     <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full max-w-[350px] aspect-[4/5] mb-8">
                        <img
                           src="/images/lokendra.webp"
                           alt="Lokendra Jatav"
                           className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#040026] via-transparent to-transparent opacity-80"></div>
                     </div>
                     <h3 className="text-[28px] text-white font-medium mb-2">Lokendra Jatav</h3>
                     <p className="text-[#D4AF37] text-[16px] font-medium tracking-wide uppercase mb-4">Co-founder &amp; CTO</p>
                     <p className="text-center text-gray-400 font-light leading-[1.7] max-w-sm">
                        "We harness emerging technologies and engineering excellence to empower businesses to lead their digital transformation journey."
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* Logos and Awards Combined Grid Section */}
         <section className="relative z-30 bg-white py-24 md:py-32 border-t border-gray-100">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
               <div className="text-center mb-16 max-w-3xl mx-auto">
                  <h2 className="text-[32px] md:text-[40px] font-light leading-[1.2] text-[#111] mb-4">
                     Journeying <span className="font-semibold text-[#0A3A7A]">Together</span>
                  </h2>
                  <p className="text-[16px] text-gray-500 font-light leading-[1.6]">
                     Trusted by industry leaders and recognized globally for excellence in digital transformation.
                  </p>
               </div>

               {/* Minimal Client Logo Grid */}
               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 items-center justify-items-center opacity-70">
                  {[
                     "https://cdn.novactech.com/uploads/clientclr1_6b794d9dc2.png",
                     "https://cdn.novactech.com/uploads/clientclr2_0e67bc066c.png",
                     "https://cdn.novactech.com/uploads/clientclr3_e00c8dd39c.png",
                     "https://cdn.novactech.com/uploads/clientclr4_83917b0c51.png",
                     "https://cdn.novactech.com/uploads/clientclr5_4899e4139d.png",
                     "https://cdn.novactech.com/uploads/clientclr6_21a8318120.png",
                     "https://cdn.novactech.com/uploads/clientclr8_ee54ae9aff.png",
                     "https://cdn.novactech.com/uploads/clientclr9_bb9bba28cb.png",
                     "https://cdn.novactech.com/uploads/clientclr10_73dcd30e24.png",
                     "https://cdn.novactech.com/uploads/clientclr13_de649fa49f.png",
                     "https://cdn.novactech.com/uploads/clientclr15_390e0673c4.png",
                     "https://cdn.novactech.com/uploads/clientclr21_928a86d132.png"
                  ].map((img, idx) => (
                     <div key={idx} className="w-full max-w-[120px] h-16 relative grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer hover:scale-110">
                        <img src={img} alt="Client Logo" className="w-full h-full object-contain" />
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Careers Section */}
         <section className="relative z-30 bg-[#040026] py-24 md:py-32 overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-16">
               <div className="w-full md:w-1/2">
                  <div className="inline-block px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-sm font-medium mb-6">Careers</div>
                  <h2 className="text-[36px] md:text-[56px] font-light text-white mb-6 leading-[1.1]">
                     Become a <span className="font-semibold text-[#D4AF37]">Shreezan</span>
                  </h2>
                  <p className="text-[18px] text-gray-400 font-light leading-[1.8] mb-10 max-w-lg">
                     Are you someone who revels in doing the unexpected and extraordinary? Join us in our journey to innovate, create, and make a lasting global impact.
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4AF37] text-white hover:bg-[#0A3A7A] hover:text-white font-medium rounded-lg transition-colors shadow-lg">
                     Explore Opportunities
                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
               </div>

               <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 h-[500px]">
                  <div className="rounded-2xl overflow-hidden shadow-2xl h-full translate-y-8">
                     <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=800&q=80" alt="Team Discussion" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl h-full -translate-y-8">
                     <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80" alt="Team Work" className="w-full h-full object-cover" />
                  </div>
               </div>
            </div>
         </section>

         {/* Contact Form Section */}
         <section className="relative z-30 bg-gray-50 py-24 md:py-32">
            <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
               <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">

                  {/* Left: Contact Info */}
                  <div className="w-full lg:w-5/12 bg-[#0A3A7A] p-12 lg:p-16 text-white flex flex-col justify-center">
                     <h2 className="text-[32px] md:text-[40px] font-light leading-[1.2] mb-6">
                        Ready to <span className="font-semibold text-[#D4AF37]">transform</span><br /> your business?
                     </h2>
                     <p className="text-[16px] text-white/70 font-light leading-[1.8] mb-12">
                        Whether you're looking to modernize operations, build custom solutions, or explore cloud technologies, we're ready to help navigate the future.
                     </p>

                     <div className="flex flex-col gap-8">
                        <div className="flex items-start gap-5">
                           <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                           </div>
                           <div>
                              <h4 className="text-[14px] text-white/60 mb-1 tracking-wider uppercase">Email Us</h4>
                              <a href="mailto:contact@shreezatech.com" className="text-[18px] text-white hover:text-[#D4AF37] transition-colors font-medium">contact@shreezatech.com</a>
                           </div>
                        </div>

                        <div className="flex items-start gap-5">
                           <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                           </div>
                           <div>
                              <h4 className="text-[14px] text-white/60 mb-1 tracking-wider uppercase">Call Us</h4>
                              <a href="tel:+910000000000" className="text-[18px] text-white hover:text-[#D4AF37] transition-colors font-medium">+91 0000 000 000</a>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Right: Form */}
                  <div className="w-full lg:w-7/12 p-12 lg:p-16">
                     <form className="flex flex-col gap-8 h-full justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="relative">
                              <input type="text" id="fname" className="peer w-full bg-transparent border-b-2 border-gray-200 text-gray-900 py-2 focus:outline-none focus:border-[#0A3A7A] transition-colors placeholder-transparent" placeholder="First Name" />
                              <label htmlFor="fname" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#0A3A7A]">First Name</label>
                           </div>
                           <div className="relative">
                              <input type="text" id="lname" className="peer w-full bg-transparent border-b-2 border-gray-200 text-gray-900 py-2 focus:outline-none focus:border-[#0A3A7A] transition-colors placeholder-transparent" placeholder="Last Name" />
                              <label htmlFor="lname" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#0A3A7A]">Last Name</label>
                           </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                           <div className="relative">
                              <input type="email" id="email" className="peer w-full bg-transparent border-b-2 border-gray-200 text-gray-900 py-2 focus:outline-none focus:border-[#0A3A7A] transition-colors placeholder-transparent" placeholder="Email" />
                              <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#0A3A7A]">Work Email</label>
                           </div>
                           <div className="relative">
                              <input type="tel" id="phone" className="peer w-full bg-transparent border-b-2 border-gray-200 text-gray-900 py-2 focus:outline-none focus:border-[#0A3A7A] transition-colors placeholder-transparent" placeholder="Phone" />
                              <label htmlFor="phone" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#0A3A7A]">Phone Number</label>
                           </div>
                        </div>

                        <div className="relative mt-4">
                           <textarea id="message" rows="4" className="peer w-full bg-transparent border-b-2 border-gray-200 text-gray-900 py-2 focus:outline-none focus:border-[#0A3A7A] transition-colors resize-none placeholder-transparent" placeholder="Message"></textarea>
                           <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#0A3A7A]">How can we help?</label>
                        </div>

                        <div className="pt-4">
                           <button type="button" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#D4AF37] text-white hover:bg-[#0A3A7A] hover:text-white font-medium rounded-lg transition-colors shadow-lg">
                              Send Message
                           </button>
                        </div>
                     </form>
                  </div>

               </div>
            </div>
         </section>

      </div>
   );
}
