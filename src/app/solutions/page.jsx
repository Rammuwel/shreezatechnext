"use client";
import React from 'react';
import {
  GraduationCap, School, Landmark, Wallet, Stethoscope,
  Headset, Shield, Factory, Building, ShoppingCart, ArrowRight,
  Target, Zap, ShieldCheck, BarChart2
} from 'lucide-react';
import Link from 'next/link';
import TechStack from '../../components/TechStack';

export default function SolutionsPage() {
  const solutions = [
    {
      id: 'digital-learning',
      title: 'Digital Learning',
      description: 'Immersive eLearning platforms and LMS solutions that transform corporate training and educational delivery.',
      icon: <GraduationCap size={40} className="text-[#0A3A7A] group-hover:text-white transition-colors duration-300" />,
      features: ['LMS Development', 'Virtual Classrooms', 'Corporate Training', 'EdTech Apps']
    },
    {
      id: 'education',
      title: 'Education (Smart Campus)',
      description: 'Unified ERP systems and smart campus IoT connecting admissions, academics, and finance in a single ecosystem.',
      icon: <School size={40} className="text-[#0A3A7A] group-hover:text-white transition-colors duration-300" />,
      features: ['University ERPs', 'Student Portals', 'Alumni CRM', 'Academic Scheduling']
    },
    {
      id: 'finance',
      title: 'Finance & Banking',
      description: 'Modernizing core banking infrastructure and wealth management platforms for speed, security, and global scale.',
      icon: <Landmark size={40} className="text-[#0A3A7A] group-hover:text-white transition-colors duration-300" />,
      features: ['Core Banking', 'Wealth Management', 'Trading Platforms', 'Regulatory Tech']
    },
    {
      id: 'fintech',
      title: 'FinTech Engineering',
      description: 'Architecting ultra-low latency payment gateways, crypto custody wallets, and BaaS APIs for financial disruptors.',
      icon: <Wallet size={40} className="text-[#0A3A7A] group-hover:text-white transition-colors duration-300" />,
      features: ['Payment Gateways', 'Blockchain/Crypto', 'P2P Lending', 'Fraud AI']
    },
    {
      id: 'healthcare',
      title: 'Healthcare IT',
      description: 'HIPAA-compliant telehealth platforms, EHR integrations, and IoT medical device software saving lives.',
      icon: <Stethoscope size={40} className="text-[#0A3A7A] group-hover:text-white transition-colors duration-300" />,
      features: ['Telemedicine', 'EHR/EMR Systems', 'IoMT Solutions', 'Patient Portals']
    },
    {
      id: 'immersivetech',
      title: 'Immersive Tech (AR/VR)',
      description: 'Building spatial computing applications for industrial training, virtual retail, and architectural visualization.',
      icon: <Headset size={40} className="text-[#0A3A7A] group-hover:text-white transition-colors duration-300" />,
      features: ['Virtual Reality (VR)', 'Augmented Reality', 'Digital Twins', '3D Modeling']
    },
    {
      id: 'insurtech',
      title: 'InsurTech Solutions',
      description: 'Automating the insurance lifecycle from instant AI underwriting to frictionless, blockchain-verified claims processing.',
      icon: <Shield size={40} className="text-[#0A3A7A] group-hover:text-white transition-colors duration-300" />,
      features: ['AI Underwriting', 'Claims Automation', 'Policy Admin', 'Telematics']
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing & Industry 4.0',
      description: 'Bridging IT and OT with custom Manufacturing Execution Systems (MES) and global supply chain visibility platforms.',
      icon: <Factory size={40} className="text-[#0A3A7A] group-hover:text-white transition-colors duration-300" />,
      features: ['Custom MES', 'Supply Chain Tracking', 'Predictive Maintenance', 'IIoT Edge']
    },
    {
      id: 'real-estate',
      title: 'Real Estate & PropTech',
      description: 'Cloud-native PropTech platforms managing massive portfolios, automating rent, and driving smart-building IoT.',
      icon: <Building size={40} className="text-[#0A3A7A] group-hover:text-white transition-colors duration-300" />,
      features: ['Property Management', 'VR Home Tours', 'Real Estate CRM', 'Smart Access Control']
    },
    {
      id: 'retail',
      title: 'Retail & E-Commerce',
      description: 'Headless commerce architectures and omnichannel POS systems handling Black Friday scale with zero downtime.',
      icon: <ShoppingCart size={40} className="text-[#0A3A7A] group-hover:text-white transition-colors duration-300" />,
      features: ['Headless Frontends', 'Omnichannel POS', 'Warehouse Systems', 'B2B Wholesale Portals']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 1. Hero Section */}
      <section className="h-[50vh] min-h-[400px] w-full relative overflow-hidden bg-[#040026] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/images/solutions-hero.jpg" alt="Digital Solutions Hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040026] via-[#040026]/90 to-transparent"></div>
        </div>

        <div className="max-w-[1300px] mx-auto px-6 h-full flex flex-col justify-center pt-24 md:pt-32 relative z-10 w-full" data-aos="fade-right">
          <div className="max-w-4xl">
            <h1 className="text-[40px] leading-[56px] font-normal mb-6 text-white text-balance">
              Industry-Specific <br />
              <span className="text-[#ffb916] font-normal">Enterprise Solutions</span>
            </h1>
            <p className="text-[20px] leading-[34px] font-normal text-gray-300 max-w-2xl mb-10 text-balance">
              We engineer bespoke software architectures tailored precisely to the unique regulatory, scalability, and security demands of your industry.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Solutions Grid */}
      <section className="py-10 md:py-20 lg:py-24 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className="bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-xl hover:border-[#ffb916]/30 transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="w-20 h-20 bg-gray-50 rounded flex items-center justify-center mb-8 group-hover:bg-[#0A3A7A] transition-all duration-300">
                {solution.icon}
              </div>

              <h2 className="text-2xl font-bold text-[#212529] mb-4">{solution.title}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                {solution.description}
              </p>

              <div className="mb-10">
                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-gray-700">
                      <div className="w-2 h-2 bg-[#00A2FF] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link to specific solution page */}
              <div className="mt-auto pt-6 border-t border-gray-100">
                <Link href={`/solutions/${solution.id}`} className="inline-flex items-center text-[#0A3A7A] font-bold hover:text-[#ffb916] transition-colors group/link w-full justify-between">
                  <span>View Solution Architecture</span>
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Enterprise Value Proposition (Asymmetrical Split Layout) */}
      <section className="py-10 md:py-20 lg:py-24 px-6 bg-[#040026] relative z-30">
        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
            {/* Left Side: Sticky Title */}
            <div className="lg:col-span-4" data-aos="fade-right">
              <div className="sticky top-32">
                <h2 className="text-[32px] md:text-[46px] font-normal leading-[1.2] text-white mb-6">
                  Why Enterprise <br />
                  <span className="font-bold text-[#ffb916]">Leaders Choose Us</span>
                </h2>
                <div className="w-16 h-1 bg-[#ffb916] mb-6"></div>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We don't just write code; we engineer scalable business advantages tailored to your specific market challenges.
                </p>
              </div>
            </div>

            {/* Right Side: Feature Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                <div className="w-14 h-14 bg-white/10 shadow-sm rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="text-[#ffb916]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Regulatory Compliance</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Our architectures strictly adhere to HIPAA, GDPR, SOC2, and PCI-DSS, ensuring your data is legally protected globally.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                <div className="w-14 h-14 bg-white/10 shadow-sm rounded-full flex items-center justify-center mb-6">
                  <Zap className="text-[#ffb916]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Zero-Downtime Scale</h3>
                <p className="text-gray-400 text-sm leading-relaxed">We utilize Kubernetes and serverless microservices to auto-scale during massive traffic spikes, preventing lost revenue.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
                <div className="w-14 h-14 bg-white/10 shadow-sm rounded-full flex items-center justify-center mb-6">
                  <Target className="text-[#ffb916]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Bespoke Logic</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Off-the-shelf software forces you to change your business. We build custom logic that exactly matches your workflows.</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="400">
                <div className="w-14 h-14 bg-white/10 shadow-sm rounded-full flex items-center justify-center mb-6">
                  <BarChart2 className="text-[#ffb916]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Measurable ROI</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Every solution is designed with clear KPIs in mind—whether it's reducing OpEx by 30% or increasing conversions by 3x.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Technologies We Use */}
      <TechStack />

      {/* 5. CTA Section (Full Width Premium Layout) */}
      <section className="bg-gradient-to-br from-[#081229] to-[#040026] py-10 md:py-20 lg:py-24 px-6 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-5 object-cover mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ffb916] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>

        <div className="max-w-[1300px] mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12" data-aos="fade-up">
          <div className="max-w-2xl">
            <h2 className="text-[36px] md:text-[50px] font-normal leading-[1.1] text-white mb-6">
              Don't see your <span className="font-bold text-[#ffb916]">Industry?</span>
            </h2>
            <p className="text-gray-400 text-[18px] md:text-[20px] leading-relaxed">
              We build custom, ground-up architectures for highly specialized sectors. Let's discuss your unique business logic and compliance needs.
            </p>
          </div>
          <div className="shrink-0">
            <Link href="/contact-us" className="inline-flex items-center gap-3 px-10 py-5 bg-[#ffb916] border-2 border-[#ffb916] cursor-pointer text-white font-bold rounded transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] text-lg group hover:bg-transparent hover:border-[#154EA1] hover:text-[#154EA1]">
              Speak to an Architect
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

