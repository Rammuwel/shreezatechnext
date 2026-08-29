"use client";
import React from 'react';
import SolutionTemplate from '../../../components/SolutionTemplate';
import { ShoppingCart, Package, Smartphone, Layers, MapPin, BarChart3, ShieldCheck, Database } from 'lucide-react';

export default function RetailSolutionPage() {
  const config = {
    breadcrumb: {
      label: 'Retail & E-Commerce',
      parentLabel: 'Solutions',
      parentHref: '/solutions'
    },
    hero: {
      bgImage: "/images/digital_learning_hero_1787090023062.jpg",
      badge: "Enterprise Retail Engineering",
      title1: "Omnichannel",
      title2: "Retail Experiences",
      description: "We architect ultra-scalable, custom e-commerce and retail platforms. By unifying online storefronts with physical POS systems, we deliver frictionless shopping experiences and massive operational efficiency.",
      primaryButton: { text: "Schedule Architecture Review", href: "/contact-us" },
      stats: [
        { label: "Inventory Accuracy", value: "99.9%", trend: "Real-time Sync" },
        { label: "Conversion Rate", value: "+35%", trend: "Frictionless Checkout" },
        { label: "Black Friday Uptime", value: "100%", trend: "Auto-Scaling Cloud" }
      ]
    },
    challenge: {
      title1: "The Fragmented",
      title2: "Retail Journey",
      description: [
        "Today's consumers expect a perfectly fluid journey—browsing on mobile, purchasing on desktop, and returning in-store. However, legacy retail systems keep physical inventory, online sales, and customer data in separate, disconnected silos.",
        "When your digital storefront cannot communicate with your warehouse or physical registers in real-time, it results in overselling, delayed shipping, and frustrated customers."
      ],
      painPoints: [
        "Inability to offer 'Buy Online, Pick Up In-Store' (BOPIS) due to inventory silos",
        "Slow legacy e-commerce platforms causing high cart abandonment rates",
        "Disjointed loyalty programs that only work online or only work in-store",
        "System crashes during massive high-traffic events like Black Friday"
      ],
      image: "/images/healthcare_cloud_challenge_1787226450306.jpg",
      floatingStat: {
        value: "73%",
        label: "Of shoppers use multiple channels during their shopping journey"
      }
    },
    features: {
      title1: "Our Retail",
      title2: "Capabilities",
      description: "We engineer enterprise retail ecosystems that bridge the gap between digital convenience and physical logistics.",
      bentoCards: [
        {
          icon: <Layers />,
          title: "Headless Commerce Architectures",
          description: "Decoupling the frontend UI from the backend engine to achieve sub-second page loads and complete design freedom.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <ShoppingCart />,
          title: "Custom B2B / B2C Portals",
          description: "Complex, tiered pricing algorithms and massive catalog management."
        },
        {
          icon: <MapPin />,
          title: "Omnichannel POS Integration",
          description: "Syncing physical registers directly to the global cloud inventory."
        },
        {
          icon: <Package />,
          title: "Warehouse Management (WMS)",
          description: "Automating pick-and-pack workflows and integrating directly with 3PL logistics.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <Smartphone />,
          title: "Retail Mobile Apps",
          description: "Native applications for loyalty, digital wallets, and in-store wayfinding."
        },
        {
          icon: <BarChart3 />,
          title: "Predictive Demand AI",
          description: "Machine learning models forecasting inventory needs across different geographies."
        }
      ]
    },
    architecture: {
      title: "Omnichannel Cloud Architecture",
      layers: [
        {
          icon: <Smartphone className="w-8 h-8" />,
          title: "Digital & Physical Touchpoints",
          items: ["Next.js Headless Frontends", "Native Mobile Apps", "Cloud-connected POS"]
        },
        {
          icon: <Layers className="w-8 h-8" />,
          title: "Unified Commerce API",
          items: ["GraphQL API Gateway", "Global Cart Sync", "Unified Customer Profiles"]
        },
        {
          icon: <Database className="w-8 h-8" />,
          title: "Core Enterprise Systems",
          items: ["ERP Integration (SAP/Oracle)", "Order Management (OMS)", "Distributed Inventory Databases"]
        }
      ]
    },
    roi: {
      title1: "Conversion",
      title2: "Driven Metrics",
      metrics: [
        { value: "3x", title: "Mobile Conversion", description: "Sub-second load times on headless architectures eliminate bounce rates." },
        { value: "40%", title: "Higher LTV", description: "Unified loyalty programs increase repeat purchases across all sales channels." },
        { value: "Zero", title: "Overselling", description: "Real-time distributed database sync prevents customers from buying out-of-stock items." },
        { value: "50%", title: "Faster Fulfillment", description: "Algorithmic routing ensures orders are shipped from the closest physical store or warehouse." }
      ]
    },
    caseStudies: {
      title: "Trusted by Global Retailers",
      studies: [
        {
          image: "/images/hero-slide-1.jpg",
          industry: "Global Fashion",
          title: "Migrating to a Headless Architecture for Global Scale",
          stats: [ { value: "100ms", label: "Page Loads" }, { value: "30%", label: "Sales Boost" } ]
        },
        {
          image: "/images/manufacturing_hero_1787089721945.jpg",
          industry: "Electronics",
          title: "Building an Omnichannel BOPIS Ordering System",
          stats: [ { value: "200+", label: "Stores Sync" }, { value: "Real-time", label: "Inventory" } ]
        },
        {
          image: "/images/retail_hero_1787089685944.jpg",
          industry: "B2B Wholesale",
          title: "Complex B2B Purchasing Portal with Tiered Pricing Logic",
          stats: [ { value: "$50M", label: "Monthly GMV" }, { value: "Automated", label: "Invoicing" } ]
        },
        {
          image: "/images/robotics_hero.jpg",
          industry: "Luxury Goods",
          title: "Augmented Reality (AR) Try-On App for High-End Retail",
          stats: [ { value: "40%", label: "Return Drop" }, { value: "High", label: "Engagement" } ]
        }
      ]
    },
    compliance: {
      title: "Secure Commerce & Payment Standards",
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
          question: "What is Headless Commerce?",
          answer: "Headless commerce separates the frontend (the user interface) from the backend commerce engine. We build a custom, lightning-fast frontend using Next.js while integrating with enterprise commerce engines via APIs. This results in instant page loads and complete design freedom without being restricted by platform templates."
        },
        {
          question: "Can you integrate a new e-commerce build with our legacy ERP (SAP/Oracle)?",
          answer: "Yes. We specialize in building robust middleware APIs that bidirectionally sync live inventory, orders, and fulfillment data between your new frontend and legacy back-office systems."
        },
        {
          question: "How do you handle massive traffic spikes during Black Friday?",
          answer: "We deploy cloud-native, auto-scaling server clusters on AWS or Azure. When traffic surges, the system automatically spins up additional resources to handle the load seamlessly, then spins them down when traffic normalizes to save costs."
        },
        {
          question: "Do you build custom Point of Sale (POS) software?",
          answer: "Yes. We build custom iPad and web-based POS registers for physical stores that are directly connected to the same centralized cloud database as your e-commerce website, ensuring perfect omnichannel inventory sync."
        }
      ]
    },
    cta: {
      subtitle: "Accelerate Your Revenue",
      title1: "Ready to unify",
      title2: "your retail experience?",
      description: "Partner with engineering experts to build an enterprise platform that is incredibly fast, infinitely scalable, and optimized for conversion.",
      button1: { text: "Schedule Architecture Consultation", href: "/contact-us" },
      button2: { text: "View Headless Case Studies", href: "/contact-us" }
    }
  };

  return <SolutionTemplate {...config} />;
}
