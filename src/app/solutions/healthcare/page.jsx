"use client";
import React from 'react';
import SolutionTemplate from '../../../components/SolutionTemplate';
import { Activity, ShieldPlus, HeartPulse, Monitor, Database, Lock, ShieldCheck, Stethoscope } from 'lucide-react';

export default function HealthcareSolutionPage() {
  const config = {
    breadcrumb: {
      label: 'Healthcare IT Solutions',
      parentLabel: 'Solutions',
      parentHref: '/solutions'
    },
    hero: {
      bgImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
      badge: "HIPAA Compliant HealthTech",
      title1: "Digitizing",
      title2: "Patient Care",
      description: "We engineer secure, scalable Healthcare IT ecosystems—from intelligent Electronic Health Records (EHR) to ultra-low latency telemedicine platforms—designed to improve patient outcomes and operational efficiency.",
      primaryButton: { text: "Schedule Tech Audit", href: "/contact" },
      stats: [
        { label: "Patient Records Secured", value: "10M+", trend: "HIPAA Compliant" },
        { label: "Telehealth Sessions", value: "500K+", trend: "Zero Dropped Calls" },
        { label: "System Uptime", value: "99.99%", trend: "Critical Reliability" }
      ]
    },
    challenge: {
      title1: "The Healthcare",
      title2: "Data Fragmentation",
      description: [
        "The healthcare industry generates approximately 30% of the world's data volume, yet much of it remains trapped in isolated, on-premise silos. This fragmentation leads to duplicate testing, delayed diagnoses, and severe operational inefficiencies.",
        "Furthermore, strict regulatory requirements (like HIPAA and HITECH) make modernizing these legacy systems a complex engineering challenge. Hospitals need interoperability without compromising patient privacy."
      ],
      painPoints: [
        "Lack of interoperability between legacy EHR and EMR systems (HL7/FHIR issues)",
        "High friction in remote patient monitoring and telemedicine adoption",
        "Increasing risk of ransomware attacks targeting hospital data centers",
        "Inefficient patient onboarding and fragmented care coordination"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
      floatingStat: {
        value: "80%",
        label: "Of medical errors are tied to miscommunication of patient data"
      }
    },
    features: {
      title1: "Our HealthTech",
      title2: "Capabilities",
      description: "We build custom software solutions that bridge the gap between clinical workflows, patient engagement, and robust data security.",
      bentoCards: [
        {
          icon: <Activity />,
          title: "Telemedicine Platforms",
          description: "Custom video-conferencing architectures with integrated digital prescriptions, remote triage, and automated billing workflows.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <Database />,
          title: "EHR / EMR Integrations",
          description: "Building middleware to connect bespoke apps to Epic, Cerner, and other legacy health records using FHIR/HL7 standards."
        },
        {
          icon: <HeartPulse />,
          title: "IoMT & Wearables",
          description: "Extracting real-time telemetry from Bluetooth medical devices for continuous remote patient monitoring."
        },
        {
          icon: <Monitor />,
          title: "Patient Portals",
          description: "Mobile-first applications empowering patients to book appointments, view lab results, and message providers securely.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <ShieldPlus />,
          title: "AI Diagnostics",
          description: "Deploying machine learning models to analyze medical imaging (MRI/X-Ray) and flag anomalies."
        },
        {
          icon: <Stethoscope />,
          title: "Hospital ERPs",
          description: "Custom management systems for bed allocation, staff scheduling, and medical inventory tracking."
        }
      ]
    },
    architecture: {
      title: "HIPAA-Compliant Cloud Architecture",
      layers: [
        {
          icon: <Lock className="w-8 h-8" />,
          title: "Data De-identification",
          items: ["Automated PHI Scrubbing", "Tokenized Data Vaults", "Role-Based Access Control (RBAC)"]
        },
        {
          icon: <Database className="w-8 h-8" />,
          title: "Interoperability Layer",
          items: ["FHIR APIs", "HL7 v2/v3 Interfaces", "SMART on FHIR Integration"]
        },
        {
          icon: <ShieldCheck className="w-8 h-8" />,
          title: "Infrastructure Security",
          items: ["Dedicated Tenancy (AWS/Azure)", "AES-256 Encryption at Rest", "Intrusion Detection Systems (IDS)"]
        }
      ]
    },
    roi: {
      title1: "Clinical & Financial",
      title2: "Impact",
      metrics: [
        { value: "45%", title: "Reduction in No-Shows", description: "Automated SMS reminders and easy rescheduling via patient portals drastically improve attendance." },
        { value: "3x", title: "Faster Data Retrieval", description: "Unified cloud architecture allows doctors to pull complete patient histories instantly." },
        { value: "Zero", title: "Compliance Violations", description: "Rigorous automated auditing ensures every byte of PHI is tracked and secured." },
        { value: "60%", title: "Admin Time Saved", description: "AI-driven transcription and automated billing pipelines reduce manual data entry." }
      ]
    },
    caseStudies: {
      title: "Transforming Global Healthcare Providers",
      studies: [
        {
          image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
          industry: "Telehealth Startup",
          title: "Scaling a Virtual Mental Health Clinic to 1M Active Users",
          stats: [ { value: "1M+", label: "Users" }, { value: "99.9%", label: "Uptime" } ]
        },
        {
          image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80",
          industry: "Hospital Network",
          title: "Unifying 15 Regional Clinics onto a Single Custom EHR",
          stats: [ { value: "15", label: "Clinics" }, { value: "100%", label: "Data Sync" } ]
        },
        {
          image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80",
          industry: "Medical Devices",
          title: "Remote Cardiac Monitoring IoT Platform for Seniors",
          stats: [ { value: "50K", label: "Devices" }, { value: "<1s", label: "Alert Latency" } ]
        },
        {
          image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80",
          industry: "Pharma",
          title: "Blockchain Supply Chain Tracking for Cold-Storage Vaccines",
          stats: [ { value: "Zero", label: "Spoilage" }, { value: "FDA", label: "Compliant" } ]
        }
      ]
    },
    compliance: {
      title: "Engineered to Meet Global Medical Standards",
      logos: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/HIPAA_Logo.svg/1200px-HIPAA_Logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/FDA_logo.svg/1200px-FDA_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/8/87/GDPR_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/HL7_logo.svg/1200px-HL7_logo.svg.png"
      ]
    },
    faq: {
      questions: [
        {
          question: "How do you ensure HIPAA compliance in custom software?",
          answer: "We employ a strict 'Security by Design' methodology. This includes entering into Business Associate Agreements (BAAs) with cloud providers (AWS/Azure), ensuring all data is encrypted at rest (AES-256) and in transit (TLS 1.3), implementing rigorous access controls, and maintaining immutable audit logs of all PHI access."
        },
        {
          question: "Can your custom apps integrate with our existing Epic or Cerner EHR?",
          answer: "Yes. We specialize in healthcare interoperability. We build middleware that utilizes FHIR (Fast Healthcare Interoperability Resources) APIs and HL7 standards to securely read and write patient data to legacy EHRs like Epic, Cerner, and Athenahealth."
        },
        {
          question: "How do you handle video streaming latency for telemedicine?",
          answer: "We build custom WebRTC pipelines utilizing globally distributed STUN/TURN servers. This ensures peer-to-peer video streams choose the shortest geographical route, resulting in ultra-low latency, high-definition video even on unstable cellular networks."
        },
        {
          question: "Do you develop software as a Medical Device (SaMD)?",
          answer: "Yes, we adhere to ISO 13485 quality management standards and FDA 21 CFR Part 11 guidelines when developing algorithms or mobile applications that are intended to diagnose, treat, or mitigate medical conditions."
        }
      ]
    },
    cta: {
      subtitle: "Modernize Patient Delivery",
      title1: "Ready to build the",
      title2: "future of care?",
      description: "Partner with engineering experts who understand the critical balance between cutting-edge technology and rigorous medical compliance.",
      button1: { text: "Schedule IT Consultation", href: "/contact" },
      button2: { text: "View Interoperability Specs", href: "/contact" }
    }
  };

  return <SolutionTemplate {...config} />;
}
