"use client";
import React from 'react';
import SolutionTemplate from '../../../components/SolutionTemplate';
import { BookOpen, GraduationCap, Users, MonitorPlay, BrainCircuit, Globe, Zap, Database } from 'lucide-react';

export default function DigitalLearningPage() {
  const config = {
    breadcrumb: {
      label: 'Digital Learning',
      parentLabel: 'Solutions',
      parentHref: '/solutions'
    },
    hero: {
      bgImage: "/images/digital_learning_hero_1787090023062.jpg",
      badge: "EdTech Engineering",
      title1: "Immersive",
      title2: "eLearning Platforms",
      description: "We architect scalable, AI-powered Learning Management Systems (LMS) and immersive educational platforms that deliver personalized learning experiences to millions of users simultaneously.",
      primaryButton: { text: "Schedule Architecture Review", href: "/contact-us" },
      stats: [
        { label: "Concurrent Users", value: "1M+", trend: "Auto-Scaling Cloud" },
        { label: "Content Delivery", value: "Global CDN", trend: "Sub-second Latency" },
        { label: "Engagement Rate", value: "+45%", trend: "Gamified Mechanics" }
      ]
    },
    challenge: {
      title1: "The Engagement",
      title2: "Crisis in eLearning",
      description: [
        "Generic, off-the-shelf LMS platforms suffer from notoriously low completion rates. They treat all learners the same, ignoring individual pacing, learning styles, and the need for interactive engagement.",
        "As remote learning and corporate upskilling become the global standard, organizations require intelligent platforms that can adapt in real-time, scale globally without buffering, and prove measurable learning outcomes."
      ],
      painPoints: [
        "Extremely high dropout rates on legacy video-based courses",
        "Video buffering and system crashes during peak load times",
        "Inability to track granular analytics beyond basic 'course completion'",
        "Lack of personalized learning paths leading to student frustration"
      ],
      image: "/images/elearning_challenge_1787225955923.jpg",
      image2: "/images/elearning_challenge_2_1787226866479.jpg",
      floatingStat: {
        value: "70%",
        label: "Of learners disengage due to non-interactive, generic content"
      }
    },
    features: {
      title1: "Our EdTech",
      title2: "Capabilities",
      description: "We build custom educational ecosystems that leverage AI, interactive media, and robust cloud infrastructure.",
      bentoCards: [
        {
          icon: <BrainCircuit />,
          title: "AI-Powered Adaptive Learning",
          description: "Machine learning algorithms that dynamically adjust course difficulty based on the user's real-time performance.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <MonitorPlay />,
          title: "Custom LMS Architecture",
          description: "Building proprietary Learning Management Systems tailored to your exact curriculum needs."
        },
        {
          icon: <Users />,
          title: "Virtual Classrooms",
          description: "Integrating WebRTC for ultra-low latency, interactive live streaming and collaborative whiteboards."
        },
        {
          icon: <Zap />,
          title: "Gamification Engines",
          description: "Custom logic for leaderboards, achievements, and dynamic rewards to drastically boost retention.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <Globe />,
          title: "Global Content Delivery (CDN)",
          description: "Optimized video streaming infrastructure serving 4K content globally without buffering."
        },
        {
          icon: <BookOpen />,
          title: "Corporate Upskilling Portals",
          description: "B2B platforms for enterprise training, compliance tracking, and skill gap analysis."
        }
      ]
    },
    architecture: {
      subtitle: "EdTech Infrastructure",
      title: "Scalable eLearning Architecture",
      layers: [
        {
          icon: <MonitorPlay className="w-8 h-8" />,
          title: "Interactive Frontend Layer",
          items: ["Next.js/React Interfaces", "WebGL 3D Interactives", "Native Mobile Companion Apps"]
        },
        {
          icon: <BrainCircuit className="w-8 h-8" />,
          title: "Intelligent Logic Engine",
          items: ["Adaptive Learning Algorithms", "Real-Time Gamification Engine", "WebRTC Video Streaming"]
        },
        {
          icon: <Database className="w-8 h-8" />,
          title: "Global Data & Delivery",
          items: ["Distributed Content Delivery Networks", "Granular Learning Analytics DB", "SCORM/xAPI Compliance Layers"]
        }
      ]
    },
    roi: {
      title1: "Learning",
      title2: "Outcomes",
      metrics: [
        { value: "3x", title: "Course Completion", description: "Gamification and adaptive learning significantly reduce learner drop-off." },
        { value: "100%", title: "Global Scalability", description: "Cloud-native architectures handle massive concurrent user spikes effortlessly." },
        { value: "Real-Time", title: "Analytics", description: "Deep insights into precisely where learners struggle, enabling curriculum optimization." },
        { value: "50%", title: "Cost Reduction", description: "Automated assessments and AI grading drastically reduce administrative overhead." }
      ]
    },
    caseStudies: {
      title: "Trusted by EdTech Innovators",
      studies: [
        {
          image: "/images/manufacturing_hero_1787089721945.jpg",
          industry: "Higher Education",
          title: "Building an Adaptive LMS for a Global University Network",
          stats: [{ value: "500K+", label: "Active Users" }, { value: "40%", label: "Completion Boost" }]
        },
        {
          image: "/images/retail_hero_1787089685944.jpg",
          industry: "Corporate Training",
          title: "Gamified Compliance & Security Training Platform for Fortune 500s",
          stats: [{ value: "95%", label: "Engagement" }, { value: "Zero", label: "Security Breaches" }]
        },
        {
          image: "/images/robotics_hero.jpg",
          industry: "K-12 EdTech",
          title: "Interactive WebGL Physics Simulator for Remote Classrooms",
          stats: [{ value: "10M+", label: "Simulations Run" }, { value: "60fps", label: "Performance" }]
        }
      ]
    },
    compliance: {
      title: "Educational Data & Privacy Standards",
      logos: [
        "https://upload.wikimedia.org/wikipedia/commons/8/87/GDPR_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png"
      ]
    },
    faq: {
      questions: [
        {
          question: "Can you build a platform that supports millions of concurrent video streams?",
          answer: "Yes. We utilize enterprise-grade CDNs (Content Delivery Networks) and optimized video transcoding pipelines (HLS/DASH) to ensure buffer-free playback for millions of users worldwide, even during peak load times."
        },
        {
          question: "How do you handle SCORM or xAPI compatibility?",
          answer: "We build custom LMS backends that fully support SCORM 1.2/2004 and xAPI (Tin Can) standards, allowing you to easily import existing legacy course content or export granular learning data to a Learning Record Store (LRS)."
        },
        {
          question: "Do you build custom interactive content?",
          answer: "Absolutely. Beyond just building the platform, our engineering teams can create highly interactive, WebGL-based 3D simulations and gamified assessments that run natively in the browser."
        }
      ]
    },
    cta: {
      subtitle: "Transform Educational Delivery",
      title1: "Ready to build the future",
      title2: "of digital learning?",
      description: "Partner with engineering experts to create immersive, scalable, and intelligent EdTech platforms.",
      button1: { text: "Schedule Architecture Consultation", href: "/contact-us" },
      button2: { text: "View EdTech Case Studies", href: "/contact-us" }
    }
  };

  return <SolutionTemplate {...config} />;
}
