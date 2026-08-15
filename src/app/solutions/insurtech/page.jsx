"use client";
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';
import { ShieldCheck, FileText, Bot, Search, Zap, Activity, Globe } from 'lucide-react';

export default function InsurtechPage() {
  const config = {
    breadcrumb: {
      label: 'InsurTech',
      href: '/solutions/insurtech',
      parentLabel: 'Solutions',
      parentHref: '/solutions'
    },
    hero: {
      slides: [
        {
          image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80",
          badgeText: "Modern Insurance Infrastructure",
          badgeColor: "#00A2FF",
          title1: "Intelligent",
          title2: "InsurTech Solutions",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#00A2FF] to-[#00f2fe]",
          description: "We modernize legacy insurance platforms, integrating AI-driven underwriting, automated claims processing, and seamless policyholder portals.",
          primaryButton: { text: "Modernize Core Systems", href: "#capabilities" }
        },
        {
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
          badgeText: "Data-Driven Risk Assessment",
          badgeColor: "#D4AF37",
          title1: "Predictive",
          title2: "Risk Modeling",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#fde08b]",
          description: "Harness massive datasets and machine learning to calculate risk with pinpoint accuracy, dramatically reducing liability costs.",
          secondaryButton: { text: "Explore Risk Analytics", href: "/contact" }
        }
      ]
    },
    stats: [
      { value: "50%", label: "Faster Claims Processing" },
      { value: "30%", label: "Fraud Reduction" },
      { value: "100+", label: "API Integrations" }
    ],
    philosophy: {
      tagline: "Our InsurTech Philosophy",
      title1: "Agility in a",
      title2: "Regulated Market",
      description: [
        "The insurance industry is historically encumbered by monolithic legacy systems that make adapting to modern consumer expectations nearly impossible. Policyholders today demand instant quotes, seamless digital claims, and personalized premiums.",
        "We help insurers transition to agile, cloud-native architectures. By decoupling policy administration from customer-facing portals, we enable insurers to launch new digital products in weeks instead of years, all while maintaining absolute compliance with stringent regulatory frameworks."
      ],
      points: [
        { title: "Legacy Strangling", subtitle: "Modernizing core systems without downtime" },
        { title: "Customer-Centric", subtitle: "Frictionless digital experiences" }
      ],
      image1: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
      image2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    ecosystem: {
      title1: "Insurance Core",
      title2: "Modernization",
      description: "Comprehensive software engineering for the entire insurance lifecycle: from quote to claim.",
      cards: [
        {
          icon: <FileText className="w-8 h-8" />,
          title: "Policy Administration Systems",
          description: "Architecting flexible PAS platforms that handle complex rating engines, endorsements, renewals, and multi-line billing.",
          features: ["Dynamic Rating Engines", "Automated Renewals", "Omnichannel Billing"]
        },
        {
          icon: <Zap className="w-8 h-8" />,
          title: "Automated Claims Processing",
          description: "Building intelligent workflows that use OCR and computer vision to instantly process 'First Notice of Loss' (FNOL) and auto-approve minor claims.",
          features: ["AI Damage Assessment", "Straight-Through Processing", "Mobile FNOL Apps"]
        },
        {
          icon: <Globe className="w-8 h-8" />,
          title: "Agent & Broker Portals",
          description: "Digital hubs that empower your distribution network with quick quoting tools, real-time commission tracking, and CRM integrations.",
          features: ["Salesforce Integration", "Digital Signatures", "Commission Analytics"]
        }
      ]
    },
    security: {
      title1: "Fraud Prevention.<br/>",
      title2: "Data Integrity.",
      description: "Insurance fraud costs the industry billions annually. We build intelligent systems that detect anomalies before payouts occur, while fiercely protecting policyholder data.",
      button: { text: "Review Security Protocols", href: "/contact" },
      cards: [
        {
          icon: <Search className="w-12 h-12 text-[#00A2FF]" />,
          title: "AI Fraud Detection",
          description: "Machine learning models that cross-reference claims against massive historical datasets and social graphs to flag suspicious patterns."
        },
        {
          icon: <ShieldCheck className="w-12 h-12 text-[#D4AF37]" />,
          title: "Data Sovereignty & GDPR",
          description: "Ensuring all PII and sensitive health data (for life/health lines) is stored and encrypted according to local geographic laws."
        },
        {
          icon: <Bot className="w-12 h-12 text-[#00A2FF]" />,
          title: "Automated Underwriting",
          description: "Rules engines that securely pull third-party credit, driving, and medical data via API to instantly underwrite low-risk policies."
        },
        {
          icon: <Activity className="w-12 h-12 text-[#D4AF37]" />,
          title: "Telematics Integration",
          description: "Securely ingesting real-time IoT data from vehicles or smart homes to adjust premiums dynamically (Usage-Based Insurance)."
        }
      ]
    },
    expertise: {
      title: "Insurance Verticals",
      description: "Tailored InsurTech solutions across major product lines.",
      cards: [
        {
          image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80",
          title: "Auto & P&C Insurance",
          description: "Telematics apps for usage-based insurance (UBI) and AI computer vision for instant vehicle damage estimation."
        },
        {
          image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80",
          title: "Life & Health",
          description: "Secure portals connecting insurers with EHR systems to drastically reduce the time required for medical underwriting."
        },
        {
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
          title: "Commercial & Specialty",
          description: "Complex rating engines designed to handle the massive variables associated with enterprise liability and cyber insurance."
        }
      ]
    },
    process: {
      title1: "Our InsurTech Engineering",
      title2: "Process",
      steps: [
        { title: "Legacy Architecture Review", description: "Analyzing your existing mainframe or on-premise PAS to determine the most secure path for cloud migration." },
        { title: "API Microservices Design", description: "Designing an API-first middleware layer that allows your legacy core to communicate with modern web and mobile frontends." },
        { title: "Rating Engine Programming", description: "Codifying complex actuarial tables and underwriting rules into highly performant, scalable calculation engines." },
        { title: "Frontend Development", description: "Building frictionless mobile apps for policyholders (ID cards, FNOL) and powerful web portals for agents." },
        { title: "Security & Load Testing", description: "Subjecting the platform to intense penetration testing and simulating mass-claim events (like a hurricane) to ensure uptime." },
        { title: "Data Migration & Go-Live", description: "Executing a zero-data-loss migration of active policies and historical claims to the new cloud infrastructure." }
      ]
    },
    cta: {
      subtitle: "De-Risk Your Digital Transformation",
      title1: "Ready to modernize",
      title2: "your core systems?",
      description: "Partner with engineering experts who understand the extreme regulatory and technical demands of the insurance industry.",
      button1: { text: "Schedule Architecture Audit", href: "/contact" },
      button2: { text: "View InsurTech Portfolio", href: "/contact" }
    }
  };

  return <ServiceTemplate {...config} />;
}
