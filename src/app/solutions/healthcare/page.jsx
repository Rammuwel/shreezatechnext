"use client";
import React from 'react';
import SolutionTemplate from '../../../components/SolutionTemplate';
import { ShieldCheck, Database, Smartphone, FileText, Network, Users, Activity, Settings, Lock, CheckSquare, Stethoscope, Search, ShieldAlert, Code2, Rocket, Brain, Cpu, LineChart, Sparkles } from 'lucide-react';

export default function HealthcareSolutionPage() {
  const config = {
    breadcrumb: {
      label: 'Healthcare IT Solutions',
      parentLabel: 'Solutions',
      parentHref: '/solutions'
    },
    hero: {
      bgImage: "/images/istock-2.jpg",
      title1: "Driving Healthcare",
      title2: "Digital Transformation",
      description: "We empower healthcare providers, software vendors, and intermediaries with world-class IT services—from patient engagement platforms to complex EHR integrations and compliance consulting.",
      primaryButton: { text: "Discuss Your IT Needs", href: "/contact-us" }
    },
    challenge: {
      title1: "The Challenge:",
      title2: "Overcoming System Fragmentation",
      description: [
        "Healthcare providers are caught between delivering superior patient care and managing overwhelming operational complexity. Outdated systems, strict regulatory requirements, and fragmented data create bottlenecks that strain resources and degrade the patient experience.",
        "A unified digital strategy is no longer optional—it is critical for sustainable growth and ensuring continuous, high-quality care."
      ],
      painPoints: [
        "Fragmented patient records hindering care continuity and clinical decisions",
        "Inefficient manual workflows driving up administrative costs",
        "Complex regulatory hurdles demanding constant adaptation and strict compliance",
        "Poor digital patient engagement resulting in missed appointments and friction"
      ],
      image: "/images/healthcare_cloud_challenge_1787226450306.jpg"
    },
    features: {
      title1: "Core Capabilities &",
      title2: "Solutions",
      description: "A comprehensive suite of digital engineering services designed to modernize clinical workflows and elevate the patient experience.",
      bentoCards: [
        {
          icon: <Smartphone />,
          title: "Patient Engagement Platforms",
          description: "End-to-end digital intake, automated appointment registration, eligibility verification, and secure digital payment solutions.",
          span: "col-span-1 md:col-span-2 lg:col-span-2"
        },
        {
          icon: <FileText />,
          title: "Clinical & Admin Software",
          description: "Custom EMR/EHR development, Hospital Management Systems, and optimized Revenue Cycle Management (RCM).",
          span: "col-span-1 md:col-span-1 lg:col-span-1"
        },
        {
          icon: <Network />,
          title: "Interoperability & Integration",
          description: "Expert integration using HL7 and FHIR standards to ensure seamless, secure data exchange across disparate healthcare systems.",
          span: "col-span-1 md:col-span-1 lg:col-span-1"
        },
        {
          icon: <Users />,
          title: "Population Health & Analytics",
          description: "Advanced dashboards and tracking capabilities to manage at-risk cohorts, monitor chronic conditions, and close care gaps.",
          span: "col-span-1 md:col-span-1 lg:col-span-1"
        },
        {
          icon: <CheckSquare />,
          title: "Healthcare IT Consulting",
          description: "Strategic guidance on technology initiatives and strict compliance adherence including MIPS, HEDIS, and HIPAA.",
          span: "col-span-1 md:col-span-1 lg:col-span-1"
        },
        {
          icon: <Settings />,
          title: "Managed IT Services",
          description: "Ongoing proactive maintenance and cloud support to ensure your mission-critical healthcare systems remain scalable, secure, and performant.",
          span: "col-span-1 md:col-span-2 lg:col-span-2"
        }
      ]
    },
    architecture: {
      subtitle: "Technology Foundation",
      title: "Digital Engineering & Integration Architecture",
      layers: [
        {
          icon: <Network className="w-8 h-8" />,
          title: "Interoperability Layer",
          items: ["HL7 v2/v3 Interfaces", "FHIR API Integration", "SMART on FHIR Frameworks"]
        },
        {
          icon: <Database className="w-8 h-8" />,
          title: "Data & Analytics Core",
          items: ["Scalable Healthcare Data Lakes", "Predictive Population Health Modeling", "Real-time Clinical Dashboards"]
        },
        {
          icon: <ShieldCheck className="w-8 h-8" />,
          title: "Security & Compliance Layer",
          items: ["AES-256 Encryption & Tokenization", "Automated HIPAA Audit Logging", "Identity & Access Management (IAM)"]
        }
      ]
    },
    process: {
      title: "Our Implementation Approach",
      steps: [
        {
          title: "Assessment & Compliance",
          description: "We begin with a rigorous analysis of your existing systems and evaluate HIPAA and ONC compliance gaps."
        },
        {
          title: "Architecture Design",
          description: "Designing scalable, interoperable cloud architectures leveraging modern FHIR standards."
        },
        {
          title: "Secure Development",
          description: "Iterative, agile development with security baked into every sprint and code commit."
        },
        {
          title: "Deployment & Training",
          description: "Seamless deployment with zero downtime, comprehensive staff training, and ongoing managed support."
        }
      ]
    },
    aiFuture: {
      title1: "AI-Powered",
      title2: "Healthcare",
      description: "Step into the future of medicine with our cutting-edge AI and machine learning solutions. We integrate predictive models that help clinicians anticipate patient risks, optimize resource allocation, and automate repetitive administrative tasks.",
      features: [
        "Predictive Health Modeling",
        "Automated Chart Review",
        "AI-Assisted Diagnostics",
        "Smart Resource Allocation"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
    },
    roi: {
      title1: "Quantifiable",
      title2: "Impact",
      metrics: [
        { value: "50%", title: "Faster Patient Intake", description: "Digital pre-registration and self-service kiosks dramatically reduce front-desk wait times." },
        { value: "30%", title: "Drop in Claim Denials", description: "Automated eligibility verification and optimized RCM workflows ensure accurate billing." },
        { value: "100%", title: "Interoperability Achieved", description: "Seamless bidirectional sync between custom apps and legacy EHR systems." },
        { value: "4x", title: "Increase in Engagement", description: "Patient portals and automated outreach improve adherence to care plans and follow-ups." }
      ]
    },
    caseStudies: {
      title: "Data-Backed Client Outcomes",
      studies: [
        {
          image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
          industry: "Clinical Provider",
          title: "Modernizing Patient Intake Workflows for a Multi-Specialty Clinic",
          stats: [{ value: "50%", label: "Faster Intake" }, { value: "Zero", label: "Paper Forms" }]
        },
        {
          image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80",
          industry: "Health Tech Vendor",
          title: "Developing a FHIR-Compliant API Gateway for Legacy EMR Data",
          stats: [{ value: "100%", label: "Data Sync" }, { value: "ONC", label: "Compliant" }]
        },
        {
          image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80",
          industry: "Population Health",
          title: "Building Real-Time Analytics Dashboards for Value-Based Care",
          stats: [{ value: "100k+", label: "Patients Tracked" }, { value: "15%", label: "Better Outcomes" }]
        },
        {
          image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80",
          industry: "Hospital Network",
          title: "Implementing Automated Revenue Cycle Management & Billing",
          stats: [{ value: "30%", label: "Fewer Denials" }, { value: "Faster", label: "Settlements" }]
        }
      ]
    },
    faq: {
      questions: [
        {
          question: "How do you ensure HIPAA compliance across all digital platforms?",
          answer: "We employ a strict 'Security by Design' methodology with AES-256 encryption at rest, TLS 1.3 in transit, and robust access controls. We also help navigate the complexities of Business Associate Agreements (BAAs) and maintain immutable audit logs for all PHI access."
        },
        {
          question: "Can you integrate custom patient portals with our existing EHR?",
          answer: "Yes, interoperability is one of our core strengths. We specialize in building secure middleware using modern FHIR APIs and traditional HL7 standards to seamlessly read and write data directly to legacy EHR/EMR systems."
        },
        {
          question: "What does your digital transformation consulting cover?",
          answer: "Our consulting services cover everything from assessing your current IT infrastructure and mapping out cloud migration strategies to guiding you through regulatory compliance mandates like the ONC Cures Act, MIPS, and HEDIS."
        },
        {
          question: "Do you offer ongoing support after a solution is deployed?",
          answer: "Absolutely. We provide comprehensive Managed IT Services, ensuring that your customized software, cloud infrastructure, and integrations remain performant, up-to-date, and secure against emerging threats."
        }
      ]
    },
    cta: {
      subtitle: "Elevate Your Healthcare Organization",
      title1: "Ready to accelerate your",
      title2: "digital transformation?",
      description: "Partner with domain experts who understand the critical balance between cutting-edge engineering and rigorous healthcare compliance.",
      button1: { text: "Schedule a Consultation", href: "/contact-us" },
      button2: { text: "Explore Our Solutions", href: "/contact-us" }
    }
  };

  return <SolutionTemplate {...config} />;
}
