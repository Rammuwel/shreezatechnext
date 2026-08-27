"use client";
import React from 'react';
import SolutionTemplate from '../../../components/SolutionTemplate';
import { Glasses, Smartphone, Eye, Layers, Hexagon, Gamepad2, Component, Cloud } from 'lucide-react';

export default function ImmersiveTechPage() {
  const config = {
    breadcrumb: {
      label: 'Immersive Tech (AR/VR)',
      parentLabel: 'Solutions',
      parentHref: '/solutions'
    },
    hero: {
      bgImage: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80",
      badge: "Spatial Computing & XR Engineering",
      title1: "Extended Reality",
      title2: "Beyond the Screen",
      description: "We build transformative Augmented Reality (AR) and Virtual Reality (VR) applications that fundamentally alter how humans interact with digital environments and physical spaces—from medical training simulators to enterprise metaverse platforms.",
      primaryButton: { text: "Explore XR Capabilities", href: "/contact-us" },
      stats: [
        { label: "Render Target", value: "4K/90fps", trend: "Zero Motion Sickness" },
        { label: "Spatial Tracking", value: "6 DoF", trend: "Sub-millimeter Precision" },
        { label: "Devices Supported", value: "10+", trend: "OpenXR Standard" }
      ]
    },
    challenge: {
      title1: "The 2D Interface",
      title2: "Limitation Crisis",
      description: [
        "We are transitioning from an era of 2D screens to 3D spatial computing. Traditional software interfaces force users to interact with information through mouse clicks on flat screens—a cognitive mismatch for complex, spatial data like surgical anatomy, industrial machinery, or architectural models.",
        "Organizations that invest in immersive training and visualization experiences see dramatic improvements in comprehension, retention, and safety outcomes versus conventional video-based training."
      ],
      painPoints: [
        "Complex industrial training with 2D manuals leading to costly human error",
        "Long onboarding cycles because employees can't safely practice on real machinery",
        "Customers unable to visualize unbuilt real estate or un-packaged products",
        "Fragmented XR landscape with no single engine running on all devices"
      ],
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80",
      floatingStat: {
        value: "75%",
        label: "Better information retention in immersive VR training vs. classroom"
      }
    },
    features: {
      title1: "Spatial Computing",
      title2: "Capabilities",
      description: "From lightweight WebAR to heavy industrial VR simulations, we possess deep expertise across the entire Extended Reality spectrum.",
      bentoCards: [
        {
          icon: <Glasses />,
          title: "Virtual Reality (VR) Training",
          description: "Fully immersive, interactive 3D environments for hazardous compliance training, medical simulations, and complex assembly practice—without real-world risk.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <Smartphone />,
          title: "Augmented Reality (AR) Apps",
          description: "Overlaying digital information onto the physical world using ARKit/ARCore for retail, industrial maintenance overlays, and interactive marketing."
        },
        {
          icon: <Hexagon />,
          title: "WebAR & WebXR",
          description: "Delivering massive 3D experiences directly in the mobile browser with no app download required, using Three.js and 8th Wall."
        },
        {
          icon: <Eye />,
          title: "Industrial Digital Twins",
          description: "Replicating entire factories or oil rigs in 3D, mapped to live IoT sensor data so engineers can inspect remotely in VR.",
          span: "col-span-1 md:col-span-2",
          link: true
        },
        {
          icon: <Gamepad2 />,
          title: "Cross-Device Compatibility",
          description: "OpenXR-standard development ensuring your application runs on Meta Quest, Apple Vision Pro, HTC Vive, and Pico headsets."
        },
        {
          icon: <Component />,
          title: "Asset Optimization",
          description: "Advanced retopology, LODs, and texture baking to run massive 3D models fluidly on mobile chipsets and standalone headsets."
        }
      ]
    },
    architecture: {
      subtitle: "XR Technology Stack",
      title: "Hardware-Agnostic Rendering Architecture",
      layers: [
        {
          icon: <Glasses className="w-8 h-8" />,
          title: "Spatial Experience Layer",
          items: ["Unreal Engine 5 / Unity HDRP", "OpenXR Runtime Compliance", "Photorealistic PBR Materials", "Physics-Based Interaction"]
        },
        {
          icon: <Cloud className="w-8 h-8" />,
          title: "Cloud & Streaming Layer",
          items: ["Cloud GPU Rendering (AWS Gamelift)", "Pixel Streaming to Headsets", "Multi-User VR Servers", "Real-Time IoT Data Integration"]
        },
        {
          icon: <Layers className="w-8 h-8" />,
          title: "Performance & Delivery Layer",
          items: ["90Hz+ Frame Rate Lock", "Mesh LOD Systems", "Spatial Audio (Binaural)", "App Store & MDM Deployment"]
        }
      ]
    },
    roi: {
      title1: "Immersive",
      title2: "Business Impact",
      metrics: [
        { value: "75%", title: "Better Retention", description: "Employees trained in VR retain information significantly longer than classroom training." },
        { value: "40%", title: "Faster Onboarding", description: "Safe, repeatable VR simulations drastically accelerate skill acquisition." },
        { value: "Zero", title: "Training Accidents", description: "Hazardous scenarios practiced in VR eliminate real-world injury risk." },
        { value: "3x", title: "Higher Engagement", description: "Interactive 3D product visualizers convert browsers into buyers far more effectively." }
      ]
    },
    caseStudies: {
      title: "Transforming Industries with XR",
      studies: [
        {
          image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
          industry: "Industrial Training",
          title: "VR Safety Simulation Platform for High-Voltage Electrical Workers",
          stats: [ { value: "Zero", label: "Incidents" }, { value: "60%", label: "Training Cost Drop" } ]
        },
        {
          image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80",
          industry: "Medical Simulation",
          title: "Surgical Training VR App for Laparoscopic Procedure Practice",
          stats: [ { value: "95%", label: "Surgeon Confidence" }, { value: "40%", label: "Error Reduction" } ]
        },
        {
          image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80",
          industry: "Retail & Real Estate",
          title: "WebAR Try-On App Driving Conversions for Global Fashion Brand",
          stats: [ { value: "30%", label: "Returns Drop" }, { value: "2M+", label: "AR Sessions" } ]
        }
      ]
    },
    faq: {
      questions: [
        {
          question: "Which 3D engine do you use—Unity or Unreal Engine?",
          answer: "It depends on the project. We use Unreal Engine 5 for photorealistic industrial digital twins and architectural visualizations where visual fidelity is paramount. We favor Unity for cross-platform mobile AR apps and standalone VR headset experiences where performance optimization on lower-end hardware is critical."
        },
        {
          question: "How do you prevent motion sickness in VR?",
          answer: "Motion sickness is caused by a disconnect between perceived and actual movement. We engineer all VR experiences to maintain a minimum locked 90fps frame rate, utilize teleportation locomotion where possible, and calibrate field-of-view and head-tracking latency to sub-20ms to keep the vestibular system comfortable."
        },
        {
          question: "Can we get a WebAR experience without users downloading an app?",
          answer: "Yes. We build WebAR experiences using 8th Wall and Three.js that run entirely in a mobile browser. Users simply tap a link or scan a QR code and the 3D experience launches instantly—no app store download required."
        }
      ]
    },
    cta: {
      subtitle: "Enter the Spatial Era",
      title1: "Ready to build",
      title2: "the impossible?",
      description: "Partner with our spatial computing experts to create an AR/VR experience that transforms how your industry trains, sells, and operates.",
      button1: { text: "Schedule XR Consultation", href: "/contact-us" },
      button2: { text: "View VR Case Studies", href: "/contact-us" }
    }
  };

  return <SolutionTemplate {...config} />;
}
