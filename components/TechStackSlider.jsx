"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const techStack = [
  // Languages
  { name: "Java", badge: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" },
  { name: "Python", badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
  { name: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" },
  { name: "TypeScript", badge: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" },
  { name: "C++", badge: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" },
  
  // Web Frameworks & Backend
  { name: "Spring Boot", badge: "https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" },
  { name: "Spring MVC", badge: "https://img.shields.io/badge/Spring_MVC-6DB33F?style=for-the-badge&logo=spring&logoColor=white" },
  { name: "Spring Security", badge: "https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white" },
  { name: "Hibernate", badge: "https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white" },
  { name: "FastAPI", badge: "https://img.shields.io/badge/fastapi-109989?style=for-the-badge&logo=FASTAPI&logoColor=white" },
  { name: "Flask", badge: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" },
  { name: "REST API", badge: "https://img.shields.io/badge/REST_API-02569B?style=for-the-badge&logo=rest&logoColor=white" },
  
  // Frontend
  { name: "React", badge: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
  { name: "Next.js", badge: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" },
  { name: "Tailwind CSS", badge: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" },
  { name: "HTML5", badge: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
  { name: "CSS3", badge: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
  { name: "Bootstrap", badge: "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" },
  
  // Databases & ORM
  { name: "MySQL", badge: "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" },
  { name: "PostgreSQL", badge: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" },
  { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" },
  { name: "Supabase", badge: "https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" },
  { name: "JDBC", badge: "https://img.shields.io/badge/JDBC-007396?style=for-the-badge&logo=java&logoColor=white" },
  { name: "JPA", badge: "https://img.shields.io/badge/JPA-59666C?style=for-the-badge&logo=hibernate&logoColor=white" },
  
  // AI/ML & Data Science
  { name: "TensorFlow", badge: "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" },
  { name: "PyTorch", badge: "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" },
  { name: "scikit-learn", badge: "https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" },
  { name: "MLflow", badge: "https://img.shields.io/badge/MLflow-0194E2?style=for-the-badge&logo=MLflow&logoColor=white" },
  { name: "pandas", badge: "https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" },
  { name: "numpy", badge: "https://img.shields.io/badge/numpy-013243?style=for-the-badge&logo=numpy&logoColor=white" },
  { name: "Matplotlib", badge: "https://img.shields.io/badge/Matplotlib-ffffff?style=for-the-badge&logo=Matplotlib&logoColor=black" },
  { name: "NLP", badge: "https://img.shields.io/badge/NLP-3776AB?style=for-the-badge&logo=python&logoColor=white" },
  { name: "LLM & RAG", badge: "https://img.shields.io/badge/LLM%20%26%20RAG-412991?style=for-the-badge&logo=openai&logoColor=white" },
  
  // DevOps, Tools & Cloud
  { name: "Docker", badge: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
  { name: "Kubernetes", badge: "https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" },
  { name: "Jenkins", badge: "https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white" },
  { name: "AWS", badge: "https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" },
  { name: "GIT", badge: "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" },
  { name: "GitHub", badge: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" },
  { name: "Maven", badge: "https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white" },
  { name: "Postman", badge: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
  { name: "Linux", badge: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" },
  
  // Payment & Integration
  { name: "Stripe", badge: "https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white" },
  { name: "Razorpay", badge: "https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=white" },
  { name: "Firebase", badge: "https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" },
  { name: "WebSocket", badge: "https://img.shields.io/badge/WebSocket-010101?style=for-the-badge&logo=socketdotio&logoColor=white" },
  { name: "JWT", badge: "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" },
  
  // Design & Methodologies
  { name: "Figma", badge: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" },
  { name: "System Design", badge: "https://img.shields.io/badge/System%20Design-0052CC?style=for-the-badge" },
  { name: "Microservices", badge: "https://img.shields.io/badge/Microservices-2496ED?style=for-the-badge" },
  { name: "Agile/SDLC", badge: "https://img.shields.io/badge/Agile%2FSDLC-47A248?style=for-the-badge" },
  { name: "CI/CD", badge: "https://img.shields.io/badge/CI%2FCD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" },
  { name: "OOP", badge: "https://img.shields.io/badge/OOP-007396?style=for-the-badge&logo=java&logoColor=white" },
];

const TechStackSlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  // Split into two rows
  const halfLength = Math.ceil(techStack.length / 2);
  const topRow = techStack.slice(0, halfLength);
  const bottomRow = techStack.slice(halfLength);
  
  // Duplicate for seamless loop
  const duplicatedTopRow = [...topRow, ...topRow, ...topRow];
  const duplicatedBottomRow = [...bottomRow, ...bottomRow, ...bottomRow];

  return (
    <div className="w-full py-12 overflow-hidden relative">
      {/* Background with border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-charcoal/20 to-primary" />
      
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-steel to-transparent" />
      
      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-steel to-transparent" />

      {/* Content */}
      <div className="relative">
        {/* Title */}
        <div className="container mx-auto mb-8">
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-accent" />
            <h3 className="text-accent text-base font-bold tracking-widest uppercase">
              Tech Stack
            </h3>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-accent" />
          </div>
        </div>

        {/* Scrolling container - Top row (Left to Right) */}
        <div 
          className="relative h-10 mb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10 pointer-events-none" />
          
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-primary via-primary/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling content - Left to Right */}
          <motion.div
            className="flex gap-4 items-center h-full"
            animate={{
              x: [0, -140 * topRow.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: isPaused ? 100 : 50,
                ease: "linear",
              },
            }}
          >
            {duplicatedTopRow.map((tech, index) => (
              <div
                key={`tech-top-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <img
                  src={tech.badge}
                  alt={tech.name}
                  className="h-7 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scrolling container - Bottom row (Right to Left) */}
        <div 
          className="relative h-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10 pointer-events-none" />
          
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-primary via-primary/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling content - Right to Left */}
          <motion.div
            className="flex gap-4 items-center h-full"
            animate={{
              x: [-140 * bottomRow.length, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: isPaused ? 100 : 50,
                ease: "linear",
              },
            }}
          >
            {duplicatedBottomRow.map((tech, index) => (
              <div
                key={`tech-bottom-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <img
                  src={tech.badge}
                  alt={tech.name}
                  className="h-7 transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hover indicator */}
        {isPaused && (
          <div className="text-center mt-6">
            <span className="text-steel text-xs uppercase tracking-wider opacity-50">
              🐌 Slow Mode
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechStackSlider;
