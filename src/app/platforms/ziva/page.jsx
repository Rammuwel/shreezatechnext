"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';

export default function ZivaPage() {
  return (
    <div className="font-sans text-gray-800 selection:bg-[#ff7f00] selection:text-white">
{/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 lg:px-12 min-h-[85vh] flex items-center">
        {/* Background Image with Dark Green Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2a23] via-[#0d2a23]/90 to-[#0d2a23]/20 z-0"></div>

        <div className="max-w-[1300px] mx-auto relative z-10 w-full">
          <div className="max-w-3xl">
            <h3 className="text-[20px] font-medium text-white mb-6">Novac ZIVA®</h3>
            <h1 className="text-[40px] md:text-[56px] leading-[1.2] font-medium mb-8 text-white tracking-tight">
              Unleash the Potential of Digital Lending Excellence with ZIVA®
            </h1>
            <p className="text-[18px] md:text-[20px] font-normal text-white mb-12 max-w-2xl">
              An end-to-end digital lending solution with unrivaled performance
            </p>
            <Link 
              href="#" 
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#9fb92d] to-[#1da577] text-white font-medium text-[16px] hover:opacity-90 transition-opacity shadow-lg"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <div className="w-full bg-[#fcfdfc] py-5 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-[1300px] mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center text-[14px] text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#1da577] transition-colors focus-visible:outline-none rounded px-1 -ml-1 flex items-center">
              <HomeIcon size={16} />
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <Link href="/platforms" className="hover:text-[#1da577] transition-colors focus-visible:outline-none rounded">
              Platforms
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-800" aria-current="page">Novac Ziva®</span>
          </nav>
        </div>
      </div>

      {/* Future-proof Section (White/Light gradient) */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-white via-white to-[#f0f9f6]">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Text */}
          <div className="space-y-8">
            <h2 className="text-[32px] md:text-[44px] font-medium text-[#111] leading-tight">
              Future-proof your Lending Enterprise with <span className="text-[#1da577]">ZIVA®</span>
            </h2>
            <div className="text-[17px] md:text-[18px] text-gray-700 leading-[1.8] space-y-6">
              <p>
                The rise of digital has transformed the financial services industry, bringing new challenges to existing players and new entrants alike. Managing the change successfully to a digital-first, mobile-first, customer-centric model is vital for long-term growth. As each company is unique in its own way, this journey requires different approaches.
              </p>
              <p>
                Novac Ziva® is a cloud lending management software with a comprehensive modules suite designed to cater to the requirements of lending businesses of all sizes across various spectrums.
              </p>
            </div>
          </div>

          {/* Right: Grid of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Card 1 */}
            <div className="bg-white border border-[#1da577]/30 rounded-2xl p-8 flex flex-col justify-between h-[240px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow">
              <div className="flex justify-end">
                <svg className="w-12 h-12 text-[#111]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 12H24V24H8V12Z" strokeLinejoin="round"/>
                  <path d="M12 8V12M20 8V12" strokeLinecap="round"/>
                  <path d="M8 18H24" strokeLinecap="round"/>
                  <path d="M16 20V20.01" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-[20px] font-medium text-gray-800">NBFCs</h3>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white border border-[#1da577]/30 rounded-2xl p-8 flex flex-col justify-between h-[240px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow mt-0 sm:mt-12">
              <div className="flex justify-end">
                <svg className="w-12 h-12 text-[#111]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 16L16 6L28 16" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 13V26H24V13" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16" cy="18" r="4" className="text-[#111]"/>
                  <path d="M14 18L15.5 19.5L18 16.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[20px] font-medium text-gray-800">Retail Lenders</h3>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white border border-[#1da577]/30 rounded-2xl p-8 flex flex-col justify-between h-[240px] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-lg transition-shadow">
              <div className="flex justify-end">
                <svg className="w-12 h-12 text-[#111]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 16L16 6L28 16" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 13V26H24V13" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 22V14M16 14L12 18M16 14L20 18" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[20px] font-medium text-gray-800">HFCs</h3>
            </div>
          </div>
          
        </div>
      </section>

      {/* Manage Lifecycle Section (Light) */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#f4fafa]">
        <div className="max-w-[1300px] mx-auto text-center">
          <h2 className="text-[28px] md:text-[40px] font-medium text-[#111] leading-tight mb-20 max-w-4xl mx-auto">
            Manage your entire loan lifecycle with a single, intelligent, and change-ready software
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white rounded-[24px] p-10 text-left shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="mb-10">
                <svg className="w-12 h-12 text-[#111]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 18C8 18 10 24 16 24C22 24 24 18 24 18" strokeLinecap="round"/>
                  <path d="M16 14C18.2091 14 20 12.2091 20 10C20 7.79086 18.2091 6 16 6C13.7909 6 12 7.79086 12 10C12 12.2091 13.7909 14 16 14Z"/>
                  <path d="M16 8V12M14 10H18" strokeLinecap="round"/>
                  <path d="M6 16L12 20" strokeLinecap="round"/>
                  <path d="M26 16L20 20" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-[22px] font-medium text-gray-900 mb-6">Comprehensive LOS</h3>
              <p className="text-[16px] text-gray-600 leading-[1.8]">
                Unlock the automation of various business activities involved in a loan processing system with a one-point loan origination software
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[24px] p-10 text-left shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="mb-10">
                <svg className="w-12 h-12 text-[#111]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26C21.5228 26 26 21.5228 26 16" strokeLinecap="round" strokeDasharray="4 4"/>
                  <path d="M26 10V16H20" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16L15 19L22 11" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[22px] font-medium text-gray-900 mb-6">Supports The Entire Acquisition Lifecycle</h3>
              <p className="text-[16px] text-gray-600 leading-[1.8]">
                From the customer's onboarding to the underwriter's decision on the loan disbursement, the acquisition lifecycle tracks all
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[24px] p-10 text-left shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="mb-10">
                <svg className="w-12 h-12 text-[#111]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="8" y="12" width="12" height="12" rx="1" />
                  <path d="M12 8H23C23.5523 8 24 8.44772 24 9V20" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[22px] font-medium text-gray-900 mb-6">Seamless Mobility</h3>
              <p className="text-[16px] text-gray-600 leading-[1.8]">
                Mobile platforms enabling relationship executives to onboard customers, create opportunities, loan sanctions, and more.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Optimize Processes Section (Dark Green Gradient) */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-[#072B26] to-[#0A3D36] text-white">
        <div className="max-w-[1300px] mx-auto">
          
          <h2 className="text-[32px] md:text-[44px] font-medium text-[#72d6bc] leading-tight mb-20 max-w-4xl">
            Effortlessly optimize loan processes, enhance risk assessment, and create unparalleled customer experiences with ZIVA®
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            
            {/* Item 1: Loan Origination */}
            <div>
              <div className="mb-8">
                <svg className="w-16 h-16 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 32H32V12H8V32Z" strokeLinejoin="round"/>
                  <path d="M16 40H24M20 32V40" strokeLinecap="round"/>
                  <path d="M26 12C26 12 28 6 34 6C36 6 38 8 38 12C38 18 34 24 34 24" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="34" cy="24" r="6" />
                  <path d="M33 22H35M33 26H35M34 22V26" strokeLinecap="round"/>
                  <path d="M12 18H16M12 24H18" strokeLinecap="round"/>
                  <path d="M24 18L20 26" strokeLinecap="round"/>
                  <circle cx="20" cy="18" r="1" fill="currentColor"/>
                  <circle cx="24" cy="26" r="1" fill="currentColor"/>
                </svg>
              </div>
              <h3 className="text-[26px] font-medium text-white mb-6">Loan Origination</h3>
              <p className="text-[17px] text-gray-300 leading-[1.8] mb-8">
                ZIVA®'s loan origination module is an advanced workflow system built on microservices architecture. It is fully automated, parameterized, and powered by a business rule engine.
              </p>
            </div>

            {/* Item 2: Loan Servicing */}
            <div>
              <div className="mb-8">
                <svg className="w-16 h-16 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 30C12 30 16 36 24 36C32 36 36 30 36 30" strokeLinecap="round"/>
                  <path d="M16 16C16 16 20 22 28 22" strokeLinecap="round"/>
                  <path d="M24 8V18" className="text-[#72d6bc]" strokeLinecap="round"/>
                  <path d="M20 14L24 18L28 14" className="text-[#72d6bc]" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="12" y="18" width="10" height="12" rx="2" />
                  <path d="M12 22H8C6.89543 22 6 21.1046 6 20V14C6 12.8954 6.89543 12 8 12H12" strokeLinecap="round"/>
                  <path d="M34 30L38 28C39.1046 27.4477 40 26.5523 40 25.4477V20" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-[26px] font-medium text-white mb-6">Loan Servicing</h3>
              <p className="text-[17px] text-gray-300 leading-[1.8] mb-8">
                This module contains the requests for Tenure/Due Date change, part prepayment, loan closure, and recovery management functionalities. It also allows loan services to manage risk,
              </p>
            </div>

            {/* Item 3: Product Management */}
            <div>
              <div className="mb-8 relative h-16 w-16">
                <svg className="w-16 h-16 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 24L24 16L42 24V40H6V24Z" strokeLinejoin="round"/>
                  <path d="M24 16L24 40" strokeLinejoin="round"/>
                  <path d="M12 16L18 8H28" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="16" cy="12" r="2" />
                  <circle cx="24" cy="10" r="2" />
                  <circle cx="32" cy="12" r="2" />
                  <circle cx="15" cy="32" r="6" className="text-[#72d6bc]" stroke="currentColor" fill="#0A3D36"/>
                  <path d="M15 29V35M12 32H18" className="text-[#72d6bc]" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-[26px] font-medium text-white mb-6">Product Management</h3>
              <p className="text-[17px] text-gray-300 leading-[1.8] mb-8">
                The product management module enables the rapid launch of new products across the lending company based on business norms. It also contains segment-specific offerings and multilevel pricing flexibility.
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#a8bf26] to-[#1da577] text-white font-medium hover:opacity-90 transition-opacity"
              >
                Know More
              </Link>
            </div>

            {/* Item 4: Collection Management */}
            <div>
              <div className="mb-8 relative h-16 w-16">
                <svg className="w-16 h-16 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 36H40" strokeLinecap="round"/>
                  <path d="M12 36V16H18V36" strokeLinejoin="round"/>
                  <path d="M21 36V8H27V36" strokeLinejoin="round"/>
                  <path d="M30 36V22H36V36" strokeLinejoin="round"/>
                  <circle cx="24" cy="24" r="8" className="bg-[#0A3D36] text-white" fill="#0A3D36" stroke="currentColor"/>
                  <path d="M24 16V13M24 32V35M16 24H13M35 24H32M29.65 18.34L31.77 16.22M18.34 29.65L16.22 31.77M18.34 18.34L16.22 16.22M29.65 29.65L31.77 31.77" strokeLinecap="round"/>
                  <path d="M23 21H25M23 25H25M24 21V27" className="text-[#72d6bc]" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-[26px] font-medium text-white mb-6">Collection Management</h3>
              <p className="text-[17px] text-gray-300 leading-[1.8] mb-8">
                This module facilitates the collection of monthly repayments, generating statements, and statements of accounts, following up on delinquencies, and maintaining records of payments and balances.
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#a8bf26] to-[#1da577] text-white font-medium hover:opacity-90 transition-opacity"
              >
                Know More
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* mZIVA Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-[#e8f7f2] via-white to-white">
        <div className="max-w-[1300px] mx-auto">
          
          <h2 className="text-[32px] md:text-[44px] font-medium text-[#111] leading-tight mb-20">
            <span className="text-[#1da577]">mZIVA®</span> - Elevate your lending prowess<br/>with our Mobile Apps
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: Image Placeholder */}
            <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] bg-gray-50 rounded-3xl overflow-hidden flex justify-center items-center shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80")' }}
              ></div>
            </div>

            {/* Right: Text Content */}
            <div className="space-y-12">
              
              <div className="border-b border-gray-200 pb-12">
                <div className="mb-6">
                  <svg className="w-10 h-10 text-gray-800" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="16" cy="10" r="4" />
                    <path d="M24 26C24 21.5817 20.4183 18 16 18C11.5817 18 8 21.5817 8 26" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-[26px] font-medium text-gray-900 mb-6">For Field Officers</h3>
                <div className="text-[17px] text-gray-600 leading-[1.8] space-y-6">
                  <p>
                    The application enables field officers and customer support technicians in streamlining the lending process from loan application creation to credit approval through the loan origination module.
                  </p>
                  <p>
                    The mobile app also contains Google coordinates and an in-built day planner for faster and easier access to approving loans anywhere, anytime.
                  </p>
                </div>
              </div>
              
              <div className="pt-2">
                <div className="mb-6">
                  <svg className="w-10 h-10 text-gray-800" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C22.6274 28 28 22.6274 28 16" strokeLinecap="round"/>
                    <path d="M16 10V16L20 20" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-[26px] font-medium text-gray-900 mb-6">For Customers</h3>
                <p className="text-[17px] text-gray-600 leading-[1.8]">
                  Empower your customers with a self-service mobile application to manage their loans, make payments, and access statements instantly.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* How does ZIVA work? Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#041b25] text-white relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto relative z-10">
          
          <h2 className="text-[32px] md:text-[44px] font-medium text-white text-center mb-16">
            How does ZIVA® work?
          </h2>

          {/* Scrollable Container */}
          <div className="relative mx-auto max-w-5xl h-[600px] overflow-y-auto pr-4" style={{ scrollbarWidth: 'thin', scrollbarColor: '#1da577 transparent' }}>
            {/* Background "Z" Graphic */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-[0.03] z-0 top-0 bottom-0 sticky">
              <span className="text-[600px] font-bold leading-none font-sans tracking-tighter text-white">Z</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24 relative z-10 py-10">
              {/* Step 1 */}
              <div className="text-center md:text-left">
                <div className="text-[64px] font-light leading-none mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#b1c726] to-[#1da577]">01</div>
                <h3 className="text-[24px] font-medium text-white mb-4">Application Initiation</h3>
                <p className="text-[16px] text-gray-400 leading-[1.8]">Omni-channel of leads and opportunities with save and resume capability</p>
              </div>
              {/* Step 2 */}
              <div className="text-center md:text-left">
                <div className="text-[64px] font-light leading-none mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#b1c726] to-[#1da577]">02</div>
                <h3 className="text-[24px] font-medium text-white mb-4">Credit Decision</h3>
                <p className="text-[16px] text-gray-400 leading-[1.8]">Comprehensive analytics and portfolio performance tracking</p>
              </div>
              {/* Step 3 */}
              <div className="text-center md:text-left">
                <div className="text-[64px] font-light leading-none mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#b1c726] to-[#1da577]">03</div>
                <h3 className="text-[24px] font-medium text-white mb-4">Approval & Monitoring</h3>
                <p className="text-[16px] text-gray-400 leading-[1.8]">Risk and behavioral scoring</p>
              </div>
              {/* Step 4 */}
              <div className="text-center md:text-left">
                <div className="text-[64px] font-light leading-none mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#b1c726] to-[#1da577]">04</div>
                <h3 className="text-[24px] font-medium text-white mb-4">Product Management</h3>
                <p className="text-[16px] text-gray-400 leading-[1.8]">Segment-specific product offering and multi-level pricing flexibility</p>
              </div>
              {/* Step 5 */}
              <div className="text-center md:text-left">
                <div className="text-[64px] font-light leading-none mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#b1c726] to-[#1da577]">05</div>
                <h3 className="text-[24px] font-medium text-white mb-4">Field Operations</h3>
                <p className="text-[16px] text-gray-400 leading-[1.8]">Anywhere Anytime access</p>
              </div>
              {/* Step 6 */}
              <div className="text-center md:text-left">
                <div className="text-[64px] font-light leading-none mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#b1c726] to-[#1da577]">06</div>
                <h3 className="text-[24px] font-medium text-white mb-4">Rule Management</h3>
                <p className="text-[16px] text-gray-400 leading-[1.8]">Workflows and Business Rules</p>
              </div>
              {/* Step 7 */}
              <div className="text-center md:text-left">
                <div className="text-[64px] font-light leading-none mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#b1c726] to-[#1da577]">07</div>
                <h3 className="text-[24px] font-medium text-white mb-4">Collateral and Facility Management</h3>
                <p className="text-[16px] text-gray-400 leading-[1.8]">A single view of portfolio exposure</p>
              </div>
              {/* Step 8 */}
              <div className="text-center md:text-left">
                <div className="text-[64px] font-light leading-none mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#b1c726] to-[#1da577]">08</div>
                <h3 className="text-[24px] font-medium text-white mb-4">Ecosystem Partner</h3>
                <p className="text-[16px] text-gray-400 leading-[1.8]">External touch points such as credit bureaus, NSDL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What makes ZIVA Stand Out */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-gradient-to-br from-[#f8fcfb] to-white">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div>
            <h2 className="text-[32px] md:text-[44px] font-medium text-[#111] leading-tight mb-8">
              What makes ZIVA® <span className="text-[#1da577]">Stand<br/>Out</span>
            </h2>
            <p className="text-[18px] text-gray-700 leading-[1.8] max-w-lg">
              ZIVA® helps businesses to meet their goals with a lending ecosystem imparted with result-oriented features
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {[
              "Ready to be deployed in Cloud",
              "User-Driven Workflow Configuration",
              "Product ready to market",
              "Faster new product creation",
              "AI-enabled Role-based dashboard",
              "Integrated Accounting Engine",
              "GUI-based system configuration",
              "Compliance/ Risk Policies/ Eligibility",
              "Multi-channel Interfacing capability",
              "Document Mapping across modules"
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-4 border-b border-gray-200 pb-6">
                <div className="w-2 h-2 bg-[#111] mt-2 shrink-0"></div>
                <span className="text-[16px] text-gray-700 leading-[1.6]">{feature}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Optimal Practices */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#0a312a] text-white">
        <div className="max-w-[1300px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h2 className="text-[32px] md:text-[44px] font-medium text-white leading-tight mb-8 max-w-lg">
                ZIVA® implements optimal practices across all lending aspects
              </h2>
              <p className="text-[17px] text-gray-300 leading-[1.8] max-w-lg">
                ZIVA® leverages AI and cloud technologies to aid NBFCs and HFCs in accessing real-time financial data to make informed decisions. With ZIVA®'s implementation, our clients are experiencing a positive impact on tangible and intangible costs.
              </p>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="text-[64px] md:text-[80px] font-bold text-white leading-none mb-2">20-30%</div>
              <div className="text-[24px] text-white mb-8">Reduction in</div>
              <ul className="space-y-6">
                {[
                  "Loan Processing time",
                  "Time to set up deals",
                  "IT systems maintenance cost"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-[18px] text-gray-200">
                    <span className="text-white">→</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Diverse Loan Products */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#f8fbfa]">
        <div className="max-w-[1300px] mx-auto text-center">
          
          <h2 className="text-[32px] md:text-[44px] font-medium text-[#111] leading-tight mb-20">
            Designed for <span className="text-[#1da577]">Diverse Loan Products</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-0 text-left">
            {[
              "Vehicle loan", "Trade Advance", "Two-wheeler loan",
              "Housing loan", "Equipment Finance", "Loan Against property",
              "Jewel loan", "SME Loan", "Consumer durables",
              "Top-up loan", "Business Loan", "Personal loan"
            ].map((loan, i) => (
              <div key={i} className="flex items-center gap-6 py-8 border-b border-gray-200">
                <svg className="w-8 h-8 text-[#1da577]" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="8" width="24" height="16" rx="2" />
                  <circle cx="16" cy="16" r="3" />
                </svg>
                <span className="text-[17px] text-gray-800">{loan}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#072B26] text-white">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div>
            <h2 className="text-[36px] md:text-[48px] font-medium text-white leading-tight mb-12">
              Ready to transform your<br/>
              <span className="text-[#1da577]">financial institution?</span>
            </h2>
            <div className="flex flex-wrap gap-6">
              <Link 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#a8bf26] to-[#1da577] text-white font-medium hover:opacity-90 transition-opacity"
              >
                Schedule a Demo Now
              </Link>
              <Link 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white/30 text-white font-medium hover:bg-white/10 transition-colors gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Download Brochure
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px]">
              {/* Outer border decoration */}
              <div className="absolute -inset-4 border border-[#a8bf26]/50 rounded-tl-[100px] rounded-br-[100px] z-0"></div>
              {/* Image */}
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" alt="Future Proof Your Lending Enterprise" className="relative z-10 w-full shadow-2xl rounded-sm" />
              {/* Overlay text mock */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 bg-gradient-to-t from-[#1da577]/90 via-[#1da577]/40 to-transparent rounded-sm">
                <h3 className="text-[24px] font-medium text-white leading-tight">
                  Future Proof<br/>Your Lending<br/>Enterprise with<br/>Ziva®
                </h3>
                <p className="text-[12px] text-white mt-4">By Novac</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Our Belief in Action */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1300px] mx-auto">
          
          <div className="flex justify-between items-end mb-16 border-b border-gray-200 pb-6">
            <h2 className="text-[32px] md:text-[44px] font-medium text-[#111]">
              Our Belief in Action
            </h2>
            <Link href="#" className="hidden sm:flex items-center gap-2 text-[16px] text-gray-800 hover:text-[#1da577] transition-colors font-medium">
              View All
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-[240px] mb-6 overflow-hidden bg-gray-100">
                <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80" alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white px-4 py-1.5 text-[14px] font-medium text-gray-800">Event</div>
              </div>
              <div className="flex items-center gap-4 text-[14px] text-gray-500 mb-4">
                <span>Dec/11/2024</span>
                <span>FinTech</span>
              </div>
              <h3 className="text-[22px] font-medium text-gray-900 leading-[1.4] group-hover:text-[#1da577] transition-colors border-b border-gray-200 pb-8">
                Loan Origination Systems - A Complete Guide
              </h3>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer">
              <div className="relative h-[240px] mb-6 overflow-hidden bg-gray-100">
                <img src="https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80" alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white px-4 py-1.5 text-[14px] font-medium text-gray-800">Event</div>
              </div>
              <div className="flex items-center gap-4 text-[14px] text-gray-500 mb-4">
                <span>Dec/31/2024</span>
                <span>ImmersiveTech</span>
              </div>
              <h3 className="text-[22px] font-medium text-gray-900 leading-[1.4] group-hover:text-[#1da577] transition-colors border-b border-gray-200 pb-8">
                A Year in Innovation: AR, VR and MR's Evolution in 2024 and a...
              </h3>
            </div>

            {/* Card 3 */}
            <div className="group cursor-pointer">
              <div className="relative h-[240px] mb-6 overflow-hidden bg-gray-100">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white px-4 py-1.5 text-[14px] font-medium text-gray-800">Event</div>
              </div>
              <div className="flex items-center gap-4 text-[14px] text-gray-500 mb-4">
                <span>Feb/20/2025</span>
                <span>FinTech</span>
              </div>
              <h3 className="text-[22px] font-medium text-gray-900 leading-[1.4] group-hover:text-[#1da577] transition-colors border-b border-gray-200 pb-8">
                Top Digital Lending Trends to Watch in 2025
              </h3>
            </div>

          </div>
          
        </div>
      </section>
</div>
  );
}
