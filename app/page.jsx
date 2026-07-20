"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaGraduationCap,
  FaCertificate,
  FaTrophy,
} from "react-icons/fa";
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
} from "react-icons/si";
import { BsArrowUpRight, BsArrowDown } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

/* ───────────────────────── DATA ───────────────────────── */

const skills = {
  languages: [
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiCplusplus />, name: "C++" },
  ],
  aiml: [
    { icon: <SiPytorch />, name: "PyTorch" },
    { icon: <SiScikitlearn />, name: "Scikit-learn" },
    { icon: <SiOpencv />, name: "OpenCV" },
    { icon: <span className="text-3xl font-bold">T</span>, name: "Tesseract" },
    { icon: <span className="text-3xl font-bold">L</span>, name: "Librosa" },
    { icon: <span className="text-3xl font-bold">NLP</span>, name: "NLP" },
  ],
  webFrameworks: [
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ],
  tools: [
    { icon: <FaGit />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiGooglecloud />, name: "GCP" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
  ],
};

const projects = [
  {
    num: "01",
    title: "OCR Document Intelligence System",
    description:
      "Developed an end-to-end OCR pipeline utilizing OpenCV for advanced image preprocessing (noise reduction, binarization, deskewing), improving text extraction accuracy by 25% on low-quality scanned documents. Engineered a high-performance backend with FastAPI and optimized PostgreSQL CRUD operations.",
    stack: ["FastAPI", "Tesseract", "OpenCV", "React", "PostgreSQL"],
    github: "https://github.com/tanuj-cmd-15",
    highlights: ["25% accuracy improvement", "Automated document workflows"],
  },
  {
    num: "02",
    title: "Audio Deepfake Detection (SwarParikshak)",
    description:
      "Built a CNN-BiLSTM-Attention model fusing LFCC and Mel-spectrogram features → reduced Equal Error Rate to 0.91% and hit 98.77% validation accuracy. Benchmarked 34,700+ TTS-generated audio files (43.8 hrs, 11 engines) across Marathi, Hindi, and Bengali.",
    stack: ["PyTorch", "Librosa", "Whisper", "Python"],
    github: "https://github.com/tanuj-cmd-15",
    highlights: ["0.91% EER", "98.77% accuracy", "34,700+ samples"],
  },
  {
    num: "03",
    title: "AI-Powered Interview Platform",
    description:
      "Built an AI recruitment platform with LLM-based semantic answer scoring and emotion detection for automated HR and technical interview evaluation. Built a resume-parsing ATS pipeline and JWT-secured REST APIs with WebSocket-based live feedback.",
    stack: ["NLP", "FastAPI", "React", "WebSockets", "SQL"],
    github: "https://github.com/tanuj-cmd-15",
    highlights: [
      "LLM semantic scoring",
      "Real-time WebSocket feedback",
      "JWT authentication",
    ],
  },
];

const education = [
  {
    degree: "M.Tech in Computer & Information Technology",
    institution: "Department Of Technology, SPPU, Pune",
    duration: "June 2026",
    result: "CGPA: 9.15 (Academic Topper)",
    icon: <FaGraduationCap />,
  },
  {
    degree: "B.E. in Information Technology",
    institution: "Dr. D Y Patil College Of Engineering, SPPU, Pune",
    duration: "June 2024",
    result: "CGPA: 8.44",
    icon: <FaGraduationCap />,
  },
];

const certifications = [
  {
    title: "Java Full Stack Development",
    details: "Java, Spring Boot, Hibernate, HTML/CSS/JS, MySQL",
    date: "Oct 2024",
  },
  {
    title: "Google UX Design Specialization",
    details: "Wireframing, Prototyping, UX Research",
    date: "Nov 2022",
  },
];

const achievements = [
  {
    title: "Student Coordinator",
    description:
      "Organized campus hackathons and technical events, handling the planning and logistics for 200+ participants.",
  },
  {
    title: "Academic Lead",
    description:
      "Led project teams for core assignments, managed task distribution and delivered high-quality work by deadlines.",
  },
];

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 84858 33673",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "pawartushar8485@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Pune, Maharashtra - 411007",
  },
];

const aboutInfo = [
  { fieldName: "Name", fieldValue: "Tushar Pawar" },
  { fieldName: "Phone", fieldValue: "+91 84858 33673" },
  { fieldName: "Email", fieldValue: "pawartushar8485@gmail.com" },
  { fieldName: "Location", fieldValue: "Pune, 411007" },
  { fieldName: "Degree", fieldValue: "M.Tech (CGPA 9.15)" },
  { fieldName: "Languages", fieldValue: "English, Marathi, Hindi" },
  { fieldName: "Interests", fieldValue: "Deep Learning, Applied ML" },
  { fieldName: "Status", fieldValue: "Seeking ML/Data roles" },
];

/* ───────────────── ANIMATION VARIANTS ───────────────── */

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px", amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerChild = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px", amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-100px", amount: 0.3 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-100px", amount: 0.3 },
  transition: { duration: 0.7, ease: "easeOut" },
};

/* ────────────────── SECTION COMPONENTS ────────────────── */

/* ── 1. HERO - MINIMAL STYLE WITH PHOTO ── */
const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-24 xl:py-0 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-8">
          {/* Text Content */}
          <div className="text-center xl:text-left order-2 xl:order-none flex-1">
            <span className="text-sm md:text-base text-white/60 uppercase tracking-wider font-light">
              Machine Learning Engineer & Data Scientist
            </span>
            <h1 className="h1 mb-6 mt-4">
              Hello I'm <br />
              <span className="text-white">Tushar Pawar</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/70 text-base md:text-lg font-light leading-relaxed">
              M.Tech candidate specializing in Deep Learning with 98.77% accuracy 
              on 34,700+ sample models. Building production-grade ML pipelines 
              and full-stack applications.
            </p>
            
            {/* Buttons and Social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="#contact">
                <button className="squarespace-btn-primary">
                  Hire Me
                </button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-white/20 flex justify-center items-center text-white text-base hover:border-white/60 hover:bg-white/10 hover:text-white transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── 2. ABOUT ── */
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white text-center mb-6">
            About Me
          </h2>
          <div className="w-24 h-[1px] bg-white/20 mx-auto mb-16" />
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-16">
          {/* Description */}
          <motion.div className="xl:w-1/2" {...fadeInLeft}>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 font-light">
              I'm a passionate M.Tech candidate specializing in Deep
              Learning and applied ML. With hands-on experience in building and
              evaluating CNN-BiLSTM-Attention architectures, I thrive on solving
              complex problems with data-driven approaches.
            </p>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
              Proficient in Python, PyTorch, SQL, and building end-to-end ML 
              pipelines from data preprocessing through model evaluation. 
              Currently seeking Machine Learning Engineer, Data Scientist, or 
              Data Engineer roles.
            </p>
          </motion.div>

          {/* Info Grid */}
          <motion.div className="xl:w-1/2" {...fadeInRight}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aboutInfo.map((item, index) => (
                <motion.li
                  key={index}
                  className="border border-white/10 p-5 hover:border-white/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-white/50 text-xs uppercase tracking-wider block mb-2">
                    {item.fieldName}
                  </span>
                  <span className="text-white text-base font-normal">
                    {item.fieldValue}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── 3. SKILLS - SQUARESPACE MINIMAL STYLE ── */
const SkillCategory = ({ title, skillList, delay = 0 }) => (
  <motion.div 
    className="mb-16"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    <h4 className="text-xl md:text-2xl font-light text-white/90 mb-8 text-center">
      {title}
    </h4>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {skillList.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: delay + index * 0.05 }}
        >
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="w-full h-full group">
                <div className="border border-white/10 p-6 hover:border-white/30 transition-all duration-300 flex flex-col items-center justify-center gap-4 min-h-[140px]">
                  <div className="text-4xl text-white/80 group-hover:text-white transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <div className="text-sm text-white/60 group-hover:text-white/90 transition-colors duration-300 font-light">
                    {skill.name}
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="capitalize font-normal">{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white text-center mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-[1px] bg-white/20 mx-auto mb-8" />
          <p className="max-w-3xl text-lg md:text-xl text-white/70 mx-auto text-center mb-20 font-light leading-relaxed">
            Proficient in building end-to-end ML pipelines and full-stack applications, 
            from data preprocessing through model evaluation and deployment.
          </p>
        </motion.div>

        <div>
          <SkillCategory title="Programming Languages" skillList={skills.languages} delay={0} />
          <SkillCategory title="AI/ML & Libraries" skillList={skills.aiml} delay={0.1} />
          <SkillCategory title="Web & Frameworks" skillList={skills.webFrameworks} delay={0.2} />
          <SkillCategory title="Tools & Platforms" skillList={skills.tools} delay={0.3} />
        </div>

        {/* Soft Skills */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-xl md:text-2xl font-light text-white/90 mb-8 text-center">
            Soft Skills & Expertise
          </h4>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Problem Solving",
              "Analytical Thinking",
              "Team Collaboration",
              "Adaptive Learning",
              "Decision Making",
            ].map((skill, i) => (
              <motion.span
                key={i}
                className="border border-white/20 px-6 py-3 hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-white/70 hover:text-white text-sm font-light"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ── 4. PROJECTS ── */
const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white text-center mb-6">
            Projects
          </h2>
          <div className="w-24 h-[1px] bg-white/20 mx-auto mb-16" />
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border border-white/10 p-8 xl:p-12 hover:border-white/30 transition-all duration-500 group"
              {...fadeInUp}
            >
              <div className="flex flex-col xl:flex-row gap-8">
                {/* Left: Number + Title */}
                <div className="xl:w-1/3">
                  <span className="text-5xl md:text-6xl font-light text-white/20 group-hover:text-white/40 transition-all duration-500">
                    {project.num}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-light mt-4 mb-6 text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs text-white/60 border border-white/20 px-3 py-1.5 hover:border-white/40 hover:text-white/80 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
                  >
                    <BsArrowUpRight className="text-base" />
                    <span>View on GitHub</span>
                  </Link>
                </div>

                {/* Right: Description + Highlights */}
                <div className="xl:w-2/3">
                  <p className="text-lg text-white/70 leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {project.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-2 text-sm text-white/60 border border-white/10 px-4 py-2"
                      >
                        <span className="w-1.5 h-1.5 bg-white/60" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 5. EDUCATION, CERTIFICATIONS, ACHIEVEMENTS ── */
const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white text-center mb-6">
            Education & Achievements
          </h2>
          <div className="w-24 h-[1px] bg-white/20 mx-auto mb-16" />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          {/* Education */}
          <motion.div {...fadeInUp}>
            <h3 className="text-xl md:text-2xl font-light mb-8 flex items-center gap-3 text-white">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                <FaGraduationCap className="text-white/70" />
              </div>
              <span>Education</span>
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 p-6 hover:border-white/30 transition-all duration-300"
                >
                  <span className="text-white/50 text-xs font-light px-2 py-1 border border-white/10 inline-block mb-4">
                    {item.duration}
                  </span>
                  <h4 className="text-lg font-normal mt-3 text-white leading-tight">
                    {item.degree}
                  </h4>
                  <p className="text-white/50 text-sm mt-2 font-light">
                    {item.institution}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-white/70 text-sm font-light">
                      {item.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div {...fadeInUp}>
            <h3 className="text-xl md:text-2xl font-light mb-8 flex items-center gap-3 text-white">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                <FaCertificate className="text-white/70" />
              </div>
              <span>Certifications</span>
            </h3>
            <div className="space-y-6">
              {certifications.map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 p-6 hover:border-white/30 transition-all duration-300"
                >
                  <span className="text-white/50 text-xs font-light px-2 py-1 border border-white/10 inline-block mb-4">
                    {item.date}
                  </span>
                  <h4 className="text-lg font-normal mt-3 text-white">
                    {item.title}
                  </h4>
                  <p className="text-white/50 text-sm mt-2 font-light">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div {...fadeInUp}>
            <h3 className="text-xl md:text-2xl font-light mb-8 flex items-center gap-3 text-white">
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                <FaTrophy className="text-white/70" />
              </div>
              <span>Leadership</span>
            </h3>
            <div className="space-y-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 p-6 hover:border-white/30 transition-all duration-300"
                >
                  <h4 className="text-lg font-normal text-white">
                    {item.title}
                  </h4>
                  <p className="text-white/50 text-sm mt-3 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── 6. CONTACT ── */
const ContactSection = () => {
  const [state, handleSubmit] = useForm("myzgzjwz");
  const [selectedService, setSelectedService] = useState("");

  if (state.succeeded) {
    return (
      <section id="contact" className="section-padding bg-black">
        <div className="container mx-auto flex flex-col items-center max-w-2xl">
          <div className="w-full border border-white/20 p-8 mb-8 flex items-center space-x-4">
            <div className="text-white text-3xl">
              <FaCheckCircle />
            </div>
            <p className="text-center text-white font-light">
              Thanks for contacting me! I will get back to you soon.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-5 w-full">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-4 border border-white/10 p-5 hover:border-white/30 transition-colors">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                  <div className="text-xl text-white/70">{item.icon}</div>
                </div>
                <div className="flex flex-col">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1 font-light">
                    {item.title}
                  </p>
                  <p className="text-white text-sm font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container mx-auto max-w-6xl">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white text-center mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-[1px] bg-white/20 mx-auto mb-16" />
        </motion.div>

        <motion.div
          className="flex flex-col xl:flex-row gap-12"
          {...fadeInUp}
        >
          {/* form */}
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 border border-white/10 p-10"
            >
              <h3 className="text-2xl xl:text-3xl text-white font-light">
                Let's Work Together
              </h3>
              <p className="text-white/50 text-sm xl:text-base font-light">
                Interested in collaboration or have a role in mind? Drop me a
                message.
              </p>
              {/* Input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  required
                />
                <Input
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  required
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  required
                />
              </div>

              {/* Select */}
              <input type="hidden" name="service" value={selectedService} />
              <Select name="service-display" required onValueChange={(value) => setSelectedService(value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="What are you looking for?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select an inquiry</SelectLabel>
                    <SelectItem value="ML/AI Project Collaboration">
                      ML/AI Project Collaboration
                    </SelectItem>
                    <SelectItem value="Full-Stack Development">
                      Full-Stack Development
                    </SelectItem>
                    <SelectItem value="Job Opportunity">
                      Job Opportunity
                    </SelectItem>
                    <SelectItem value="Research Collaboration">
                      Research Collaboration
                    </SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Textarea */}
              <Textarea
                id="message"
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              {/* Button */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  size="md"
                  className="w-full md:w-1/2 h-12 squarespace-btn-primary"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
              
              {/* Error message */}
              {state.errors && state.errors.length > 0 && (
                <div className="text-red-500 text-sm text-center font-light">
                  Oops! There was an error submitting the form. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-8">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-6 border border-white/10 p-6 hover:border-white/30 transition-colors">
                  <div className="w-[52px] h-[52px] xl:w-[60px] xl:h-[60px] border border-white/20 flex items-center justify-center">
                    <div className="text-[24px] text-white/70">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-1 font-light">
                      {item.title}
                    </p>
                    <p className="text-white text-sm xl:text-base font-light">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ── FOOTER ── */
const Footer = () => (
  <footer className="py-12 border-t border-white/10 bg-black">
    <div className="container mx-auto text-center">
      <p className="text-white/40 text-sm font-light">
        © {new Date().getFullYear()} Tushar Pawar. Built with Next.js &
        Framer Motion.
      </p>
    </div>
  </footer>
);

/* ────────────────── MAIN PAGE ────────────────── */

const Home = () => {
  return (
    <>
      <HeroSection />

      <div className="container mx-auto max-w-6xl py-12">
        <Stats />
      </div>

      {/* Minimal divider */}
      <div className="container mx-auto max-w-6xl">
        <div className="h-[1px] bg-white/10" />
      </div>

      <AboutSection />

      <div className="container mx-auto max-w-6xl">
        <div className="h-[1px] bg-white/10" />
      </div>

      <SkillsSection />

      <div className="container mx-auto max-w-6xl">
        <div className="h-[1px] bg-white/10" />
      </div>

      <ProjectsSection />

      <div className="container mx-auto max-w-6xl">
        <div className="h-[1px] bg-white/10" />
      </div>

      <EducationSection />

      <div className="container mx-auto max-w-6xl">
        <div className="h-[1px] bg-white/10" />
      </div>

      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
