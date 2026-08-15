"use client";
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';
import { School, Building, Network, ShieldCheck, Database, Fingerprint, Calendar, PiggyBank, Briefcase, FileSearch, LineChart, Globe, UserCheck } from 'lucide-react';

export default function EducationPage() {
  const config = {
    breadcrumb: {
      label: 'Education',
      href: '/solutions/education',
      parentLabel: 'Solutions',
      parentHref: '/solutions'
    },
    hero: {
      slides: [
        {
          image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80",
          badgeText: "Institutional Management",
          badgeColor: "#00A2FF",
          title1: "Smart",
          title2: "Campus Ecosystems",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#00A2FF] to-[#00f2fe]",
          description: "We build integrated ERP systems and smart campus solutions that streamline administration, optimize resources, and elevate the institutional experience.",
          primaryButton: { text: "Digitize Your Campus", href: "#capabilities" }
        },
        {
          image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
          badgeText: "Student Lifecycle Management",
          badgeColor: "#D4AF37",
          title1: "Unified",
          title2: "Data Architecture",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#fde08b]",
          description: "Connect admissions, academics, finance, and alumni relations into a single, cohesive, high-performance data ecosystem.",
          secondaryButton: { text: "View ERP Solutions", href: "/contact" }
        }
      ]
    },
    stats: [
      { value: "500K+", label: "Student Profiles Managed" },
      { value: "40%", label: "Admin Time Saved" },
      { value: "100%", label: "Data Centralization" }
    ],
    philosophy: {
      tagline: "Our Education IT Philosophy",
      title1: "Empowering Educators,",
      title2: "Unifying Administration",
      description: [
        "Modern educational institutions are complex organizations operating at the scale of large corporations. Fragmented software silos lead to administrative friction, data loss, and poor student experiences.",
        "We architect holistic ERP systems that unify every department on campus. By automating routine administrative tasks and centralizing data, we give faculty and staff their time back—allowing them to focus entirely on student success and academic excellence."
      ],
      points: [
        { title: "Single Source of Truth", subtitle: "Unified database for all departments" },
        { title: "Automated Workflows", subtitle: "Eliminating manual data entry" }
      ],
      image1: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
      image2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    ecosystem: {
      title1: "Campus Management",
      title2: "Solutions",
      description: "Comprehensive software ecosystems designed to handle the massive administrative load of modern universities and K-12 districts.",
      cards: [
        {
          icon: <Building className="w-8 h-8" />,
          title: "University ERP Systems",
          description: "End-to-end management systems handling everything from student recruitment and admissions to graduation and alumni tracking.",
          features: ["Admissions Pipeline", "Financial Aid Module", "Alumni CRM"]
        },
        {
          icon: <Calendar className="w-8 h-8" />,
          title: "Academic Scheduling",
          description: "Complex algorithm-driven timetabling systems that optimize classroom utilization, faculty availability, and student preferences.",
          features: ["AI Timetabling", "Conflict Resolution", "Resource Allocation"]
        },
        {
          icon: <Network className="w-8 h-8" />,
          title: "Smart Campus IoT",
          description: "Integrating physical infrastructure with digital systems for attendance tracking, facility security, and energy management.",
          features: ["RFID Attendance", "Campus Security Hub", "Energy Analytics"]
        }
      ]
    },
    security: {
      title1: "Institutional Data.<br/>",
      title2: "Fort Knox Security.",
      description: "Universities are prime targets for cyberattacks. We build zero-trust networks and highly encrypted databases to protect intellectual property and student PII.",
      button: { text: "Audit Your Infrastructure", href: "/contact" },
      cards: [
        {
          icon: <ShieldCheck className="w-12 h-12 text-[#00A2FF]" />,
          title: "Ransomware Protection",
          description: "Immutable backups and behavioral threat detection to prevent institutional data lockouts."
        },
        {
          icon: <Fingerprint className="w-12 h-12 text-[#D4AF37]" />,
          title: "Identity & Access (IAM)",
          description: "Single Sign-On (SSO) and Multi-Factor Authentication (MFA) for thousands of diverse campus users."
        },
        {
          icon: <Database className="w-12 h-12 text-[#00A2FF]" />,
          title: "Cloud Data Sovereignty",
          description: "Ensuring all research and student data is stored in legally compliant geographic jurisdictions."
        },
        {
          icon: <School className="w-12 h-12 text-[#D4AF37]" />,
          title: "Regulatory Compliance",
          description: "Automated compliance reporting for FERPA, GDPR, and regional educational board standards."
        }
      ]
    },
    expertise: {
      title: "Educational Sectors",
      description: "Tailored IT solutions for different scales of educational delivery.",
      cards: [
        {
          image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80",
          title: "Universities & Colleges",
          description: "Massive scale ERPs managing housing, complex financials, cross-departmental research grants, and global alumni networks."
        },
        {
          image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80",
          title: "K-12 School Districts",
          description: "District-wide portals facilitating seamless parent-teacher communication, state compliance reporting, and bus route logistics."
        },
        {
          image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
          title: "Vocational Institutes",
          description: "Agile management systems focused on skill tracking, industry certification compliance, and corporate placement pipelines."
        }
      ]
    },
    process: {
      title1: "Our Implementation",
      title2: "Blueprint",
      steps: [
        { title: "Process Mapping", description: "Auditing your current administrative workflows to identify bottlenecks, duplicate data entry, and software silos." },
        { title: "Architecture Design", description: "Designing a unified database schema that can handle admissions, finance, and academics in one centralized hub." },
        { title: "Legacy Migration", description: "Safely extracting decades of historical student data from outdated systems, cleaning it, and migrating it to the new cloud infrastructure." },
        { title: "Custom Engineering", description: "Building custom modules for specific institutional needs, such as specialized research grant management or housing lotteries." },
        { title: "Integration & Testing", description: "Connecting the new ERP with existing tools (like Canvas or Blackboard) via robust APIs and testing under peak load (e.g., enrollment day)." },
        { title: "Faculty Training", description: "Executing comprehensive change management and training programs to ensure high adoption rates among staff and faculty." }
      ]
    },
    benefits: {
      title1: "Institutional",
      title2: "Value Delivered",
      description: "Our custom ERP implementations solve the most persistent operational challenges facing modern educational institutions.",
      cards: [
        {
          icon: <LineChart className="w-6 h-6" />,
          title: "Boosted Enrollment",
          description: "Automated lead nurturing and frictionless digital application forms increase application-to-enrollment conversion rates."
        },
        {
          icon: <PiggyBank className="w-6 h-6" />,
          title: "Financial Optimization",
          description: "Consolidated billing, automated tuition collection, and strict grant fund tracking drastically reduce revenue leakage."
        },
        {
          icon: <UserCheck className="w-6 h-6" />,
          title: "Enhanced Student Experience",
          description: "Students manage their entire academic life—from course registration to housing and payments—through a single mobile app."
        },
        {
          icon: <Briefcase className="w-6 h-6" />,
          title: "Faculty Productivity",
          description: "Eliminating redundant data entry allows professors to spend less time on administration and more time on research and teaching."
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Alumni Engagement",
          description: "Integrated CRM tools help development offices track alumni career progression and execute targeted fundraising campaigns."
        },
        {
          icon: <FileSearch className="w-6 h-6" />,
          title: "Data-Driven Decisions",
          description: "C-level administrators gain real-time dashboards detailing retention rates, budget utilization, and facility occupancy."
        }
      ]
    },
    faq: {
      questions: [
        {
          question: "Can this system integrate with our existing LMS (e.g., Canvas, Blackboard)?",
          answer: "Yes. Our ERP systems are built with API-first architectures. We seamlessly integrate with all major Learning Management Systems to automatically sync course rosters, grades, and assignments."
        },
        {
          question: "How long does a full University ERP migration take?",
          answer: "A full rip-and-replace of an enterprise university ERP typically takes 12 to 18 months. However, we employ a phased rollout strategy, deploying modular capabilities (like admissions or alumni relations) in smaller 3-4 month sprints."
        },
        {
          question: "Is the platform mobile-friendly for students?",
          answer: "Absolutely. We build responsive web portals and native iOS/Android applications. Students expect a consumer-grade mobile experience, and our systems allow them to register for classes or pay tuition directly from their phones."
        },
        {
          question: "How do you handle the massive traffic spikes during class registration day?",
          answer: "We utilize cloud-native auto-scaling. During registration week, the system automatically spins up additional server clusters to handle the immense concurrent load, spinning them back down afterward to save costs."
        }
      ]
    },
    cta: {
      subtitle: "Modernize Your Institution",
      title1: "Ready to build a",
      title2: "smart campus?",
      description: "Let's streamline your administrative overhead so your faculty can focus on what matters most: education.",
      button1: { text: "Schedule ERP Consultation", href: "/contact" },
      button2: { text: "View Campus Implementations", href: "/contact" }
    }
  };

  return <ServiceTemplate {...config} />;
}
