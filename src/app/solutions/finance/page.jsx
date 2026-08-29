"use client";
import React from 'react';
import SolutionTemplate from '../../../components/SolutionTemplate';
import { Landmark, ShieldCheck, Database, BarChart4, Network, Globe, Lock } from 'lucide-react';

export default function FinancePage() {
  const config = {
    breadcrumb: {
      label: 'Finance & Core Banking',
      parentLabel: 'Solutions',
      parentHref: '/solutions'
    },
    hero: {
      bgImage: "/images/finance_hero_1787089986773.jpg",
      title1: "Modernizing",
      title2: "Core Banking Systems",
      description: "We engineer ultra-secure, highly scalable core banking and wealth management platforms designed to process high-frequency global transactions with zero downtime and absolute regulatory compliance.",
      stats: [
        { label: "Transaction Latency", value: "<10ms", trend: "High-Frequency Trading" },
        { label: "Data Security", value: "AES-256", trend: "Military Grade Encryption" },
        { label: "System Uptime", value: "99.999%", trend: "Redundant Cloud Nodes" }
      ]
    },
    challenge: {
      title1: "The Legacy",
      title2: "Infrastructure Bottleneck",
      description: [
        "Financial institutions are heavily burdened by monolithic, decades-old legacy systems that are incredibly expensive to maintain and nearly impossible to scale.",
        "As challenger banks and fintech startups capture market share with agile, cloud-native platforms, traditional banks face a critical inflection point: modernize their core systems or risk obsolescence."
      ],
      painPoints: [
        "Inability to launch new financial products quickly due to monolithic architectures",
        "High operational costs from maintaining on-premise mainframe servers",
        "Security vulnerabilities and compliance risks in outdated codebases",
        "Data silos preventing a unified, 360-degree view of the customer"
      ],
      image: "/images/solutions_hero_1787049726192.jpg"
    },
    features: {
      title1: "Our Financial",
      title2: "Capabilities",
      description: "We deliver comprehensive engineering solutions that transition your institution from legacy mainframes to agile, cloud-native microservices.",
      bentoCards: [
        {
          icon: <Network />,
          title: "Microservices Architecture",
          description: "Decoupling monolithic legacy systems into independent, highly scalable microservices for faster deployment cycles.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <Landmark />,
          title: "Core Banking Migration",
          description: "Zero-downtime database migrations from legacy DB2/Oracle to modern distributed SQL."
        },
        {
          icon: <Globe />,
          title: "Global Payments API",
          description: "Building resilient gateways for SWIFT, SEPA, and real-time cross-border settlements."
        },
        {
          icon: <ShieldCheck />,
          title: "Automated Compliance & AML",
          description: "Integrating AI-driven transaction monitoring to instantly detect and report suspicious activity.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <Database />,
          title: "Wealth Management Portals",
          description: "Custom dashboards for high-net-worth clients with real-time portfolio analytics."
        },
        {
          icon: <BarChart4 />,
          title: "Open Banking APIs",
          description: "Developing secure REST and GraphQL APIs adhering to PSD2 open banking standards."
        }
      ]
    },
    architecture: {
      title: "Cloud-Native Banking Architecture",
      layers: [
        {
          icon: <Globe className="w-8 h-8" />,
          title: "Omnichannel Interaction Layer",
          items: ["Next.js Web Portals", "Native iOS/Android Banking Apps", "Open Banking API Gateway"]
        },
        {
          icon: <Network className="w-8 h-8" />,
          title: "Microservices Logic Layer",
          items: ["Kubernetes Orchestration", "Event-Driven Message Brokers (Kafka)", "gRPC Internal Communication"]
        },
        {
          icon: <Lock className="w-8 h-8" />,
          title: "Secure Data & Core Layer",
          items: ["Distributed SQL Databases", "Hardware Security Modules (HSM)", "Immutable Audit Ledgers"]
        }
      ]
    },
    roi: {
      title1: "Business",
      title2: "Impact",
      metrics: [
        { value: "40%", title: "Reduced IT OpEx", description: "Shifting from expensive on-premise mainframes to optimized cloud infrastructure." },
        { value: "5x", title: "Faster Time-to-Market", description: "Microservices allow independent deployment of new financial products without system-wide testing." },
        { value: "Zero", title: "Data Breaches", description: "Zero-trust network architecture and end-to-end encryption ensures absolute data integrity." },
        { value: "100%", title: "Compliance Automations", description: "Real-time regulatory reporting eliminates manual audits and costly fines." }
      ]
    },
    caseStudies: {
      title: "Trusted by Financial Leaders",
      studies: [
        {
          image: "/images/digital_learning_hero_1787090023062.jpg",
          industry: "Retail Banking",
          title: "Migrating a 20-Year Legacy Core to a Cloud-Native Microservices Architecture",
          stats: [ { value: "Zero", label: "Downtime" }, { value: "3M+", label: "Daily Transactions" } ]
        },
        {
          image: "/images/healthcare_cloud_challenge_1787226450306.jpg",
          industry: "Wealth Management",
          title: "Building an AI-Driven Portfolio Advisory Dashboard for HNW Clients",
          stats: [ { value: "$10B+", label: "AUM Managed" }, { value: "Real-time", label: "Analytics" } ]
        },
        {
          image: "/images/hero-slide-1.jpg",
          industry: "Global Payments",
          title: "Architecting a High-Frequency Cross-Border Settlement Gateway",
          stats: [ { value: "<10ms", label: "Latency" }, { value: "99.999%", label: "Uptime" } ]
        }
      ]
    },
    compliance: {
      title: "Bank-Grade Security & Compliance Standards",
      logos: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PCI_Security_Standards_Council_logo.svg/1200px-PCI_Security_Standards_Council_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/8/87/GDPR_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/SOC_2_Logo.png/800px-SOC_2_Logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png"
      ]
    },
    faq: {
      questions: [
        {
          question: "How do you ensure data security during a core banking migration?",
          answer: "We utilize parallel-run strategies and continuous data replication. Before shutting down legacy systems, the new architecture runs in tandem, ensuring zero data loss and absolute integrity verified by automated reconciliation scripts."
        },
        {
          question: "Can you integrate with our existing mainframe (e.g., AS400)?",
          answer: "Yes. We often employ a 'strangler fig' pattern, building a modern API gateway layer over your existing mainframe. This allows us to gradually migrate functionality to modern microservices without a risky 'big bang' rewrite."
        },
        {
          question: "Do you build custom trading platforms?",
          answer: "Absolutely. We architect ultra-low latency trading interfaces utilizing WebSockets for real-time market data streaming and gRPC for rapid execution routing."
        }
      ]
    },
    cta: {
      subtitle: "Future-Proof Your Institution",
      title1: "Ready to modernize",
      title2: "your financial infrastructure?",
      description: "Partner with engineering experts to build a secure, agile, and globally scalable banking ecosystem.",
      button1: { text: "Schedule Architecture Consultation", href: "/contact-us" },
      button2: { text: "View Banking Case Studies", href: "/contact-us" }
    }
  };

  return <SolutionTemplate {...config} />;
}
