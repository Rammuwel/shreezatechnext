"use client";
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';
import { Smartphone, Layers, AppWindow, Cpu, Zap, Shield, Sparkles } from 'lucide-react';

export default function MobileAppDevelopmentPage() {
  const config = {
    breadcrumb: {
      label: 'Mobile App Development',
      href: '/services/mobile-app-development'
    },
    hero: {
      slides: [
        {
          image: "/images/mobile_app_hero.jpg",
          title1: "World-Class",
          title2: "Mobile Experiences",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#00A2FF] to-[#00f2fe]",
          description: "We engineer highly intuitive, performant, and secure mobile applications that captivate users and dominate app store rankings.",
          primaryButton: { text: "Start Your App", href: "/contact-us" }
        },
        {
          image: "/images/hero-slide-2.jpg",
          badgeText: "iOS & Android Engineering",
          badgeColor: "#ffb916",
          title1: "Uncompromising",
          title2: "Performance",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#ffb916] to-[#fde08b]",
          description: "Leveraging Swift, Kotlin, and React Native to build fluid, 60fps mobile interfaces that feel native to every device.",
          secondaryButton: { text: "View Capabilities", href: "#capabilities" }
        }
      ]
    },
    philosophy: {
      tagline: "Our Mobile Philosophy",
      title1: "Designing for the",
      title2: "Human Thumb",
      description: [
        "A successful mobile application isn't just a shrunken down website. It requires a fundamental rethinking of user journeys, touch targets, and offline capabilities.",
        "We obsess over micro-interactions, gesture-based navigation, and instantaneous load times. Our goal is to create applications that users don't just endure, but genuinely love to interact with daily."
      ],
      points: [
        { title: "User-Centric UI", subtitle: "Intuitive gesture navigation" },
        { title: "Offline-First", subtitle: "Seamless functionality without internet" }
      ],
      image1: "/images/discover-tech-2.jpg",
      image2: "/images/insights-immersive.jpg"
    },
    ecosystem: {
      title1: "Comprehensive Mobile",
      title2: "Capabilities",
      description: "From native iOS & Android development to unified cross-platform solutions, we have the engineering depth to execute any mobile strategy.",
      cards: [
        {
          icon: <Smartphone className="w-8 h-8" />,
          title: "Native iOS & Android",
          description: "Writing code in Swift and Kotlin for maximum performance, accessing device-specific hardware like ARKit, cameras, and secure enclaves.",
          features: ["Swift / Objective-C", "Kotlin / Java", "Platform-Specific UX"]
        },
        {
          icon: <Layers className="w-8 h-8" />,
          title: "Cross-Platform Frameworks",
          description: "Maximizing ROI by writing a single codebase that deploys to both iOS and Android simultaneously without compromising performance.",
          features: ["React Native", "Flutter", "Shared Business Logic"]
        },
        {
          icon: <AppWindow className="w-8 h-8" />,
          title: "Mobile Backend as a Service",
          description: "Architecting robust, scalable APIs and cloud databases that sync instantly with your mobile applications.",
          features: ["Firebase / Supabase", "GraphQL APIs", "Real-Time WebSockets"]
        }
      ]
    },
    security: {
      title1: "Bulletproof Mobile.<br/>",
      title2: "Enterprise Security.",
      description: "Mobile devices are vulnerable to physical theft, network interception, and reverse engineering. We build military-grade security into every app layer.",
      button: { text: "Review Our Security Standards", href: "/contact-us" },
      cards: [
        {
          icon: <Shield className="w-12 h-12 text-[#00A2FF]" />,
          title: "Biometric Auth",
          description: "Seamless integration with FaceID, TouchID, and Android Biometrics for frictionless yet highly secure logins."
        },
        {
          icon: <Zap className="w-12 h-12 text-[#ffb916]" />,
          title: "Certificate Pinning",
          description: "Preventing Man-in-the-Middle (MitM) attacks by hardcoding trusted server certificates directly into the app binary."
        },
        {
          icon: <Cpu className="w-12 h-12 text-[#00A2FF]" />,
          title: "Code Obfuscation",
          description: "Utilizing ProGuard and DexGuard to make reverse-engineering your proprietary algorithms virtually impossible."
        },
        {
          icon: <Sparkles className="w-12 h-12 text-[#ffb916]" />,
          title: "Encrypted Storage",
          description: "Securing local data using iOS Keychain and Android Keystore to protect sensitive user information even if the device is rooted."
        }
      ]
    },
    expertise: {
      title: "Mobile Solutions",
      description: "We build tailored mobile applications for specific industries, understanding their unique regulatory and user experience needs.",
      cards: [
        {
          image: "/images/hero-slide-3.jpg",
          title: "M-Commerce & Retail",
          description: "High-converting shopping apps with AR product visualization, Apple/Google Pay integration, and push notification marketing."
        },
        {
          image: "/images/discover-tech-2.jpg",
          title: "FinTech & Banking",
          description: "Ultra-secure financial applications featuring real-time stock trading, P2P payments, and comprehensive wealth dashboards."
        },
        {
          image: "/images/chatgpt-1.png",
          title: "Health & Telemedicine",
          description: "HIPAA-compliant healthcare apps for virtual doctor consultations, IoT wearable integrations, and secure patient records."
        }
      ]
    },
    process: {
      title1: "Our App Delivery",
      title2: "Process",
      steps: [
        { title: "Product Strategy", description: "Analyzing the app store market, defining user personas, and determining the minimum viable product (MVP) features." },
        { title: "UI/UX & Prototyping", description: "Creating clickable Figma prototypes to validate the user journey, animations, and visual design before engineering." },
        { title: "Architecture Design", description: "Choosing the right tech stack (Native vs. React Native), designing database schemas, and mapping API integrations." },
        { title: "Agile Development", description: "Executing code in two-week sprints, providing you with TestFlight/Google Play Console builds to test features continuously." },
        { title: "QA & Device Testing", description: "Testing the app across hundreds of real physical devices in our lab to ensure perfect rendering across all screen sizes." },
        { title: "App Store Launch", description: "Handling the complex Apple App Store and Google Play submission process, ensuring compliance with all guidelines." }
      ]
    },
    cta: {
      subtitle: "Launch Your Vision",
      title1: "Ready to dominate",
      title2: "the app stores?",
      description: "Partner with our elite mobile engineers to build an app that users will love, share, and use daily.",
      button1: { text: "Discuss Your App Idea", href: "/contact-us" },
      button2: { text: "View App Portfolio", href: "/contact-us" }
    }
  };

  return <ServiceTemplate {...config} />;
}

