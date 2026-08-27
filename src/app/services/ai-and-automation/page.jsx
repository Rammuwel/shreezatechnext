"use client";
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';
import { BrainCircuit, Cpu, Database, Network, LineChart, ShieldCheck, Activity } from 'lucide-react';

export default function AIAutomationPage() {
  const config = {
    breadcrumb: {
      label: 'AI & Automation',
      href: '/services/ai-and-automation'
    },
    hero: {
      slides: [
        {
          image: "/images/ai_hero.jpg",
          badgeText: "Intelligent Enterprise",
          badgeColor: "#00A2FF",
          title1: "Cognitive",
          title2: "AI Solutions",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#00A2FF] to-[#00f2fe]",
          description: "We deploy advanced machine learning models and predictive analytics to automate complex workflows and uncover hidden business intelligence.",
          primaryButton: { text: "Explore AI Solutions", href: "#capabilities" }
        },
        {
          image: "/images/hero-slide-1.jpg",
          badgeText: "Robotic Process Automation",
          badgeColor: "#ffb916",
          title1: "Hyper-Automated",
          title2: "Workflows",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#ffb916] to-[#fde08b]",
          description: "Transform manual, repetitive tasks into flawless, instantaneous automated processes with our enterprise RPA implementations.",
          secondaryButton: { text: "Automate Your Business", href: "/contact-us" }
        }
      ]
    },
    stats: [
      { value: "40%", label: "Cost Reduction" },
      { value: "10x", label: "Process Speed" },
      { value: "99.9%", label: "Accuracy Rate" }
    ],
    philosophy: {
      tagline: "Our AI Philosophy",
      title1: "Augmenting Human",
      title2: "Potential",
      description: [
        "Artificial Intelligence shouldn't replace your workforce; it should elevate it. By automating mundane, repetitive tasks, we free your teams to focus on high-value, strategic initiatives that drive true innovation.",
        "We build ethical, transparent, and scalable AI architectures that seamlessly integrate into your existing operations, turning raw data into a formidable competitive advantage."
      ],
      points: [
        { title: "Data-Driven", subtitle: "Decisions backed by predictive models" },
        { title: "Continuous Learning", subtitle: "Algorithms that improve over time" }
      ],
      image1: "/images/chatgpt-3.png",
      image2: "/images/about-tech-team.jpg"
    },
    ecosystem: {
      title1: "Comprehensive AI",
      title2: "Capabilities",
      description: "From deep learning networks to cognitive virtual assistants, our AI stack spans the entire spectrum of modern enterprise automation.",
      cards: [
        {
          icon: <BrainCircuit className="w-8 h-8" />,
          title: "Machine Learning Models",
          description: "Custom NLP, Computer Vision, and Predictive models trained specifically on your proprietary enterprise data.",
          features: ["TensorFlow / PyTorch", "Predictive Analytics", "Anomaly Detection"]
        },
        {
          icon: <Activity className="w-8 h-8" />,
          title: "Robotic Process Automation",
          description: "Software robots that mimic human actions to execute business processes flawlessly across legacy systems.",
          features: ["UiPath / Automation Anywhere", "Invoice Processing", "Data Entry Automation"]
        },
        {
          icon: <Database className="w-8 h-8" />,
          title: "Generative AI Integration",
          description: "Implementing LLMs (Large Language Models) to generate content, summarize documents, and power advanced chatbots.",
          features: ["OpenAI / Anthropic APIs", "RAG Architecture", "Cognitive Search"]
        }
      ]
    },
    security: {
      title1: "Ethical AI.<br/>",
      title2: "Secure Data.",
      description: "When dealing with artificial intelligence, data privacy and model governance are paramount. We deploy secure, private AI models that ensure your proprietary data never leaves your VPC.",
      button: { text: "Learn About Our AI Security", href: "/contact-us" },
      cards: [
        {
          icon: <ShieldCheck className="w-12 h-12 text-[#00A2FF]" />,
          title: "Private LLM Hosting",
          description: "Deploying open-source models (Llama 3, Mistral) locally within your isolated cloud environment."
        },
        {
          icon: <Network className="w-12 h-12 text-[#ffb916]" />,
          title: "Federated Learning",
          description: "Training machine learning algorithms across multiple decentralized edge devices without exchanging data."
        },
        {
          icon: <LineChart className="w-12 h-12 text-[#00A2FF]" />,
          title: "Bias Mitigation",
          description: "Continuous auditing of AI outputs to ensure ethical compliance, fairness, and zero discriminatory drift."
        },
        {
          icon: <Cpu className="w-12 h-12 text-[#ffb916]" />,
          title: "Encrypted Processing",
          description: "Utilizing homomorphic encryption to allow models to analyze and learn from encrypted data securely."
        }
      ]
    },
    process: {
      title1: "Our AI Implementation",
      title2: "Lifecycle",
      steps: [
        { title: "Data Readiness Audit", description: "We assess the quality, structure, and volume of your existing data. Good AI requires pristine data pipelines." },
        { title: "Use-Case Identification", description: "Collaborating with stakeholders to identify high-ROI automation targets and define measurable success KPIs." },
        { title: "Model Training & Tuning", description: "Developing custom algorithms, training them on your datasets, and fine-tuning parameters for maximum accuracy." },
        { title: "Proof of Concept (PoC)", description: "Deploying the model in a controlled sandbox environment to validate predictions and process execution." },
        { title: "Enterprise Integration", description: "Connecting the trained AI via APIs to your existing ERP, CRM, or operational software." },
        { title: "Monitoring & Retraining", description: "AI isn't set-and-forget. We continuously monitor model drift and retrain algorithms as new data flows in." }
      ]
    },
    cta: {
      subtitle: "Unlock Exponential Growth",
      title1: "Ready to make your business",
      title2: "intelligent?",
      description: "Let's discover how artificial intelligence can streamline your operations and give you a massive competitive edge.",
      button1: { text: "Schedule AI Consultation", href: "/contact-us" },
      button2: { text: "View Success Stories", href: "/contact-us" }
    }
  };

  return <ServiceTemplate {...config} />;
}

