"use client";
import React from 'react';
import ServiceTemplate from '../../../components/ServiceTemplate';
import { Cpu, Power, Zap, Crosshair, Wrench, Settings, Brain } from 'lucide-react';

export default function RoboticsPage() {
  const config = {
    breadcrumb: {
      label: 'Robotics Engineering',
      href: '/services/robotics'
    },
    hero: {
      slides: [
        {
          image: "/images/robotics_hero.jpg",
          badgeText: "Autonomous Systems",
          badgeColor: "#00A2FF",
          title1: "Advanced",
          title2: "Robotics Engineering",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#00A2FF] to-[#00f2fe]",
          description: "We engineer precision robotics and automated control systems that enhance physical operations, ensuring maximum safety and operational throughput.",
          primaryButton: { text: "Automate Operations", href: "/contact-us" }
        },
        {
          image: "/images/hero-slide-4.jpg",
          badgeText: "Industrial Automation",
          badgeColor: "#ffb916",
          title1: "Precision",
          title2: "Control Systems",
          title2Gradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#ffb916] to-[#fde08b]",
          description: "Integrating robotic arms, AGVs, and computer vision to streamline heavy manufacturing and complex logistical environments.",
          secondaryButton: { text: "View Capabilities", href: "#capabilities" }
        }
      ]
    },
    stats: [
      { value: "5x", label: "Throughput Increase" },
      { value: "0.1mm", label: "Motion Precision" },
      { value: "24/7", label: "Continuous Operation" }
    ],
    philosophy: {
      tagline: "Our Robotics Philosophy",
      title1: "Seamless Human-Machine",
      title2: "Collaboration",
      description: [
        "The future of industry is collaborative. We don't build robots to replace the human element; we build them to augment it. By taking over dangerous, physically taxing, or highly repetitive tasks, our systems protect your workforce.",
        "Our engineering focuses heavily on robust control loops, computer vision integration, and failsafe mechanisms to ensure that every robotic deployment operates safely alongside human counterparts."
      ],
      points: [
        { title: "Uncompromising Safety", subtitle: "Lidar and visual collision avoidance" },
        { title: "High-Precision", subtitle: "Sub-millimeter actuation accuracy" }
      ],
      image1: "/images/hero-slide-3.jpg",
      image2: "/images/about-tech-team.jpg"
    },
    ecosystem: {
      title1: "Robotics Engineering",
      title2: "Expertise",
      description: "From low-level motor kinematics to high-level path planning and computer vision, we deliver full-stack robotic integration.",
      cards: [
        {
          icon: <Brain className="w-8 h-8" />,
          title: "Computer Vision & Perception",
          description: "Implementing advanced cameras and LiDAR to allow robots to 'see' and interpret complex, unstructured environments.",
          features: ["OpenCV / YOLOv8", "3D Spatial Mapping", "Object Recognition"]
        },
        {
          icon: <Settings className="w-8 h-8" />,
          title: "Kinematics & Control",
          description: "Developing the complex mathematical models and PID control loops required for smooth, precise, and fast robotic articulation.",
          features: ["ROS / ROS2", "Inverse Kinematics", "Motion Planning"]
        },
        {
          icon: <Wrench className="w-8 h-8" />,
          title: "Hardware Integration",
          description: "Interfacing the software stack with PLCs, servos, stepper motors, and end-of-arm tooling for seamless physical execution.",
          features: ["Siemens / Allen-Bradley PLCs", "Industrial Protocols (Modbus)", "Actuator Control"]
        }
      ]
    },
    security: {
      title1: "Industrial.<br/>",
      title2: "Failsafe.",
      description: "When dealing with heavy machinery, software bugs can cause physical damage. We build multi-layered safety systems into both the software and hardware to guarantee absolute reliability.",
      button: { text: "Learn About Our Safety Standards", href: "/contact-us" },
      cards: [
        {
          icon: <Crosshair className="w-12 h-12 text-[#00A2FF]" />,
          title: "Redundant Sensors",
          description: "Fusing data from multiple sensor types (Vision, Lidar, Ultrasonic) so the robot never operates blind."
        },
        {
          icon: <Power className="w-12 h-12 text-[#ffb916]" />,
          title: "Hardware E-Stops",
          description: "Direct electrical cut-offs that bypass all software logic to immediately halt power in an emergency."
        },
        {
          icon: <Cpu className="w-12 h-12 text-[#00A2FF]" />,
          title: "Real-Time OS (RTOS)",
          description: "Ensuring critical control loops run with guaranteed timing, preventing unpredictable physical behavior."
        },
        {
          icon: <Zap className="w-12 h-12 text-[#ffb916]" />,
          title: "Predictive Maintenance",
          description: "Monitoring motor torque and vibration to predict physical component failure before it happens."
        }
      ]
    },
    expertise: {
      title: "Robotic Applications",
      description: "We design automated systems that revolutionize productivity across various physical industries.",
      cards: [
        {
          image: "/images/hero-slide-4.jpg",
          title: "Manufacturing & Assembly",
          description: "High-speed 6-axis robotic arms for welding, painting, and intricate electronic PCB assembly."
        },
        {
          image: "/images/discover-tech-2.jpg",
          title: "Warehouse Logistics (AGVs)",
          description: "Automated Guided Vehicles and sorting robots that navigate warehouses autonomously to move heavy pallets."
        },
        {
          image: "/images/hero-slide-3.jpg",
          title: "Agricultural Robotics",
          description: "Drones and ground-based rovers equipped with multispectral cameras for automated crop monitoring and harvesting."
        }
      ]
    },
    process: {
      title1: "Our Engineering",
      title2: "Process",
      steps: [
        { title: "Site & Workflow Analysis", description: "Visiting your facility to understand the physical environment, bottlenecks, and safety requirements." },
        { title: "Kinematic Simulation", description: "Building a 3D digital twin of the proposed robot to simulate its reach, speed, and potential collision points." },
        { title: "Hardware Procurement", description: "Sourcing the industrial-grade chassis, motors, sensors, and compute units required for the specific payload and environment." },
        { title: "Software Integration (ROS)", description: "Writing the nodes to connect the perception algorithms (cameras) with the motion planning algorithms." },
        { title: "Sandbox Testing", description: "Testing the robot extensively in a controlled environment to fine-tune the PID controllers and ensure safety limits." },
        { title: "On-Site Deployment", description: "Installing the system at your facility, mapping the environment, and training your staff on operation and maintenance." }
      ]
    },
    cta: {
      subtitle: "Transform Physical Operations",
      title1: "Ready to deploy",
      title2: "autonomous systems?",
      description: "Let's engineer robotic solutions that drastically improve your throughput, consistency, and workplace safety.",
      button1: { text: "Schedule Engineering Consultation", href: "/contact-us" },
      button2: { text: "View Industrial Implementations", href: "/contact-us" }
    }
  };

  return <ServiceTemplate {...config} />;
}

