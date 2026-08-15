"use client";
import React from 'react';
import SolutionTemplate from '../../../components/SolutionTemplate';
import { Building2, Key, Home, ShieldCheck, Camera, BarChart3, Cloud, Network } from 'lucide-react';

export default function RealEstateSolutionPage() {
  const config = {
    breadcrumb: {
      label: 'Real Estate & PropTech',
      parentLabel: 'Solutions',
      parentHref: '/solutions'
    },
    hero: {
      bgImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
      badge: "Enterprise Property Technology",
      title1: "Digitizing",
      title2: "Real Estate Portfolios",
      description: "We build enterprise PropTech platforms that automate property management, streamline real estate transactions, and transform physical buildings into intelligent digital assets.",
      primaryButton: { text: "Manage Your Portfolio", href: "/contact" },
      stats: [
        { label: "Units Managed", value: "100K+", trend: "Massive Scale" },
        { label: "OpEx Reduction", value: "30%", trend: "Cost Efficiency" },
        { label: "Leasing Velocity", value: "5x Faster", trend: "Automated Workflows" }
      ]
    },
    challenge: {
      title1: "The Paper-Based",
      title2: "Property Crisis",
      description: [
        "Real estate is the world's largest asset class, yet it remains one of the slowest to adopt modern technology. Managing massive property portfolios using spreadsheets and disjointed legacy software results in lost revenue, frustrated tenants, and wildly inefficient operations.",
        "Without a centralized, cloud-native system, property managers cannot accurately predict maintenance costs, automate rent reconciliation, or provide the frictionless digital experiences modern tenants expect."
      ],
      painPoints: [
        "Manual rent collection and fragmented accounting across disparate entities",
        "High friction in tenant onboarding, leasing, and maintenance routing",
        "Lack of real-time visibility into portfolio-wide Net Operating Income (NOI)",
        "Security vulnerabilities in physical access control and smart building IoT"
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
      floatingStat: {
        value: "60%",
        label: "Of property managers still rely on spreadsheets for core operations"
      }
    },
    features: {
      title1: "Our PropTech",
      title2: "Capabilities",
      description: "We engineer end-to-end cloud platforms designed to handle massive scale, complex hierarchies, and strict financial compliance.",
      bentoCards: [
        {
          icon: <Building2 />,
          title: "Property Management Systems (PMS)",
          description: "Enterprise software managing thousands of units, automating rent collection, lease renewals, and vendor ticketing.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <Camera />,
          title: "Virtual Reality & 3D Tours",
          description: "Integrating WebGL and VR technologies for photorealistic walkthroughs of unbuilt properties."
        },
        {
          icon: <BarChart3 />,
          title: "Automated Valuations (AVM)",
          description: "Machine learning models aggregating geospatial data to instantly calculate property values."
        },
        {
          icon: <Key />,
          title: "Smart Access Control",
          description: "Secure, encrypted mobile keys utilizing NFC/BLE to interact with physical door hardware.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <Home />,
          title: "Tenant Portals",
          description: "Mobile applications for paying rent, submitting tickets, and booking building amenities."
        },
        {
          icon: <Cloud />,
          title: "Financial Integrations",
          description: "Automated API syncing with Yardi, RealPage, and global banking systems for instant ledger reconciliation."
        }
      ]
    },
    architecture: {
      title: "Smart Building & Financial Architecture",
      layers: [
        {
          icon: <Cloud className="w-8 h-8" />,
          title: "Cloud Financial Core",
          items: ["Automated Escrow Routing", "SOC2 Compliant Ledgers", "Yardi/RealPage API Sync"]
        },
        {
          icon: <ShieldCheck className="w-8 h-8" />,
          title: "Data & Privacy Gateway",
          items: ["Tenant PII Encryption", "FCRA Compliant Background Checks", "Role-Based Access"]
        },
        {
          icon: <Network className="w-8 h-8" />,
          title: "IoT Edge Network",
          items: ["HVAC Telemetry", "Bluetooth Low Energy (BLE) Locks", "VLAN Network Segmentation"]
        }
      ]
    },
    roi: {
      title1: "Portfolio",
      title2: "Value Driven",
      metrics: [
        { value: "40%", title: "Faster Leasing", description: "Digital signatures, instant background checks, and mobile onboarding fill vacancies instantly." },
        { value: "20%", title: "Maintenance Savings", description: "Predictive HVAC analytics and automated vendor routing reduce unnecessary callouts." },
        { value: "0", title: "Financial Errors", description: "Direct API integrations with banking partners eliminate manual rent entry mistakes." },
        { value: "95%", title: "Tenant Retention", description: "Frictionless digital experiences and instant communication drastically boost tenant satisfaction." }
      ]
    },
    caseStudies: {
      title: "Trusted by Global Asset Managers",
      studies: [
        {
          image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
          industry: "Multi-Family Residential",
          title: "Deploying a Unified Tenant App Across 50,000 Units",
          stats: [ { value: "50K", label: "Units" }, { value: "85%", label: "App Adoption" } ]
        },
        {
          image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
          industry: "Commercial & Co-Working",
          title: "Algorithmic Desk Booking for Global Co-Working Space",
          stats: [ { value: "20", label: "Cities" }, { value: "100ms", label: "Booking Speed" } ]
        },
        {
          image: "https://images.unsplash.com/photo-1512403754473-27835f7b9984?auto=format&fit=crop&q=80",
          industry: "Industrial Warehousing",
          title: "IoT Facility Management Portal for Massive Logistics Hubs",
          stats: [ { value: "5M", label: "Sq Ft" }, { value: "15%", label: "Energy Saved" } ]
        },
        {
          image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
          industry: "Brokerage",
          title: "VR Walkthrough App Generating Leads for Unbuilt Luxury Towers",
          stats: [ { value: "3x", label: "Lead Gen" }, { value: "$500M", label: "Inventory" } ]
        }
      ]
    },
    compliance: {
      title: "Adhering to Financial & Real Estate Standards",
      logos: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/SOC_2_Logo.png/800px-SOC_2_Logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/8/87/GDPR_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PCI_Security_Standards_Council_logo.svg/1200px-PCI_Security_Standards_Council_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png"
      ]
    },
    faq: {
      questions: [
        {
          question: "Can you migrate our data from legacy systems like Yardi or RealPage?",
          answer: "Yes. We engineer robust ETL (Extract, Transform, Load) pipelines to safely migrate decades of complex lease, tenant, and financial data out of legacy systems into your new custom platform with zero data loss."
        },
        {
          question: "How do you handle the complex hierarchy of property portfolios?",
          answer: "Our database architects design highly relational Postgres schemas that easily handle the massive, nested hierarchies of real estate: Portfolios > Ownership Entities > Buildings > Floors > Units > Leases > Tenants."
        },
        {
          question: "Is it safe to connect building HVAC and locks to the internet?",
          answer: "We employ strict VLAN network segmentation. This ensures that the IoT network (cameras, locks, HVAC) is physically and logically separated from the corporate Wi-Fi and financial databases, preventing a physical hack from accessing ledgers."
        },
        {
          question: "Do you integrate with smart hardware vendors?",
          answer: "Yes, we integrate deeply via API with leading hardware providers like Latch, Salto, and Brivo for access control, as well as Nest and Honeywell for smart thermostats."
        }
      ]
    },
    cta: {
      subtitle: "Digitize Your Assets",
      title1: "Ready to scale",
      title2: "your property portfolio?",
      description: "Partner with us to build technology that reduces overhead, increases tenant satisfaction, and maximizes your Net Operating Income.",
      button1: { text: "Schedule PropTech Consultation", href: "/contact" },
      button2: { text: "View API Integrations", href: "/contact" }
    }
  };

  return <SolutionTemplate {...config} />;
}
