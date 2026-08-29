"use client";
import React from 'react';
import SolutionTemplate from '../../../components/SolutionTemplate';
import { Network, Database, Lock, Globe, Server, Code, ShieldCheck, Zap } from 'lucide-react';

export default function FinTechSolutionPage() {
  const config = {
    breadcrumb: {
      label: 'FinTech Solutions',
      parentLabel: 'Solutions',
      parentHref: '/solutions'
    },
    hero: {
      bgImage: "/images/istock-1.jpg",
      badge: "Institutional Grade FinTech",
      title1: "Architecting the Future of",
      title2: "Digital Finance",
      description: "We engineer highly secure, low-latency financial systems—from decentralized payment gateways to core banking replacements—designed to move value instantly across the globe.",
      primaryButton: { text: "Schedule Architecture Review", href: "/contact-us" },
      stats: [
        { label: "Transactions Processed", value: "$12B+", trend: "↑ 24% YOY" },
        { label: "System Uptime", value: "99.999%", trend: "Zero Downtime" },
        { label: "Settlement Speed", value: "< 50ms", trend: "Ultra-Low Latency" }
      ]
    },
    challenge: {
      title1: "The Cost of",
      title2: "Technical Debt",
      description: [
        "The financial sector is undergoing a massive paradigm shift. Consumers expect instantaneous, frictionless money movement, yet most institutions are running on decades-old COBOL mainframes that were never designed for the internet era.",
        "Legacy systems result in batch-processing delays, exorbitant maintenance costs, and a near-inability to launch new digital products quickly. In an industry where speed is revenue, technical debt is an existential threat."
      ],
      painPoints: [
        "Rigid legacy core systems preventing agile product development",
        "High latency and high failure rates in cross-border transactions",
        "Increasingly sophisticated cyber threats and fraud rings",
        "Complex, ever-changing global regulatory requirements (PSD2, GDPR)"
      ],
      image: "/images/manufacturing_hero_1787089721945.jpg",
      floatingStat: {
        value: "40%",
        label: "Of IT budgets wasted on legacy maintenance"
      }
    },
    features: {
      title1: "Our FinTech",
      title2: "Capabilities",
      description: "We deliver full-stack financial engineering, from the bare metal to the mobile banking app, ensuring every transaction is secure, compliant, and instantaneous.",
      bentoCards: [
        {
          icon: <Network />,
          title: "Payment Gateways",
          description: "Custom payment switches that route transactions across Visa, Mastercard, and localized alternative payment methods (APMs) with intelligent failover.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <Database />,
          title: "Core Banking Modernization",
          description: "Strangling legacy mainframes safely to modern cloud-native architectures."
        },
        {
          icon: <Lock />,
          title: "Crypto Custody",
          description: "Multi-party computation (MPC) wallets for institutional digital asset security."
        },
        {
          icon: <Globe />,
          title: "Cross-Border Remittance",
          description: "Bypassing SWIFT with blockchain-based stablecoin rails for instant settlement.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <Server />,
          title: "RegTech Automation",
          description: "Automated KYC/AML pipelines and real-time transaction monitoring."
        },
        {
          icon: <Code />,
          title: "BaaS APIs",
          description: "Banking-as-a-Service architecture for issuing virtual cards."
        }
      ]
    },
    architecture: {
      title: "Zero-Trust Financial Architecture",
      layers: [
        {
          icon: <ShieldCheck className="w-8 h-8" />,
          title: "Perimeter Security",
          items: ["Web Application Firewall (WAF)", "DDoS Mitigation (Cloudflare)", "Network Tokenization"]
        },
        {
          icon: <Zap className="w-8 h-8" />,
          title: "Microservices Core",
          items: ["Kubernetes Orchestration", "Event-Driven (Kafka)", "ACID Compliant Ledgers"]
        },
        {
          icon: <Database className="w-8 h-8" />,
          title: "Data & Storage",
          items: ["WORM Databases (Immutable)", "Hardware Security Modules (HSM)", "AES-256 Encryption"]
        }
      ]
    },
    roi: {
      title1: "Measurable",
      title2: "Business Impact",
      metrics: [
        { value: "3x", title: "Faster Time to Market", description: "By moving from monolithic to microservices, feature releases drop from months to weeks." },
        { value: "40%", title: "Cost Reduction", description: "Eliminating mainframe licensing fees and optimizing cloud infrastructure drastically lowers OpEx." },
        { value: "0", title: "Compliance Breaches", description: "Automated regulatory reporting and strict PII isolation guarantee compliance." },
        { value: "90%", title: "Fraud Reduction", description: "Machine learning models flag anomalous transaction velocity instantly." }
      ]
    },
    caseStudies: {
      title: "Trusted by Global Financial Innovators",
      studies: [
        {
          image: "/images/retail_hero_1787089685944.jpg",
          industry: "Neobanking",
          title: "Scaling a Digital Bank to 5 Million Users in 12 Months",
          stats: [ { value: "5M", label: "Users" }, { value: "10ms", label: "Latency" } ]
        },
        {
          image: "/images/robotics_hero.jpg",
          industry: "Decentralized Finance",
          title: "Engineering an Institutional Crypto Custody Solution",
          stats: [ { value: "$2B", label: "Secured" }, { value: "Zero", label: "Breaches" } ]
        },
        {
          image: "/images/services-hero.jpg",
          industry: "Payment Gateway",
          title: "Achieving 10,000 TPS for a Global E-Commerce Processor",
          stats: [ { value: "10K", label: "TPS" }, { value: "99.99%", label: "Uptime" } ]
        },
        {
          image: "/images/ai_hero.jpg",
          industry: "Wealth Management",
          title: "Robo-Advisory Platform for High-Net-Worth Individuals",
          stats: [ { value: "30%", label: "AUM Growth" }, { value: "1s", label: "Trade Exec" } ]
        }
      ]
    },
    compliance: {
      title: "Certified Compliant By Global Standards",
      logos: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PCI_Security_Standards_Council_logo.svg/1200px-PCI_Security_Standards_Council_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/8/87/GDPR_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/SOC_2_Logo.png/800px-SOC_2_Logo.png"
      ]
    },
    faq: {
      questions: [
        {
          question: "How do you securely modernize a legacy core banking system without downtime?",
          answer: "We utilize the 'Strangler Fig' pattern. We build the new microservices alongside the old mainframe, and route traffic to the new services via an API gateway one module at a time. This allows for safe, zero-downtime modernization."
        },
        {
          question: "What technologies do you use for high-frequency trading applications?",
          answer: "For systems where microseconds matter, we write core execution engines in C++ or Rust. For highly concurrent payment gateways, we heavily utilize Go (Golang) and Elixir due to their exceptional handling of massive concurrency."
        },
        {
          question: "Do you provide smart contract auditing?",
          answer: "Yes. Our Web3 division performs rigorous formal verification, static analysis, and manual peer-review of Solidity and Rust smart contracts to prevent reentrancy attacks, oracle manipulation, and flash loan exploits."
        },
        {
          question: "How do you handle PCI-DSS compliance?",
          answer: "We design the architecture so that your primary servers never actually touch raw Primary Account Numbers (PAN). We utilize network tokenization via third-party vaults (like VGS or Stripe), keeping your application completely out of PCI scope."
        }
      ]
    },
    cta: {
      subtitle: "De-Risk Your Technical Architecture",
      title1: "Ready to process",
      title2: "millions globally?",
      description: "Partner with an engineering team that understands both the extreme speed required by a startup and the extreme security demanded by a bank.",
      button1: { text: "Contact Our Financial Engineers", href: "/contact-us" },
      button2: { text: "View API Documentation", href: "/contact-us" }
    }
  };

  return <SolutionTemplate {...config} />;
}
