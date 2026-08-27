"use client";
import React from 'react';
import SolutionTemplate from '../../../components/SolutionTemplate';
import { Shield, BrainCircuit, Activity, LineChart, FileText, Lock, Globe, Database } from 'lucide-react';

export default function InsurtechPage() {
  const config = {
    breadcrumb: {
      label: 'InsurTech Solutions',
      parentLabel: 'Solutions',
      parentHref: '/solutions'
    },
    hero: {
      bgImage: "/images/insurtech_hero_1787090006221.jpg",
      badge: "Next-Gen Insurance Tech",
      title1: "Intelligent",
      title2: "Insurance Ecosystems",
      description: "We architect automated, AI-driven platforms that transform the entire insurance lifecycle—from instant predictive underwriting to frictionless, fraud-proof claims processing.",
      primaryButton: { text: "Schedule Architecture Review", href: "/contact-us" },
      stats: [
        { label: "Underwriting Time", value: "<1s", trend: "AI Risk Models" },
        { label: "Claims Processing", value: "Auto", trend: "Smart Contracts" },
        { label: "Fraud Detection", value: "99.9%", trend: "Machine Learning" }
      ]
    },
    challenge: {
      title1: "The Archaic",
      title2: "Policy Lifecycle",
      description: [
        "Traditional insurance workflows are severely bottlenecked by manual data entry, disconnected legacy systems, and weeks-long underwriting processes.",
        "To remain competitive against agile InsurTech startups, established carriers must modernize their infrastructure, leveraging AI and real-time data to meet modern customer expectations for instant, personalized coverage."
      ],
      painPoints: [
        "Weeks-long manual underwriting processes causing customer drop-off",
        "High operational costs from manual claims adjustment and processing",
        "Millions lost annually to undetected, sophisticated fraud rings",
        "Inability to offer dynamic, usage-based insurance (UBI) products"
      ],
      image: "/images/solutions_hero_1787049726192.jpg",
      floatingStat: {
        value: "65%",
        label: "Of customers abandon quote processes if they aren't instant"
      }
    },
    features: {
      title1: "Our InsurTech",
      title2: "Capabilities",
      description: "We deliver full-stack engineering solutions that modernize core insurance operations and unlock new digital revenue streams.",
      bentoCards: [
        {
          icon: <BrainCircuit />,
          title: "AI Predictive Underwriting",
          description: "Ingesting thousands of real-time data points to automatically price risk and issue policies in milliseconds.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <FileText />,
          title: "Automated Claims Processing",
          description: "Computer vision algorithms to assess damage photos and trigger instant payouts via smart contracts."
        },
        {
          icon: <Activity />,
          title: "Telematics & UBI Platforms",
          description: "Processing IoT sensor data for dynamic, usage-based insurance pricing."
        },
        {
          icon: <Shield />,
          title: "ML Fraud Detection",
          description: "Deep learning models that analyze historical patterns to flag anomalous claims before payout.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <Globe />,
          title: "Agent & Broker Portals",
          description: "Unified digital workspaces that give agents a 360-degree view of their portfolios."
        },
        {
          icon: <Lock />,
          title: "Policy Admin Modernization",
          description: "Migrating legacy policy administration systems (PAS) to scalable cloud microservices."
        }
      ]
    },
    architecture: {
      title: "Data-Driven Insurance Architecture",
      layers: [
        {
          icon: <Globe className="w-8 h-8" />,
          title: "Digital Engagement Layer",
          items: ["Next.js Customer Portals", "Native Mobile Apps", "Broker Dashboards"]
        },
        {
          icon: <BrainCircuit className="w-8 h-8" />,
          title: "Intelligent Decision Engine",
          items: ["Machine Learning Risk Models", "Computer Vision Claims Analysis", "Real-Time Pricing Engine"]
        },
        {
          icon: <Database className="w-8 h-8" />,
          title: "Core System Integration",
          items: ["Legacy PAS Middleware", "Data Lakes for Actuarial Analysis", "Secure Blockchain Ledgers"]
        }
      ]
    },
    roi: {
      title1: "Business",
      title2: "Impact",
      metrics: [
        { value: "70%", title: "Reduction in Processing", description: "Automated workflows eliminate manual data entry and document review." },
        { value: "3x", title: "Quote Conversion", description: "Instant, AI-driven pricing engines prevent customer drop-off during the quote phase." },
        { value: "$MM", title: "Fraud Prevented", description: "Advanced ML models catch anomalies that human adjusters miss." },
        { value: "Days to Secs", title: "Claims Resolution", description: "Parametric insurance and smart contracts enable instant, frictionless payouts." }
      ]
    },
    caseStudies: {
      title: "Trusted by Insurance Leaders",
      studies: [
        {
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
          industry: "Auto Insurance",
          title: "Building a Telematics Data Pipeline for Usage-Based Pricing",
          stats: [ { value: "10B+", label: "IoT Events/Day" }, { value: "Real-time", label: "Pricing" } ]
        },
        {
          image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
          industry: "P&C Carrier",
          title: "Automating Property Claims with Computer Vision AI",
          stats: [ { value: "80%", label: "Faster Claims" }, { value: "30%", label: "Cost Drop" } ]
        },
        {
          image: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&q=80",
          industry: "Life Insurance",
          title: "Modernizing a Legacy Policy Admin System to Cloud Microservices",
          stats: [ { value: "Zero", label: "Downtime" }, { value: "100%", label: "Cloud Native" } ]
        }
      ]
    },
    compliance: {
      title: "Regulatory & Security Compliance",
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
          question: "How do your AI underwriting models explain their decisions?",
          answer: "We utilize Explainable AI (XAI) frameworks. This ensures that every automated pricing or denial decision can be traced back to specific data points, ensuring full compliance with regulatory transparency requirements."
        },
        {
          question: "Can you integrate with our existing Guidewire or Duck Creek systems?",
          answer: "Yes, we have deep experience building middleware and custom frontend portals that interface seamlessly with major enterprise core systems like Guidewire, Duck Creek, and Majesco."
        },
        {
          question: "What is parametric insurance?",
          answer: "Parametric insurance pays out automatically when a pre-defined triggering event occurs (e.g., a hurricane reaches a certain category), rather than requiring a manual loss assessment. We build the smart contracts and Oracle integrations that power these platforms."
        }
      ]
    },
    cta: {
      subtitle: "Accelerate Digital Transformation",
      title1: "Ready to modernize",
      title2: "your insurance workflows?",
      description: "Partner with engineering experts to build intelligent, automated platforms that reduce costs and delight policyholders.",
      button1: { text: "Schedule Architecture Consultation", href: "/contact-us" },
      button2: { text: "View InsurTech Case Studies", href: "/contact-us" }
    }
  };

  return <SolutionTemplate {...config} />;
}
