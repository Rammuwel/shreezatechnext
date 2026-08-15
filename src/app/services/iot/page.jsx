"use client";
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';
import { Wifi, Router, Activity, ShieldAlert, Layers, Cloud, Zap } from 'lucide-react';

export default function IOTPage() {
  const config = {
    breadcrumb: {
      label: 'IoT Solutions',
      href: '/services/iot'
    },
    hero: {
      slides: [
        {
          image: "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?auto=format&fit=crop&q=80",
          badgeText: "Connected Ecosystems",
          badgeColor: "#00A2FF",
          title1: "Industrial",
          title2: "Internet of Things",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#00A2FF] to-[#00f2fe]",
          description: "We engineer highly secure, scalable IoT networks that connect your physical assets to the digital world, unlocking unprecedented operational visibility.",
          primaryButton: { text: "Connect Your Devices", href: "/contact" }
        },
        {
          image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80",
          badgeText: "Edge Computing & Telemetry",
          badgeColor: "#D4AF37",
          title1: "Real-Time",
          title2: "Sensor Analytics",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#fde08b]",
          description: "Process massive telemetry data at the edge for instant decision-making, predictive maintenance, and optimized resource allocation.",
          secondaryButton: { text: "View Capabilities", href: "#capabilities" }
        }
      ]
    },
    stats: [
      { value: "1M+", label: "Connected Devices" },
      { value: "<10ms", label: "Telemetry Latency" },
      { value: "30%", label: "Downtime Reduction" }
    ],
    philosophy: {
      tagline: "Our IoT Philosophy",
      title1: "Bridging the Physical",
      title2: "and Digital Realms",
      description: [
        "The true power of IoT isn't just in collecting data; it's in making that data actionable. We build comprehensive IoT architectures that ingest millions of data points per second and translate them into immediate business value.",
        "From embedded firmware on edge devices to the global cloud infrastructure that manages them, we ensure every node in your network is secure, reliable, and perfectly synchronized."
      ],
      points: [
        { title: "Hardware Agnostic", subtitle: "Integrates with any sensor or protocol" },
        { title: "Edge Processing", subtitle: "Instant analytics without cloud latency" }
      ],
      image1: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80",
      image2: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
    },
    ecosystem: {
      title1: "End-to-End IoT",
      title2: "Architecture",
      description: "We provide full-stack IoT engineering, covering everything from the silicon on the device to the dashboard on your screen.",
      cards: [
        {
          icon: <Router className="w-8 h-8" />,
          title: "Firmware & Edge Dev",
          description: "Developing robust, low-power embedded software (C/C++) for microcontrollers that interface securely with local sensors and actuators.",
          features: ["RTOS / FreeRTOS", "OTA Updates", "BLE / LoRaWAN / Zigbee"]
        },
        {
          icon: <Cloud className="w-8 h-8" />,
          title: "IoT Cloud Platforms",
          description: "Architecting massively scalable message brokers and time-series databases to ingest and process high-frequency telemetry data.",
          features: ["AWS IoT Core / Azure IoT", "MQTT / CoAP", "Time-Series DBs (InfluxDB)"]
        },
        {
          icon: <Activity className="w-8 h-8" />,
          title: "Command Dashboards",
          description: "Building intuitive web and mobile applications to monitor device health, control actuators, and visualize sensor data in real-time.",
          features: ["Digital Twins", "Real-Time Charting", "Geofencing & Tracking"]
        }
      ]
    },
    security: {
      title1: "Zero-Trust.<br/>",
      title2: "Device Security.",
      description: "IoT devices are notorious targets for botnets. We implement a strict zero-trust architecture, ensuring every device is cryptographically authenticated before it can join your network.",
      button: { text: "Secure Your Network", href: "/contact" },
      cards: [
        {
          icon: <ShieldAlert className="w-12 h-12 text-[#00A2FF]" />,
          title: "Mutual TLS (mTLS)",
          description: "Enforcing bi-directional certificate authentication between the edge device and the cloud broker."
        },
        {
          icon: <Zap className="w-12 h-12 text-[#D4AF37]" />,
          title: "Hardware Security Modules",
          description: "Utilizing secure enclaves (TPM) on the device to store private keys safely away from the main processor."
        },
        {
          icon: <Layers className="w-12 h-12 text-[#00A2FF]" />,
          title: "OTA Firmware Encryption",
          description: "Delivering over-the-air updates that are fully encrypted and cryptographically signed to prevent malicious tampering."
        },
        {
          icon: <Wifi className="w-12 h-12 text-[#D4AF37]" />,
          title: "Network Segmentation",
          description: "Isolating IoT traffic from core enterprise networks to contain any potential breach at the edge."
        }
      ]
    },
    expertise: {
      title: "IoT Use Cases",
      description: "We deploy IoT solutions across heavy industries, smart cities, and consumer products.",
      cards: [
        {
          image: "https://images.unsplash.com/photo-1581092160607-ee22731c62a8?auto=format&fit=crop&q=80",
          title: "Smart Manufacturing (Industry 4.0)",
          description: "Vibration and temperature sensors on factory lines to predict machine failure before it halts production."
        },
        {
          image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?auto=format&fit=crop&q=80",
          title: "Fleet & Asset Tracking",
          description: "Real-time GPS, OBD2 diagnostics, and cold-chain temperature monitoring for global logistics operations."
        },
        {
          image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80",
          title: "Smart Home & Consumer IoT",
          description: "Connecting consumer appliances via BLE/WiFi with companion mobile apps for remote control and automation."
        }
      ]
    },
    process: {
      title1: "Our IoT Deployment",
      title2: "Process",
      steps: [
        { title: "Hardware Selection", description: "Evaluating and selecting the right microcontrollers, sensors, and communication protocols (Cellular, LoRa, WiFi) for your use case." },
        { title: "Firmware Development", description: "Writing efficient, low-level C/C++ code to manage power consumption, sensor reading, and secure communication." },
        { title: "Cloud Architecture", description: "Setting up the IoT Hub, message brokers (MQTT), and time-series databases to handle the incoming telemetry firehose." },
        { title: "Application Interface", description: "Developing the user-facing web dashboards and mobile applications to visualize data and control the devices." },
        { title: "Field Testing", description: "Deploying a small batch of devices in real-world conditions to test signal strength, battery life, and environmental resilience." },
        { title: "Mass Deployment & OTA", description: "Scaling up to thousands of devices and configuring the Over-The-Air update pipeline for future feature rollouts." }
      ]
    },
    cta: {
      subtitle: "Digitize Your Assets",
      title1: "Ready to connect",
      title2: "your operations?",
      description: "Let's build a secure, scalable IoT network that turns your physical infrastructure into actionable digital intelligence.",
      button1: { text: "Schedule IoT Strategy Call", href: "/contact" },
      button2: { text: "Explore IoT Case Studies", href: "/contact" }
    }
  };

  return <ServiceTemplate {...config} />;
}
