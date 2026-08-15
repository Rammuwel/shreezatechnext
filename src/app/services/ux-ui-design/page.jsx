"use client";
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';
import { Palette, PenTool, LayoutTemplate, Layers, MousePointerClick, Smartphone, Lightbulb } from 'lucide-react';

export default function UXUIDesignPage() {
  const config = {
    breadcrumb: {
      label: 'UX/UI Design',
      href: '/services/ux-ui-design'
    },
    hero: {
      slides: [
        {
          image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80",
          badgeText: "Human-Centered Design",
          badgeColor: "#00A2FF",
          title1: "Exceptional",
          title2: "Digital Experiences",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#00A2FF] to-[#00f2fe]",
          description: "We craft intuitive, data-driven, and visually stunning interfaces that minimize friction, maximize engagement, and elevate your brand identity.",
          primaryButton: { text: "Start Design Project", href: "/contact" }
        },
        {
          image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80",
          badgeText: "Design Systems & Strategy",
          badgeColor: "#D4AF37",
          title1: "Scalable",
          title2: "Design Systems",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#fde08b]",
          description: "Unifying your product suite with comprehensive design libraries in Figma, ensuring absolute consistency across all your digital touchpoints.",
          secondaryButton: { text: "View Design Process", href: "#capabilities" }
        }
      ]
    },
    stats: [
      { value: "300%", label: "Avg Conversion Lift" },
      { value: "40%", label: "Faster Engineering" },
      { value: "50+", label: "Design Awards" }
    ],
    philosophy: {
      tagline: "Our Design Philosophy",
      title1: "Where Art Meets",
      title2: "Cognitive Science",
      description: [
        "Great design is invisible. It's not just about making things look beautiful; it's about deeply understanding human psychology and cognitive load. Every pixel, color choice, and animation serves a specific functional purpose.",
        "We bridge the gap between creative vision and business objectives. By conducting rigorous user research and usability testing, we ensure that our designs not only look premium but actively drive metrics like retention, conversion, and user satisfaction."
      ],
      points: [
        { title: "Form Follows Function", subtitle: "Usability over pure aesthetics" },
        { title: "Data-Informed", subtitle: "Decisions backed by user testing" }
      ],
      image1: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&q=80",
      image2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    ecosystem: {
      title1: "End-to-End Design",
      title2: "Capabilities",
      description: "From initial user research and wireframing to high-fidelity prototyping and design handoff, we handle the entire creative lifecycle.",
      cards: [
        {
          icon: <Lightbulb className="w-8 h-8" />,
          title: "UX Research & Strategy",
          description: "Understanding your users through empathy mapping, journey creation, and deep market analysis to solve real problems.",
          features: ["User Personas", "Journey Mapping", "Information Architecture"]
        },
        {
          icon: <LayoutTemplate className="w-8 h-8" />,
          title: "UI & Visual Design",
          description: "Creating premium, modern interfaces with custom iconography, typography scales, and cohesive color palettes.",
          features: ["High-Fidelity Mockups", "Micro-Interactions", "Brand Integration"]
        },
        {
          icon: <Layers className="w-8 h-8" />,
          title: "Enterprise Design Systems",
          description: "Building scalable Figma component libraries (buttons, forms, cards) to accelerate future development and maintain consistency.",
          features: ["Figma Variables", "Component Tokens", "Developer Handoff"]
        }
      ]
    },
    security: {
      title1: "Inclusive.<br/>",
      title2: "Accessible.",
      description: "We believe the web should be usable by everyone. Our design processes heavily integrate web accessibility guidelines, ensuring your product reaches the widest possible audience without legal risk.",
      button: { text: "Audit Your Accessibility", href: "/contact" },
      cards: [
        {
          icon: <Palette className="w-12 h-12 text-[#00A2FF]" />,
          title: "WCAG 2.1 AA Compliance",
          description: "Strict adherence to global web accessibility standards for visually and motor-impaired users."
        },
        {
          icon: <MousePointerClick className="w-12 h-12 text-[#D4AF37]" />,
          title: "Keyboard Navigation",
          description: "Designing logical focus states and tab orders so power users and impaired users can navigate without a mouse."
        },
        {
          icon: <PenTool className="w-12 h-12 text-[#00A2FF]" />,
          title: "Contrast Optimization",
          description: "Scientific calculation of color contrast ratios to ensure maximum readability in all lighting conditions."
        },
        {
          icon: <Smartphone className="w-12 h-12 text-[#D4AF37]" />,
          title: "Adaptive Typography",
          description: "Implementing fluid typography that scales gracefully and remains legible on any screen size or orientation."
        }
      ]
    },
    expertise: {
      title: "Design Expertise",
      description: "We specialize in solving complex UX challenges across various digital mediums.",
      cards: [
        {
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
          title: "SaaS Dashboards",
          description: "Turning massive amounts of complex data into scannable, actionable, and beautiful data visualizations."
        },
        {
          image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
          title: "Consumer Mobile Apps",
          description: "Designing addictive, thumb-friendly native applications that focus on retention and viral growth."
        },
        {
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
          title: "E-Commerce Experiences",
          description: "Optimizing the checkout funnel and product discovery journey to dramatically increase average order value."
        }
      ]
    },
    process: {
      title1: "Our Design",
      title2: "Process",
      steps: [
        { title: "Discovery & Empathy", description: "Conducting stakeholder interviews, analyzing competitors, and understanding the core business objectives and user pain points." },
        { title: "UX Wireframing", description: "Creating low-fidelity structural blueprints to map out the information architecture and core user flows without visual distractions." },
        { title: "UI Concepting", description: "Developing mood boards and multiple visual directions to align on typography, color theory, and the overall 'feel' of the product." },
        { title: "High-Fidelity Design", description: "Fleshing out every screen and state in Figma, applying the chosen visual direction to the wireframes." },
        { title: "Interactive Prototyping", description: "Linking screens together with animations and transitions to create a realistic, clickable simulation of the final product." },
        { title: "Testing & Handoff", description: "Validating the prototype with real users, refining based on feedback, and preparing organized assets for the engineering team." }
      ]
    },
    cta: {
      subtitle: "Transform Your User Experience",
      title1: "Ready to design",
      title2: "something beautiful?",
      description: "Let's collaborate to build a digital product that your users won't just use, but will absolutely love.",
      button1: { text: "Start Design Consultation", href: "/contact" },
      button2: { text: "View Design Portfolio", href: "/contact" }
    }
  };

  return <ServiceTemplate {...config} />;
}
