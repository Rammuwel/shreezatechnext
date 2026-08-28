import React from 'react';
import ContactForm from './ContactForm';

export default function Contact({ title, subtitle }) {
  return (
    <section id="contact" className="py-10 md:py-20 lg:py-24 bg-white relative">
      <div className="max-w-[1300px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

          {/* Left Side: Content */}
          <div className="lg:col-span-4 flex flex-col pt-0 lg:pt-8" data-aos="fade-right">
            <h2 className="text-[28px] leading-[36px] md:text-[44px] md:leading-[52px] font-normal text-[#212529] mb-4 md:mb-6">
              {title || (
                <>
                  Technology to <br />
                  Redefine the Future !
                </>
              )}
            </h2>

            <p className="text-[#212529] text-[16px] leading-[26px] md:text-[20px] md:leading-[34px] font-normal mb-8 lg:mb-0">
              {subtitle || "Let's make things happen! Drop us a line, and we'll reach out to you promptly"}
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <div className="lg:col-span-8" data-aos="fade-left">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
