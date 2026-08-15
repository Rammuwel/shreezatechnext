"use client";
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';
import { Landmark, PieChart, Lock, ShieldCheck, Database, FileDigit, BarChart4 } from 'lucide-react';

export default function FinancePage() {
  const config = {
    breadcrumb: {
      label: 'Finance & Core Banking',
      href: '/solutions/finance',
      parentLabel: 'Solutions',
      parentHref: '/solutions'
    },
    hero: {
      slides: [
        {
          image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80",
          badgeText: "Enterprise Financial Tech",
          badgeColor: "#00A2FF",
          title1: "Modernizing",
          title2: "Core Banking",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#00A2FF] to-[#00f2fe]",
          description: "We architect mission-critical financial systems, modernizing legacy banking infrastructure to deliver high-frequency, secure, and globally compliant operations.",
          primaryButton: { text: "Modernize Your Infrastructure", href: "#capabilities" }
        },
        {
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
          badgeText: "Wealth & Asset Management",
          badgeColor: "#D4AF37",
          title1: "Intelligent",
          title2: "Asset Management",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#fde08b]",
          description: "Deploy algorithmic trading algorithms, real-time risk assessment models, and comprehensive portfolio management dashboards.",
          secondaryButton: { text: "Explore WealthTech", href: "/contact" }
        }
      ]
    },
    stats: [
      { value: "$50B+", label: "Assets Processed" },
      { value: "99.999%", label: "System Availability" },
      { value: "0", label: "Security Breaches" }
    ],
    philosophy: {
      tagline: "Our Financial Engineering Philosophy",
      title1: "Uncompromising Stability,",
      title2: "Infinite Scalability",
      description: [
        "In the financial sector, software isn't just a tool; it's the institution itself. Legacy mainframes have served banks well, but they are rigid and expensive to maintain. We believe in modernizing financial institutions through agile, cloud-native architectures without sacrificing a single millisecond of stability.",
        "We build systems designed for the extremes: handling massive transaction bursts during market volatility, ensuring 100% ACID compliance for every ledger entry, and maintaining impenetrable security postures against state-sponsored actors."
      ],
      points: [
        { title: "ACID Compliance", subtitle: "Absolute data integrity for every transaction" },
        { title: "High-Frequency Ready", subtitle: "Ultra-low latency microservices" }
      ],
      image1: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80",
      image2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    ecosystem: {
      title1: "Core Financial",
      title2: "Capabilities",
      description: "Enterprise-grade software engineering for traditional banks, investment firms, and lending institutions.",
      cards: [
        {
          icon: <Landmark className="w-8 h-8" />,
          title: "Core Banking Modernization",
          description: "Strangling legacy COBOL mainframes and safely migrating core banking logic to modern, cloud-native Java and Go microservices.",
          features: ["Legacy API Wrapping", "Mainframe Migration", "Cloud-Native Architecture"]
        },
        {
          icon: <PieChart className="w-8 h-8" />,
          title: "Wealth Management Portals",
          description: "Secure, real-time dashboards for High-Net-Worth Individuals (HNWI) and institutional investors to track portfolio performance.",
          features: ["Real-Time Market Data Integration", "Robo-Advisory Algorithms", "Risk Modeling"]
        },
        {
          icon: <FileDigit className="w-8 h-8" />,
          title: "Loan Origination Systems",
          description: "Automating the entire lending lifecycle from application and credit scoring to disbursement and collection.",
          features: ["Automated Credit Underwriting", "KYC / AML Integration", "Document OCR"]
        }
      ]
    },
    security: {
      title1: "Regulatory Compliance.<br/>",
      title2: "Bank-Grade Security.",
      description: "Financial software must operate within a labyrinth of global regulations. We engineer compliance directly into the software architecture, ensuring auditable, secure, and legal operations across all jurisdictions.",
      button: { text: "Review Compliance Specs", href: "/contact" },
      cards: [
        {
          icon: <ShieldCheck className="w-12 h-12 text-[#00A2FF]" />,
          title: "PCI-DSS & SOC2",
          description: "Architectures that inherently comply with the highest standards for credit card processing and service organization controls."
        },
        {
          icon: <Lock className="w-12 h-12 text-[#D4AF37]" />,
          title: "HSM Integration",
          description: "Integrating Hardware Security Modules for cryptographic key management, PIN processing, and secure transaction signing."
        },
        {
          icon: <Database className="w-12 h-12 text-[#00A2FF]" />,
          title: "Immutable Audit Trails",
          description: "Implementing write-once-read-many (WORM) databases and blockchain ledgers for tamper-proof transaction history."
        },
        {
          icon: <BarChart4 className="w-12 h-12 text-[#D4AF37]" />,
          title: "Real-Time Fraud Detection",
          description: "Deploying machine learning models that analyze transaction patterns in milliseconds to block fraudulent activities instantly."
        }
      ]
    },
    expertise: {
      title: "Financial Sectors Served",
      description: "Custom software tailored to specific financial industry verticals.",
      cards: [
        {
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
          title: "Commercial Banking",
          description: "Omnichannel digital banking experiences, automated clearing house (ACH) integrations, and corporate treasury management."
        },
        {
          image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80",
          title: "Investment Banking",
          description: "High-frequency trading infrastructure, algorithmic execution engines, and complex derivative pricing models."
        },
        {
          image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
          title: "Insurance (InsureTech)",
          description: "Automated claims processing using computer vision, dynamic policy underwriting, and agent portal ecosystems."
        }
      ]
    },
    process: {
      title1: "Our Financial Engineering",
      title2: "Process",
      steps: [
        { title: "Regulatory Mapping", description: "Identifying all local and international compliance requirements (GDPR, PSD2, Basel III) before defining the technical architecture." },
        { title: "Architecture & Security Design", description: "Designing an isolated VPC architecture with strict network segmentation, HSM integration, and database encryption." },
        { title: "Legacy System Wrapping", description: "Building microservice 'strangler facades' over existing legacy mainframes to allow modern applications to interact with old core systems securely." },
        { title: "Agile Feature Development", description: "Building the new frontend and backend modules using Test-Driven Development (TDD) to ensure zero logic errors." },
        { title: "Penetration & Load Testing", description: "Hiring ethical hackers to attack the system, while simultaneously simulating massive transaction spikes to test system resilience." },
        { title: "Phased Rollout", description: "Deploying the new system in stages (e.g., to 1% of users first), monitoring transaction logs, and scaling up gradually to ensure absolute stability." }
      ]
    },
    cta: {
      subtitle: "Secure Your Financial Future",
      title1: "Ready to modernize",
      title2: "your institution?",
      description: "Partner with us to build financial technology that is agile enough for the future, but stable enough for a bank.",
      button1: { text: "Schedule Architecture Review", href: "/contact" },
      button2: { text: "View Banking Case Studies", href: "/contact" }
    }
  };

  return <ServiceTemplate {...config} />;
}
