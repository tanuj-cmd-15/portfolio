"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const techStack = [
  // Languages
  { name: "Python", badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
  { name: "Java", badge: "https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" },
  { name: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" },
  { name: "TypeScript", badge: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" },
  { name: "C++", badge: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" },
  
  // AI/ML
  { name: "PyTorch", badge: "https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white" },
  { name: "TensorFlow", badge: "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white" },
  { name: "Scikit-learn", badge: "https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white" },
  { name: "OpenCV", badge: "https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" },
  { name: "Keras", badge: "https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white" },
  { name: "Pandas", badge: "https://img.shields.io/badge/pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" },
  { name: "NumPy", badge: "https://img.shields.io/badge/numpy-013243?style=for-the-badge&logo=numpy&logoColor=white" },
  { name: "Hugging Face", badge: "https://img.shields.io/badge/Hugging%20Face-FFD21E?style=for-the-badge&logo=huggingface&logoColor=000" },
  { name: "Machine Learning", badge: "https://img.shields.io/badge/Machine%20Learning-F9A826?style=for-the-badge" },
  { name: "Deep Learning", badge: "https://img.shields.io/badge/Deep%20Learning-FF4500?style=for-the-badge" },
  
  // Web Frameworks
  { name: "FastAPI", badge: "https://img.shields.io/badge/fastapi-109989?style=for-the-badge&logo=FASTAPI&logoColor=white" },
  { name: "Flask", badge: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" },
  { name: "Spring Boot", badge: "https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" },
  { name: "React", badge: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
  { name: "Next.js", badge: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" },
  { name: "Node.js", badge: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
  { name: "Tailwind CSS", badge: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" },
  { name: "HTML5", badge: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" },
  { name: "CSS3", badge: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" },
  
  // Databases
  { name: "MySQL", badge: "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" },
  { name: "PostgreSQL", badge: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" },
  { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" },
  { name: "Redis", badge: "https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" },
  
  // DevOps & Tools
  { name: "Git", badge: "https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" },
  { name: "GitHub", badge: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" },
  { name: "Docker", badge: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
  { name: "Kubernetes", badge: "https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" },
  { name: "Linux", badge: "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" },
  { name: "Figma", badge: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" },
  { name: "JWT", badge: "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" },
  { name: "Data Science", badge: "https://img.shields.io/badge/Data%20Science-4EA94B?style=for-the-badge" },
];

const TechStackSlider = () => {
  const [isPaused, setIsPaused] = useState(false);
  
  // Duplicate for seamless loop
  const duplicatedTechStack = [...techStack, ...techStack, ...techStack];

  return (
    <div className="w-full py-16 overflow-hidden relative">
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

        {/* Horizontal scrolling container */}
        <div 
          className="relative h-16"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10 pointer-events-none" />
          
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-primary via-primary/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling content */}
          <motion.div
            className="flex gap-6 items-center h-full"
            animate={{
              x: [0, -150 * techStack.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: isPaused ? 120 : 60, // Slower on hover (120s), normal when not (60s)
                ease: "linear",
              },
            }}
          >
            {duplicatedTechStack.map((tech, index) => (
              <div
                key={`tech-${index}`}
                className="flex-shrink-0 group cursor-pointer relative"
              >
                {/* Badge image */}
                <div className="transition-all duration-300 group-hover:scale-110 group-hover:brightness-110">
                  <img
                    src={tech.badge}
                    alt={tech.name}
                    className="h-8 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pause indicator (optional) */}
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
