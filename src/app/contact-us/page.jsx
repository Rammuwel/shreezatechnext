"use client";
import React from 'react';
import { ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="h-[50vh] min-h-[400px] w-full relative overflow-hidden bg-[#081229] flex items-center border-b border-[#ffffff10]">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop" alt="Contact Us Hero" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040026] via-[#040026]/70 to-[#040026]/20"></div>
        </div>

        <div className="max-w-[1300px] mx-auto px-6 h-full flex flex-col justify-center pt-24 md:pt-32 relative z-10 w-full">
          <div className="max-w-4xl">
            <h1 className="text-[32px] md:text-[40px] leading-[42px] md:leading-[56px] font-normal mb-6 text-white text-balance">
              Let's build the <br />
              <span className="text-[#D4AF37]">future together.</span>
            </h1>
            <p className="text-[16px] md:text-[20px] leading-[28px] md:leading-[34px] font-normal text-gray-300 max-w-2xl mb-10 text-balance">
              Connect with our experts and discover how we can transform your business through technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative z-30 bg-white py-10 md:py-16 md:py-32">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

            {/* Left Side: Contact Information */}
            <div className="lg:col-span-5 flex flex-col p-8 md:p-12 bg-[#040026] rounded-[2rem] relative overflow-hidden" data-aos="fade-right">
               {/* Background Glow Effects */}
               <div className="absolute top-0 right-0 w-full md:w-64 h-64 bg-[#D4AF37] opacity-10 blur-[80px] rounded-full"></div>
               <div className="absolute bottom-0 left-0 w-full md:w-64 h-64 bg-[#0A3A7A] opacity-40 blur-[80px] rounded-full"></div>
               
               <div className="relative z-10 flex flex-col h-full">
                  <h2 className="text-[32px] md:text-[44px] leading-[1.2] font-light text-white mb-6">
                    Let's <span className="font-semibold text-[#D4AF37]">connect.</span>
                  </h2>
                  <p className="text-[16px] md:text-[18px] leading-[1.8] font-light text-gray-300 mb-12">
                    Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
                  </p>

                  <div className="flex flex-col gap-8 mt-auto">
                    <div className="flex items-start gap-5 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500">
                        <Mail className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-[12px] text-gray-400 mb-1 tracking-[0.2em] uppercase font-medium">Email Us</h4>
                        <a href="mailto:info@shreezatech.com" className="text-[16px] text-white hover:text-[#D4AF37] transition-colors font-medium">info@shreezatech.com</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500">
                        <Phone className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-[12px] text-gray-400 mb-1 tracking-[0.2em] uppercase font-medium">Call Us</h4>
                        <a href="tel:+918223087569" className="text-[16px] text-white hover:text-[#D4AF37] transition-colors font-medium">+91 8223087569</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500">
                        <MapPin className="w-5 h-5 text-[#D4AF37] group-hover:text-white transition-colors" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="text-[12px] text-gray-400 mb-1 tracking-[0.2em] uppercase font-medium">Visit Us</h4>
                        <p className="text-[16px] text-white font-medium leading-[1.6]">
                          Indore, Madhya Pradesh, <br />
                          India.
                        </p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Right Side: Contact Form (Matching Home Page) */}
            <div className="lg:col-span-7 bg-transparent lg:py-6" data-aos="fade-left" data-aos-delay="200">
              <h3 className="text-[24px] text-[#212529] font-medium mb-6 lg:hidden">Send us a message</h3>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Global Locations Map Placeholder */}
      <section className="relative z-30 bg-[#040026] py-10 md:py-20 lg:py-24 border-t border-white/5">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 text-center" data-aos="fade-up">
          <h2 className="text-[32px] md:text-[40px] font-light leading-[1.2] text-white mb-4">
            Our <span className="font-semibold text-[#D4AF37]">Global Presence</span>
          </h2>
          <p className="text-[16px] text-gray-400 font-light leading-[1.6] max-w-2xl mx-auto mb-16">
            Delivering excellence across borders. We have strategically located offices to serve our clients worldwide.
          </p>

          <div className="relative w-full h-[250px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10" data-aos="fade-up" data-aos-delay="200">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" alt="Global Map" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-[#040026]/40 mix-blend-multiply"></div>

            {/* Location Pins */}
            <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-[#D4AF37] rounded-full shadow-[0_0_20px_rgba(212,175,55,1)] animate-pulse"></div>
            <div className="absolute top-1/2 left-2/3 w-4 h-4 bg-[#D4AF37] rounded-full shadow-[0_0_20px_rgba(212,175,55,1)] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[#D4AF37] rounded-full shadow-[0_0_20px_rgba(212,175,55,1)] animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </section>
    </div>
  );
}
