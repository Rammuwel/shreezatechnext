"use client";
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';
import { BookOpen, Laptop, Video, ShieldCheck, Users, GraduationCap, Server, TrendingUp, Globe, Clock, Target, Award, PlayCircle } from 'lucide-react';

export default function DigitalLearningPage() {
  const config = {
    breadcrumb: {
      label: 'Digital Learning',
      href: '/solutions/digital-learning',
      parentLabel: 'Solutions',
      parentHref: '/solutions'
    },
    hero: {
      slides: [
        {
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
          badgeText: "Corporate & Institutional",
          badgeColor: "#00A2FF",
          title1: "Immersive",
          title2: "Digital Learning",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#00A2FF] to-[#00f2fe]",
          description: "We engineer scalable Learning Management Systems (LMS) and immersive eLearning platforms that transform how organizations train, upskill, and educate.",
          primaryButton: { text: "Explore LMS Solutions", href: "#capabilities" }
        },
        {
          image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
          badgeText: "EdTech Innovation",
          badgeColor: "#D4AF37",
          title1: "Interactive",
          title2: "Virtual Classrooms",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#fde08b]",
          description: "Deploy ultra-low latency video streaming, interactive whiteboards, and real-time collaboration tools for flawless remote education.",
          secondaryButton: { text: "Digitize Your Curriculum", href: "/contact" }
        }
      ]
    },
    stats: [
      { value: "10M+", label: "Active Learners" },
      { value: "50+", label: "Universities" },
      { value: "99.99%", label: "Platform Uptime" }
    ],
    philosophy: {
      tagline: "Our eLearning Philosophy",
      title1: "Education Beyond",
      title2: "Boundaries",
      description: [
        "In the digital age, learning should not be confined to physical walls. We believe in creating educational ecosystems that are accessible, engaging, and deeply personalized. Our platforms adapt to the learner, not the other way around.",
        "By leveraging AI for personalized learning paths, gamification for increased retention, and robust analytics to track progress, we turn passive learning into active mastery. Whether for K-12, higher education, or enterprise compliance training, we build platforms that scale globally."
      ],
      points: [
        { title: "Adaptive Learning Paths", subtitle: "AI-driven curriculum adjustments" },
        { title: "Gamified Engagement", subtitle: "Badges, leaderboards, and rewards" }
      ],
      image1: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
      image2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    ecosystem: {
      title1: "Comprehensive EdTech",
      title2: "Ecosystem",
      description: "From custom LMS development to content authoring tools, we provide end-to-end technology solutions for the education sector.",
      cards: [
        {
          icon: <BookOpen className="w-8 h-8" />,
          title: "Custom LMS Platforms",
          description: "Building proprietary Learning Management Systems tailored to your exact grading, certification, and pedagogical requirements.",
          features: ["SCORM / xAPI Compliant", "Multi-Tenant Architecture", "Custom Assessment Engines"]
        },
        {
          icon: <Video className="w-8 h-8" />,
          title: "Virtual Classrooms",
          description: "Integrating WebRTC and ultra-low latency video protocols to create seamless, interactive live tutoring environments.",
          features: ["WebRTC / Zoom API", "Live Quizzing", "Interactive Whiteboards"]
        },
        {
          icon: <Laptop className="w-8 h-8" />,
          title: "Corporate Training Portals",
          description: "Secure, scalable portals designed for enterprise employee onboarding, compliance training, and continuous upskilling.",
          features: ["HRIS Integration", "Automated Compliance tracking", "Microlearning Modules"]
        }
      ]
    },
    security: {
      title1: "Student Data.<br/>",
      title2: "Absolute Privacy.",
      description: "Educational platforms handle massive amounts of sensitive student data. We build systems that exceed global educational privacy standards, ensuring data sovereignty and child protection.",
      button: { text: "Review Compliance Specs", href: "/contact" },
      cards: [
        {
          icon: <ShieldCheck className="w-12 h-12 text-[#00A2FF]" />,
          title: "FERPA & COPPA Compliant",
          description: "Strict adherence to US regulations regarding the privacy of student education records and children's data."
        },
        {
          icon: <Server className="w-12 h-12 text-[#D4AF37]" />,
          title: "End-to-End Encryption",
          description: "All student PII, grades, and communication are encrypted at rest (AES-256) and in transit (TLS 1.3)."
        },
        {
          icon: <Users className="w-12 h-12 text-[#00A2FF]" />,
          title: "Role-Based Access Control",
          description: "Granular permissions ensuring students, teachers, parents, and admins only see what they are authorized to see."
        },
        {
          icon: <GraduationCap className="w-12 h-12 text-[#D4AF37]" />,
          title: "Anti-Cheating Mechanisms",
          description: "Integrating AI-powered proctoring, secure browser lockdown, and plagiarism detection algorithms."
        }
      ]
    },
    expertise: {
      title: "Digital Learning Scenarios",
      description: "We deploy educational solutions across diverse institutional landscapes.",
      cards: [
        {
          image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
          title: "Higher Education",
          description: "Complex university portals managing enrollment, hybrid courses, alumni networks, and tuition payments."
        },
        {
          image: "https://images.unsplash.com/photo-1515161318750-781d6122e367?auto=format&fit=crop&q=80",
          title: "B2C EdTech Startups",
          description: "Highly scalable, subscription-based mobile apps focusing on language learning, coding bootcamps, and skill acquisition."
        },
        {
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
          title: "Enterprise Upskilling",
          description: "Internal corporate academies focusing on leadership training, mandatory compliance, and technical skill matrices."
        }
      ]
    },
    process: {
      title1: "Our EdTech Implementation",
      title2: "Process",
      steps: [
        { title: "Pedagogical Strategy", description: "Collaborating with instructional designers to map out learning objectives, curriculum flow, and assessment methodologies." },
        { title: "UX/UI for Learning", description: "Designing intuitive interfaces that minimize cognitive load, ensuring the technology doesn't distract from the educational content." },
        { title: "Platform Architecture", description: "Selecting the right backend infrastructure to handle high concurrency during exams or live video lectures." },
        { title: "Content Migration", description: "Seamlessly importing your existing SCORM packages, videos, and PDFs into the new unified platform." },
        { title: "Security & QA Auditing", description: "Rigorous penetration testing and load testing to ensure the platform won't crash during critical exam periods." },
        { title: "Launch & Analytics Setup", description: "Deploying the platform and configuring BI dashboards so admins can track learner engagement and dropout rates in real-time." }
      ]
    },
    benefits: {
      title1: "Transformative",
      title2: "Business Benefits",
      description: "Implementing our custom digital learning solutions delivers measurable ROI for both educational institutions and corporate enterprises.",
      cards: [
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Increased Retention",
          description: "Gamified learning modules and micro-learning formats dramatically increase course completion rates compared to traditional methods."
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Global Scalability",
          description: "Train 100 or 100,000 learners simultaneously without needing physical classroom space or additional instructors."
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: "Reduced Onboarding Time",
          description: "Automated corporate training portals cut new-hire onboarding time by up to 60%, getting employees productive faster."
        },
        {
          icon: <Target className="w-6 h-6" />,
          title: "Personalized Paths",
          description: "AI algorithms analyze learner performance to dynamically adjust difficulty, ensuring no student is left behind."
        },
        {
          icon: <Award className="w-6 h-6" />,
          title: "Automated Compliance",
          description: "Instantly generate reports proving 100% of your staff has completed mandatory safety or regulatory training."
        },
        {
          icon: <PlayCircle className="w-6 h-6" />,
          title: "Anytime, Anywhere Access",
          description: "Responsive web and native mobile apps allow users to consume content offline during commutes or downtime."
        }
      ]
    },
    faq: {
      questions: [
        {
          question: "Can you migrate our existing content from Moodle/Canvas?",
          answer: "Yes. We have automated scripts and robust APIs to migrate historical user data, grades, and SCORM/xAPI content from legacy systems to your new custom platform with zero data loss."
        },
        {
          question: "Do your platforms support live video tutoring?",
          answer: "Absolutely. We integrate WebRTC or commercial APIs (like Zoom or Agora) directly into the platform, featuring interactive whiteboards, breakout rooms, and session recording."
        },
        {
          question: "How do you handle cheating during online exams?",
          answer: "We implement multi-layered proctoring. This includes browser lock-downs (preventing tab switching), AI facial recognition to verify identity, and gaze-tracking to flag suspicious behavior."
        },
        {
          question: "Is the platform scalable for massive open online courses (MOOCs)?",
          answer: "Yes. By utilizing cloud-native microservices and Content Delivery Networks (CDNs), our platforms can automatically scale server resources during traffic spikes, easily handling tens of thousands of concurrent users."
        }
      ]
    },
    cta: {
      subtitle: "Empower Your Learners",
      title1: "Ready to revolutionize",
      title2: "education?",
      description: "Partner with us to build a digital learning ecosystem that scales globally and delivers measurable educational outcomes.",
      button1: { text: "Schedule EdTech Demo", href: "/contact" },
      button2: { text: "View Case Studies", href: "/contact" }
    }
  };

  return <ServiceTemplate {...config} />;
}
