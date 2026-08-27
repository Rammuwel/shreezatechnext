import React from 'react';
import {
  Code, Smartphone, Bot, PenTool, ArrowRight, Wifi, Cpu,
  Search, LayoutTemplate, Terminal, Rocket, CheckCircle2, ShieldCheck, Zap, Users
} from 'lucide-react';
import Link from 'next/link';
import TechStack from '../../components/TechStack';

export const metadata = {
  title: "services",
  description: 'Explore ShreezaTech’s comprehensive suite of digital services including Web & Mobile Development, AI & Automation, UX/UI Design, IoT, and Robotics.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'web-development',
      title: "Web Development",
      description: 'Building scalable, secure, and modern web applications tailored to your specific business needs. We use cutting-edge frameworks to deliver blazing fast experiences.',
      icon: <Code size={40} className="text-[#0A3A7A] group-hover:text-white transition-colors duration-300" />,
      features: ['Custom Web Apps', 'E-commerce Solutions', 'CMS Development', 'API Integration']
    },
    {
      id: 'mobile-app-development',
      title: "Mobile App Development",
      description: 'Creating intuitive and high-performance native and cross-platform mobile apps for iOS and Android. Engaging your users wherever they are.',
      icon: <Smartphone size={40} className="text-[#0A3A7A] group-hover:text-white transition-colors duration-300" />,
      features: ['Native iOS & Android', 'React Native / Flutter', 'App Modernization', 'UI/UX Optimization']
    },
    {
      id: 'ai-and-automation',
      title: "AI & Automation",
      description: 'Streamlining your business operations with intelligent automation and AI-driven insights. Turn data into decisions and manual tasks into automated workflows.',
      icon: <Bot size={40} className="text-[#0A3A7A] group-hover:text-white transition-colors duration-300" />,
      features: ['Machine Learning', 'Workflow Automation', 'Predictive Analytics', 'Chatbots & Virtual Assistants']
    },
    {
      id: 'ux-ui-design',
      title: "UX/UI Design",
      description: 'Designing user-centric, aesthetically pleasing, and highly functional interfaces that drive engagement and improve user retention.',
      icon: <PenTool size={40} className="text-[#0A3A7A] group-hover:text-white transition-colors duration-300" />,
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing']
    },
    {
      id: 'iot',
      title: "IoT Solutions",
      description: 'Connecting devices and systems for smarter, data-driven environments. Leverage the Internet of Things to monitor, control, and optimize your assets.',
      icon: <Wifi size={40} className="text-[#0A3A7A] group-hover:text-white transition-colors duration-300" />,
      features: ['Smart Devices', 'Sensor Networks', 'Edge Computing', 'IoT Dashboards']
    },
    {
      id: 'robotics',
      title: "Robotics & RPA",
      description: 'Advanced robotic systems and RPA to automate complex physical and digital tasks. Enhance precision, safety, and efficiency across your entire operation.',
      icon: <Cpu size={40} className="text-[#0A3A7A] group-hover:text-white transition-colors duration-300" />,
      features: ['Process Automation', 'Industrial Bots', 'Drone Software', 'Computer Vision']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: "Discovery & Strategy",
      description: 'We dive deep into your business requirements, target audience, and market landscape to formulate a winning digital strategy.',
      icon: <Search size={24} className="text-[#ffb916]" />
    },
    {
      number: '02',
      title: "Design & Prototyping",
      description: 'Our design team creates interactive wireframes and high-fidelity prototypes to visualize the end-product before coding begins.',
      icon: <LayoutTemplate size={24} className="text-[#ffb916]" />
    },
    {
      number: '03',
      title: "Agile Engineering",
      description: 'Our engineers build your solution using modern tech stacks, operating in two-week agile sprints for continuous delivery and feedback.',
      icon: <Terminal size={24} className="text-[#ffb916]" />
    },
    {
      number: '04',
      title: "QA & Deployment",
      description: 'Rigorous QA testing ensures zero critical bugs. We then seamlessly deploy to production and provide ongoing post-launch support.',
      icon: <Rocket size={24} className="text-[#ffb916]" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 1. Hero Section matching Homepage styling */}
      <section className="h-[60vh] min-h-[450px] w-full relative overflow-hidden bg-[#040026] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/images/services-hero.jpg" alt="Digital Services Hero" className="w-full h-full object-cover opacity-20 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040026] via-[#040026]/95 to-transparent"></div>
        </div>

        <div className="max-w-[1300px] mx-auto px-6 h-full flex flex-col justify-center relative z-10 w-full" data-aos="fade-right">
          <div className="max-w-4xl">
            <h1 className="text-[40px] leading-[56px] font-normal mb-6 text-white text-balance">
              Comprehensive <br />
              <span className="text-[#ffb916] font-normal">Digital Services</span>
            </h1>
            <p className="text-[20px] leading-[34px] font-normal text-gray-300 max-w-2xl mb-10 text-balance">
              We engineer scalable software, AI platforms, and IoT networks that transform businesses worldwide and drive competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Intro & Why Choose Us Section (matching About.jsx styling) */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className="w-full mb-12 text-center" data-aos="fade-up">
            <h2 className="text-[38px] md:text-[46px] leading-[1.2] font-normal text-[#212529] max-w-4xl mx-auto">
              Engineering Excellence that <span className="text-[#0A3A7A] font-bold">Transcends Boundaries</span>
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              We bring a unique blend of technical mastery, strategic thinking, and industry expertise to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mt-16">
            <div className="lg:col-span-6 relative" data-aos="fade-right">
              {/* Slanted Image style from Homepage */}
              <div
                className="relative w-full h-[400px] lg:h-[500px] overflow-hidden"
                style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 100px) 100%, 0 100%)' }}
              >
                <img
                  src="/images/ux_ui_hero_1787056815590.jpg"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A3A7A]/40 via-transparent to-[#ffb916]/20 mix-blend-multiply pointer-events-none"></div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 h-full pt-4" data-aos="fade-left" data-aos-delay="200">
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-white shadow-sm rounded-full flex items-center justify-center mb-5">
                  <ShieldCheck className="text-[#0A3A7A]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0A3A7A] mb-3">Enterprise Security</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Secure-by-design architectures ensuring your data and infrastructure are fully protected under global standards.</p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-white shadow-sm rounded-full flex items-center justify-center mb-5">
                  <Zap className="text-[#0A3A7A]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0A3A7A] mb-3">Agile Delivery</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Rapid prototyping and iterative two-week sprints to get your digital product to market significantly faster.</p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-white shadow-sm rounded-full flex items-center justify-center mb-5">
                  <Users className="text-[#0A3A7A]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0A3A7A] mb-3">Dedicated Teams</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Exclusive engineering pods that act as a seamless, transparent extension of your in-house development team.</p>
              </div>
              <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-white shadow-sm rounded-full flex items-center justify-center mb-5">
                  <CheckCircle2 className="text-[#0A3A7A]" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0A3A7A] mb-3">Proven Quality</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Rigorous QA testing, peer code reviews, and automated CI/CD pipelines guarantee flawless execution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Services Grid (Updated with Homepage Colors) */}
      <section id="core-services" className="py-24 px-6 bg-gray-50 border-t border-gray-200">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[36px] md:text-[42px] font-bold text-[#0A3A7A] mb-4">Our Core Competencies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Specialized engineering practices tailored to modern digital demands.</p>
        </div>

        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-xl hover:border-[#ffb916]/30 transition-all duration-300 group hover:-translate-y-1 flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-20 h-20 bg-gray-50 rounded flex items-center justify-center mb-8 group-hover:bg-[#0A3A7A] transition-all duration-300">
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold text-[#212529] mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                {service.description}
              </p>

              <div className="mb-10">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-gray-700">
                      <div className="w-2 h-2 bg-[#ffb916] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Link to specific service page */}
              <div className="mt-auto pt-6 border-t border-gray-100">
                <Link href={`/services/${service.id}`} className="inline-flex items-center text-[#0A3A7A] font-bold hover:text-[#ffb916] transition-colors group/link w-full justify-between">
                  <span>Explore Capabilities</span>
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Our Process Section (Updated styling) */}
      <section className="py-24 px-6 bg-[#040026] text-white relative overflow-hidden">
        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className="text-center mb-20" data-aos="fade-up">
            <h2 className="text-[36px] md:text-[42px] font-bold text-white mb-4">How We Deliver Excellence</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Our battle-tested software development lifecycle ensures transparent communication and exceptional results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors" data-aos="fade-up" data-aos-delay={index * 150}>

                <div className="w-16 h-16 bg-[#040026] border border-[#ffb916]/50 rounded flex items-center justify-center mb-6 relative z-10">
                  {step.icon}
                </div>
                <div className="text-white/10 font-black text-5xl absolute top-4 right-6 -z-10">{step.number}</div>

                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Technologies & Ecosystem (Tabbed Component) */}
      <TechStack />

      {/* 6. CTA Section matching Homepage dark style */}
      <section className="bg-[#0A3A7A] py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/chatgpt-3.png')] opacity-10 object-cover mix-blend-overlay"></div>

        <div className="max-w-[1000px] mx-auto text-center relative z-10" data-aos="zoom-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">Ready to accelerate your digital transformation?</h2>
          <p className="text-blue-100 mb-10 text-xl max-w-2xl mx-auto leading-relaxed">
            Let's collaborate to build scalable solutions that perfectly align with your strategic business goals.
          </p>
          <Link href="/contact-us" className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffb916] border-2 border-[#ffb916] cursor-pointer text-white font-bold transition-all shadow-lg text-lg hover:bg-transparent hover:border-[#154EA1] hover:text-[#154EA1]">
            Schedule a Free Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

