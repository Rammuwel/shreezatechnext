export const filters = [
  'All', 
  'E-Commerce', 
  'Education', 
  'Food & Hospitality', 
  'SaaS', 
  'FinTech', 
  'Healthcare', 
  'Web App', 
  'Mobile App'
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    client: "Retail Client",
    category: "E-Commerce",
    description: "A complete online store featuring secure checkout, user accounts, and inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    technologies: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    challenge: "The client was struggling with a legacy system that crashed during high traffic and had a confusing checkout process, leading to a high cart abandonment rate.",
    solution: "We engineered a highly scalable, fast, and secure e-commerce application built on Next.js to handle high traffic volumes and provide a seamless checkout experience.",
    results: [
      "Reduced cart abandonment by 40%",
      "Achieved 99.99% uptime during peak sales",
      "Increased mobile conversion rates by 65%"
    ]
  },
  {
    id: 2,
    title: "Learning Management System",
    client: "Education Provider",
    category: "Education",
    description: "An online learning platform with video hosting, student progress tracking, and automated grading.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
    technologies: ["MERN Stack", "WebRTC", "AWS", "Socket.io"],
    challenge: "The education provider needed a centralized platform to manage thousands of students, host heavy video content, and track real-time progress without latency issues.",
    solution: "We built a comprehensive LMS platform featuring live WebRTC classes, automated grading algorithms, student progress tracking, and interactive video modules.",
    results: [
      "Supported over 10,000 concurrent active users",
      "Reduced administrative workload by 50%",
      "Increased student engagement metrics by 30%"
    ]
  },
  {
    id: 3,
    title: "Food Delivery App",
    client: "Local Restaurant Chain",
    category: "Food & Hospitality",
    description: "A mobile application for ordering food, featuring real-time GPS tracking and payment integration.",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=2071&auto=format&fit=crop",
    technologies: ["React Native", "Node.js", "Google Maps API", "Firebase"],
    challenge: "The restaurant chain relied on third-party aggregators, paying high commissions and losing direct connection with their customer base.",
    solution: "We developed a real-time white-label food delivery application with live GPS tracking, seamless payment integration, and a dedicated dashboard for restaurant partners.",
    results: [
      "Saved 25% in third-party commission fees",
      "Processed 5,000+ orders in the first month",
      "Achieved a 4.8/5 App Store rating"
    ]
  },
  {
    id: 4,
    title: "Online Community Platform",
    client: "Skool Clone Project",
    category: "Education",
    description: "A community platform for hosting courses, discussion boards, and managing member subscriptions.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Vue.js", "Express", "MongoDB", "GraphQL"],
    challenge: "Creators needed a unified space to host their paid communities and courses without forcing users to jump between multiple disjointed tools.",
    solution: "We designed a hybrid community platform and course hosting website tailored to maximize student engagement and facilitate seamless interactions in one place.",
    results: [
      "Grew active community memberships by 200%",
      "Increased course completion rates to 85%",
      "Streamlined recurring subscription management"
    ]
  },
  {
    id: 5,
    title: "Cafe & Restaurant Website",
    client: "Boutique Coffee Shop",
    category: "Food & Hospitality",
    description: "A digital storefront for a local cafe, including interactive menus and an online ordering system.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    technologies: ["Next.js", "Shopify API", "Framer Motion"],
    challenge: "A boutique cafe wanted to digitize their operations to support order-ahead functionality while maintaining their aesthetic brand identity.",
    solution: "We created a modern, highly aesthetic website for the cafe featuring a custom online ordering system, loyalty program integration, and smooth interactive menus.",
    results: [
      "Boosted daily order volume by 15%",
      "Decreased in-store wait times by 10 minutes on average",
      "Built a loyal customer base of 2,000+ members"
    ]
  },
  {
    id: 6,
    title: "Hostel Booking System",
    client: "Accommodation Provider",
    category: "Food & Hospitality",
    description: "A booking management system allowing travelers to reserve beds, view room availability, and make payments.",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
    technologies: ["React", "PostgreSQL", "Prisma", "Docker"],
    challenge: "The hostel was overbooking beds due to disjointed software and manual calendar management, leading to poor customer experiences.",
    solution: "We implemented a responsive hostel management and booking platform allowing backpackers to reserve beds dynamically while syncing inventory across all channels.",
    results: [
      "Eliminated double-booking incidents entirely",
      "Increased direct website bookings by 40%",
      "Saved staff 15 hours per week on manual admin tasks"
    ]
  },
  {
    id: 7,
    title: "B2B CRM & Analytics Dashboard",
    client: "Enterprise Solutions Inc.",
    category: "SaaS",
    description: "A comprehensive SaaS platform for businesses to track leads, manage customer relationships, and analyze sales data in real-time.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    technologies: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],
    challenge: "The enterprise client lacked visibility into their sales pipeline and customer interactions, leading to lost leads and inefficient sales cycles.",
    solution: "We architected a comprehensive CRM SaaS platform equipped with real-time analytics, automated lead tracking, and customizable reporting dashboards.",
    results: [
      "Improved sales team efficiency by 35%",
      "Increased lead conversion rate by 22%",
      "Provided 100% visibility into pipeline metrics"
    ]
  },
  {
    id: 8,
    title: "Personal Finance & Investment App",
    client: "FinTech Startup",
    category: "FinTech",
    description: "A secure financial application that aggregates bank accounts, tracks spending habits, and offers AI-driven investment advice.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
    technologies: ["React Native", "Node.js", "Plaid API", "AWS KMS"],
    challenge: "Users needed a secure, intuitive way to consolidate multiple bank accounts and receive actionable insights on their spending habits.",
    solution: "We developed a bank-grade secure financial application that seamlessly aggregates accounts using Plaid and offers AI-driven investment advice and budget tracking.",
    results: [
      "Successfully acquired 50,000+ active users",
      "Maintained zero security breaches",
      "Helped users save an average of $300/month"
    ]
  },
  {
    id: 9,
    title: "Telemedicine Consultation Portal",
    client: "HealthTech Network",
    category: "Healthcare",
    description: "A HIPAA-compliant healthcare platform enabling secure video consultations, digital prescriptions, and EHR integration.",
    image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5eb4?q=80&w=2069&auto=format&fit=crop",
    technologies: ["Vue.js", "Python", "WebRTC", "Google Cloud"],
    challenge: "A regional healthcare provider needed a secure, HIPAA-compliant way to conduct remote visits without relying on disjointed third-party tools.",
    solution: "We delivered a custom telemedicine portal featuring secure WebRTC video, electronic health record (EHR) integration, and digital prescription routing.",
    results: [
      "Facilitated over 100,000 secure remote consultations",
      "Reduced patient no-show rates by 30%",
      "Ensured 100% HIPAA compliance"
    ]
  },
  {
    id: 10,
    title: "Enterprise Resource Planning (ERP)",
    client: "Manufacturing Co.",
    category: "Web App",
    description: "A robust internal web application for managing supply chain, employee payroll, and real-time inventory tracking.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Angular", "Node.js", "MySQL", "AWS"],
    challenge: "The manufacturing company was losing money due to inefficient supply chain tracking and siloed departmental data.",
    solution: "We built a centralized ERP web application for managing the entire supply chain, employee payroll, and providing real-time, accurate inventory tracking.",
    results: [
      "Reduced inventory holding costs by 18%",
      "Streamlined inter-departmental communication",
      "Accelerated the monthly financial close process by 5 days"
    ]
  },
  {
    id: 11,
    title: "Real Estate Property Portal",
    client: "Urban Estates",
    category: "Web App",
    description: "A dynamic property listing web app featuring advanced search filters, virtual tours, and automated agent scheduling.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    technologies: ["React", "Django", "PostgreSQL", "Mapbox"],
    challenge: "A real estate agency needed a modern portal to showcase properties with high-resolution media and advanced map-based search capabilities.",
    solution: "We engineered a dynamic property listing web app featuring interactive Mapbox integration, advanced search filters, 3D virtual tours, and automated agent scheduling.",
    results: [
      "Increased property viewing requests by 45%",
      "Reduced average time-on-market for listings by 12 days",
      "Improved website dwell time by 300%"
    ]
  },
  {
    id: 12,
    title: "Fitness & Wellness Tracker",
    client: "FitLife Global",
    category: "Mobile App",
    description: "A cross-platform mobile application providing personalized workout plans, diet tracking, and wearable device integration.",
    image: "https://images.unsplash.com/photo-1526506114868-45a7d7756f10?q=80&w=2069&auto=format&fit=crop",
    technologies: ["Flutter", "Firebase", "Apple HealthKit", "Google Fit"],
    challenge: "The client wanted to unify the fragmented fitness app market by combining workout planning, diet tracking, and wearable sync into a single cohesive experience.",
    solution: "We created a sleek, cross-platform mobile application utilizing Flutter that seamlessly integrates with Apple HealthKit and Google Fit for real-time biometric tracking.",
    results: [
      "Featured on both major app stores in the Health category",
      "Achieved a 60% Day-30 user retention rate",
      "Processed over 1M logged workouts"
    ]
  },
  {
    id: 13,
    title: "Social Networking Platform",
    client: "ConnectMe Inc.",
    category: "Mobile App",
    description: "A highly interactive mobile social network featuring real-time messaging, media sharing, and community groups.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    technologies: ["React Native", "GraphQL", "Node.js", "AWS S3"],
    challenge: "The startup required a highly scalable architecture to support rapid user growth and real-time interactive features like messaging without lag.",
    solution: "We deployed a highly interactive mobile social network backed by GraphQL and Node.js, featuring optimized media delivery via AWS S3 and real-time chat infrastructure.",
    results: [
      "Supported 100,000+ daily active users without downtime",
      "Reduced media load times by 40%",
      "Achieved high user engagement with 45 mins average daily session"
    ]
  }
];
