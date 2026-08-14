"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home as HomeIcon, Monitor, Box, Award, ShieldCheck, Users, Server, Briefcase } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import Clients from '../../../components/Clients';
import Contact from '../../../components/Contact';

export default function DigitalLearningPage() {
  return (
    <div className="bg-[#000000] min-h-screen text-white selection:bg-[#ff7f00] selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-[#040026] pt-32 pb-24 px-6 lg:px-12 overflow-hidden min-h-[60vh] flex items-center">
        {/* Abstract wavy background elements using CSS gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[100%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#00A2FF]/20 via-[#040026] to-transparent blur-3xl"></div>
          <div className="absolute -bottom-[30%] -left-[10%] w-[60%] h-[80%] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ff7f00]/10 via-[#040026] to-transparent blur-3xl"></div>
        </div>

        <div className="max-w-[1300px] mx-auto relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-[40px] leading-[56px] font-normal mb-6 text-white text-balance">
              <span className="text-gray-300 text-[24px] block mb-2 font-light">Accelerate your Workforce Training with Novac -</span>
              A Trusted <span className="text-[#00A2FF]">eLearning</span> Solutions Provider
            </h1>
            
            <p className="text-[20px] leading-[34px] font-normal text-gray-300 mb-10 text-balance">
              Empowering businesses to elevate their training programs and achieve unparalleled results with immersive digital experiences and interactive content.
            </p>
            
            <Link 
              href="#demo" 
              className="inline-flex items-center justify-center bg-[#D4AF37] border border-[#D4AF37] text-white font-medium px-8 py-3.5 rounded hover:bg-transparent hover:text-[#00A2FF] hover:border-[#00A2FF] transition-all"
            >
              Book a Demo
            </Link>
          </div>
          
          {/* Hero Stats/Image Area */}
          <div className="relative flex justify-center lg:justify-end">
             <div className="relative w-full max-w-md h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
               <img 
                 src="https://cdn.novactech.com/uploads/elearning_banner_72339cbb2f.webp" 
                 alt="eLearning Solutions" 
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#040026] to-transparent opacity-60"></div>
             </div>
             
             {/* Floating Stats */}
             <div className="absolute -left-10 bottom-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#00A2FF]/20 p-2 rounded text-[#00A2FF]"><Monitor size={20} /></div>
                  <div>
                    <div className="text-xl font-bold text-white">3000+</div>
                    <div className="text-xs text-gray-300">Hours of Learning<br/>Content Created</div>
                  </div>
                </div>
                <div className="w-full h-px bg-white/10"></div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#ff7f00]/20 p-2 rounded text-[#ff7f00]"><Users size={20} /></div>
                  <div>
                    <div className="text-xl font-bold text-white">200K+</div>
                    <div className="text-xs text-gray-300">Learners On-boarded</div>
                  </div>
                </div>
             </div>
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
              Solutions
            </Link>
            <ChevronRight size={16} className="mx-2 text-gray-400" />
            <span className="text-gray-800" aria-current="page">Digital Learning</span>
          </nav>
        </div>
      </div>

      <main className="w-full bg-white text-black">
        {/* About Section */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-[1300px] mx-auto">
            <div className="mb-12">
              <h2 className="text-[38px] md:text-[46px] leading-[1.2] font-normal text-[#212529] max-w-4xl">
                Create Next-gen Learning Experiences with Novac - <span className="text-[#00A2FF]">A Top eLearning Solutions Company</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative h-[400px] w-full rounded-tr-[100px] overflow-hidden">
                <img 
                  src="https://cdn.novactech.com/uploads/elearning_solutions_cd45c74582.webp" 
                  alt="Digital Learning Experiences" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center h-full pt-2 md:pt-6">
                <p className="text-[#212529] text-[20px] md:text-[22px] leading-[36px] font-normal mb-8">
                  At Novac, we are a pioneering force in learning and development, empowering businesses to elevate their training programs and achieve unparalleled results. Recognizing that each industry has distinct training needs, we specialize in reimagining workforce training with innovative solutions that drive engagement, boost knowledge retention, and deliver measurable outcomes.
                </p>
                <p className="text-gray-700 text-[16px] md:text-[18px] leading-[30px] font-normal mb-6">
                  We offer a spectrum of state-of-the-art custom eLearning solutions tailored to meet your organization's unique training needs. From immersive digital experiences to interactive content, we craft impactful programs that transform training.
                </p>
                <p className="text-gray-700 text-[16px] md:text-[18px] leading-[30px] font-normal">
                  By seamlessly integrating advanced technologies like Microlearning, scenario-based learning, and immersive applications like AR, VR, and MR, we enable businesses to scale their training initiatives with ease, unlocking their true potential for success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Transformation Section */}
        <section className="py-24 px-6 lg:px-12 bg-[#040026] text-white relative overflow-hidden">
          <div className="max-w-[1300px] mx-auto relative z-10">
            <div className="mb-16 max-w-3xl">
              <h2 className="text-[36px] md:text-[44px] leading-[1.2] font-normal mb-6">
                NOVAC - The Go-To <span className="text-[#ff7f00]">eLearning Solutions</span> Company for all Training Needs
              </h2>
              <p className="text-gray-400 text-[18px] leading-[32px]">
                With Novac, learners can transition from passive learning to immersive experiences using simulations and gamified elements, meeting the diverse learning needs of the workforce.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Item 1 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-[#00A2FF]/20 rounded-full flex items-center justify-center mb-6">
                  <Briefcase size={28} className="text-[#00A2FF]" />
                </div>
                <h3 className="text-[20px] font-medium mb-4">Proven Expertise</h3>
                <p className="text-gray-400 text-[15px] leading-[26px]">
                  A strong track record in designing and delivering impactful digital learning solutions and training programs across diverse industries.
                </p>
              </div>
              
              {/* Item 2 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-[#ff7f00]/20 rounded-full flex items-center justify-center mb-6">
                  <Award size={28} className="text-[#ff7f00]" />
                </div>
                <h3 className="text-[20px] font-medium mb-4">Preferred Learning Partner</h3>
                <p className="text-gray-400 text-[15px] leading-[26px]">
                  Recognized as a major player in the PSU sector, we are the trusted choice for learning partnerships.
                </p>
              </div>
              
              {/* Item 3 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-[#4DB8A0]/20 rounded-full flex items-center justify-center mb-6">
                  <Users size={28} className="text-[#4DB8A0]" />
                </div>
                <h3 className="text-[20px] font-medium mb-4">Experienced Team</h3>
                <p className="text-gray-400 text-[15px] leading-[26px]">
                  Our large team boasts over three decades of combined experience, with more than two decades devoted specifically to digital learning solutions.
                </p>
              </div>
              
              {/* Item 4 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mb-6">
                  <Monitor size={28} className="text-[#D4AF37]" />
                </div>
                <h3 className="text-[20px] font-medium mb-4">In-House Technology Support</h3>
                <p className="text-gray-400 text-[15px] leading-[26px]">
                  We possess robust in-house technology capabilities, ensuring seamless development and deployment of eLearning solutions.
                </p>
              </div>
              
              {/* Item 5 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-[#0A3A7A]/20 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck size={28} className="text-[#0A3A7A]" />
                </div>
                <h3 className="text-[20px] font-medium mb-4">Deep Domain Knowledge</h3>
                <p className="text-gray-400 text-[15px] leading-[26px]">
                  Our solutions are rooted in extensive knowledge of both the technological and educational aspects of learning.
                </p>
              </div>
              
              {/* Item 6 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
                <div className="w-14 h-14 bg-[#E03A3E]/20 rounded-full flex items-center justify-center mb-6">
                  <Server size={28} className="text-[#E03A3E]" />
                </div>
                <h3 className="text-[20px] font-medium mb-4">Data Center</h3>
                <p className="text-gray-400 text-[15px] leading-[26px]">
                  A state-of-the-art data center guarantees the reliability and security of your training programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Journeying Together */}
        <section className="py-20 bg-gray-50 text-center">
          <div className="max-w-[1300px] mx-auto px-6">
             <h2 className="text-[36px] md:text-[44px] leading-[1.2] font-normal text-[#212529] mb-4">
                Join the <span className="text-[#00A2FF]">200+ clients</span> who trust us
              </h2>
              <p className="text-gray-600 text-[18px] max-w-2xl mx-auto mb-12">
                Delivering eLearning Solutions excellence every day across enterprises and PSUs.
              </p>
          </div>
          <Clients />
        </section>

      </main>
      
      {/* Contact Section */}
      <div className="bg-[#041b25]">
        <Contact 
          title={<><span>Ready to Elevate Your Training?</span></>} 
          subtitle="Let's make things happen! Drop us a line, and we'll reach out to you promptly to discuss your eLearning needs." 
        />
      </div>

      <Footer />
    </div>
  );
}
