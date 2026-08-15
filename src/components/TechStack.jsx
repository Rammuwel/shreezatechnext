"use client";
import React, { useState } from 'react';

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('Frontend');

  const categories = [
    'Frontend',
    'Backend',
    'Mobile App Development',
    'Database',
    'Cloud & DevOps'
  ];

  const technologies = {
    'Frontend': [
      { name: 'React', icon: 'react/react-original.svg' },
      { name: 'Next.js', icon: 'nextjs/nextjs-original.svg', invertDark: true },
      { name: 'Vue.js', icon: 'vuejs/vuejs-original.svg' },
      { name: 'Angular', icon: 'angularjs/angularjs-original.svg' },
      { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
      { name: 'Svelte', icon: 'svelte/svelte-original.svg' },
      { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original.svg' },
      { name: 'HTML5', icon: 'html5/html5-original.svg' },
      { name: 'CSS3', icon: 'css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'javascript/javascript-original.svg' }
    ],
    'Backend': [
      { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
      { name: 'Laravel', icon: 'laravel/laravel-original.svg' },
      { name: 'Python', icon: 'python/python-original.svg' },
      { name: 'Django', icon: 'django/django-plain.svg', invertDark: true },
      { name: 'PHP', icon: 'php/php-original.svg' },
      { name: 'Express.js', icon: 'express/express-original.svg', invertDark: true },
      { name: 'Java', icon: 'java/java-original.svg' },
      { name: '.NET', icon: 'dot-net/dot-net-original.svg' },
      { name: 'Spring Boot', icon: 'spring/spring-original.svg' },
      { name: 'Go', icon: 'go/go-original.svg' },
      { name: 'Ruby on Rails', icon: 'rails/rails-plain.svg' },
      { name: 'NestJS', icon: 'nestjs/nestjs-original.svg' },
      { name: 'GraphQL', icon: 'graphql/graphql-plain.svg' }
    ],
    'Mobile App Development': [
      { name: 'Flutter', icon: 'flutter/flutter-original.svg' },
      { name: 'React Native', icon: 'react/react-original.svg' },
      { name: 'Android', icon: 'android/android-original.svg' },
      { name: 'iOS', icon: 'apple/apple-original.svg', invertDark: true },
      { name: 'Swift', icon: 'swift/swift-original.svg' },
      { name: 'Kotlin', icon: 'kotlin/kotlin-original.svg' },
      { name: 'Firebase', icon: 'firebase/firebase-plain.svg' }
    ],
    'Database': [
      { name: 'MySQL', icon: 'mysql/mysql-original.svg' },
      { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
      { name: 'Firebase', icon: 'firebase/firebase-plain.svg' },
      { name: 'Redis', icon: 'redis/redis-original.svg' },
      { name: 'SQL Server', icon: 'microsoftsqlserver/microsoftsqlserver-plain.svg' },
      { name: 'SQLite', icon: 'sqlite/sqlite-original.svg' }
    ],
    'Cloud & DevOps': [
      { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original-wordmark.svg', invertDark: true },
      { name: 'Azure', icon: 'azure/azure-original.svg' },
      { name: 'Google Cloud', icon: 'googlecloud/googlecloud-original.svg' },
      { name: 'Docker', icon: 'docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'kubernetes/kubernetes-plain.svg' },
      { name: 'GitLab', icon: 'gitlab/gitlab-original.svg' },
      { name: 'Jenkins', icon: 'jenkins/jenkins-original.svg' },
      { name: 'Terraform', icon: 'terraform/terraform-original.svg' },
      { name: 'GitHub', icon: 'github/github-original.svg', invertDark: true }
    ]
  };

  return (
    <section className="py-24 bg-[#040026] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0A3A7A] rounded-full mix-blend-screen filter blur-[150px] opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AF37] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
      
      <div className="max-w-[1300px] mx-auto relative z-10 px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h4 className="text-sm font-semibold text-[#D4AF37] uppercase tracking-widest mb-4">Our Technology Stack</h4>
          <h2 className="text-[36px] md:text-[42px] font-bold text-white mb-6">Powered by Enterprise Technologies</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
             We leverage a massive ecosystem of modern frameworks, specialized tools, and legacy heavyweights to build future-proof digital platforms.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 border ${
                activeTab === cat 
                  ? 'bg-[#D4AF37] text-[#040026] border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.4)]' 
                  : 'bg-transparent text-gray-400 border-gray-700 hover:border-[#D4AF37] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tab Content (Grid of Cards with Real Logos) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {technologies[activeTab].map((tech, index) => (
            <div 
              key={tech.name}
              className="flex flex-col items-center justify-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 hover:-translate-y-2 group"
              style={{ animation: `fadeIn 0.5s ease forwards ${index * 0.05}s`, opacity: 0 }}
            >
              <div className="h-16 w-16 flex items-center justify-center relative">
                {/* Fallback glow effect */}
                <div className="absolute inset-0 bg-white/20 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}`} 
                  alt={tech.name}
                  className={`max-h-full max-w-full relative z-10 transition-transform duration-300 group-hover:scale-110 ${tech.invertDark ? 'brightness-0 invert' : ''}`}
                />
              </div>
              <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors text-center">{tech.name}</span>
            </div>
          ))}
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
}
