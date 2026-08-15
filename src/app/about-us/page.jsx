"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function AboutUsPage() {
  const containerRef = useRef(null);
  
  // Animation state
  const [videoWidth, setVideoWidth] = useState(60); // vw
  const [videoHeight, setVideoHeight] = useState(50); // vh
  const [borderRadius, setBorderRadius] = useState(20); // px
  const [headingOpacity, setHeadingOpacity] = useState(1);
  const [headingY, setHeadingY] = useState(0); // translateY
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      let progress = 0;
      if (top <= 0) {
         progress = Math.min(Math.max(-top / (height - windowHeight), 0), 1);
      }
      
      // Calculate animated values based on scroll progress (0 to 1)
      const w = 60 + (progress * 40); // 60vw to 100vw
      const h = 50 + (progress * 50); // 50vh to 100vh
      const br = 20 * (1 - Math.min(progress * 1.5, 1)); // 20px to 0px (faster)
      const op = Math.max(1 - (progress * 2.5), 0); // Fade out heading smoothly
      const hy = -(progress * 100); // Move heading up
      
      setVideoWidth(w);
      setVideoHeight(h);
      setBorderRadius(br);
      setHeadingOpacity(op);
      setHeadingY(hy);
      
      if (progress > 0.8) {
         setIsExpanded(true);
      } else {
         setIsExpanded(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#081229] font-sans overflow-x-hidden">
{/* Hero Scroll Animation Section */}
      <div ref={containerRef} className="h-[250vh] relative bg-[#081229]">
        
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          
          {/* Heading */}
          <div 
            className="absolute top-[15%] text-center w-full z-10 transition-all duration-75"
            style={{ 
              opacity: headingOpacity,
              transform: `translateY(${headingY}px)`
            }}
          >
            <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-medium text-white tracking-tight">
              <span className="text-[#0d6efd]">Scale</span> up to New Heights with Novac!
            </h1>
          </div>
          
          {/* Video Element */}
          <div 
            className="relative bg-black flex items-center justify-center overflow-hidden transition-all duration-75 ease-out shadow-2xl z-20"
            style={{ 
              width: `${videoWidth}vw`, 
              height: `${videoHeight}vh`,
              borderRadius: `${borderRadius}px`
            }}
          >
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover opacity-80"
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-city-traffic-on-a-bridge-at-night-34676-large.mp4" type="video/mp4" />
            </video>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {isExpanded ? (
                /* Expanded state: Rotating Text with Play Icon */
                <div className="relative w-40 h-40 flex items-center justify-center pointer-events-auto cursor-pointer group">
                  <div className="absolute inset-0 animate-[spin_10s_linear_infinite] flex items-center justify-center text-white/80">
                     <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                        <path id="circlePath" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                        <text fontSize="12" letterSpacing="3.5" fontWeight="500" fill="currentColor">
                           <textPath href="#circlePath" startOffset="0%">WATCH VIDEO • WATCH VIDEO • </textPath>
                        </text>
                     </svg>
                  </div>
                  {/* Play Icon */}
                  <div className="w-16 h-16 rounded-full bg-transparent flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              ) : (
                /* Initial state: Solid Green Circle */
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#109c71] flex items-center justify-center pointer-events-auto cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl">
                  <span className="text-white font-medium text-sm md:text-base tracking-wide">Play</span>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Rest of the page content */}
      <div className="relative z-30 bg-white pt-20 px-6 lg:px-12 pb-32">
         <div className="max-w-[1300px] mx-auto">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[14px] text-gray-500 mb-20 font-medium">
               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
               <span className="text-gray-300 mx-1">&gt;</span>
               <span>About Us</span>
            </div>
            
            {/* Split Content */}
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
               {/* Left Side */}
               <div className="w-full lg:w-[45%]">
                  <h2 className="text-[36px] md:text-[44px] font-normal leading-[1.2] text-[#111] tracking-tight">
                     <span className="text-[#2c4ec7]">Building Solutions</span><br/>
                     for the Future
                  </h2>
               </div>
               
               {/* Right Side */}
               <div className="w-full lg:w-[55%] flex flex-col gap-6 text-[#212529]">
                  <h3 className="text-[20px] md:text-[22px] font-normal leading-[1.6]">
                     Welcome to Novac Technology Solutions, a pioneer in technology and digital transformation solutions.
                  </h3>
                  
                  <p className="text-[15px] leading-[1.8] font-light text-gray-600">
                     We are driven by a passion for creativity, enabling us to deliver cutting-edge solutions across diverse industries. Our expertise spans Financial Services, Insurance, Digital Learning, and Immersive Technology, empowering businesses on their path to embracing the transformation.
                  </p>
                  
                  <p className="text-[15px] leading-[1.8] font-light text-gray-600">
                     Guided by an unwavering commitment to excellence, we harness emerging technologies to help our clients optimize costs, enhance quality, and secure competitive advantages in a rapidly changing marketplace. Our values, rooted in integrity and nurturing enduring relationships, inspire us to not just meet, but exceed expectations, fostering steadfast client loyalty. And our offerings are characterized by efficiency, integrity, and a forward-looking perspective, poised to tackle the challenges of the future.
                  </p>
               </div>
            </div>
            
            {/* Industries Row */}
            <div className="mt-20 border-t border-gray-100 flex overflow-x-auto no-scrollbar">
               {[
                 { name: 'FinTech', icon: <svg className="w-6 h-6 text-[#212529] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg> },
                 { name: 'InsurTech', icon: <svg className="w-6 h-6 text-[#212529] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
                 { name: 'Digital Learning', icon: <svg className="w-6 h-6 text-[#212529] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
                 { name: 'ImmersiveTech', icon: <svg className="w-6 h-6 text-[#212529] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /></svg> }
               ].map((item, idx) => (
                 <div key={idx} className={`min-w-[200px] flex-1 flex flex-col items-center justify-center py-10 ${idx !== 0 ? 'border-l border-gray-100' : ''}`}>
                    {item.icon}
                    <span className="text-[14px] text-gray-700 font-medium">{item.name}</span>
                 </div>
               ))}
            </div>
         </div>
      </div>
      
      {/* Novac's Mantra and Promise Section */}
      <section className="relative z-30 bg-[#f4f7f9] pt-20 pb-0 overflow-hidden border-t border-b border-gray-200" onMouseLeave={() => setHoveredIndex(null)}>
         <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
            <h2 className="text-[32px] md:text-[40px] font-normal text-[#111] leading-[1.2] mb-8">
               <span className="text-[#2c4ec7]">Novac's</span> Mantra and Promise
            </h2>
            <p className="text-[16px] text-[#333] max-w-3xl mb-16 leading-[1.6]">
               At Novac, we leverage the potential of design, leading-edge engineering, and cloud technology to create product and solutions that are primed for the future.
            </p>
         </div>
         
         <div className="w-full">
            <Swiper
               modules={[Autoplay]}
               spaceBetween={0}
               slidesPerView={1.5}
               breakpoints={{
                  640: { slidesPerView: 2.5 },
                  1024: { slidesPerView: 4.5 },
                  1280: { slidesPerView: 5.5 }
               }}
               loop={true}
               autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
               className="h-[300px] bg-white border-y border-gray-200"
            >
               {[
                  { title: "Customer First", text: "Prioritize customer experience with discipline, exceeding expectations effortlessly.", icon: <svg className="w-8 h-8 mb-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
                  { title: "Ardent in What We Do", text: "We go the extra mile to strive for excellence and have fun in what we do", icon: <svg className="w-8 h-8 mb-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                  { title: "Employee Primus", text: "We take care of our employees, who are the pillars of strength that the company is built on", icon: <svg className="w-8 h-8 mb-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> },
                  { title: "Integrity Is with in Us", text: "We are consistent, honest, and fair to maintain our ethics in all our services", icon: <svg className="w-8 h-8 mb-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg> },
                  { title: "Constantly Innovating", text: "We strive to place our mark in cloud technology and continuously look to improve ourselves in", icon: <svg className="w-8 h-8 mb-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg> },
                  { title: "Discipline Is Wisdom", text: "Responsibility is in our DNA. We deliver on all of our commitments honoring the discipline with in", icon: <svg className="w-8 h-8 mb-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
               ].map((item, idx) => (
                  <SwiperSlide key={idx}>
                     {({ isActive }) => {
                        // Expand if it's the hovered one, or if nothing is hovered, default to the Swiper's active slide.
                        const isExpanded = hoveredIndex !== null ? hoveredIndex === idx : isActive;
                        
                        return (
                           <div 
                              onMouseEnter={() => setHoveredIndex(idx)}
                              className={`h-[300px] border-r border-gray-100 p-8 flex flex-col transition-all duration-300 ${isExpanded ? 'bg-gradient-to-b from-[#eaf0ff] to-[#8eb7ff] text-[#111] shadow-inner' : 'bg-white text-gray-500'}`}
                           >
                              {item.icon}
                              <h4 className={`text-[18px] font-normal mb-4 ${isExpanded ? 'text-[#111]' : 'text-[#333]'}`}>{item.title}</h4>
                              <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                 <p className="text-[14px] leading-[1.6] opacity-90 font-light">
                                    {item.text}
                                 </p>
                              </div>
                           </div>
                        );
                     }}
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
      
      {/* Certifications & Standards Section */}
      <section className="relative z-30 bg-white py-20">
         <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
            
            <div className="text-center mb-16">
               <h2 className="text-[32px] md:text-[40px] font-normal leading-[1.2] mb-6">
                  <span className="text-[#2c4ec7]">Certifications & Standards</span>
               </h2>
               <p className="text-[16px] md:text-[18px] text-[#333] max-w-4xl mx-auto leading-[1.6]">
                  We maintain high standards and follow certified frameworks and delivery methods on par with the industry standards for both ourselves and our clients.
               </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* Card 1 */}
               <div className="border border-gray-200 p-8 md:p-12 bg-white hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-10 h-[80px]">
                     <img 
                        src="https://cdn.novactech.com/uploads/QUALITY_MANAGEMENT_80146aee15.webp" 
                        alt="CMMI Level 5" 
                        className="h-full object-contain"
                     />
                  </div>
                  <h3 className="text-[22px] font-normal text-[#111] mb-6">
                     QUALITY MANAGEMENT
                  </h3>
                  <p className="text-[15px] leading-[1.8] text-gray-600 font-light">
                     Novac is currently at Level 5 in the Capability Maturity Model Integration (CMMI)® V2.0, representing the commitment to developing high-quality software solutions and unparalleled delivery standards. NOVAC has focused on and invested significant effort in establishing methods, processes, procedures, and techniques to support our services. Each system or solution is developed by adhering to the industry's best practice and continuous practical experience.
                  </p>
               </div>
               
               {/* Card 2 */}
               <div className="border border-gray-200 p-8 md:p-12 bg-white hover:shadow-xl transition-shadow duration-300">
                  <div className="mb-10 h-[80px]">
                     <img 
                        src="https://cdn.novactech.com/uploads/INFORMATION_SECURITY_5416a55da8.webp" 
                        alt="ISO 27001" 
                        className="h-full object-contain"
                     />
                  </div>
                  <h3 className="text-[22px] font-normal text-[#111] mb-6">
                     INFORMATION SECURITY
                  </h3>
                  <p className="text-[15px] leading-[1.8] text-gray-600 font-light">
                     NOVAC is pleased to announce that in April 2025, we successfully obtained ISO 27001:2022 certification. This is an excellent boost to our Business Management Systems and something very relevant to the future. Clients migrating to cloud-based services and solutions might need to know about the security of the systems and data. We look forward to working alongside with our clients and leading the way with service excellence.
                  </p>
               </div>
            </div>

         </div>
      </section>
      
      {/* Fostering Inclusivity and Diversity Section */}
      <section className="relative z-30 bg-[#081229] py-24">
         <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
            
            {/* Title */}
            <div className="mb-12">
               <h2 className="text-[32px] md:text-[40px] font-normal leading-[1.3] text-white">
                  <span className="text-[#2c4ec7]">Fostering</span> Inclusivity and Diversity: <br className="hidden md:block" />
                  Our Commitment to a Welcoming Workplace Culture
               </h2>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
               
               {/* Left Side: Image */}
               <div className="w-full lg:w-[45%]">
                  <div className="overflow-hidden">
                     <img 
                        src="https://cdn.novactech.com/uploads/image11_d3f37ca6f4.webp" 
                        alt="Diversity and Inclusivity" 
                        className="w-full h-auto object-cover"
                     />
                  </div>
               </div>
               
               {/* Right Side: Content */}
               <div className="w-full lg:w-[55%] flex flex-col gap-6 text-white/90">
                  <h3 className="text-[18px] md:text-[20px] font-normal leading-[1.6] text-white">
                     At Novac Technology Solutions, we are committed to creating an inclusive and diverse work culture that supports all voices, values, and thoughts.
                  </h3>
                  
                  <p className="text-[15px] leading-[1.8] font-light text-white/80">
                     We believe that a diverse workforce fosters creativity, innovation, and productivity. We are dedicated to creating a work culture where everyone feels respected, heard, and valued. We actively recruit talent from all backgrounds and strive to create a safe and supportive environment for all employees. Our commitment to inclusivity and diversity is reflected in our policies, procedures, and practices.
                  </p>
                  
                  <p className="text-[15px] leading-[1.8] font-light text-white/80">
                     At Novac, we firmly believe that exceptional achievements begin by recruiting, applauding, and fostering the most exceptional individuals from diverse backgrounds.
                  </p>
                  
                  <p className="text-[16px] font-normal text-white mt-2">
                     Ready to shape the future of businesses?
                  </p>
                  
                  <div className="mt-4">
                     <a href="/careers" className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-white hover:bg-white hover:text-[#081229] text-white font-medium transition-colors">
                        Join Us
                     </a>
                  </div>
               </div>
               
            </div>
         </div>
      </section>

      {/* Awards & Recognitions Section */}
      <section className="relative z-30 bg-white py-24 overflow-hidden">
         <div className="max-w-[1300px] mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-[32px] md:text-[40px] font-normal leading-[1.2] text-[#111] mb-16">
               Awards & Recognitions
            </h2>
            
            <div className="w-full relative pb-12">
               <Swiper
                  modules={[Autoplay, Pagination]}
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{
                     640: { slidesPerView: 2 },
                     1024: { slidesPerView: 3 },
                     1280: { slidesPerView: 4 }
                  }}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{ clickable: true, el: '.awards-pagination' }}
                  className="w-full"
               >
                  {[
                     { title: "Best Workplaces for Women (2019 - 2021)", image: "https://cdn.novactech.com/uploads/100_Women_d172911ed8.png" },
                     { title: "Commitment to Being a Great Place to Work", image: "https://cdn.novactech.com/uploads/Great_place_8ba981af5b.png" },
                     { title: "Emerging IT Company Of The Year", image: "https://cdn.novactech.com/uploads/client10_removebg_preview_0ff4a4abab.png" },
                     { title: "ET Best Brands 2021", image: "https://cdn.novactech.com/uploads/client7_removebg_preview_bd5c76dbc8.png" },
                     { title: "ET Best Workplaces for Women 2021", image: "https://cdn.novactech.com/uploads/client6_removebg_preview_cc0fd461c4.png" },
                     { title: "Innovation In Learning Services", image: "https://cdn.novactech.com/uploads/client13_removebg_preview_dcd8e07a04.png" },
                     { title: "Best Customer Engagement Initiative of the Year", image: "https://cdn.novactech.com/uploads/client8_removebg_preview_780e298ac8.png" },
                     { title: "India’s Best Workplaces in IT & IT-BPM (2014 - 2023)", image: "https://cdn.novactech.com/uploads/Best_Work_Place_e7682bea46.png" },
                     { title: "Gold for Blended Learning", image: "https://cdn.novactech.com/uploads/gold_brandon_f0db24e22f.png" },
                     { title: "Gold for Custom Content Development", image: "https://cdn.novactech.com/uploads/gold_brandon_f0db24e22f.png" },
                     { title: "Silver for Best use of AI in Training", image: "https://cdn.novactech.com/uploads/silver_best_use_ai_in_training_brandon_78ba58ad81.png" },
                     { title: "Silver for Best use of AI in Learning (International)", image: "https://cdn.novactech.com/uploads/silver_best_use_ai_in_training_learning_international_ltawards_94c2b96e15.png" }
                  ].map((award, idx) => (
                     <SwiperSlide key={idx}>
                        <div className="flex flex-col items-center h-full">
                           {/* Gray box for image */}
                           <div className="w-full aspect-[4/3] bg-[#f9f9f9] flex items-center justify-center p-6 mb-6">
                              <img 
                                 src={award.image} 
                                 alt={award.title} 
                                 className="max-w-full max-h-full object-contain mix-blend-multiply"
                              />
                           </div>
                           {/* Award Title */}
                           <h4 className="text-[15px] leading-[1.5] font-normal text-[#333] px-2">
                              {award.title}
                           </h4>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
               
               {/* Custom Pagination Container */}
               <div className="awards-pagination flex justify-center gap-2 mt-12 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:bg-gray-300 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:bg-black"></div>
            </div>
         </div>
      </section>

      {/* Journeying Together Section */}
      <section className="relative z-30 bg-[#081229] py-24 overflow-hidden">
         <style>{`
            @keyframes scroll-left {
               0% { transform: translateX(0); }
               100% { transform: translateX(-50%); }
            }
            .animate-scroll-left {
               animation: scroll-left 40s linear infinite;
            }
            .pause-on-hover:hover .animate-scroll-left {
               animation-play-state: paused;
            }
         `}</style>
         
         <div className="max-w-[1300px] mx-auto px-6 lg:px-12 text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-normal leading-[1.2] text-white mb-6">
               Journeying <span className="text-[#2c4ec7]">Together</span>
            </h2>
            <p className="text-[16px] md:text-[18px] text-white/80 max-w-4xl mx-auto leading-[1.6]">
               Discover our varied client base, showcasing our prowess in delivering customized products & solutions across industries. Experience excellence in every partnership.
            </p>
         </div>
         
         {/* Marquee Container */}
         <div className="w-full relative pause-on-hover pb-10">
            {/* First Row: Moving Left */}
            <div className="flex w-[200%] animate-scroll-left items-center">
               {[
                  { img: "https://cdn.novactech.com/uploads/clientlo1_c94744c811.png", hover: "https://cdn.novactech.com/uploads/clientclr1_6b794d9dc2.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo2_bac82200b3.png", hover: "https://cdn.novactech.com/uploads/clientclr2_0e67bc066c.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo3_74ea908d0e.png", hover: "https://cdn.novactech.com/uploads/clientclr3_e00c8dd39c.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo4_917ce574db.png", hover: "https://cdn.novactech.com/uploads/clientclr4_83917b0c51.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo5_fd64f61155.png", hover: "https://cdn.novactech.com/uploads/clientclr5_4899e4139d.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo6_59248386be.png", hover: "https://cdn.novactech.com/uploads/clientclr6_21a8318120.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo7_224d73dfca.png", hover: "https://cdn.novactech.com/uploads/clientclr7_5f3d7a86ae.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo8_ce885ded64.png", hover: "https://cdn.novactech.com/uploads/clientclr8_ee54ae9aff.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo9_2597030c07.png", hover: "https://cdn.novactech.com/uploads/clientclr9_bb9bba28cb.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo10_41ce0f1012.png", hover: "https://cdn.novactech.com/uploads/clientclr10_73dcd30e24.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo11_666129997f.png", hover: "https://cdn.novactech.com/uploads/clientclr11_069c7524f7.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo12_c49204193c.png", hover: "https://cdn.novactech.com/uploads/clientclr12_6d44446e09.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo13_b430602fa3.png", hover: "https://cdn.novactech.com/uploads/clientclr13_de649fa49f.png" },
                  
                  // Duplicate for seamless loop
                  { img: "https://cdn.novactech.com/uploads/clientlo1_c94744c811.png", hover: "https://cdn.novactech.com/uploads/clientclr1_6b794d9dc2.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo2_bac82200b3.png", hover: "https://cdn.novactech.com/uploads/clientclr2_0e67bc066c.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo3_74ea908d0e.png", hover: "https://cdn.novactech.com/uploads/clientclr3_e00c8dd39c.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo4_917ce574db.png", hover: "https://cdn.novactech.com/uploads/clientclr4_83917b0c51.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo5_fd64f61155.png", hover: "https://cdn.novactech.com/uploads/clientclr5_4899e4139d.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo6_59248386be.png", hover: "https://cdn.novactech.com/uploads/clientclr6_21a8318120.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo7_224d73dfca.png", hover: "https://cdn.novactech.com/uploads/clientclr7_5f3d7a86ae.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo8_ce885ded64.png", hover: "https://cdn.novactech.com/uploads/clientclr8_ee54ae9aff.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo9_2597030c07.png", hover: "https://cdn.novactech.com/uploads/clientclr9_bb9bba28cb.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo10_41ce0f1012.png", hover: "https://cdn.novactech.com/uploads/clientclr10_73dcd30e24.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo11_666129997f.png", hover: "https://cdn.novactech.com/uploads/clientclr11_069c7524f7.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo12_c49204193c.png", hover: "https://cdn.novactech.com/uploads/clientclr12_6d44446e09.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo13_b430602fa3.png", hover: "https://cdn.novactech.com/uploads/clientclr13_de649fa49f.png" }
               ].map((logo, idx) => (
                  <div key={idx} className="w-1/2 flex-none md:w-1/3 lg:w-1/6 px-8 flex justify-center items-center group relative h-24">
                     <img src={logo.img} alt="Client Logo" className="absolute w-3/4 h-3/4 object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                     <img src={logo.hover} alt="Client Logo Hover" className="absolute w-3/4 h-3/4 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
               ))}
            </div>

            {/* Second Row: Moving Left (Faster or slightly offset for variation) */}
            <div className="flex w-[200%] animate-scroll-left items-center mt-12" style={{ animationDelay: '-20s' }}>
               {[
                  { img: "https://cdn.novactech.com/uploads/clientlo14_087919fcae.png", hover: "https://cdn.novactech.com/uploads/clientclr14_19c8e15820.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo15_662098d235.png", hover: "https://cdn.novactech.com/uploads/clientclr15_390e0673c4.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo16_628c216fae.png", hover: "https://cdn.novactech.com/uploads/clientclr16_cbebb7174c.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo17_20daced788.png", hover: "https://cdn.novactech.com/uploads/clientclr17_bbc27643fc.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo18_e01ad427f2.png", hover: "https://cdn.novactech.com/uploads/clientclr18_65d37c3e60.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo19_2e98bd7115.png", hover: "https://cdn.novactech.com/uploads/clientclr19_8038e5ed57.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo20_96f78b8556.png", hover: "https://cdn.novactech.com/uploads/clientclr20_7d2bd921b6.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo21_16ff914e84.png", hover: "https://cdn.novactech.com/uploads/clientclr21_928a86d132.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo22_d9808d3487.png", hover: "https://cdn.novactech.com/uploads/clientclr22_3a5d365f20.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo23_7bcc788f85.png", hover: "https://cdn.novactech.com/uploads/clientclr23_fc2178ffd1.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo24_0d8a999b36.png", hover: "https://cdn.novactech.com/uploads/clientclr24_3778475320.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo25_e6761cedaf.png", hover: "https://cdn.novactech.com/uploads/clientclr25_f2ca2ff6e2.png" },
                  
                  // Duplicate for seamless loop
                  { img: "https://cdn.novactech.com/uploads/clientlo14_087919fcae.png", hover: "https://cdn.novactech.com/uploads/clientclr14_19c8e15820.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo15_662098d235.png", hover: "https://cdn.novactech.com/uploads/clientclr15_390e0673c4.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo16_628c216fae.png", hover: "https://cdn.novactech.com/uploads/clientclr16_cbebb7174c.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo17_20daced788.png", hover: "https://cdn.novactech.com/uploads/clientclr17_bbc27643fc.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo18_e01ad427f2.png", hover: "https://cdn.novactech.com/uploads/clientclr18_65d37c3e60.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo19_2e98bd7115.png", hover: "https://cdn.novactech.com/uploads/clientclr19_8038e5ed57.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo20_96f78b8556.png", hover: "https://cdn.novactech.com/uploads/clientclr20_7d2bd921b6.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo21_16ff914e84.png", hover: "https://cdn.novactech.com/uploads/clientclr21_928a86d132.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo22_d9808d3487.png", hover: "https://cdn.novactech.com/uploads/clientclr22_3a5d365f20.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo23_7bcc788f85.png", hover: "https://cdn.novactech.com/uploads/clientclr23_fc2178ffd1.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo24_0d8a999b36.png", hover: "https://cdn.novactech.com/uploads/clientclr24_3778475320.png" },
                  { img: "https://cdn.novactech.com/uploads/clientlo25_e6761cedaf.png", hover: "https://cdn.novactech.com/uploads/clientclr25_f2ca2ff6e2.png" }
               ].map((logo, idx) => (
                  <div key={idx} className="w-1/2 flex-none md:w-1/3 lg:w-1/6 px-8 flex justify-center items-center group relative h-24">
                     <img src={logo.img} alt="Client Logo" className="absolute w-3/4 h-3/4 object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                     <img src={logo.hover} alt="Client Logo Hover" className="absolute w-3/4 h-3/4 object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Become a Novacan Section */}
      <section className="relative z-30 bg-gradient-to-b from-white to-[#eaeff8] py-24 overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            
            <h2 className="text-[32px] md:text-[44px] font-normal text-[#111] mb-6">
               Become a Novacan
            </h2>
            
            <p className="text-[16px] md:text-[18px] text-[#555] font-light max-w-2xl mx-auto leading-[1.8] mb-10">
               Are you someone who revels in doing the unexpected and extraordinary? <br className="hidden md:block" />
               Join us in our journey to innovate, create, and make a lasting impact.
            </p>
            
            <div className="mb-20">
               <a href="/careers" className="inline-block px-10 py-3.5 bg-[#0d6efd] hover:bg-[#0b5ed7] text-white font-medium transition-colors shadow-lg shadow-blue-500/30">
                  Join Us
               </a>
            </div>
            
            {/* Image Collage Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-end">
               
               {/* Col 1 */}
               <div className="flex flex-col gap-4 md:gap-6">
                  <div className="rounded-xl overflow-hidden h-32 md:h-48 shadow-lg">
                     <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80" alt="Office Life" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden h-32 md:h-40 shadow-lg">
                     <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80" alt="Office Fun" className="w-full h-full object-cover" />
                  </div>
               </div>
               
               {/* Col 2 */}
               <div className="rounded-xl overflow-hidden h-48 md:h-[340px] shadow-xl">
                  <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=500&q=80" alt="Team Discussion" className="w-full h-full object-cover" />
               </div>
               
               {/* Col 3 - Center (Tallest) */}
               <div className="rounded-xl overflow-hidden h-56 md:h-[400px] shadow-2xl relative -bottom-4 md:-bottom-8">
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80" alt="Team Work" className="w-full h-full object-cover" />
               </div>
               
               {/* Col 4 */}
               <div className="rounded-xl overflow-hidden h-48 md:h-[340px] shadow-xl">
                  <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=500&q=80" alt="VR Innovation" className="w-full h-full object-cover" />
               </div>
               
               {/* Col 5 */}
               <div className="flex flex-col gap-4 md:gap-6">
                  <div className="rounded-xl overflow-hidden h-32 md:h-40 shadow-lg">
                     <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80" alt="Award Celebration" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-xl overflow-hidden h-32 md:h-48 shadow-lg">
                     <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80" alt="Meeting" className="w-full h-full object-cover" />
                  </div>
               </div>
               
            </div>
         </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative z-30 bg-white py-24 border-t border-gray-100">
         <div className="max-w-[1300px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
               
               {/* Left: Contact Info */}
               <div className="w-full lg:w-5/12 flex flex-col justify-center">
                  <h2 className="text-[32px] md:text-[44px] font-normal text-[#111] leading-[1.2] mb-6">
                     Ready to <span className="text-[#2c4ec7]">transform</span> your business?
                  </h2>
                  <p className="text-[16px] text-gray-600 font-light leading-[1.8] mb-10">
                     Whether you're looking to modernize your operations, build a custom solution, or explore cloud technologies, our team is ready to help you navigate the future. Drop us a line and let's start a conversation.
                  </p>
                  
                  <div className="flex flex-col gap-6">
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#f4f7f9] flex items-center justify-center shrink-0">
                           <svg className="w-5 h-5 text-[#2c4ec7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <div>
                           <h4 className="text-[15px] font-medium text-[#111] mb-1">Email Us</h4>
                           <a href="mailto:info@novactech.com" className="text-[15px] text-gray-600 hover:text-[#2c4ec7] transition-colors">info@novactech.com</a>
                        </div>
                     </div>
                     
                     <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#f4f7f9] flex items-center justify-center shrink-0">
                           <svg className="w-5 h-5 text-[#2c4ec7]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        </div>
                        <div>
                           <h4 className="text-[15px] font-medium text-[#111] mb-1">Call Us</h4>
                           <a href="tel:+914443923200" className="text-[15px] text-gray-600 hover:text-[#2c4ec7] transition-colors">+91 44 4392 3200</a>
                        </div>
                     </div>
                  </div>
               </div>
               
               {/* Right: Form */}
               <div className="w-full lg:w-7/12">
                  <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 md:p-10 border border-gray-100">
                     <form className="flex flex-col gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div>
                              <label className="block text-[13px] font-medium text-gray-700 mb-2">First Name</label>
                              <input type="text" className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c4ec7]/20 focus:border-[#2c4ec7] transition-all" placeholder="John" />
                           </div>
                           <div>
                              <label className="block text-[13px] font-medium text-gray-700 mb-2">Last Name</label>
                              <input type="text" className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c4ec7]/20 focus:border-[#2c4ec7] transition-all" placeholder="Doe" />
                           </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div>
                              <label className="block text-[13px] font-medium text-gray-700 mb-2">Work Email</label>
                              <input type="email" className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c4ec7]/20 focus:border-[#2c4ec7] transition-all" placeholder="john@company.com" />
                           </div>
                           <div>
                              <label className="block text-[13px] font-medium text-gray-700 mb-2">Phone Number</label>
                              <input type="tel" className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c4ec7]/20 focus:border-[#2c4ec7] transition-all" placeholder="+1 (555) 000-0000" />
                           </div>
                        </div>
                        
                        <div>
                           <label className="block text-[13px] font-medium text-gray-700 mb-2">How can we help?</label>
                           <textarea rows="4" className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c4ec7]/20 focus:border-[#2c4ec7] transition-all resize-none" placeholder="Tell us about your project or inquiry..."></textarea>
                        </div>
                        
                        <button type="button" className="w-full py-4 bg-[#f89520] hover:bg-[#e0861c] text-white font-medium rounded-lg transition-colors shadow-lg shadow-orange-500/25 mt-2">
                           Send Message
                        </button>
                     </form>
                  </div>
               </div>
               
            </div>
         </div>
      </section>

      <div className="relative z-30 bg-white">
</div>
    </div>
  );
}
