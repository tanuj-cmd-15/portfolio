"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGit,
  FaDocker,
  FaAws,
  FaLinux,
  FaFigma,
} from "react-icons/fa";
import {
  SiPytorch,
  SiOpencv,
  SiScikitlearn,
  SiFastapi,
  SiFlask,
  SiSpringboot,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiJavascript,
  SiCplusplus,
  SiGooglecloud,
  SiTensorflow,
  SiKeras,
  SiPandas,
  SiNumpy,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiJenkins,
  SiGraphql,
  SiTypescript,
} from "react-icons/si";

const techStack = [
  // Languages
  { icon: <FaPython />, name: "Python", color: "#3776AB" },
  { icon: <FaJava />, name: "Java", color: "#007396" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { icon: <SiCplusplus />, name: "C++", color: "#00599C" },
  
  // AI/ML
  { icon: <SiPytorch />, name: "PyTorch", color: "#EE4C2C" },
  { icon: <SiTensorflow />, name: "TensorFlow", color: "#FF6F00" },
  { icon: <SiScikitlearn />, name: "Scikit-learn", color: "#F7931E" },
  { icon: <SiOpencv />, name: "OpenCV", color: "#5C3EE8" },
  { icon: <SiKeras />, name: "Keras", color: "#D00000" },
  { icon: <SiPandas />, name: "Pandas", color: "#150458" },
  { icon: <SiNumpy />, name: "NumPy", color: "#013243" },
  
  // Web Frameworks
  { icon: <SiFastapi />, name: "FastAPI", color: "#009688" },
  { icon: <SiFlask />, name: "Flask", color: "#FFFFFF" },
  { icon: <SiSpringboot />, name: "Spring Boot", color: "#6DB33F" },
  { icon: <FaReact />, name: "React", color: "#61DAFB" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#FFFFFF" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: <SiGraphql />, name: "GraphQL", color: "#E10098" },
  
  // Databases
  { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiRedis />, name: "Redis", color: "#DC382D" },
  
  // Tools & Cloud
  { icon: <FaGit />, name: "Git", color: "#F05032" },
  { icon: <FaGithub />, name: "GitHub", color: "#FFFFFF" },
  { icon: <FaDocker />, name: "Docker", color: "#2496ED" },
  { icon: <SiKubernetes />, name: "Kubernetes", color: "#326CE5" },
  { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
  { icon: <SiJenkins />, name: "Jenkins", color: "#D24939" },
  { icon: <FaAws />, name: "AWS", color: "#FF9900" },
  { icon: <SiGooglecloud />, name: "GCP", color: "#4285F4" },
  { icon: <FaLinux />, name: "Linux", color: "#FCC624" },
  { icon: <FaFigma />, name: "Figma", color: "#F24E1E" },
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
          className="relative h-24"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10 pointer-events-none" />
          
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-primary via-primary/80 to-transparent z-10 pointer-events-none" />

          {/* Scrolling content */}
          <motion.div
            className="flex gap-12 items-center h-full"
            animate={{
              x: isPaused ? undefined : [0, -100 * techStack.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {duplicatedTechStack.map((tech, index) => (
              <div
                key={`tech-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="relative flex items-center gap-4">
                  {/* Icon container */}
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center
                    bg-charcoal/60 border-2 border-steel/30
                    group-hover:border-[2px] group-hover:bg-charcoal
                    transition-all duration-300 group-hover:scale-125
                    shadow-md group-hover:shadow-xl relative z-10"
                    style={{
                      borderColor: tech.color,
                      boxShadow: `0 0 30px ${tech.color}30`,
                    }}
                  >
                    <div
                      className="text-3xl transition-all duration-300 group-hover:scale-110"
                      style={{ color: tech.color }}
                    >
                      {tech.icon}
                    </div>
                  </div>
                  
                  {/* Name label (always visible) */}
                  <div
                    className="opacity-70 group-hover:opacity-100 transition-opacity duration-300
                    text-sm font-semibold whitespace-nowrap tracking-wide"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </div>

                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"
                    style={{ backgroundColor: tech.color }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pause indicator (optional) */}
        {isPaused && (
          <div className="text-center mt-4">
            <span className="text-steel text-xs uppercase tracking-wider">
              ⏸ Paused
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechStackSlider;
