"use client";
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';
import { Layers, Eye, Smartphone, Glasses, Hexagon, Component, Gamepad2 } from 'lucide-react';

export default function ImmersiveTechPage() {
  const config = {
    breadcrumb: {
      label: 'Immersive Tech (AR/VR)',
      href: '/solutions/immersivetech',
      parentLabel: 'Solutions',
      parentHref: '/solutions'
    },
    hero: {
      slides: [
        {
          image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80",
          badgeText: "Spatial Computing",
          badgeColor: "#00A2FF",
          title1: "Boundary-Pushing",
          title2: "Extended Reality",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#00A2FF] to-[#00f2fe]",
          description: "We build transformative Augmented Reality (AR) and Virtual Reality (VR) applications that alter how humans interact with digital environments and physical spaces.",
          primaryButton: { text: "Explore Spatial Computing", href: "#capabilities" }
        },
        {
          image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&q=80",
          badgeText: "Enterprise Metaverse",
          badgeColor: "#D4AF37",
          title1: "Immersive",
          title2: "Digital Twins",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#fde08b]",
          description: "Simulate complex industrial environments, conduct remote training in VR, and visualize massive architectural models in real-time 3D.",
          secondaryButton: { text: "Build Your Metaverse", href: "/contact" }
        }
      ]
    },
    stats: [
      { value: "4K/90fps", label: "Render Target" },
      { value: "6 DoF", label: "Spatial Tracking" },
      { value: "100%", label: "Immersion" }
    ],
    philosophy: {
      tagline: "Our Spatial Philosophy",
      title1: "Computing Beyond",
      title2: "the Screen",
      description: [
        "We are moving from an era of 2D screens to 3D spaces. Extended Reality (XR) is no longer a gimmick; it is a fundamental shift in human-computer interaction. We engineer XR experiences that feel incredibly natural, completely eliminating the cognitive friction of traditional interfaces.",
        "Whether rendering hyper-realistic digital twins for industrial training or building lightweight AR filters for marketing campaigns, we focus on high framerates, physics-based rendering, and intuitive spatial UI to prevent motion sickness and maximize immersion."
      ],
      points: [
        { title: "Photorealistic Rendering", subtitle: "Unreal Engine 5 & Unity HDRP" },
        { title: "Zero Motion Sickness", subtitle: "Optimized 90Hz+ framerates" }
      ],
      image1: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80",
      image2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    ecosystem: {
      title1: "Spatial Computing",
      title2: "Capabilities",
      description: "From lightweight WebAR to heavy industrial VR simulations, we possess deep expertise across the entire Extended Reality spectrum.",
      cards: [
        {
          icon: <Glasses className="w-8 h-8" />,
          title: "Virtual Reality (VR) Training",
          description: "Building fully immersive, interactive 3D environments for hazardous compliance training, medical simulations, and complex assembly practice.",
          features: ["Meta Quest / HTC Vive", "Unreal Engine / Unity 3D", "Multiplayer VR Instances"]
        },
        {
          icon: <Smartphone className="w-8 h-8" />,
          title: "Augmented Reality (AR) Apps",
          description: "Overlaying digital data onto the physical world. Perfect for retail 'try-before-you-buy', industrial maintenance overlays, and interactive marketing.",
          features: ["ARKit / ARCore", "Image & Plane Tracking", "LiDAR Depth Sensing"]
        },
        {
          icon: <Hexagon className="w-8 h-8" />,
          title: "WebAR & WebXR",
          description: "Delivering massive 3D experiences directly through the mobile browser without requiring users to download a dedicated app.",
          features: ["Three.js / WebGL", "8th Wall Integration", "Frictionless Access"]
        }
      ]
    },
    security: {
      title1: "Hardware Agnostic.<br/>",
      title2: "Performance Obsessed.",
      description: "Immersive tech requires pushing hardware to its absolute limits. We optimize meshes, textures, and draw calls meticulously to ensure fluid performance across the highly fragmented landscape of XR devices.",
      button: { text: "Review Our Tech Stack", href: "/contact" },
      cards: [
        {
          icon: <Gamepad2 className="w-12 h-12 text-[#00A2FF]" />,
          title: "Cross-Device Compatibility",
          description: "Developing with OpenXR standards to ensure your application runs seamlessly on Meta, Apple Vision Pro, HTC, and Pico devices."
        },
        {
          icon: <Component className="w-12 h-12 text-[#D4AF37]" />,
          title: "Asset Optimization",
          description: "Utilizing advanced retopology, LODs (Levels of Detail), and texture baking to run massive 3D models on mobile chipsets."
        },
        {
          icon: <Eye className="w-12 h-12 text-[#00A2FF]" />,
          title: "Spatial Audio Engineering",
          description: "Implementing ambisonic and binaural audio to trick the brain into pinpointing exactly where a sound is coming from in 3D space."
        },
        {
          icon: <Layers className="w-12 h-12 text-[#D4AF37]" />,
          title: "Cloud Rendering",
          description: "Streaming high-fidelity Unreal Engine graphics from cloud GPUs directly to lightweight standalone headsets to bypass local hardware limits."
        }
      ]
    },
    expertise: {
      title: "Immersive Use Cases",
      description: "Transforming how industries visualize data and train their workforce.",
      cards: [
        {
          image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
          title: "Industrial Digital Twins",
          description: "Replicating entire oil rigs or factories in 3D, mapped to live IoT data so engineers can inspect facilities remotely in VR."
        },
        {
          image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80",
          title: "Medical & Surgical Simulators",
          description: "Allowing surgeons to practice complex, high-risk procedures in a consequence-free, haptic-enabled VR environment."
        },
        {
          image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80",
          title: "Retail Product Visualizers",
          description: "Letting customers place a 3D model of a couch in their living room, or see how a pair of shoes looks on their feet using mobile AR."
        }
      ]
    },
    process: {
      title1: "Our Spatial Engineering",
      title2: "Process",
      steps: [
        { title: "XR Strategy & Storyboarding", description: "Defining the business goal (training vs marketing) and storyboarding the user's journey through the 3D space." },
        { title: "3D Asset Creation", description: "Our technical artists model, rig, and texture the 3D environments and characters, optimizing them for real-time rendering." },
        { title: "Interaction Design", description: "Programming the physics, grab mechanics, spatial UI, and locomotion (teleportation/smooth movement) within Unity or Unreal." },
        { title: "Hardware Integration", description: "Deploying the build to the target headsets and fine-tuning controller tracking, hand-tracking, and haptic feedback." },
        { title: "Performance Profiling", description: "Relentlessly optimizing draw calls, lighting bakes, and poly counts to guarantee a locked 90fps frame rate to prevent simulator sickness." },
        { title: "App Store Publishing", description: "Navigating the strict QA requirements of the Meta Quest Store, Apple App Store, and enterprise MDM deployments." }
      ]
    },
    cta: {
      subtitle: "Enter The Metaverse",
      title1: "Ready to build",
      title2: "the impossible?",
      description: "Partner with our spatial computing experts to build an AR/VR experience that defies reality.",
      button1: { text: "Schedule XR Consultation", href: "/contact" },
      button2: { text: "View VR Case Studies", href: "/contact" }
    }
  };

  return <ServiceTemplate {...config} />;
}
