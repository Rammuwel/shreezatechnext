"use client";
import React, { useState } from 'react';
import Clients from '../../../components/Clients';
import Contact from '../../../components/Contact';
import Insights from '../../../components/Insights';

export default function MigotoAIPage() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { question: "How long does it take to implement MIGOTO AI™?", answer: "Implementation time varies depending on the complexity of your requirements and the number of custom scenarios needed. A typical rollout takes between 4 to 8 weeks." },
    { question: "How does MIGOTO AI™ differ from traditional training methods?", answer: "MIGOTO AI provides an immersive, interactive environment where learners practice real-world skills, receive instant feedback, and engage in personalized coaching, unlike static e-learning modules." },
    { question: "Can MIGOTO AI™ be customised for my industry and business needs?", answer: "Yes, our platform is highly configurable and can be tailored to match your specific industry compliance standards, product offerings, and customer personas." },
    { question: "Can the training modules be updated or modified?", answer: "Absolutely. You can update the underlying knowledge base, modify personas, and tweak training modules at any time to keep up with business changes." }
  ];

  const industries = [
    {
      name: "Banking & Finance",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>,
      items: [
        "Role-based onboarding for relationship managers",
        "Simulation training for upselling and cross-selling financial products",
        "Interactive modules for compliance and regulatory updates",
        "Personalized learning for wealth management advisors",
        "Branch-level training on customer handling"
      ]
    },
    {
      name: "Pharma",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>,
      items: ["Compliance training", "Product knowledge", "Safety protocols"]
    },
    {
      name: "Retail",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.999 2.999 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.999 2.999 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" /></svg>,
      items: ["Customer service scenarios", "Store operations", "Sales techniques"]
    },
    {
      name: "Healthcare",
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>,
      items: ["Patient care protocols", "System usage", "Safety and compliance"]
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-white pt-20">
{/* Hero Section */}
      <section className="relative bg-[#162142] overflow-hidden py-10 md:py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <img src="/images/robotics_hero.jpg.0.3&auto=format&fit=crop&w=1920&q=80" alt="Abstract Data" className="w-full h-full object-cover opacity-20 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#162142] via-[#162142]/90 to-[#162142]/40"></div>
        </div>

        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="w-full md:w-2/3">
            <h1 className="text-[40px] md:text-[56px] font-bold text-white leading-[1.1] mb-6">
              Unlock Immersive and<br/>Simulated Training with<br/>
              <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">MIGOTO AI™</span>
            </h1>
            <p className="text-[18px] text-gray-300 leading-[1.6] mb-10 max-w-xl">
              An AI-powered training simulator for sales, soft skills, and product training, adaptive to each learner
            </p>
            <button className="bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-medium px-8 py-3 rounded text-[16px] hover:opacity-90 transition-opacity">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[32px] md:text-[40px] font-medium text-[#111] leading-[1.2] mb-6 tracking-tight">
              Advancing Workforce Training<br/>effectiveness with <span className="bg-gradient-to-r from-indigo-800 to-purple-600 bg-clip-text text-transparent">AI-powered<br/>Simulations</span>
            </h2>
            <p className="text-[16px] text-gray-600 leading-[1.6] mb-6">
              Novac's flagship MIGOTO AI™ is an AI training simulator, an intelligent training platform designed to equip your workforce with the skills they need, faster, smarter, and more effectively. It blends the power of immersive learning and adaptive learning to personalize the learning experience for each learner based on their role, current skill level, and learning behavior, evolving with your business needs.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="bg-[#f0f4f8] rounded-tl-[100px] rounded-br-[100px] overflow-hidden relative h-[400px]">
              <img src="/images/services-hero.jpg.0.3&auto=format&fit=crop&w=800&q=80" alt="Person training" className="absolute bottom-0 right-0 h-[90%] object-cover object-left" />
              {/* Dashboard mock */}
              <div className="absolute top-8 left-8 w-[240px] h-[160px] bg-white rounded shadow border border-gray-100 p-2 flex flex-col gap-2">
                 <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
                 <div className="flex gap-2 h-full">
                    <div className="w-1/3 bg-blue-100 rounded"></div>
                    <div className="w-2/3 flex flex-col gap-2">
                       <div className="h-1/2 bg-purple-100 rounded"></div>
                       <div className="h-1/2 bg-green-100 rounded"></div>
                    </div>
                 </div>
              </div>
              {/* Robot mock */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg">
                 <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" alt="Robot" className="w-16 h-16 opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializes In Section */}
      <section className="pb-20 px-6 lg:px-12 bg-white">
        <div className="max-w-[1300px] mx-auto border-t border-gray-100 pt-16">
          <h2 className="text-[32px] md:text-[40px] font-medium text-[#111] mb-16">
            <span className="text-indigo-800 font-bold">MIGOTO AI™</span> specializes in,
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {/* Sales Training */}
            <div className="flex flex-col">
              <div className="mb-6 text-[#2a3c6d]">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
              </div>
              <h3 className="text-[24px] font-medium text-[#111] mb-4">Sales Training</h3>
              <p className="text-[16px] text-gray-600 leading-[1.6]">
                Personalized learning journey for sales personnel supported by real-world scenarios, simulated pitches, and objection-handling exercises.
              </p>
            </div>
            
            {/* Soft Skills Training */}
            <div className="flex flex-col">
              <div className="mb-6 text-[#2a3c6d]">
                 <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>
              </div>
              <h3 className="text-[24px] font-medium text-[#111] mb-4">Soft Skills Training</h3>
              <p className="text-[16px] text-gray-600 leading-[1.6]">
                Turns passive training into active practice in leadership, empathy, or negotiation skills that assess tone, response accuracy, and emotional intelligence.
              </p>
            </div>

            {/* Product Training */}
            <div className="flex flex-col">
              <div className="mb-6 text-[#2a3c6d]">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
              </div>
              <h3 className="text-[24px] font-medium text-[#111] mb-4">Product Training</h3>
              <p className="text-[16px] text-gray-600 leading-[1.6]">
                Product walkthroughs, launch updates, and feature-specific training modules to involved stakeholders across the product lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-12 md:py-20 lg:py-32 px-6 lg:px-12 bg-white relative">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] md:text-[40px] font-medium text-[#111] leading-[1.2]">
              The <span className="text-[#6941c6] font-bold">MIGOTO AI™</span> Advantage: Smarter<br/>Training, Better Outcomes
            </h2>
          </div>

          <div className="flex flex-col gap-12 relative pb-20">
            
            {/* Feature 1 */}
            <div className="sticky top-[120px] flex flex-col lg:flex-row items-center bg-[#f8faff] rounded-[40px] p-8 lg:p-16 gap-12 overflow-hidden shadow-[0_-5px_15px_rgba(0,0,0,0.02)] border border-gray-100">
              <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
                <h3 className="text-[28px] md:text-[32px] font-medium text-[#111] mb-6">
                  Functional Knowledge AI Assistant
                </h3>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 mb-6"></div>
                <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6]">
                  The functional AI assistant's dual aspect also enables it to act as an AI sales consultancy bot, guiding potential buyers in making customized purchases. The bot can also aid sales personnel in mastering customer interactions, practicing negotiations, and closing deals in a closed virtual setting.
                </p>
              </div>
              <div className="w-full lg:w-1/2 relative flex justify-center">
                {/* Mock image composition */}
                <div className="relative w-full max-w-[500px] h-[350px] bg-white rounded-xl shadow-sm border border-indigo-50/50 p-4">
                  <div className="w-full h-8 bg-indigo-100 rounded-t-lg flex items-center px-4 gap-2 mb-4">
                     <div className="w-2 h-2 rounded-full bg-white"></div>
                     <div className="w-2 h-2 rounded-full bg-white"></div>
                     <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div className="flex gap-4 h-[250px]">
                     <div className="w-1/3 bg-indigo-50 rounded flex flex-col gap-3 p-3">
                        <div className="w-full h-8 bg-indigo-400 rounded flex items-center px-2"><div className="w-3 h-3 bg-white rounded-full"></div></div>
                        <div className="w-full h-8 bg-indigo-400 rounded flex items-center px-2"><div className="w-3 h-3 bg-white rounded-full"></div></div>
                        <div className="w-full h-8 bg-indigo-400 rounded flex items-center px-2"><div className="w-3 h-3 bg-white rounded-full"></div></div>
                        <div className="w-full h-12 bg-indigo-300 rounded mt-auto"></div>
                     </div>
                     <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-3">
                        <div className="bg-indigo-100 rounded-full h-8 w-8"></div>
                        <div className="bg-indigo-100 rounded-full h-8 w-8"></div>
                        <div className="bg-indigo-100 rounded-full h-8 w-8"></div>
                        <div className="bg-white border-2 border-orange-300 rounded-full h-8 w-8 flex items-center justify-center"><div className="w-4 h-4 text-orange-400">✓</div></div>
                        <div className="bg-indigo-100 rounded-full h-8 w-8"></div>
                     </div>
                  </div>
                  <img src="/images/ai_hero.jpg.0.3&auto=format&fit=crop&w=400&q=80" alt="Woman with tablet" className="absolute bottom-0 right-0 h-[380px] object-cover object-top drop-shadow-2xl" />
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="sticky top-[140px] flex flex-col lg:flex-row items-center bg-[#f8faff] rounded-[40px] p-8 lg:p-16 gap-12 overflow-hidden shadow-[0_-5px_15px_rgba(0,0,0,0.03)] border border-gray-100">
              <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
                <h3 className="text-[28px] md:text-[32px] font-medium text-[#111] mb-6 leading-[1.2]">
                  AI-driven Learning Courses and Persona Creation
                </h3>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 mb-6"></div>
                <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6]">
                  Organisations can customise the characteristics of the AI trainer according to the learners' roles and responsibilities. They can also opt for AI-generated customer personas and learning courses/modules based on data from learner-bot interactions and the LLM knowledge base.
                </p>
              </div>
              <div className="w-full lg:w-1/2 relative flex justify-center">
                 {/* Mock image composition */}
                 <div className="relative w-full max-w-[500px] h-[350px] bg-white rounded-xl shadow-sm border border-indigo-50/50 p-6 flex flex-col gap-4">
                    <div className="flex gap-4 h-1/2">
                       <div className="w-2/3 bg-indigo-50 rounded flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[20px] border-t-transparent border-l-[30px] border-l-white border-b-[20px] border-b-transparent drop-shadow-md"></div>
                       </div>
                       <div className="w-1/3 flex flex-col gap-2">
                          <div className="h-1/2 bg-indigo-50 rounded"></div>
                          <div className="h-1/2 bg-purple-50 rounded"></div>
                       </div>
                    </div>
                    <div className="flex gap-4 h-1/2">
                       <div className="w-1/4 bg-cyan-50 rounded"></div>
                       <div className="w-1/4 bg-cyan-50 rounded"></div>
                       <div className="w-1/4 bg-cyan-50 rounded"></div>
                       <div className="w-1/4 bg-cyan-50 rounded"></div>
                    </div>
                    <div className="absolute right-[-20px] top-[40%] bg-purple-100 rounded-full p-4 border border-white drop-shadow">
                       <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    </div>
                    <img src="/images/chatgpt-1.png.0.3&auto=format&fit=crop&w=400&q=80" alt="Man with laptop" className="absolute bottom-0 left-[-30px] h-[320px] object-cover object-top drop-shadow-2xl" />
                 </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="sticky top-[160px] flex flex-col lg:flex-row items-center bg-[#f8faff] rounded-[40px] p-8 lg:p-16 gap-12 overflow-hidden shadow-[0_-5px_15px_rgba(0,0,0,0.03)] border border-gray-100">
              <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
                <h3 className="text-[28px] md:text-[32px] font-medium text-[#111] mb-6">
                  Highly Configurable
                </h3>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 mb-6"></div>
                <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6]">
                  MIGOTO AI™ is highly customizable to suit the needs of learners across industries based on the conversation context, scenario personalization, avatar and persona configuration, and updating the knowledge base using the base document
                </p>
              </div>
              <div className="w-full lg:w-1/2 relative flex justify-center">
                 {/* Mock image composition */}
                 <div className="relative w-full max-w-[500px] h-[350px] bg-white rounded-xl shadow-sm border border-indigo-50/50 p-6 flex flex-col">
                    <div className="w-full h-8 bg-indigo-100 rounded-t flex items-center px-4 gap-2 mb-6">
                       <div className="w-2 h-2 rounded-full bg-white"></div><div className="w-2 h-2 rounded-full bg-white"></div><div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <div className="flex gap-6 relative">
                       <div className="w-1/2 bg-indigo-50 h-32 rounded flex items-center justify-center relative">
                          <div className="bg-orange-400 text-white font-bold px-3 py-1 rounded text-sm z-10 absolute right-[-20px] top-4">AI</div>
                          <div className="w-full h-1 bg-gray-200 absolute right-[-40px] top-6"></div>
                       </div>
                       <div className="w-1/2 flex flex-col gap-4">
                          <div className="bg-gray-100 h-10 w-full rounded flex justify-end px-2 py-2"><div className="w-4 h-4 rounded text-purple-400 bg-white shadow-sm flex items-center justify-center text-[10px]">✓</div></div>
                          <div className="bg-gray-100 h-10 w-full rounded flex justify-end px-2 py-2"><div className="w-4 h-4 rounded text-purple-400 bg-white shadow-sm flex items-center justify-center text-[10px]">✓</div></div>
                          <div className="bg-gray-100 h-10 w-full rounded flex justify-end px-2 py-2"><div className="w-4 h-4 rounded text-purple-400 bg-white shadow-sm flex items-center justify-center text-[10px]">✓</div></div>
                       </div>
                    </div>
                    <img src="/images/solutions-hero.jpg.0.3&auto=format&fit=crop&w=400&q=80" alt="Man smiling" className="absolute bottom-0 left-[10%] h-[280px] object-cover object-top drop-shadow-2xl" />
                 </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="sticky top-[180px] flex flex-col lg:flex-row items-center bg-[#f8faff] rounded-[40px] p-8 lg:p-16 gap-12 overflow-hidden shadow-[0_-5px_15px_rgba(0,0,0,0.03)] border border-gray-100">
              <div className="w-full lg:w-1/2 pr-0 lg:pr-8">
                <h3 className="text-[28px] md:text-[32px] font-medium text-[#111] mb-6">
                  Comprehensive Learning
                </h3>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 mb-6"></div>
                <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6]">
                  Learners can interact with various stakeholders through the AI trainer based on their requirements. They can also opt for the role-reversal coaching feature in sales practice to play the role of stakeholders in a sales-based conversation.
                </p>
              </div>
              <div className="w-full lg:w-1/2 relative flex justify-center">
                 {/* Mock image composition */}
                 <div className="relative w-full max-w-[500px] h-[350px] bg-white rounded-xl shadow-sm border border-indigo-50/50 p-6 flex flex-col">
                    <div className="w-full h-8 bg-gray-100 rounded-t flex items-center px-4 gap-2 mb-6">
                       <div className="w-2 h-2 rounded-full bg-gray-300"></div><div className="w-2 h-2 rounded-full bg-gray-300"></div><div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-1/3 flex flex-col gap-3">
                          <div className="h-16 bg-blue-100 rounded"></div>
                          <div className="h-10 bg-cyan-100 rounded-full flex items-center px-4 text-xs text-cyan-600">message...</div>
                          <div className="h-10 bg-purple-100 rounded-full flex items-center px-4 text-xs text-purple-600 self-end w-4/5">reply...</div>
                       </div>
                       <div className="w-2/3 flex flex-col gap-4">
                          <div className="flex gap-4 items-end justify-center h-20">
                             <div className="w-6 bg-green-400 h-1/2 rounded-t"></div>
                             <div className="w-6 bg-blue-400 h-full rounded-t"></div>
                             <div className="w-6 bg-purple-400 h-3/4 rounded-t"></div>
                          </div>
                          <div className="w-20 h-20 rounded-full border-8 border-yellow-400 border-r-red-400 border-b-blue-400 border-l-green-400 mx-auto"></div>
                       </div>
                    </div>
                    <div className="absolute right-10 bottom-10 bg-blue-100 rounded-full p-3 shadow-lg">
                       <img src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png" alt="Robot" className="w-8 h-8 opacity-80" />
                    </div>
                    <img src="/images/about_hero_1786877430368.jpg.0.3&auto=format&fit=crop&w=400&q=80" alt="Man standing" className="absolute bottom-0 left-[5%] h-[320px] object-cover object-top drop-shadow-2xl" />
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-20 lg:py-32 px-6 lg:px-12 bg-[#0a122a]">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-medium text-white text-center mb-20">
            How does <span className="text-[#849bf3] font-bold">MIGOTO AI™</span> work?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {/* Learn */}
            <div className="flex flex-col text-white group">
              <div className="mb-8">
                 <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300 group-hover:text-[#849bf3] transition-colors"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <h3 className="text-[24px] font-medium mb-4">Learn</h3>
              <p className="text-[16px] text-gray-300 leading-[1.6]">
                MIGOTO AI uses Large Language Models (LLMs) and behavioral insights to personalize each learner's experience through knowledge content dynamically generated from internal docs, SOPs, and playbooks.
              </p>
              <div className="h-[1px] w-full bg-white/20 mt-8"></div>
            </div>
            
            {/* Train */}
            <div className="flex flex-col text-white group">
              <div className="mb-8">
                 <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300 group-hover:text-[#849bf3] transition-colors"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>
              </div>
              <h3 className="text-[24px] font-medium mb-4">Train</h3>
              <p className="text-[16px] text-gray-300 leading-[1.6]">
                Learners can step into immersive, role-specific training scenarios through roleplays, with AI-driven on-the-job challenges such as handling a customer, pitching a product, and more.
              </p>
              <div className="h-[1px] w-full bg-white/20 mt-8"></div>
            </div>

            {/* Assess */}
            <div className="flex flex-col text-white group">
              <div className="mb-8">
                 <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300 group-hover:text-[#849bf3] transition-colors"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
              </div>
              <h3 className="text-[24px] font-medium mb-4">Assess</h3>
              <p className="text-[16px] text-gray-300 leading-[1.6]">
                MIGOTO AI tracks progress in real-time through continuous evaluation with insights and intelligent coaching with subtle performance nudges through skill assessment and micro-assessments after each module completion.
              </p>
              <div className="h-[1px] w-full bg-white/20 mt-8"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Impact Section */}
      <section className="py-12 md:py-20 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1100px] mx-auto text-center mb-16">
          <h2 className="text-[32px] md:text-[40px] font-medium text-[#111] leading-[1.2]">
            Industry-Wide Impact:<br/>
            How <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent font-bold">MIGOTO AI™</span> Transforms Training
          </h2>
        </div>
        
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row bg-[#f5f7fa] rounded-2xl p-4 md:p-8 gap-8 border border-gray-100 shadow-sm">
            
            {/* Left Tabs */}
            <div className="w-full md:w-[35%] flex flex-col gap-3">
              {industries.map((ind, i) => (
                <div 
                  key={i}
                  onClick={() => setActiveIndustry(i)}
                  className={`
                    relative flex items-center gap-4 px-6 h-[72px] rounded cursor-pointer transition-all border
                    ${activeIndustry === i 
                      ? 'bg-[#2a3c6d] text-white border-transparent' 
                      : 'bg-white text-[#2a3c6d] border-gray-200 hover:border-gray-300'
                    }
                  `}
                >
                  <div className={`w-8 h-8 shrink-0 ${activeIndustry === i ? 'text-white' : 'text-[#2a3c6d]'}`}>
                    {ind.icon}
                  </div>
                  <span className="font-medium text-[18px] truncate">{ind.name}</span>
                  
                  {/* Arrow for active state */}
                  {activeIndustry === i && (
                    <div className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 hidden md:block drop-shadow-md">
                      <div className="w-0 h-0 border-t-[36px] border-t-transparent border-l-[20px] border-l-[#2a3c6d] border-b-[36px] border-b-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Right Content */}
            <div className="w-full md:w-[65%] pl-0 md:pl-10 py-6 border-l-0 md:border-l border-gray-200 relative z-20">
              <h3 className="text-[24px] font-medium bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent mb-8">
                {industries[activeIndustry].name}
              </h3>
              
              <ul className="flex flex-col gap-6">
                {industries[activeIndustry].items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1.5 shrink-0 text-[#2a3c6d]">
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z" /></svg>
                    </div>
                    <span className="text-[17px] text-gray-700 leading-[1.6]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 md:py-20 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1300px] mx-auto text-center">
          <h2 className="text-[32px] md:text-[40px] font-medium text-[#111] leading-[1.2] mb-16 tracking-tight">
            Key Benefits of Intelligent <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-bold">MIGOTO AI™</span> for Modern<br/>Workforce Training
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Benefit 1 */}
            <div className="bg-[#f8f9fa] rounded-2xl p-10 flex flex-col items-start shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-14 h-14 rounded-full border border-dashed border-gray-300 flex items-center justify-center bg-white shrink-0">
                    <svg className="w-6 h-6 text-[#2a3c6d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
                 </div>
                 <h3 className="text-[20px] font-medium text-[#111] leading-tight">Immersive Realism</h3>
              </div>
              <p className="text-[16px] text-gray-600 leading-[1.6]">
                High-fidelity 3D environments with realistic physics and immersive controls enable lifelike, hands-on training, offering first-person and team-based perspectives.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-[#f8f9fa] rounded-2xl p-10 flex flex-col items-start shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-14 h-14 rounded-full border border-dashed border-gray-300 flex items-center justify-center bg-white shrink-0">
                    <svg className="w-6 h-6 text-[#2a3c6d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                 </div>
                 <h3 className="text-[20px] font-medium text-[#111] leading-tight">Adaptive Learning</h3>
              </div>
              <p className="text-[16px] text-gray-600 leading-[1.6]">
                Deducing employee learning levels through their responses enables AI to provide updated and evolved training scenarios based on employee progress.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-[#f8f9fa] rounded-2xl p-10 flex flex-col items-start shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-14 h-14 rounded-full border border-dashed border-gray-300 flex items-center justify-center bg-white shrink-0">
                    <svg className="w-6 h-6 text-[#2a3c6d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                 </div>
                 <h3 className="text-[20px] font-medium text-[#111] leading-tight">Compliance Tracking and Reporting</h3>
              </div>
              <p className="text-[16px] text-gray-600 leading-[1.6]">
                Compliance-ready reporting with secure data export ensures accurate tracking, documentation, and seamless sharing of regulatory metrics.
              </p>
            </div>
          </div>
          
          {/* Carousel dots mockup */}
          <div className="flex justify-center gap-2 mt-12">
             <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-[#2a3c6d]"></div>
          </div>
        </div>
      </section>

      {/* Video CTA Section */}
      <section className="py-12 md:py-20 px-6 lg:px-12 bg-white pb-32">
        <div className="max-w-[1300px] mx-auto relative rounded-[40px] overflow-hidden flex items-center justify-center min-h-[500px]">
          {/* Video Background */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-typing-on-a-laptop-41703-large.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#060c1d]/80 z-10 backdrop-blur-sm"></div>
          
          {/* Content */}
          <div className="relative z-20 text-center flex flex-col items-center px-6 max-w-4xl mx-auto py-12 md:py-20">
             <h2 className="text-[36px] md:text-[48px] font-medium text-white leading-[1.2] mb-12 tracking-tight">
               Experience the impact of realistic, adaptive<br/>training at scale with MIGOTO AI™
             </h2>
             <button className="bg-gradient-to-r from-purple-500 to-indigo-400 text-white font-medium px-8 py-3.5 rounded text-[16px] hover:opacity-90 transition-opacity drop-shadow-xl hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
               Get a Consultation
             </button>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <Clients />

      {/* Testimonial Section */}
      <section className="py-12 md:py-20 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1100px] mx-auto bg-[#233559] rounded-[40px] p-10 lg:p-20 relative overflow-hidden text-center text-white">
          <div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'}}></div>
          
          <div className="relative z-10">
            <h2 className="text-[32px] md:text-[40px] font-medium mb-12">Look what our customers are saying about us!</h2>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute top-0 left-0 transform -translate-x-full -translate-y-4 text-white/20 text-5xl md:text-8xl font-serif">"</div>
              
              <p className="text-[16px] md:text-[18px] leading-[1.8] font-light mb-12">
                We would like to sincerely thank NOVAC for the insightful and thorough overview you provided during the implementation & training session on the NOVAC LMS. Your invaluable guidance ensured a smooth onboarding experience, and the training on every aspect of the system has given us a much clearer understanding of its functionalities and potential. We look forward to applying this knowledge in practice and maximizing the platform's capabilities. Thank you once again—we look forward to working more with the NOVAC LMS platform.
              </p>
              
              <div className="absolute bottom-0 right-0 transform translate-x-12 translate-y-8 text-white/20 text-5xl md:text-8xl font-serif">"</div>
            </div>
            
            <div className="flex flex-col items-center gap-2 mb-10">
              <h4 className="text-[20px] font-semibold">Vandana Ali</h4>
              <p className="text-white/70">Amway</p>
            </div>
            
            <div className="flex justify-center gap-2">
               <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-white/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Insights Hub */}
      <Insights />

      {/* FAQ Section */}
      <section className="py-12 md:py-20 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-medium text-[#111] text-center mb-16 tracking-tight">
            Frequently asked questions
          </h2>
          
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-[#f9f9f9] rounded-lg transition-all duration-300"
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className={`text-[18px] font-medium pr-8 transition-colors ${openFaq === idx ? 'text-[#ff7f00]' : 'text-[#111]'}`}>
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center shrink-0">
                    <svg 
                      className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${openFaq === idx ? 'rotate-45' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === idx ? 'max-h-[300px] opacity-100 pb-6 px-6' : 'max-h-0 opacity-0 px-6'
                  }`}
                >
                  <p className="text-[16px] text-gray-600 leading-[1.6]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
</div>
  );
}
