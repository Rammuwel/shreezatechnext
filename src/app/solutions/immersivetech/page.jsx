"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function ImmersiveTechPage() {
  return (
    <div className="font-sans text-gray-800 selection:bg-[#ff7f00] selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-[#0b132b] pt-32 pb-24 px-6 lg:px-12 overflow-hidden min-h-[70vh] flex items-center">
        {/* Background gradients resembling the wave in screenshot */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#1a365d]/40 via-transparent to-transparent blur-3xl"></div>
           <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00A2FF]/10 via-transparent to-transparent blur-3xl"></div>
           {/* Light wave line simulation */}
           <div className="absolute top-[60%] left-[-10%] w-[120%] h-[200px] bg-gradient-to-r from-transparent via-[#ffffff]/5 to-transparent blur-xl transform -rotate-12"></div>
        </div>

        <div className="max-w-[1300px] mx-auto relative z-10 w-full">
          <div className="max-w-4xl">
            <h1 className="text-[40px] md:text-[56px] leading-[1.2] font-medium mb-6 text-white tracking-tight">
              Transform Your Business with <span className="text-[#3b82f6]">Immersive</span><br /> Technology
            </h1>
            <p className="text-[18px] md:text-[22px] leading-relaxed font-normal text-white mb-10 max-w-2xl">
              Building Next-Gen AR, VR, MR, XR and Metaverse<br/>
              Solutions for Businesses
            </p>
            <Link 
              href="#" 
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#0055ff] to-[#00d2ff] text-white font-medium hover:opacity-90 transition-opacity"
            >
              Visit Immerz Website
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <div className="w-full bg-white py-4 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-[1300px] mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center text-[14px] text-gray-500 font-medium">
            <Link href="/" className="hover:text-[#0A3A7A] transition-colors focus-visible:outline-none rounded px-1 -ml-1 flex items-center">
              <HomeIcon size={16} />
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <Link href="/solutions" className="hover:text-[#0A3A7A] transition-colors focus-visible:outline-none rounded">
              Solutions
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-800" aria-current="page">ImmersiveTech</span>
          </nav>
        </div>
      </div>

      {/* Explore Section (White) */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-[32px] md:text-[44px] font-medium text-[#111] mb-16 leading-tight max-w-3xl">
            Explore the Endless Possibilities of <span className="text-[#3b82f6]">Immersive</span> Technology with Novac
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Tilted Image */}
            <div className="relative flex justify-center lg:justify-start">
              {/* Creating a slanted clipping mask for the image as seen in screenshot */}
              <div className="w-[85%] md:w-[75%] lg:w-[85%] h-[400px] md:h-[500px] bg-gray-100 overflow-hidden transform -skew-x-12 ml-6 lg:ml-12">
                 <div 
                   className="w-[120%] h-full bg-cover bg-center transform skew-x-12 -ml-[10%]" 
                   style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80")' }}
                 ></div>
              </div>
            </div>
            
            {/* Right: Text */}
            <div className="text-[17px] md:text-[18px] text-[#333] leading-[1.8] space-y-8">
              <p>
                In today's rapidly changing business landscape, companies need to adopt new and innovative solutions to stay ahead of their competition. Immersive technology refers to the use of technologies such as VR, AR, MR, and XR to create immersive experiences that blur the lines and bridges the gap between the real and virtual world.
              </p>
              <p>
                At Novac Technology Solutions, we specialize in leveraging these technologies to provide users with a highly engaging and interactive experience, enabling businesses to create immersive training experiences, product demonstrations, virtual events, and much more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section (Dark Blue) */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#0b132b] text-white">
        <div className="max-w-[1300px] mx-auto">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 items-start">
            <h2 className="text-[32px] md:text-[44px] font-medium leading-tight text-white">
              Re-Energize Your Brand With Novac's <span className="text-[#3b82f6]">Immersive</span> Solutions
            </h2>
            <div className="text-[17px] md:text-[18px] text-gray-300 leading-[1.8]">
              <p>
                At Novac Technology Solutions, we provide end-to-end AR/VR/MR/XR solutions that are customized to meet the unique needs of our clients. Our team of experts works closely with clients to develop immersive experiences that enhance customer engagement, improve employee training, and drive business growth.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 lg:gap-x-24 lg:gap-y-24">
            
            {/* Augmented Reality */}
            <div className="border-b border-gray-700/50 pb-12">
              <div className="mb-8">
                {/* Phone icon with floating 3D cube */}
                <svg className="w-20 h-20 text-white" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="28" y="16" width="24" height="48" rx="2" />
                  <path d="M40 58H40.01" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 36L40 24L68 36L40 48L12 36Z" className="text-[#3b82f6]" stroke="currentColor" />
                  <path d="M40 24V12M32 16L40 12L48 16" className="text-[#3b82f6]" stroke="currentColor" />
                </svg>
              </div>
              <h3 className="text-[26px] font-medium mb-4 text-white tracking-wide">Augmented Reality</h3>
              <p className="text-[17px] text-gray-400 leading-relaxed">
                Enhances real-world experiences by overlaying conceptual digital content to re-energize and boost your organization's digital strategy
              </p>
            </div>

            {/* Virtual Reality */}
            <div className="border-b border-gray-700/50 pb-12">
              <div className="mb-8">
                {/* VR Headset icon inside a hexagon */}
                <svg className="w-20 h-20 text-white" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M40 10L66 25V55L40 70L14 55V25L40 10Z" />
                  <path d="M40 70V40L66 25" />
                  <path d="M14 25L40 40" />
                  <circle cx="40" cy="32" r="8" />
                  <path d="M32 30H48V34H32V30Z" className="text-[#3b82f6]" fill="currentColor" />
                  <path d="M28 55C28 48 32 42 40 42C48 42 52 48 52 55" />
                </svg>
              </div>
              <h3 className="text-[26px] font-medium mb-4 text-white tracking-wide">Virtual Reality</h3>
              <p className="text-[17px] text-gray-400 leading-relaxed">
                Help organizations in building immersive worlds, allowing users to virtually experience products and services
              </p>
            </div>

            {/* Mixed Reality */}
            <div className="border-b border-gray-700/50 pb-12">
              <div className="mb-8">
                {/* 3D Cube with pointing hand and curved arrow */}
                <svg className="w-20 h-20 text-white" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 30L36 20L52 30V46L36 56L20 46V30Z" />
                  <path d="M36 56V40L52 30" />
                  <path d="M20 30L36 40" />
                  <path d="M44 60C44 56 46 52 50 52C52 52 52 50 52 48" strokeLinecap="round" />
                  <path d="M50 52H56V64H46C44 64 42 60 42 56" />
                  <path d="M16 52C12 46 12 36 16 32" className="text-[#3b82f6]" stroke="currentColor" strokeLinecap="round" />
                  <path d="M16 52L10 50M16 52L22 50" className="text-[#3b82f6]" stroke="currentColor" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-[26px] font-medium mb-4 text-white tracking-wide">Mixed Reality</h3>
              <p className="text-[17px] text-gray-400 leading-relaxed">
                Solve real-world problems by understanding environments and triggering digital infographics overlaying the physical environments
              </p>
            </div>

            {/* WebXR Solutions */}
            <div className="border-b border-gray-700/50 pb-12">
              <div className="mb-8">
                {/* 3D Cube with pointer finger clicking */}
                <svg className="w-20 h-20 text-white" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 30L40 20L60 30V50L40 60L20 50V30Z" />
                  <path d="M40 60V40L60 30" />
                  <path d="M20 30L40 40" />
                  <path d="M52 70V60C52 58 50 52 46 52C44 52 44 50 44 46" strokeLinecap="round" />
                  <path d="M46 52H56C58 52 60 55 60 60V70H52Z" />
                  <circle cx="44" cy="46" r="4" className="text-[#3b82f6]" stroke="currentColor" />
                </svg>
              </div>
              <h3 className="text-[26px] font-medium mb-4 text-white tracking-wide">WebXR Solutions</h3>
              <p className="text-[17px] text-gray-400 leading-relaxed">
                Allows businesses to grow their highly accessible and easy-to-distribute content, confined to achieving business goals with our cross-platform and cross-browser solutions
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Metaverse Services Section (White) */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image with slanted cut */}
            <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-bl-[80px]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 80% 100%, 0 100%)' }}>
               <div 
                 className="w-full h-full bg-cover bg-center" 
                 style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80")' }}
               ></div>
            </div>
            
            {/* Right: Text */}
            <div className="space-y-8">
              <h2 className="text-[32px] md:text-[44px] font-medium text-[#111] leading-tight">
                <span className="text-[#3b82f6]">Metaverse</span> Services
              </h2>
              <div className="text-[17px] md:text-[18px] text-[#333] leading-[1.8] space-y-6">
                <p>
                  The Metaverse is a virtual world where users can interact with each other and digital objects in a fully immersive way. It provides businesses with a new way to connect with customers and employees in a virtual environment.
                </p>
                <p>
                  At Novac Technology Solutions, we offer a wide range of Metaverse services that enable businesses to create virtual events, conduct virtual training sessions, and much more. Our team of experts works closely with clients to develop immersive experiences that are tailored to their specific needs.
                </p>
              </div>
              <Link 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-[#0055ff] to-[#00d2ff] text-white font-medium hover:opacity-90 transition-opacity"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metaverse Services Grid (White) */}
      <section className="pb-20 lg:pb-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            
            {/* Row 1 */}
            <div className="border-b border-gray-200 pb-12">
              <h3 className="text-[22px] font-medium mb-4 text-gray-800 tracking-wide pr-4">Metaverse<br/>Marketplaces</h3>
              <p className="text-[16px] text-gray-600 leading-[1.8]">
                Users can easily trade digital and physical assets that is tailored to your marketplace for a specific type of goods, namely metaverse art, and more
              </p>
            </div>
            <div className="border-b border-gray-200 pb-12">
              <h3 className="text-[22px] font-medium mb-4 text-gray-800 tracking-wide">Virtual<br/>Walkthrough</h3>
              <p className="text-[16px] text-gray-600 leading-[1.8]">
                Allows users to understand products and services better using immersive technology with a modular approach to meeting the customers' needs effectively
              </p>
            </div>
            <div className="border-b border-gray-200 pb-12">
              <h3 className="text-[22px] font-medium mb-4 text-gray-800 tracking-wide pr-4">Immersive Digital<br/>Twins</h3>
              <p className="text-[16px] text-gray-600 leading-[1.8]">
                Enable business owners to implement the right growth strategy for business using advanced data visualization, data prototyping, and predictive maintenance.
              </p>
            </div>

            {/* Row 2 */}
            <div>
              <h3 className="text-[22px] font-medium mb-4 text-gray-800 tracking-wide">Virtual<br/>Events</h3>
              <p className="text-[16px] text-gray-600 leading-[1.8]">
                With Virtual events, participants can have plenty of networking opportunities and visual exploration, saving time and money while leveraging digital transformation
              </p>
            </div>
            <div>
              <h3 className="text-[22px] font-medium mb-4 text-gray-800 tracking-wide">Virtual<br/>Meetings</h3>
              <p className="text-[16px] text-gray-600 leading-[1.8]">
                With immersive virtual meeting rooms to bring visualization to meetings that increase the participants' engagement, interaction and emotion
              </p>
            </div>
            <div>
              <h3 className="text-[22px] font-medium mb-4 text-gray-800 tracking-wide pr-4">Virtual<br/>Try-Ons</h3>
              <p className="text-[16px] text-gray-600 leading-[1.8]">
                Maximize your sales by enabling a realistic shopping experience for your customer, with our Virtual Reality-based Try-On solutions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Features of Immersive Solutions (Dark Blue) */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#0b132b] text-white">
        <div className="max-w-[1300px] mx-auto">
          
          <div className="mb-20">
            <h2 className="text-[32px] md:text-[44px] font-medium leading-tight text-white">
              Features of<br/><span className="text-[#3b82f6]">Immersive</span> Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            
            {/* Row 1 */}
            <div className="border-b border-gray-700/50 pb-12">
              <div className="mb-6">
                <svg className="w-12 h-12 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                   <path d="M22 28V12C22 10 23.5 8 25.5 8C27.5 8 29 10 29 12V24" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M29 18C31 18 32.5 19.5 32.5 21.5V26" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M32.5 22C34.5 22 36 23.5 36 25.5V28" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M15 28C15 36 21 42 29 42H31C35 42 38 39 38 35V26C38 24 36.5 22.5 34.5 22.5" strokeLinecap="round" strokeLinejoin="round"/>
                   <circle cx="20" cy="18" r="4" className="text-[#3b82f6]" stroke="currentColor"/>
                </svg>
              </div>
              <h3 className="text-[22px] font-medium text-white tracking-wide">Interactive and<br/>engaging</h3>
            </div>

            <div className="border-b border-gray-700/50 pb-12">
              <div className="mb-6">
                <svg className="w-12 h-12 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                   <path d="M8 40H40" strokeLinecap="round"/>
                   <path d="M12 40V24M20 40V16M28 40V28M36 40V12" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M8 24L16 16L24 24L36 8" className="text-[#3b82f6]" strokeLinecap="round" strokeLinejoin="round"/>
                   <path d="M28 8H36V16" className="text-[#3b82f6]" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[22px] font-medium text-white tracking-wide">Data analysis</h3>
            </div>

            <div className="border-b border-gray-700/50 pb-12">
              <div className="mb-6">
                <svg className="w-12 h-12 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                   <rect x="8" y="8" width="14" height="14" />
                   <rect x="26" y="8" width="14" height="14" />
                   <rect x="8" y="26" width="14" height="14" className="text-[#3b82f6]" />
                   <rect x="26" y="26" width="14" height="14" />
                </svg>
              </div>
              <h3 className="text-[22px] font-medium text-white tracking-wide">Customizable</h3>
            </div>

            {/* Row 2 */}
            <div className="pb-4">
              <div className="mb-6">
                <svg className="w-12 h-12 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                   <path d="M12 16L24 8L36 16L40 24L24 40L8 24L12 16Z" strokeLinejoin="round"/>
                   <path d="M8 24H40" strokeLinejoin="round"/>
                   <path d="M16 13L24 24L32 13" strokeLinejoin="round"/>
                   <path d="M24 8V24" className="text-[#3b82f6]"/>
                   <path d="M8 12L12 8" className="text-[#3b82f6]" strokeLinecap="round"/>
                   <path d="M40 12L36 8" className="text-[#3b82f6]" strokeLinecap="round"/>
                   <path d="M24 10V4" className="text-[#3b82f6]" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-[22px] font-medium text-white tracking-wide">High-quality visuals<br/>and sound</h3>
            </div>

            <div className="pb-4">
              <div className="mb-6 relative h-12 w-12 text-white">
                <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                   {/* Tablet */}
                   <rect x="6" y="10" width="28" height="32" rx="2" />
                   {/* Phone overlay */}
                   <rect x="26" y="22" width="16" height="24" rx="2" className="bg-[#0b132b] text-[#3b82f6]" fill="#0b132b" />
                   <rect x="26" y="22" width="16" height="24" rx="2" className="text-[#3b82f6]" />
                   <path d="M20 38H20.01" strokeWidth="2" strokeLinecap="round" />
                   <path d="M34 42H34.01" className="text-[#3b82f6]" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-[22px] font-medium text-white tracking-wide">Multi-platform<br/>compatibility</h3>
            </div>

            <div className="pb-4">
              <div className="mb-6">
                <svg className="w-12 h-12 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                   <path d="M12 18L24 10L36 18V30L24 38L12 30V18Z" strokeLinejoin="round"/>
                   <path d="M24 38V24L36 18" strokeLinejoin="round"/>
                   <path d="M12 18L24 24" strokeLinejoin="round"/>
                   <path d="M24 24L24 14" className="text-[#3b82f6]" strokeLinecap="round"/>
                   <path d="M18 20L28 26" className="text-[#3b82f6]" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="text-[22px] font-medium text-white tracking-wide">Realistic simulations</h3>
            </div>

          </div>
        </div>
      </section>

      {/* Why Does Your Business Need Immersive Solutions? (White) */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Accordion / List */}
          <div>
            <h2 className="text-[32px] md:text-[44px] font-medium text-[#111] leading-tight mb-16 max-w-sm">
              Why Does<br/>Your Business Need<br/><span className="text-[#3b82f6]">Immersive</span> Solutions?
            </h2>
            <div className="space-y-6">
              
              <div className="flex justify-between items-center border-b border-gray-200 pb-6 cursor-pointer hover:text-[#3b82f6] transition-colors">
                <div className="flex items-center gap-6">
                  <span className="text-[14px] text-gray-500 font-medium w-6">01.</span>
                  <h3 className="text-[20px] font-medium text-gray-800">Increased Customer Engagement</h3>
                </div>
                <span className="text-[24px] text-gray-800 font-light">+</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-gray-200 pb-6 cursor-pointer hover:text-[#3b82f6] transition-colors">
                <div className="flex items-center gap-6">
                  <span className="text-[14px] text-gray-500 font-medium w-6">02.</span>
                  <h3 className="text-[20px] font-medium text-gray-800">Enhanced Training Experiences</h3>
                </div>
                <span className="text-[24px] text-gray-800 font-light">+</span>
              </div>
              
              <div className="flex justify-between items-center border-b border-gray-200 pb-6 cursor-pointer hover:text-[#3b82f6] transition-colors">
                <div className="flex items-center gap-6">
                  <span className="text-[14px] text-gray-500 font-medium w-6">03.</span>
                  <h3 className="text-[20px] font-medium text-gray-800">Reduced Costs</h3>
                </div>
                <span className="text-[24px] text-gray-800 font-light">+</span>
              </div>
              
            </div>
          </div>

          {/* Right: Text and Image */}
          <div className="space-y-12 pt-4">
            <p className="text-[17px] md:text-[18px] text-[#333] leading-[1.8]">
              We leverage immersive technologies to bring a robust transformation in the overall functioning of industries. With immersive technologies, Novac aims to stimulate effective staff training, augment marketing efforts, improved customer experience, and enhanced design and production efficiency while delivering greater engagement and salience by bridging the gap between the physical and virtual worlds.
            </p>
            <div className="w-full h-[350px] bg-gray-200 overflow-hidden relative">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1626387346567-68d1bf768a48?auto=format&fit=crop&q=80")' }}
              ></div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Industries We Serve (Dark Blue) */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 bg-[#0b132b] text-white">
        <div className="max-w-[1300px] mx-auto">
          
          <div className="text-center mb-20">
            <h2 className="text-[32px] md:text-[44px] font-medium text-white">Industries We Serve</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 max-w-[1100px] mx-auto">
            
            {/* Row 1 */}
            <div className="flex items-center gap-6 border-b border-gray-700/50 pb-8">
              <svg className="w-10 h-10 text-white flex-shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 26H22C24.2 26 26 24.2 26 22L18 8V4H14V8L6 22C6 24.2 7.8 26 10 26Z" />
                <path d="M11 20H21" className="text-[#3b82f6]" strokeWidth="2"/>
                <path d="M12 4H20" strokeLinecap="round" />
              </svg>
              <h3 className="text-[18px] font-medium">Chemical, Oil & Gas</h3>
            </div>

            <div className="flex items-center gap-6 border-b border-gray-700/50 pb-8">
              <svg className="w-10 h-10 text-white flex-shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="6" y="18" width="12" height="8" rx="2" transform="rotate(-45 6 18)" />
                <path d="M18 10L24 4C25.1 2.9 27 2.9 28.1 4C29.2 5.1 29.2 7 28.1 8.1L22 14" strokeLinecap="round" />
                <circle cx="26" cy="6" r="1.5" className="text-[#3b82f6]" stroke="currentColor" />
              </svg>
              <h3 className="text-[18px] font-medium">Automotive and Manufacturing</h3>
            </div>

            <div className="flex items-center gap-6 border-b border-gray-700/50 pb-8">
              <svg className="w-10 h-10 text-white flex-shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 14V28H28V14M2 14H30M4 14L8 6H24L28 14" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="12" y="14" width="8" height="14" className="text-[#3b82f6]" stroke="currentColor" />
                <path d="M14 21L16 19L18 21L17 25H15L14 21Z" className="text-[#3b82f6]" fill="currentColor" stroke="none" />
              </svg>
              <h3 className="text-[18px] font-medium">Retail and Consumer brands</h3>
            </div>

            {/* Row 2 */}
            <div className="flex items-center gap-6 pt-4">
              <svg className="w-10 h-10 text-white flex-shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 4C16 4 6 8 6 16C6 24 16 30 16 30C16 30 26 24 26 16C26 8 16 4 16 4Z" />
                <path d="M11 16L15 20L21 12" className="text-[#3b82f6]" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-[18px] font-medium">Health & Safety Training</h3>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <svg className="w-10 h-10 text-white flex-shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 28C16 28 4 18.5 4 11C4 7 7 4 11 4C13.5 4 15 5.5 16 7C17 5.5 18.5 4 21 4C25 4 28 7 28 11C28 18.5 16 28 16 28Z" strokeLinejoin="round" />
                <path d="M10 14L13 14L15 10L17 18L19 14L22 14" className="text-[#3b82f6]" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-[18px] font-medium">Healthcare & Pharma</h3>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <svg className="w-10 h-10 text-white flex-shrink-0" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 28V12M16 12H26V28M16 12L21 6L26 12M6 28V16H16" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="10" y="20" width="2" height="2" className="text-[#3b82f6]" fill="currentColor" stroke="none" />
                <rect x="10" y="24" width="2" height="2" className="text-[#3b82f6]" fill="currentColor" stroke="none" />
                <rect x="20" y="16" width="2" height="2" className="text-[#3b82f6]" fill="currentColor" stroke="none" />
                <rect x="20" y="20" width="2" height="2" className="text-[#3b82f6]" fill="currentColor" stroke="none" />
              </svg>
              <h3 className="text-[18px] font-medium">Real Estate</h3>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
