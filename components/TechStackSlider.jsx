"use client";

import { motion } from "framer-motion";
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
  { icon: <SiFlask />, name: "Flask", color: "#000000" },
  { icon: <SiSpringboot />, name: "Spring Boot", color: "#6DB33F" },
  { icon: <FaReact />, name: "React", color: "#61DAFB" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#000000" },
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
  { icon: <FaGithub />, name: "GitHub", color: "#181717" },
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
  // Duplicate the array for seamless infinite scroll
  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <div className="w-full py-12 overflow-hidden bg-gradient-to-r from-primary via-charcoal/30 to-primary">
      <div className="container mx-auto mb-6">
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-steel" />
          <h3 className="text-steel text-sm font-semibold tracking-wider uppercase">
            Tech Stack
          </h3>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-steel" />
        </div>
      </div>

      {/* Scrolling container */}
      <div className="relative">
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        
        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        {/* Scrolling content - Left to Right */}
        <motion.div
          className="flex gap-8 mb-6"
          animate={{
            x: [0, -50 * techStack.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedTechStack.map((tech, index) => (
            <div
              key={`tech-1-${index}`}
              className="flex-shrink-0 group"
              style={{ width: "80px" }}
            >
              <div className="relative">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center
                  bg-charcoal/50 border border-steel/20
                  group-hover:border-steel/60 group-hover:bg-charcoal
                  transition-all duration-300 group-hover:scale-110
                  shadow-lg group-hover:shadow-2xl"
                  style={{
                    boxShadow: `0 0 20px ${tech.color}15`,
                  }}
                >
                  <div
                    className="text-3xl transition-all duration-300"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </div>
                </div>
                
                {/* Tooltip on hover */}
                <div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  pointer-events-none whitespace-nowrap"
                >
                  <div
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={{
                      backgroundColor: tech.color,
                      color: "#ffffff",
                    }}
                  >
                    {tech.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scrolling content - Right to Left (opposite direction) */}
        <motion.div
          className="flex gap-8"
          animate={{
            x: [-50 * techStack.length, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {duplicatedTechStack.map((tech, index) => (
            <div
              key={`tech-2-${index}`}
              className="flex-shrink-0 group"
              style={{ width: "80px" }}
            >
              <div className="relative">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center
                  bg-charcoal/50 border border-steel/20
                  group-hover:border-steel/60 group-hover:bg-charcoal
                  transition-all duration-300 group-hover:scale-110
                  shadow-lg group-hover:shadow-2xl"
                  style={{
                    boxShadow: `0 0 20px ${tech.color}15`,
                  }}
                >
                  <div
                    className="text-3xl transition-all duration-300"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </div>
                </div>
                
                {/* Tooltip on hover */}
                <div
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  pointer-events-none whitespace-nowrap z-20"
                >
                  <div
                    className="px-2 py-1 rounded text-xs font-medium"
                    style={{
                      backgroundColor: tech.color,
                      color: "#ffffff",
                    }}
                  >
                    {tech.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStackSlider;
