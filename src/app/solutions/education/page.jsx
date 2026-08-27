"use client";
import React from 'react';
import SolutionTemplate from '../../../components/SolutionTemplate';
import { School, Building, Network, ShieldCheck, Database, Fingerprint, Calendar, Globe } from 'lucide-react';

export default function EducationPage() {
  const config = {
    breadcrumb: {
      label: 'Education Technology',
      parentLabel: 'Solutions',
      parentHref: '/solutions'
    },
    hero: {
      bgImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80",
      badge: "Campus Digital Transformation",
      title1: "Smart Campus",
      title2: "Ecosystems",
      description: "We build integrated ERP systems and smart campus solutions that unify administration, optimize resources, and elevate every facet of the institutional experience—from enrollment to alumni.",
      primaryButton: { text: "Digitize Your Campus", href: "/contact-us" },
      stats: [
        { label: "Student Profiles Managed", value: "500K+", trend: "Unified Data Hub" },
        { label: "Admin Time Saved", value: "40%", trend: "Workflow Automation" },
        { label: "Data Centralization", value: "100%", trend: "Single Source of Truth" }
      ]
    },
    challenge: {
      title1: "The Administrative",
      title2: "Fragmentation Crisis",
      description: [
        "Modern educational institutions operate at the complexity of large corporations. Fragmented software silos across admissions, finance, HR, and academics lead to data loss, massive administrative friction, and poor student outcomes.",
        "Faculty and staff spend hours on manual data re-entry between disconnected systems. A unified, cloud-native ERP is no longer a luxury—it is the foundation of a competitive, world-class institution."
      ],
      painPoints: [
        "Student data scattered across 5+ disconnected legacy systems",
        "Manual scheduling and timetabling consuming hundreds of admin hours",
        "Inability to generate real-time insights into enrollment or retention risk",
        "Vulnerability to ransomware due to outdated IT infrastructure"
      ],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
      floatingStat: {
        value: "40%",
        label: "Of administrative work is pure duplication due to siloed systems"
      }
    },
    features: {
      title1: "Campus Management",
      title2: "Capabilities",
      description: "Comprehensive software ecosystems designed to handle the massive administrative load of modern universities and K-12 districts.",
      bentoCards: [
        {
          icon: <Building />,
          title: "University ERP Systems",
          description: "End-to-end management handling admissions, financial aid, academics, housing, and alumni—all in one unified platform.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <Calendar />,
          title: "AI Timetabling Engine",
          description: "Complex algorithm-driven scheduling optimizing classroom utilization, faculty availability, and student preferences."
        },
        {
          icon: <Network />,
          title: "Smart Campus IoT",
          description: "RFID attendance, smart energy management, and campus security hubs all unified into a single operations dashboard."
        },
        {
          icon: <ShieldCheck />,
          title: "Ransomware Protection",
          description: "Immutable backups and behavioral threat detection to prevent institutional data lockouts and catastrophic data loss.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <Fingerprint />,
          title: "Identity & Access (IAM)",
          description: "SSO and MFA for thousands of diverse campus users—students, faculty, and administrators."
        },
        {
          icon: <Globe />,
          title: "Alumni CRM & Fundraising",
          description: "CRM tools tracking alumni career progression and executing targeted, data-driven fundraising campaigns."
        }
      ]
    },
    architecture: {
      subtitle: "Campus IT Architecture",
      title: "Unified Institutional Data Platform",
      layers: [
        {
          icon: <School className="w-8 h-8" />,
          title: "Student & Academic Layer",
          items: ["Admissions Pipeline", "Course Registration", "Transcript & Grading", "LMS Integration (Canvas/Blackboard)"]
        },
        {
          icon: <Database className="w-8 h-8" />,
          title: "Financial & Operations Layer",
          items: ["Automated Tuition Collection", "Grant Fund Tracking", "Payroll & HR", "Vendor Management"]
        },
        {
          icon: <ShieldCheck className="w-8 h-8" />,
          title: "Security & Compliance Layer",
          items: ["FERPA / GDPR Compliance", "Zero-Trust Network", "Immutable Audit Logs", "Cloud Data Sovereignty"]
        }
      ]
    },
    roi: {
      title1: "Institutional",
      title2: "Value Delivered",
      metrics: [
        { value: "40%", title: "Admin Time Saved", description: "Eliminating duplicate data entry frees staff to focus on students." },
        { value: "3x", title: "Enrollment Velocity", description: "Automated lead nurturing and frictionless digital applications boost conversions." },
        { value: "Zero", title: "Compliance Failures", description: "Automated FERPA and GDPR reporting eliminates manual audit risk." },
        { value: "95%", title: "Student Satisfaction", description: "Single mobile app for registration, payments, and campus services." }
      ]
    },
    caseStudies: {
      title: "Trusted by Leading Institutions",
      studies: [
        {
          image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80",
          industry: "Universities & Colleges",
          title: "Deploying a Unified ERP Across a 10-Campus University System",
          stats: [ { value: "200K", label: "Students" }, { value: "40%", label: "Admin Savings" } ]
        },
        {
          image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80",
          industry: "K-12 Districts",
          title: "Unified Parent-Teacher Communication Portal for a 50-School District",
          stats: [ { value: "50", label: "Schools" }, { value: "95%", label: "Adoption Rate" } ]
        },
        {
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
          industry: "Vocational Institutes",
          title: "Industry Certification Tracking & Corporate Placement Pipeline",
          stats: [ { value: "100%", label: "Compliance" }, { value: "80%", label: "Placement Rate" } ]
        }
      ]
    },
    compliance: {
      title: "Education Data & Privacy Standards",
      logos: [
        "https://upload.wikimedia.org/wikipedia/commons/8/87/GDPR_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png"
      ]
    },
    faq: {
      questions: [
        {
          question: "Can this system integrate with our existing LMS (e.g., Canvas, Blackboard)?",
          answer: "Yes. Our ERP systems are built with API-first architectures. We seamlessly integrate with all major Learning Management Systems to automatically sync course rosters, grades, and assignments without manual re-entry."
        },
        {
          question: "How long does a full University ERP migration take?",
          answer: "A full rip-and-replace of an enterprise university ERP typically takes 12 to 18 months. We employ a phased rollout strategy, deploying modular capabilities like admissions or alumni relations in smaller 3-4 month sprints to minimize disruption."
        },
        {
          question: "How do you handle massive traffic spikes during class registration?",
          answer: "We use cloud-native auto-scaling. During registration week, the system automatically spins up additional server clusters to handle immense concurrent load, then spins them back down to save costs."
        },
        {
          question: "Is the platform mobile-friendly for students?",
          answer: "Absolutely. We build responsive web portals and native iOS/Android applications. Students can register for classes, pay tuition, submit assignments, and book campus resources directly from their phones."
        }
      ]
    },
    cta: {
      subtitle: "Modernize Your Institution",
      title1: "Ready to build a",
      title2: "smart campus?",
      description: "Let's streamline your administrative overhead so your faculty can focus on what matters most: student success and academic excellence.",
      button1: { text: "Schedule ERP Consultation", href: "/contact-us" },
      button2: { text: "View Campus Implementations", href: "/contact-us" }
    }
  };

  return <SolutionTemplate {...config} />;
}
