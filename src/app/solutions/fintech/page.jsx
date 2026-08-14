"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Zap, LineChart, Briefcase, FileCheck, ArrowRight, Building2, Home as HomeIcon } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Services from '../../../components/Services';
import Discover from '../../../components/Discover';
import Ziva from '../../../components/Ziva';
import Insights from '../../../components/Insights';
import Contact from '../../../components/Contact';
import About from '../../../components/About';

export default function FinTechPage() {
  return (
    <div className="bg-[#000000] min-h-screen text-white selection:bg-[#ff7f00] selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-[#041b25] pt-32 pb-12 px-6 lg:px-12 overflow-hidden">
        {/* Abstract wavy background elements using CSS gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[100%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4DB8A0]/20 via-[#0a3a7a]/10 to-transparent blur-3xl"></div>
          <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff7f00]/10 via-[#041b25] to-transparent blur-3xl"></div>
        </div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-[40px] leading-[56px] font-normal mb-6 text-white text-balance">
              Revolutionizing <span className="text-[#4DB8A0]">Financial</span> Access by Crafting a Seamless Digital Lending Journey
            </h1>
            
            <p className="text-[20px] leading-[34px] font-normal text-gray-300 max-w-2xl mb-10 text-balance">
              Our Fintech solutions equip lenders with powerful tools, enabling data-driven decisions that balance risk and opportunity. Built strictly for NBFCs and HFCs to scale efficiently.
            </p>

            <Link 
              href="#demo" 
              className="inline-flex items-center justify-center bg-[#4DB8A0] border border-[#4DB8A0] text-[#041b25] font-semibold text-[16px] px-8 py-4 rounded hover:bg-transparent hover:text-[#00A2FF] hover:border-[#00A2FF] transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#ff7f00] active:scale-[0.98]"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <div className="w-full bg-white pt-4 pb-4 px-6 lg:px-12">
        <div className="max-w-[1300px] mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center text-[14px] text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#0A3A7A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7f00] rounded px-1 -ml-1 flex items-center">
              <HomeIcon size={16} />
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <Link href="#solutions" className="text-gray-500 hover:text-[#0A3A7A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7f00]">
              Solutions
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-800" aria-current="page">FinTech</span>
          </nav>
        </div>
      </div>

      {/* MAIN CONTENT SECTION */}
      <main className="w-full">
        <About />
        <Services />
        <Discover />
        <Ziva />
        <Insights />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
