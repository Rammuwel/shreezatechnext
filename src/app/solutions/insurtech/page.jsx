"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home as HomeIcon, MessageSquare, FileText, ShieldCheck, Zap } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Clients from '../../../components/Clients';
import Contact from '../../../components/Contact';

export default function InsurTechPage() {
  return (
    <div className="bg-[#000000] min-h-screen text-white selection:bg-[#ff7f00] selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-[#1A0B05] pt-32 pb-24 px-6 lg:px-12 overflow-hidden min-h-[60vh] flex items-center">
        {/* Abstract wavy background elements using CSS gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[100%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff7f00]/10 via-[#0a3a7a]/5 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4DB8A0]/10 via-[#1A0B05] to-transparent blur-3xl"></div>
        </div>

        <div className="max-w-[1300px] mx-auto relative z-10 w-full">
          <div className="max-w-4xl">
            <h1 className="text-[40px] leading-[56px] font-normal mb-6 text-white text-balance">
              Future-Ready InsurTech for an Ever-Changing World
            </h1>
            
            <p className="text-[20px] leading-[34px] font-normal text-gray-300 max-w-2xl mb-10 text-balance">
              Empower your insurance business with connected InsurTech solutions that streamline operations, improve customer experiences, and accelerate growth.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <div className="w-full bg-white pt-6 pb-4 px-6 lg:px-12">
        <div className="max-w-[1300px] mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center text-[14px] text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#0A3A7A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7f00] rounded px-1 -ml-1 flex items-center">
              <HomeIcon size={16} />
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <Link href="#solutions" className="text-gray-500 hover:text-[#0A3A7A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7f00]">
              Solution
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-800" aria-current="page">InsurTech</span>
          </nav>
        </div>
      </div>

      <main className="w-full bg-white text-black">
        {/* About Section */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-[1300px] mx-auto">
            <div className="mb-12">
              <h2 className="text-[38px] md:text-[46px] leading-[1.2] font-normal text-[#212529] max-w-4xl">
                Driving Sustainable Business Growth Amid Rising Customer Expectations
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px] w-full rounded-tr-[100px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop" 
                  alt="InsurTech About" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center h-full pt-2 md:pt-6">
                <p className="text-[#212529] text-[20px] md:text-[22px] leading-[36px] font-normal mb-8">
                  The insurance industry is operating in an increasingly dynamic era. Policyholders increasingly expect personalized products, convenient digital interactions and effortless claims experiences. Meanwhile, regulatory needs, risk exposures, and competition continue to grow. Insurers need to adopt modern, customer-centric InsurTech solutions that improve agility and customer satisfaction.
                </p>
                <p className="text-gray-700 text-[16px] md:text-[18px] leading-[30px] font-normal">
                  Novac serves as a trusted digital transformation partner, helping insurers build scalable businesses. Our platform transforms insurance operations across underwriting, claims, fraud management, analytics, and digital distribution, while maintaining operational agility and compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Section */}
        <section className="py-24 px-6 lg:px-12 bg-[#090503] text-white relative overflow-hidden">
          <div className="max-w-[1300px] mx-auto relative z-10">
            <h2 className="text-[36px] md:text-[44px] leading-[1.2] font-normal mb-16 max-w-2xl">
              Expanding Revenue Streams Through <span className="text-[#ff7f00]">Digital Innovation</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Item 1 */}
              <div className="flex flex-col">
                <div className="mb-6">
                  <MessageSquare size={48} className="text-white" strokeWidth={1} />
                </div>
                <h3 className="text-[22px] font-medium mb-4">Better Customer Experience</h3>
                <p className="text-gray-400 text-[16px] leading-[28px] border-b border-white/10 pb-8 h-full">
                  Insurers giving priority to digital transformation will offer personalized services. This facilitates faster claim settlement, higher policyholder retention (procuring of insurance plans), and quicker resolution of policy-related queries.
                </p>
              </div>
              
              {/* Item 2 */}
              <div className="flex flex-col">
                <div className="mb-6">
                  <FileText size={48} className="text-white" strokeWidth={1} />
                </div>
                <h3 className="text-[22px] font-medium mb-4">Data-Driven Decision Making</h3>
                <p className="text-gray-400 text-[16px] leading-[28px] border-b border-white/10 pb-8 h-full">
                  Data analytics helps insurers make intelligent underwriting and pricing decisions. This enables improved risk assessment and fraud detection while creating customer-focused products aligned with market needs.
                </p>
              </div>
              
              {/* Item 3 */}
              <div className="flex flex-col">
                <div className="mb-6">
                  <ShieldCheck size={48} className="text-white" strokeWidth={1} />
                </div>
                <h3 className="text-[22px] font-medium mb-4">Improved Risk Management</h3>
                <p className="text-gray-400 text-[16px] leading-[28px] border-b border-white/10 pb-8 h-full">
                  Insurers can assess risks in an analytical manner and take steps to mitigate them. Eventually, a higher level of accuracy in risk assessment will help in reducing liability costs.
                </p>
              </div>
              
              {/* Item 4 */}
              <div className="flex flex-col">
                <div className="mb-6">
                  <Zap size={48} className="text-white" strokeWidth={1} />
                </div>
                <h3 className="text-[22px] font-medium mb-4">Enhanced Agility</h3>
                <p className="text-gray-400 text-[16px] leading-[28px] border-b border-white/10 pb-8 h-full">
                  Cloud-native platform can now help insurers adapt quickly to the market conditions. This results in scalable operations and timely responses to customer expectations and risk dynamics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Novac Section */}
        <section className="py-24 px-6 lg:px-12 bg-[#FCFAF5]">
          <div className="max-w-[1300px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-[36px] md:text-[44px] leading-[1.2] font-normal text-[#212529] mb-6">
                  <span className="text-[#D4AF37]">Why Choose</span><br />Novac?
                </h2>
                <p className="text-gray-700 text-[18px] leading-[32px]">
                  Novac Technologies is rooted in the strength of Shriram Group, a USD 30 billion financial conglomerate with customers across the world.
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 bg-black"></div>
                    <span className="text-[18px] font-medium">CMMI Level 5 Certified</span>
                  </div>
                  <div className="w-full h-px bg-gray-200 mt-6"></div>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 bg-black"></div>
                    <span className="text-[18px] font-medium">Proven Expertise across diverse Domains</span>
                  </div>
                  <div className="w-full h-px bg-gray-200 mt-6"></div>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 bg-black"></div>
                    <span className="text-[18px] font-medium">754+ Implementations</span>
                  </div>
                  <div className="w-full h-px bg-gray-200 mt-6"></div>
                </div>
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 bg-black"></div>
                    <span className="text-[18px] font-medium">1600+ Associates</span>
                  </div>
                  <div className="w-full h-px bg-gray-200 mt-6"></div>
                </div>
                
                <div className="flex flex-col sm:col-span-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1.5 h-1.5 bg-black"></div>
                    <span className="text-[18px] font-medium">Strong Information Security Practices</span>
                  </div>
                  <div className="w-full h-px bg-gray-200 mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connected Insurance Section */}
        <section className="py-24 px-6 lg:px-12 bg-white">
          <div className="max-w-[1300px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[520px] w-full rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop" 
                alt="Connected Insurance" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-[38px] md:text-[46px] leading-[1.2] font-normal text-[#212529] mb-8">
                <span className="text-[#0A3A7A]">Connected Ins</span>urance Beyond Core Operations
              </h2>
              <p className="text-gray-700 text-[16px] md:text-[18px] leading-[30px] mb-6">
                STATIM® extends insurance operations beyond core systems by connecting customers, agents, brokers, and partners through a unified digital ecosystem. With omni-channel engagement, configurable workflows, and a single point of change, it enables seamless onboarding, servicing, policy management, claims, and payments while improving operational efficiency and customer experiences.
              </p>
              <p className="text-gray-700 text-[16px] md:text-[18px] leading-[30px] mb-10">
                Built on a low-code, AI-enabled architecture, STATIM® combines persona-based portals, digital journeys, integration capabilities, centralized data management, and analytics into one intelligent platform. Supporting General and Health Insurance operations across the policy lifecycle, it helps insurers accelerate digital growth, reduce operational costs, improve turnaround times, and deliver better business outcomes.
              </p>
              <Link href="#contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#D4AF37] border border-[#D4AF37] text-white font-medium hover:bg-transparent hover:text-[#0A3A7A] hover:border-[#0A3A7A] transition-all shadow-sm">
                Know more
              </Link>
            </div>
          </div>
        </section>

        {/* Journeying Together */}
        <section className="py-20 bg-gray-50 text-center">
          <div className="max-w-[1300px] mx-auto px-6">
             <h2 className="text-[36px] md:text-[44px] leading-[1.2] font-normal text-[#212529] mb-4">
                <span className="text-[#D4AF37]">Journeying</span> Together
              </h2>
              <p className="text-gray-600 text-[18px] max-w-2xl mx-auto mb-12">
                Leading insurers partner with us to streamline core operations, accelerate product innovation, and drive sustainable growth across the insurance value chain.
              </p>
          </div>
          <Clients />
        </section>

      </main>
      
      {/* Contact Section */}
      <div className="bg-[#041b25]">
        <Contact 
          title={<><span>Let's Talk</span></>} 
          subtitle="Bring in the change to your Insurance business with STATIM®" 
        />
      </div>

      <Footer />
    </div>
  );
}
