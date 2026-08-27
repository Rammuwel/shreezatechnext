"use client";
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';
import { Layout, Server, Globe, Cpu, Zap, Shield, Code2 } from 'lucide-react';

export default function WebDevelopmentPage() {
  const config = {
    breadcrumb: {
      label: 'Web Development',
      href: '/services/web-development'
    },
    hero: {
      slides: [
        {
          image: "/images/web_dev_hero.jpg",
          title1: "Innovative Web",
          title2: "Development Solutions",
          description: "We build modern, responsive, and secure web applications that drive growth. From corporate websites to complex SaaS platforms, we bring your digital vision to life.",
          primaryButton: { text: "Initiate Project", href: "/contact-us" }
        },
        {
          image: "/images/about-diversity.jpg",
          title1: "Flawless Interactive",
          title2: "User Experiences",
          title2Gradient: "text-[#00A2FF]",
          description: "Leveraging modern rendering strategies and frameworks like React & Next.js to deliver pixel-perfect, accessible, and instantaneous web interfaces globally.",
          secondaryButton: { text: "Explore Capabilities", href: "#capabilities" }
        }
      ]
    },
    stats: [
      { value: "99.9%", label: "Uptime SLA" },
      { value: "100+", label: "Engineers" },
      { value: "<1s", label: "Load Times" }
    ],
    philosophy: {
      title1: "Architecting",
      title2: "Resilient Digital Foundations",
      description: [
        "In an era where digital milliseconds dictate revenue, legacy monolithic systems restrict growth. We engineer modern web platforms that are built to withstand immense traffic, thwart security threats, and adapt to shifting market demands instantly.",
        "By decoupling the frontend from the backend (Headless Architecture) and utilizing cloud-native microservices, we empower enterprises with total digital autonomy—resulting in faster feature rollouts, lower server costs, and uncompromising performance."
      ],
      points: [
        { title: "Scalability First", subtitle: "Auto-scaling infrastructure" },
        { title: "Global Delivery", subtitle: "Edge network rendering" }
      ],
      image1: "/images/services-hero.jpg",
      image2: "/images/insights-fintech-trend.jpg"
    },
    ecosystem: {
      title1: "A Unified",
      title2: "Full-Stack Ecosystem",
      description: "We eliminate silos by providing end-to-end web engineering capabilities under one roof. From pixel-perfect frontends to robust cloud deployments.",
      cards: [
        {
          icon: <Layout className="w-8 h-8" />,
          title: "Frontend Engineering",
          description: "Crafting highly interactive, SEO-friendly user interfaces using React, Next.js, and Vue.js. We implement Server-Side Rendering (SSR) and Static Site Generation (SSG) for unmatched Core Web Vitals.",
          features: ["React / Next.js / Vue", "Tailwind / SCSS / Styled Comps", "Framer Motion Animations"]
        },
        {
          icon: <Server className="w-8 h-8" />,
          title: "Backend & APIs",
          description: "Building the brain of your application. We architect scalable databases, secure REST/GraphQL APIs, and complex business logic using enterprise-grade server technologies.",
          features: ["Node.js / Python / Java Spring", "PHP / Laravel / C++", "PostgreSQL / MongoDB / Redis", "GraphQL / RESTful APIs"]
        },
        {
          icon: <Globe className="w-8 h-8" />,
          title: "Cloud & DevOps",
          description: "Ensuring your web applications never go down. We automate CI/CD pipelines, containerize applications, and deploy across distributed global edge networks for zero latency.",
          features: ["AWS / Azure / GCP", "Docker / Kubernetes", "Automated CI/CD Pipelines"]
        }
      ]
    },
    security: {
      title1: "Built to Perform.<br/>",
      title2: "Secured to Protect.",
      description: "We do not compromise on the unseen architecture. Our applications undergo rigorous penetration testing and are optimized down to the byte to ensure instantaneous load times.",
      button: { text: "Request Security Audit", href: "/contact-us" },
      cards: [
        {
          icon: <Cpu className="w-12 h-12 text-[#00A2FF]" />,
          title: "Microservices",
          description: "Decoupled architecture allowing independent scaling and deployment of services without entire system downtime."
        },
        {
          icon: <Zap className="w-12 h-12 text-[#ffb916]" />,
          title: "Edge CDNs",
          description: "Global content delivery networks and edge computing ensure your data is served from the closest node to the user."
        },
        {
          icon: <Shield className="w-12 h-12 text-[#00A2FF]" />,
          title: "OWASP Compliance",
          description: "Strict adherence to OWASP security protocols, preventing XSS, CSRF, and SQL injection vulnerabilities by default."
        },
        {
          icon: <Code2 className="w-12 h-12 text-[#ffb916]" />,
          title: "Automated QA",
          description: "Comprehensive unit, integration, and End-to-End testing integrated directly into the deployment pipeline."
        }
      ]
    },
    expertise: {
      title: "Platform Expertise",
      description: "We don't just build websites; we engineer complex operational platforms that power enterprises.",
      cards: [
        {
          image: "/images/hero-slide-3.jpg",
          title: "Headless E-Commerce",
          description: "Decoupled storefronts (React/Vue) integrated via APIs to Shopify Plus, Magento, or BigCommerce for ultimate flexibility and speed."
        },
        {
          image: "/images/services-hero.jpg",
          title: "B2B SaaS Platforms",
          description: "Multi-tenant architecture with complex role-based access controls, automated billing integrations, and real-time dashboards."
        },
        {
          image: "/images/about-diversity.jpg",
          title: "Custom Portals & ERPs",
          description: "Digitize your internal workflows. We build highly secure vendor, partner, and employee portals tailored to your specific business rules."
        }
      ]
    },
    process: {
      title1: "Our Agile Delivery",
      title2: "Process",
      steps: [
        { title: "Discovery & Architecture", description: "We outline technical requirements, map out database schemas, and define the entire system architecture before writing a single line of code." },
        { title: "Prototyping & UX", description: "Interactive Figma wireframes map out the user journey. We test user flows to guarantee an intuitive experience across all devices." },
        { title: "Sprint-Based Engineering", description: "Operating in agile two-week sprints. We build the frontend and backend in parallel, delivering testable features rapidly and consistently." },
        { title: "Rigorous QA", description: "Automated and manual testing across devices and browsers. We test for performance bottlenecks, accessibility compliance, and security flaws." },
        { title: "CI/CD Deployment", description: "Zero-downtime deployment through automated pipelines. We set up load balancers, SSL certificates, and configure scalable cloud infrastructure." },
        { title: "SLA Support", description: "Post-launch is just the beginning. We provide continuous monitoring, server maintenance, and dedicated teams for iterative feature enhancements." }
      ]
    },
    cta: {
      subtitle: "Let's Build The Future",
      title1: "Ready to",
      title2: "architect your next digital product?",
      description: "Partner with our elite engineering teams to build scalable, secure, and future-proof web applications.",
      button1: { text: "Schedule Architecture Review", href: "/contact-us" },
      button2: { text: "View Our Case Studies", href: "/contact-us" }
    }
  };

  return <ServiceTemplate {...config} />;
}

