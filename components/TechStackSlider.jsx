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
            className="flex gap-6 items-center h-full"
            animate={{
              x: [0, -85 * techStack.length],
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
                {/* Square box with icon */}
                <div
                  className="w-20 h-20 rounded-lg flex items-center justify-center
                  bg-charcoal/80 border-2 transition-all duration-300
                  group-hover:bg-charcoal group-hover:scale-110
                  shadow-lg group-hover:shadow-2xl relative"
                  style={{
                    borderColor: tech.color,
                    boxShadow: `0 0 20px ${tech.color}20`,
                  }}
                >
                  <div
                    className="text-4xl transition-all duration-300 group-hover:scale-110"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </div>

                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-lg"
                    style={{ backgroundColor: tech.color }}
                  />
                </div>
                
                {/* Tooltip - only shows on hover */}
                <div
                  className="absolute -bottom-10 left-1/2 transform -translate-x-1/2
                  opacity-0 group-hover:opacity-100 transition-all duration-300
                  pointer-events-none whitespace-nowrap z-20"
                >
                  <div
                    className="px-3 py-1.5 rounded-md text-sm font-bold shadow-xl"
                    style={{
                      backgroundColor: tech.color,
                      color: tech.color === "#FFFFFF" || tech.color === "#F7DF1E" ? "#000000" : "#FFFFFF",
                    }}
                  >
                    {tech.name}
                  </div>
                  {/* Arrow pointing up */}
                  <div
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45"
                    style={{ backgroundColor: tech.color }}
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
