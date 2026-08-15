"use client";
import React from 'react';
import SolutionTemplate from '../../../components/SolutionTemplate';
import { Factory, Truck, Cpu, Network, Box, ShieldCheck, HardDrive, Zap } from 'lucide-react';

export default function ManufacturingSolutionPage() {
  const config = {
    breadcrumb: {
      label: 'Manufacturing Solutions',
      parentLabel: 'Solutions',
      parentHref: '/solutions'
    },
    hero: {
      bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      badge: "Industry 4.0 Infrastructure",
      title1: "Engineering the",
      title2: "Smart Factory",
      description: "We bridge the critical gap between Information Technology (IT) and Operational Technology (OT), deploying Industrial IoT ecosystems that optimize global supply chains and prevent machine downtime.",
      primaryButton: { text: "Schedule Factory Audit", href: "/contact" },
      stats: [
        { label: "Downtime Prevented", value: "85%", trend: "Predictive AI" },
        { label: "OEE Improvement", value: "+22%", trend: "Efficiency Gain" },
        { label: "Data Processed", value: "2TB/Day", trend: "Edge Computing" }
      ]
    },
    challenge: {
      title1: "The Industrial",
      title2: "Blind Spot",
      description: [
        "In modern manufacturing, physical machinery is only half the equation. The true differentiator is the software that orchestrates it. Legacy Manufacturing Execution Systems (MES) and ERPs are often siloed, resulting in blind spots on the factory floor.",
        "Without real-time data extraction from PLCs and production lines, plant managers are forced into reactive maintenance. A single hour of unexpected machine downtime can cost hundreds of thousands of dollars in lost yield."
      ],
      painPoints: [
        "Inability to extract telemetry from legacy proprietary PLCs (Siemens, Allen-Bradley)",
        "Supply chain opacity leading to massive inventory holding costs",
        "Reactive maintenance models causing catastrophic line stoppages",
        "Vulnerability of cyber-physical systems to industrial espionage"
      ],
      image: "https://images.unsplash.com/photo-1565043589221-b16629ec2e76?auto=format&fit=crop&q=80",
      floatingStat: {
        value: "$50B",
        label: "Lost annually to unplanned industrial downtime"
      }
    },
    features: {
      title1: "Our Industry 4.0",
      title2: "Capabilities",
      description: "Enterprise-grade software engineering designed specifically for the rigorous demands of heavy industry, aerospace, and global logistics.",
      bentoCards: [
        {
          icon: <Factory />,
          title: "Manufacturing Execution (MES)",
          description: "Custom cloud-based MES platforms that track the transformation of raw materials into finished goods in absolute real-time.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <Truck />,
          title: "Supply Chain Visibility",
          description: "Global tracking systems integrating GPS, RFID, and EDI for end-to-end logistics."
        },
        {
          icon: <Network />,
          title: "IIoT & Edge Computing",
          description: "Deploying industrial gateways to process high-frequency sensor data at the edge."
        },
        {
          icon: <Cpu />,
          title: "Predictive Maintenance AI",
          description: "Machine learning models trained on vibration and acoustic data to predict motor failures before they happen.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <HardDrive />,
          title: "SCADA Integration",
          description: "Securely bridging OT control systems with corporate IT dashboards."
        },
        {
          icon: <Box />,
          title: "Digital Twins",
          description: "3D virtual replicas of physical production lines for simulation and stress testing."
        }
      ]
    },
    architecture: {
      title: "Purdue Model Network Segmentation",
      layers: [
        {
          icon: <Zap className="w-8 h-8" />,
          title: "Enterprise IT (Level 4/5)",
          items: ["Cloud Analytics Engine", "Global ERP Integration", "Business Intelligence Dashboards"]
        },
        {
          icon: <ShieldCheck className="w-8 h-8" />,
          title: "Industrial DMZ (Level 3.5)",
          items: ["Hardware Data Diodes", "Strict Firewall Rules", "Proxy Servers"]
        },
        {
          icon: <Factory className="w-8 h-8" />,
          title: "OT Network (Level 0-3)",
          items: ["Edge Processing Gateways", "PLC/SCADA Controllers", "Physical Sensors"]
        }
      ]
    },
    roi: {
      title1: "Operational",
      title2: "Impact",
      metrics: [
        { value: "25%", title: "Downtime Reduction", description: "Fixing machines before they break utilizing predictive vibration analysis." },
        { value: "40%", title: "Inventory Optimization", description: "Just-In-Time (JIT) algorithmic routing prevents overstocking and warehousing bloat." },
        { value: "100%", title: "Traceability", description: "Blockchain tracking ensures every single bolt and weld meets aerospace compliance." },
        { value: "15%", title: "Energy Savings", description: "AI-driven HVAC and motor optimizations drastically reduce power draw." }
      ]
    },
    caseStudies: {
      title: "Deployed in the World's Smartest Factories",
      studies: [
        {
          image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
          industry: "Automotive",
          title: "Digitizing a 2M Sq-Ft Electric Vehicle Assembly Plant",
          stats: [ { value: "2M", label: "Sq Ft" }, { value: "30%", label: "Yield Increase" } ]
        },
        {
          image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80",
          industry: "Pharmaceuticals",
          title: "Cold-Chain Logistics Tracking for FDA Compliance",
          stats: [ { value: "100%", label: "Compliant" }, { value: "Zero", label: "Spoilage" } ]
        },
        {
          image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80",
          industry: "FMCG",
          title: "AI Demand Forecasting for Global Food Packaging",
          stats: [ { value: "10K", label: "Pallets/Day" }, { value: "40%", label: "Waste Reduction" } ]
        },
        {
          image: "https://images.unsplash.com/photo-1565514020179-0c6f1c4e70e3?auto=format&fit=crop&q=80",
          industry: "Logistics",
          title: "Global Maritime Fleet Tracking via Satellite IoT",
          stats: [ { value: "500", label: "Vessels" }, { value: "Real-time", label: "Telemetry" } ]
        }
      ]
    },
    compliance: {
      title: "Meeting Rigorous Industrial Standards",
      logos: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/ISA_logo.svg/1200px-ISA_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/FDA_logo.svg/1200px-FDA_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/ISO_Logo_%28Red_square%29.svg/1200px-ISO_Logo_%28Red_square%29.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png"
      ]
    },
    faq: {
      questions: [
        {
          question: "How do you extract data from legacy PLCs (Siemens, Allen-Bradley) without disrupting production?",
          answer: "We utilize non-intrusive industrial edge gateways (like Litmus or Kepware) that speak native industrial protocols (Modbus, OPC UA, PROFINET). These gateways quietly read the data registers from the PLCs in read-only mode, entirely eliminating the risk of accidental control signals disrupting the line."
        },
        {
          question: "What is cyber-physical security and how do you implement it?",
          answer: "In factories, a cyber attack can result in physical damage or human injury. We implement the Purdue Enterprise Reference Architecture, creating strict air-gaps and utilizing hardware Data Diodes to ensure data can flow out of the OT network to the cloud, but hackers cannot send commands back in."
        },
        {
          question: "Can your MES integrate with our global SAP ERP?",
          answer: "Yes. We engineer bidirectional APIs that push live production yields from the factory floor directly into SAP or Oracle NetSuite, and pull down daily work orders to route them to the specific machine operators."
        },
        {
          question: "How much data is required to train a Predictive Maintenance AI?",
          answer: "Machine learning requires historical failure data. Typically, we need 3 to 6 months of high-frequency telemetry (vibration, acoustics, temperature) correlated with maintenance logs to train a model capable of accurately predicting a motor failure weeks in advance."
        }
      ]
    },
    cta: {
      subtitle: "Optimize Your Operations",
      title1: "Ready to build the",
      title2: "factory of the future?",
      description: "Partner with engineering experts who understand both modern cloud software and legacy industrial hardware.",
      button1: { text: "Schedule Factory Audit", href: "/contact" },
      button2: { text: "View Industry 4.0 Architecture", href: "/contact" }
    }
  };

  return <SolutionTemplate {...config} />;
}
