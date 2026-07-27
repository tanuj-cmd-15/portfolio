"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
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
  FaGithub,
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
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
    title: "DOT Digital Certificate Platform",
    description:
      "Production certificate-management system for SPPU's Department of Technology built with Next.js 14, TypeScript, and MongoDB Atlas. Automated credential generation, distribution, and public verification end-to-end. Engineered asynchronous PDF generation with QR-code verification achieving sub-500ms generation time per certificate.",
    stack: ["Next.js 14", "TypeScript", "MongoDB", "Supabase", "pdf-lib"],
    github: "https://github.com/tusharpawar1217",
    live: null,
    metrics: ["400+ verified certificates issued", "Sub-500ms PDF generation", "JWT session auth", "Bulk email pipeline"],
    highlights: ["Reduced manual processing by 95%", "Zero-downtime deployment", "QR verification system"],
  },
  {
    num: "02",
    title: "BeautyBloom Studio E-Commerce",
    description:
      "Full-stack e-commerce platform implementing Domain-Driven Design with Spring Boot and React TypeScript. Architected 40+ RESTful API endpoints for catalog, cart, and order management. Integrated Stripe/Razorpay payment gateways and ShipRocket API for automated shipping-label creation and real-time tracking.",
    stack: ["Spring Boot", "React", "TypeScript", "MySQL", "Stripe"],
    github: "https://github.com/tusharpawar1217",
    live: null,
    metrics: ["40+ REST API endpoints", "Handles 1000+ concurrent users", "Firebase OAuth", "Complete order lifecycle"],
    highlights: ["99.9% uptime", "Average 200ms API response time", "Multi-payment gateway support"],
  },
  {
    num: "03",
    title: "Artsoll — Art E-Commerce UI/UX",
    description:
      "Designed intuitive art marketplace connecting artists with collectors through minimalist interface. Implemented distraction-free gallery grids, interactive artwork previews with room-context visualization, and streamlined checkout with authenticity certification. Enhanced user engagement by 40% through improved visual hierarchy.",
    stack: ["Figma", "Adobe CC", "UI/UX Design", "Prototyping"],
    github: null,
    live: "https://www.behance.net/gallery/156272515/Artsoll-Website",
    metrics: ["40% increase in user engagement", "65% checkout completion rate", "A/B tested with 500+ users"],
    highlights: ["Minimalist gallery design", "Interactive room previews", "Mobile-first approach"],
  },
  {
    num: "04",
    title: "OCR Document Intelligence System",
    description:
      "End-to-end OCR pipeline with advanced image preprocessing using OpenCV (noise reduction, binarization, deskewing). Achieved 25% improvement in text extraction accuracy on degraded documents. Built high-performance FastAPI backend with optimized PostgreSQL queries achieving sub-100ms processing latency per document.",
    stack: ["FastAPI", "Tesseract", "OpenCV", "React", "PostgreSQL"],
    github: "https://github.com/tusharpawar1217",
    live: null,
    metrics: ["25% accuracy improvement", "Sub-100ms processing latency", "Handles 10K+ docs/day"],
    highlights: ["Real-time document processing", "Automated quality validation", "Batch processing support"],
  },
  {
    num: "05",
    title: "Audio Deepfake Detection (SwarParikshak)",
    description:
      "CNN-BiLSTM-Attention architecture fusing LFCC and Mel-spectrogram features for multilingual audio deepfake detection. Achieved 0.91% Equal Error Rate and 98.77% validation accuracy on 34,700+ TTS-generated samples (43.8 hours) across Marathi, Hindi, and Bengali. Benchmarked against 11 TTS engines with robust cross-engine generalization.",
    stack: ["PyTorch", "Librosa", "Whisper", "Python"],
    github: "https://github.com/tusharpawar1217",
    live: null,
    metrics: ["0.91% Equal Error Rate", "98.77% validation accuracy", "34,700+ audio samples", "43.8 hours processed"],
    highlights: ["Multi-language support (3 languages)", "Cross-engine generalization", "Real-time inference capability"],
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

/* ── HERO - CINEMATIC FULL-SCREEN WITH ZOOM SCROLL ── */
const HeroSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / heroHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scale = 1 + scrollProgress * 0.5; // Zoom from 1 to 1.5
  const opacity = 1 - scrollProgress;

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Content Overlay */}
      <div className="container mx-auto relative z-10 px-6 h-screen flex items-center">
        <div className="w-full flex items-center justify-between gap-12">
          {/* Left Side - Name and Description */}
          <div className="flex-shrink-0">
            <motion.h1 
              className="text-[5rem] md:text-[7rem] xl:text-[10rem] font-bold leading-none tracking-tighter text-white uppercase"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              TUSHAR
              <br />
              PAWAR
            </motion.h1>
            
            <motion.p 
              className="text-base md:text-lg xl:text-xl text-gray-400 mt-8 max-w-lg font-light leading-relaxed"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              We build ML systems, data pipelines,
              and full-stack applications <span className="text-white">with
              precision, innovation and impact.</span>
            </motion.p>
          </div>

          {/* Right Side - Hero Image */}
          <motion.div 
            className="hidden xl:block flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="w-[500px] h-[500px] 2xl:w-[600px] 2xl:h-[600px] opacity-90">
              <img 
                src="/hero-image.png" 
                alt="Vision" 
                className="w-full h-full object-contain filter saturate-150 brightness-110"
                style={{
                  filter: 'contrast(1.2) saturate(1.3) brightness(1.1)',
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Bottom - Tagline (Line by Line) */}
      <motion.div 
        className="absolute bottom-12 right-12 text-right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h2 className="text-3xl xl:text-5xl font-light text-white leading-tight">
          Beyond Visuals.
        </h2>
        <h2 className="text-3xl xl:text-5xl font-bold text-white leading-tight">
          Built with Vision.
        </h2>
      </motion.div>

      {/* Top Right Info */}
      <motion.div 
        className="absolute top-8 right-8 text-right text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="flex items-center gap-2 justify-end mb-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <p className="text-sm">Available for opportunities</p>
        </div>
        <p className="text-sm text-gray-400">Machine Learning Engineer</p>
      </motion.div>

      {/* Center Bottom - Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" />
        <p className="text-white/60 text-xs mt-2 uppercase tracking-widest">Scroll</p>
      </motion.div>
    </section>
  );
};

/* ── 2. ABOUT ── */
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-[#F3F3F3]">
      <div className="container mx-auto max-w-6xl">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0A0A0A] text-center mb-6">
            About Me
          </h2>
          <div className="w-24 h-[1px] bg-[#0A0A0A]/20 mx-auto mb-16" />
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-16 items-center">
          {/* Animated SVG Frame */}
          <motion.div 
            className="flex justify-center xl:justify-start mb-8 xl:mb-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="svg-frame">
              <svg style={{"--i": "0", "--j": "0"}}>
                <g id="out1">
                  <path d="M72 172C72 116.772 116.772 72 172 72C227.228 72 272 116.772 272 172C272 227.228 227.228 272 172 272C116.772 272 72 227.228 72 172ZM197.322 172C197.322 158.015 185.985 146.678 172 146.678C158.015 146.678 146.678 158.015 146.678 172C146.678 185.985 158.015 197.322 172 197.322C185.985 197.322 197.322 185.985 197.322 172Z"></path>
                  <path mask="url(#path-1-inside-1_111_3212)" strokeMiterlimit="16" strokeWidth="2" stroke="#00FFFF" d="M72 172C72 116.772 116.772 72 172 72C227.228 72 272 116.772 272 172C272 227.228 227.228 272 172 272C116.772 272 72 227.228 72 172ZM197.322 172C197.322 158.015 185.985 146.678 172 146.678C158.015 146.678 146.678 158.015 146.678 172C146.678 185.985 158.015 197.322 172 197.322C185.985 197.322 197.322 185.985 197.322 172Z"></path>
                </g>
              </svg>
              <svg style={{"--i": "1", "--j": "1"}}>
                <g id="out2">
                  <mask fill="white" id="path-2-inside-2_111_3212">
                    <path d="M102.892 127.966C93.3733 142.905 88.9517 160.527 90.2897 178.19L94.3752 177.88C93.1041 161.1 97.3046 144.36 106.347 130.168L102.892 127.966Z"></path>
                    <path d="M93.3401 194.968C98.3049 211.971 108.646 226.908 122.814 237.541L125.273 234.264C111.814 224.163 101.99 209.973 97.2731 193.819L93.3401 194.968Z"></path>
                    <path d="M152.707 92.3592C140.33 95.3575 128.822 101.199 119.097 109.421L121.742 112.55C130.981 104.739 141.914 99.1897 153.672 96.3413L152.707 92.3592Z"></path>
                    <path d="M253.294 161.699C255.099 175.937 253.132 190.4 247.59 203.639L243.811 202.057C249.075 189.48 250.944 175.74 249.23 162.214L253.294 161.699Z"></path>
                    <path d="M172 90.0557C184.677 90.0557 197.18 92.9967 208.528 98.6474C219.875 104.298 229.757 112.505 237.396 122.621L234.126 125.09C226.869 115.479 217.481 107.683 206.701 102.315C195.921 96.9469 184.043 94.1529 172 94.1529V90.0557Z"></path>
                    <path d="M244.195 133.235C246.991 138.442 249.216 143.937 250.83 149.623L246.888 150.742C245.355 145.34 243.242 140.12 240.586 135.174L244.195 133.235Z"></path>
                    <path d="M234.238 225.304C223.932 237.338 210.358 246.126 195.159 250.604C179.961 255.082 163.79 255.058 148.606 250.534L149.775 246.607C164.201 250.905 179.563 250.928 194.001 246.674C208.44 242.42 221.335 234.071 231.126 222.639L234.238 225.304Z"></path>
                  </mask>
                  <path mask="url(#path-2-inside-2_111_3212)" fill="#00FFFF" d="M102.892 127.966L105.579 123.75L101.362 121.063L98.6752 125.28L102.892 127.966ZM90.2897 178.19L85.304 178.567L85.6817 183.553L90.6674 183.175L90.2897 178.19ZM94.3752 177.88L94.7529 182.866L99.7386 182.488L99.3609 177.503L94.3752 177.88ZM106.347 130.168L110.564 132.855L113.251 128.638L109.034 125.951L106.347 130.168ZM93.3401 194.968L91.9387 190.168L87.1391 191.569L88.5405 196.369L93.3401 194.968ZM122.814 237.541L119.813 241.54L123.812 244.541L126.813 240.542L122.814 237.541ZM125.273 234.264L129.272 237.265L132.273 233.266L128.274 230.265L125.273 234.264ZM97.2731 193.819L102.073 192.418L100.671 187.618L95.8717 189.02L97.2731 193.819ZM152.707 92.3592L157.567 91.182L156.389 86.3226L151.53 87.4998L152.707 92.3592ZM119.097 109.421L115.869 105.603L112.05 108.831L115.278 112.649L119.097 109.421ZM121.742 112.55L117.924 115.778L121.152 119.596L124.97 116.368L121.742 112.55ZM153.672 96.3413L154.849 101.201L159.708 100.023L158.531 95.1641L153.672 96.3413ZM253.294 161.699L258.255 161.07L257.626 156.11L252.666 156.738L253.294 161.699ZM247.59 203.639L245.66 208.251L250.272 210.182L252.203 205.569L247.59 203.639ZM243.811 202.057L239.198 200.126L237.268 204.739L241.88 206.669L243.811 202.057ZM249.23 162.214L248.601 157.253L243.641 157.882L244.269 162.842L249.23 162.214ZM172 90.0557V85.0557H167V90.0557H172ZM208.528 98.6474L206.299 103.123L206.299 103.123L208.528 98.6474ZM237.396 122.621L240.409 126.611L244.399 123.598L241.386 119.608L237.396 122.621ZM234.126 125.09L230.136 128.103L233.149 132.093L237.139 129.08L234.126 125.09ZM206.701 102.315L204.473 106.791L204.473 106.791L206.701 102.315ZM172 94.1529H167V99.1529H172V94.1529ZM244.195 133.235L248.601 130.87L246.235 126.465L241.83 128.83L244.195 133.235ZM250.83 149.623L252.195 154.433L257.005 153.067L255.64 148.257L250.83 149.623ZM246.888 150.742L242.078 152.107L243.444 156.917L248.254 155.552L246.888 150.742ZM240.586 135.174L238.22 130.768L233.815 133.134L236.181 137.539L240.586 135.174ZM234.238 225.304L238.036 228.556L241.288 224.759L237.491 221.506L234.238 225.304ZM195.159 250.604L196.572 255.4L196.572 255.4L195.159 250.604ZM148.606 250.534L143.814 249.107L142.386 253.899L147.178 255.326L148.606 250.534ZM149.775 246.607L151.203 241.816L146.411 240.388L144.983 245.18L149.775 246.607ZM194.001 246.674L195.415 251.47L195.415 251.47L194.001 246.674ZM231.126 222.639L234.379 218.841L230.581 215.589L227.329 219.386L231.126 222.639ZM98.6752 125.28C88.5757 141.13 83.8844 159.826 85.304 178.567L95.2754 177.812C94.0191 161.227 98.1709 144.681 107.109 130.653L98.6752 125.28ZM90.6674 183.175L94.7529 182.866L93.9976 172.895L89.912 173.204L90.6674 183.175ZM99.3609 177.503C98.1715 161.8 102.102 146.135 110.564 132.855L102.131 127.481C92.5071 142.585 88.0368 160.4 89.3895 178.258L99.3609 177.503ZM109.034 125.951L105.579 123.75L100.205 132.183L103.661 134.385L109.034 125.951ZM88.5405 196.369C93.8083 214.41 104.78 230.259 119.813 241.54L125.815 233.542C112.512 223.558 102.802 209.532 98.1397 193.566L88.5405 196.369ZM126.813 240.542L129.272 237.265L121.274 231.263L118.815 234.54L126.813 240.542ZM128.274 230.265C115.679 220.813 106.486 207.534 102.073 192.418L92.4735 195.221C97.493 212.412 107.948 227.513 122.272 238.263L128.274 230.265ZM95.8717 189.02L91.9387 190.168L94.7415 199.767L98.6745 198.619L95.8717 189.02ZM151.53 87.4998C138.398 90.681 126.188 96.8793 115.869 105.603L122.325 113.239C131.457 105.519 142.262 100.034 153.884 97.2187L151.53 87.4998ZM115.278 112.649L117.924 115.778L125.56 109.322L122.915 106.193L115.278 112.649ZM124.97 116.368C133.616 109.059 143.846 103.866 154.849 101.201L152.495 91.4818C139.981 94.5132 128.347 100.419 118.514 108.732L124.97 116.368ZM158.531 95.1641L157.567 91.182L147.848 93.5364L148.812 97.5185L158.531 95.1641ZM248.334 162.327C250.028 175.697 248.181 189.277 242.978 201.708L252.203 205.569C258.082 191.522 260.169 176.177 258.255 161.07L248.334 162.327ZM249.521 199.027L245.741 197.445L241.88 206.669L245.66 208.251L249.521 199.027ZM248.423 203.987C254.025 190.602 256.014 175.98 254.19 161.585L244.269 162.842C245.873 175.5 244.125 188.357 239.198 200.126L248.423 203.987ZM249.858 167.174L253.923 166.659L252.666 156.738L248.601 157.253L249.858 167.174ZM172 95.0557C183.903 95.0557 195.644 97.8172 206.299 103.123L210.757 94.1717C198.717 88.1761 185.45 85.0557 172 85.0557V95.0557ZM206.299 103.123C216.954 108.429 226.233 116.135 233.406 125.634L241.386 119.608C233.281 108.874 222.796 100.167 210.757 94.1717L206.299 103.123ZM234.383 118.631L231.113 121.1L237.139 129.08L240.409 126.611L234.383 118.631ZM238.116 122.077C230.393 111.849 220.403 103.552 208.93 97.8393L204.473 106.791C214.56 111.814 223.345 119.11 230.136 128.103L238.116 122.077ZM208.93 97.8393C197.458 92.1263 184.816 89.1529 172 89.1529V99.1529C183.269 99.1529 194.385 101.767 204.473 106.791L208.93 97.8393ZM177 94.1529V90.0557H167V94.1529H177ZM239.79 135.601C242.416 140.49 244.504 145.649 246.02 150.988L255.64 148.257C253.927 142.225 251.567 136.395 248.601 130.87L239.79 135.601ZM249.464 144.813L245.523 145.932L248.254 155.552L252.195 154.433L249.464 144.813ZM251.698 149.376C250.067 143.628 247.818 138.073 244.991 132.808L236.181 137.539C238.666 142.168 240.644 147.052 242.078 152.107L251.698 149.376ZM242.951 139.579L246.561 137.64L241.83 128.83L238.22 130.768L242.951 139.579ZM230.441 222.051C220.763 233.351 208.017 241.603 193.746 245.808L196.572 255.4C212.698 250.649 227.101 241.325 238.036 228.556L230.441 222.051ZM193.746 245.808C179.475 250.012 164.291 249.99 150.033 245.742L147.178 255.326C163.289 260.125 180.447 260.151 196.572 255.4L193.746 245.808ZM153.397 251.962L154.567 248.035L144.983 245.18L143.814 249.107L153.397 251.962ZM148.348 251.399C163.7 255.973 180.049 255.997 195.415 251.47L192.588 241.877C179.077 245.858 164.702 245.837 151.203 241.816L148.348 251.399ZM195.415 251.47C210.78 246.942 224.504 238.058 234.924 225.891L227.329 219.386C218.167 230.084 206.099 237.897 192.588 241.877L195.415 251.47ZM227.874 226.436L230.986 229.101L237.491 221.506L234.379 218.841L227.874 226.436Z"></path>
                </g>
              </svg>
              <svg style={{"--i": "0", "--j": "2"}}>
                <g id="inner3">
                  <path d="M195.136 135.689C188.115 131.215 179.948 128.873 171.624 128.946C163.299 129.019 155.174 131.503 148.232 136.099L148.42 136.382C155.307 131.823 163.368 129.358 171.627 129.286C179.886 129.213 187.988 131.537 194.954 135.975L195.136 135.689Z"></path>
                  <path d="M195.136 208.311C188.115 212.784 179.948 215.127 171.624 215.054C163.299 214.981 155.174 212.496 148.232 207.901L148.42 207.618C155.307 212.177 163.368 214.642 171.627 214.714C179.886 214.786 187.988 212.463 194.954 208.025L195.136 208.311Z"></path>
                  <path mask="url(#path-5-inside-3_111_3212)" fill="#00FFFF" d="M195.136 135.689L195.474 135.904L195.689 135.566L195.351 135.352L195.136 135.689ZM171.624 128.946L171.627 129.346L171.624 128.946ZM148.232 136.099L148.011 135.765L147.678 135.986L147.899 136.32L148.232 136.099ZM148.42 136.382L148.086 136.603L148.307 136.936L148.641 136.716L148.42 136.382ZM171.627 129.286L171.63 129.686L171.627 129.286ZM194.954 135.975L194.739 136.313L195.076 136.528L195.291 136.19L194.954 135.975ZM195.136 208.311L195.351 208.648L195.689 208.433L195.474 208.096L195.136 208.311ZM171.624 215.054L171.627 214.654L171.624 215.054ZM148.232 207.901L147.899 207.68L147.678 208.014L148.011 208.234L148.232 207.901ZM148.42 207.618L148.641 207.284L148.307 207.063L148.086 207.397L148.42 207.618ZM171.627 214.714L171.63 214.314L171.627 214.714ZM194.954 208.025L195.291 207.81L195.076 207.472L194.739 207.687L194.954 208.025ZM195.351 135.352C188.265 130.836 180.022 128.473 171.62 128.546L171.627 129.346C179.874 129.274 187.966 131.594 194.921 136.026L195.351 135.352ZM171.62 128.546C163.218 128.619 155.018 131.127 148.011 135.765L148.453 136.432C155.33 131.88 163.38 129.418 171.627 129.346L171.62 128.546ZM147.899 136.32L148.086 136.603L148.753 136.161L148.566 135.878L147.899 136.32ZM148.641 136.716C155.463 132.199 163.448 129.757 171.63 129.686L171.623 128.886C163.287 128.958 155.15 131.447 148.199 136.049L148.641 136.716ZM171.63 129.686C179.812 129.614 187.839 131.916 194.739 136.313L195.169 135.638C188.138 131.158 179.959 128.813 171.623 128.886L171.63 129.686ZM195.291 136.19L195.474 135.904L194.799 135.474L194.617 135.76L195.291 136.19ZM194.921 207.974C187.966 212.406 179.874 214.726 171.627 214.654L171.62 215.454C180.022 215.527 188.265 213.163 195.351 208.648L194.921 207.974ZM171.627 214.654C163.38 214.582 155.33 212.12 148.453 207.567L148.011 208.234C155.018 212.873 163.218 215.38 171.62 215.454L171.627 214.654ZM148.566 208.122L148.753 207.838L148.086 207.397L147.899 207.68L148.566 208.122ZM148.199 207.951C155.15 212.553 163.287 215.041 171.623 215.114L171.63 214.314C163.448 214.243 155.463 211.801 148.641 207.284L148.199 207.951ZM171.623 215.114C179.959 215.187 188.138 212.842 195.169 208.362L194.739 207.687C187.839 212.084 179.812 214.386 171.63 214.314L171.623 215.114ZM194.617 208.239L194.799 208.526L195.474 208.096L195.291 207.81L194.617 208.239Z"></path>
                </g>
                <path stroke="#00FFFF" d="M240.944 172C240.944 187.951 235.414 203.408 225.295 215.738C215.176 228.068 201.095 236.508 185.45 239.62C169.806 242.732 153.567 240.323 139.5 232.804C125.433 225.285 114.408 213.12 108.304 198.384C102.2 183.648 101.394 167.25 106.024 151.987C110.654 136.723 120.434 123.537 133.696 114.675C146.959 105.813 162.884 101.824 178.758 103.388C194.632 104.951 209.472 111.97 220.751 123.249" id="out3"></path>
              </svg>
              <svg style={{"--i": "1", "--j": "3"}}>
                <g id="inner1">
                  <path fill="#00FFFF" d="M145.949 124.51L148.554 129.259C156.575 124.859 165.672 122.804 174.806 123.331C183.94 123.858 192.741 126.944 200.203 132.236C207.665 137.529 213.488 144.815 217.004 153.261C220.521 161.707 221.59 170.972 220.09 179.997L224.108 180.665L224.102 180.699L229.537 181.607C230.521 175.715 230.594 169.708 229.753 163.795L225.628 164.381C224.987 159.867 223.775 155.429 222.005 151.179C218.097 141.795 211.628 133.699 203.337 127.818C195.045 121.937 185.266 118.508 175.118 117.923C165.302 117.357 155.525 119.474 146.83 124.037C146.535 124.192 146.241 124.349 145.949 124.51ZM224.638 164.522C224.009 160.091 222.819 155.735 221.082 151.563C217.246 142.352 210.897 134.406 202.758 128.634C194.62 122.862 185.021 119.496 175.06 118.922C165.432 118.367 155.841 120.441 147.311 124.914L148.954 127.91C156.922 123.745 165.876 121.814 174.864 122.333C184.185 122.87 193.166 126.019 200.782 131.421C208.397 136.822 214.339 144.257 217.928 152.877C221.388 161.188 222.526 170.276 221.23 179.173L224.262 179.677C224.998 174.671 225.35 169.535 224.638 164.522Z" clipRule="evenodd" fillRule="evenodd"></path>
                  <path fill="#00FFFF" d="M139.91 220.713C134.922 217.428 130.469 213.395 126.705 208.758L130.983 205.286L130.985 205.288L134.148 202.721C141.342 211.584 151.417 217.642 162.619 219.839C173.821 222.036 185.438 220.232 195.446 214.742L198.051 219.491C197.759 219.651 197.465 219.809 197.17 219.963C186.252 225.693 173.696 227.531 161.577 225.154C154.613 223.789 148.041 221.08 142.202 217.234L139.91 220.713ZM142.752 216.399C148.483 220.174 154.934 222.833 161.769 224.173C173.658 226.504 185.977 224.704 196.689 219.087L195.046 216.09C185.035 221.323 173.531 222.998 162.427 220.82C151.323 218.643 141.303 212.747 134.01 204.122L131.182 206.5C134.451 210.376 138.515 213.607 142.752 216.399Z" clipRule="evenodd" fillRule="evenodd"></path>
                </g>
              </svg>
              <svg style={{"--i": "2", "--j": "4"}}>
                <path fill="#00FFFF" d="M180.956 186.056C183.849 184.212 186.103 181.521 187.41 178.349C188.717 175.177 189.013 171.679 188.258 168.332C187.503 164.986 185.734 161.954 183.192 159.65C180.649 157.346 177.458 155.883 174.054 155.46C170.649 155.038 167.197 155.676 164.169 157.288C161.14 158.9 158.683 161.407 157.133 164.468C155.582 167.528 155.014 170.992 155.505 174.388C155.997 177.783 157.524 180.944 159.879 183.439L161.129 182.259C159.018 180.021 157.648 177.186 157.207 174.141C156.766 171.096 157.276 167.989 158.667 165.245C160.057 162.5 162.261 160.252 164.977 158.806C167.693 157.36 170.788 156.788 173.842 157.167C176.895 157.546 179.757 158.858 182.037 160.924C184.317 162.99 185.904 165.709 186.581 168.711C187.258 171.712 186.992 174.849 185.82 177.694C184.648 180.539 182.627 182.952 180.032 184.606L180.956 186.056Z" id="center1"></path>
                <path fill="#00FFFF" d="M172 166.445C175.068 166.445 177.556 168.932 177.556 172C177.556 175.068 175.068 177.556 172 177.556C168.932 177.556 166.444 175.068 166.444 172C166.444 168.932 168.932 166.445 172 166.445ZM172 177.021C174.773 177.021 177.021 174.773 177.021 172C177.021 169.227 174.773 166.979 172 166.979C169.227 166.979 166.979 169.227 166.979 172C166.979 174.773 169.227 177.021 172 177.021Z" id="center"></path>
              </svg>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div className="xl:w-1/2" {...fadeInLeft}>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed mb-8 font-light">
              I'm a passionate M.Tech candidate specializing in Deep
              Learning and applied ML. With hands-on experience in building and
              evaluating CNN-BiLSTM-Attention architectures, I thrive on solving
              complex problems with data-driven approaches.
            </p>
            <p className="text-lg md:text-xl text-[#666666] leading-relaxed font-light">
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
                  className="border border-[#0A0A0A]/10 p-5 hover:border-[#FF4D00] transition-all duration-300 spotlight-card scale-lift parallax-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-[#666666] text-xs uppercase tracking-wider block mb-2">
                    {item.fieldName}
                  </span>
                  <span className="text-[#0A0A0A] text-base font-normal">
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
    <h4 className="text-xl md:text-2xl font-light text-[#0A0A0A]/90 mb-8 text-center text-shimmer">
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
                <div className="border border-[#D8D8D8] p-6 hover:border-[#FF4D00] transition-all duration-300 flex flex-col items-center justify-center gap-4 min-h-[140px] spotlight-card tilt-card ripple-effect bg-white">
                  <div className="text-4xl text-[#0A0A0A]/80 group-hover:text-[#FF4D00] transition-colors duration-300 float-animation">
                    {skill.icon}
                  </div>
                  <div className="text-sm text-[#666666] group-hover:text-[#0A0A0A] transition-colors duration-300 font-light">
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
    <section id="skills" className="section-padding bg-[#FFFFFF]">
      <div className="container mx-auto max-w-6xl">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0A0A0A] text-center mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-[1px] bg-[#0A0A0A]/20 mx-auto mb-8" />
          <p className="max-w-3xl text-lg md:text-xl text-[#666666] mx-auto text-center mb-20 font-light leading-relaxed">
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
          <h4 className="text-xl md:text-2xl font-light text-[#0A0A0A]/90 mb-8 text-center">
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
                className="border border-[#D8D8D8] px-6 py-3 hover:border-[#FF4D00] hover:bg-[#FF4D00]/5 transition-all duration-300 text-[#666666] hover:text-[#0A0A0A] text-sm font-light"
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

/* ── 4. PROJECTS - VERTICAL CARDS SLIDER ── */

/* Infinite Scroll Gallery Component for Portfolio Previews */
const InfiniteScrollGallery = ({ images, direction = "left" }) => {
  const scrollRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div 
      ref={scrollRef}
      className="overflow-x-auto py-8 cursor-grab scrollbar-hide"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
    >
      <div 
        className={`flex gap-6 ${!isDragging ? (direction === "left" ? "animate-scroll-left" : "animate-scroll-right") : ""}`}
        style={{ width: "max-content" }}
      >
        {/* Duplicate images for seamless loop */}
        {[...images, ...images].map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[400px] h-[280px] bg-[#252941] rounded-lg overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-110 hover:z-10 relative group"
            style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
          >
            <img 
              src={img} 
              alt={`Preview ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 select-none"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsToShow = 4;
  
  // Add 6th project (AI Interview Platform) with custom color shades
  const allProjects = [
    ...projects,
    {
      num: "06",
      title: "AI-Powered Interview Platform",
      description:
        "AI recruitment platform with LLM-based semantic answer scoring and emotion detection for automated HR and technical interviews. Engineered resume-parsing ATS pipeline and JWT-secured REST APIs with WebSocket-based live feedback for real-time candidate assessment.",
      stack: ["NLP", "FastAPI", "React", "WebSockets", "SQL"],
      github: "https://github.com/tusharpawar1217",
      live: null,
      metrics: ["LLM semantic scoring", "Real-time WebSocket feedback", "JWT authentication", "Resume parsing ATS"],
      highlights: ["Automated interview evaluation", "Multi-criteria scoring", "Live candidate dashboard"],
      customGradient: "linear-gradient(135deg, #FFF5E6 0%, #FFE0B2 100%)"
    },
  ];

  // Update existing projects with custom color gradients
  allProjects[0].customGradient = "linear-gradient(135deg, #E8EAF6 0%, #C5CAE9 100%)"; // Light indigo
  allProjects[1].customGradient = "linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)"; // Light purple
  allProjects[2].customGradient = "linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 100%)"; // Light pink for UI/UX
  allProjects[3].customGradient = "linear-gradient(135deg, #E0F2F1 0%, #B2DFDB 100%)"; // Light teal
  allProjects[4].customGradient = "linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)"; // Light orange

  const maxSlide = allProjects.length - cardsToShow; // For 6 projects: 6 - 4 = 2 (positions 0, 1, 2)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  // Calculate which cards to show
  const visibleProjects = allProjects.slice(currentSlide, currentSlide + cardsToShow);

  return (
    <section id="projects" className="section-padding bg-[#F3F3F3] overflow-hidden">
      <div className="container mx-auto max-w-full px-4 xl:px-8">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0A0A0A] text-center mb-6">
            Projects
          </h2>
          <div className="w-24 h-[1px] bg-[#0A0A0A]/20 mx-auto mb-16" />
        </motion.div>

        {/* Desktop: Slider showing 4 cards at a time */}
        <div className="relative">
          {/* Slider Container - Hidden on mobile/tablet */}
          <div className="hidden xl:block overflow-hidden">
            <div 
              className="grid grid-cols-4 gap-6 transition-all duration-700 ease-out"
            >
              {visibleProjects.map((project, index) => (
                <motion.div
                  key={currentSlide + index}
                  className="project-vertical-card-full"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <div 
                    className="project-vertical-inner"
                    style={{ background: project.customGradient }}
                  >
                    <div className="project-badge">{project.num}</div>
                    <div className="project-vertical-content">
                      <h3 className="project-vertical-title">{project.title}</h3>
                      <p className="project-vertical-description">{project.description}</p>
                      <div className="project-vertical-stack">
                        {project.stack.map((tech, i) => (
                          <span key={i} className="project-vertical-tech">{tech}</span>
                        ))}
                      </div>
                      <div className="project-vertical-highlights">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="project-vertical-highlight">
                            <span className="highlight-dot" />
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-3 mt-auto pt-4 border-t border-[#0A0A0A]/10">
                        {project.github && (
                          <Link 
                            href={project.github} 
                            target="_blank" 
                            className="flex items-center gap-2 px-4 py-2 bg-[#0A0A0A]/10 hover:bg-[#FF4D00]/20 hover:border-[#FF4D00] border border-[#0A0A0A]/20 transition-all duration-300 text-[#0A0A0A] text-sm font-medium"
                          >
                            <FaGithub className="text-base" />
                            <span>GitHub</span>
                          </Link>
                        )}
                        {project.live && (
                          <Link 
                            href={project.live} 
                            target="_blank" 
                            className="flex items-center gap-2 px-4 py-2 bg-[#FF4D00] hover:bg-[#E50000] text-white border border-[#FF4D00] transition-all duration-300 text-sm font-medium"
                          >
                            <BsArrowUpRight className="text-base" />
                            <span>Live Demo</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet: Static Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:hidden gap-6">
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-vertical-card-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div 
                  className="project-vertical-inner"
                  style={{ background: project.customGradient }}
                >
                  <div className="project-badge">{project.num}</div>
                  <div className="project-vertical-content">
                    <h3 className="project-vertical-title">{project.title}</h3>
                    <p className="project-vertical-description">{project.description}</p>
                    <div className="project-vertical-stack">
                      {project.stack.map((tech, i) => (
                        <span key={i} className="project-vertical-tech">{tech}</span>
                      ))}
                    </div>
                    <div className="project-vertical-highlights">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="project-vertical-highlight">
                          <span className="highlight-dot" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3 mt-auto pt-4 border-t border-[#0A0A0A]/10">
                      {project.github && (
                        <Link 
                          href={project.github} 
                          target="_blank" 
                          className="flex items-center gap-2 px-4 py-2 bg-[#0A0A0A]/10 hover:bg-[#FF4D00]/20 hover:border-[#FF4D00] border border-[#0A0A0A]/20 transition-all duration-300 text-[#0A0A0A] text-sm font-medium"
                        >
                          <FaGithub className="text-base" />
                          <span>GitHub</span>
                        </Link>
                      )}
                      {project.live && (
                        <Link 
                          href={project.live} 
                          target="_blank" 
                          className="flex items-center gap-2 px-4 py-2 bg-[#FF4D00] hover:bg-[#E50000] text-white border border-[#FF4D00] transition-all duration-300 text-sm font-medium"
                        >
                          <BsArrowUpRight className="text-base" />
                          <span>Live Demo</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows - Desktop Only */}
          <button
            onClick={prevSlide}
            className="slider-arrow slider-arrow-left hidden xl:flex"
            aria-label="Previous slide"
            disabled={currentSlide === 0}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="slider-arrow slider-arrow-right hidden xl:flex"
            aria-label="Next slide"
            disabled={currentSlide === maxSlide}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Slide Indicators - Desktop Only */}
          <div className="slider-indicators hidden xl:flex">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Project Visuals - Infinite Scroll Gallery */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-[#0A0A0A] mb-4">
              Project Visuals
            </h3>
            <p className="text-[#666666] text-sm font-light">
              SCROLL
            </p>
          </div>

          {/* First row - Scrolling Left */}
          <InfiniteScrollGallery 
            images={[
              "/slider/101.png",
              "/slider/102.png",
              "/slider/103.png",
              "/slider/104.png",
              "/slider/106.png",
              "/slider/107.png",
              "/slider/108.png",
              "/slider/109.png",
              "/slider/110.png",
              "/slider/111.png",
              "/slider/112.png",
              "/slider/113.png",
              "/slider/115.png",
              "/slider/116.png",
              "/slider/118.png",
              "/slider/119.png",
            ]}
            direction="left"
          />

          {/* Second row - Scrolling Right */}
          <InfiniteScrollGallery 
            images={[
              "/slider/121.jpeg",
              "/slider/122.jpeg",
              "/slider/123.jpeg",
              "/slider/124.jpeg",
              "/slider/125.jpeg",
              "/slider/131.jpeg",
              "/slider/132.jpeg",
              "/slider/133.jpeg",
              "/slider/134.jpeg",
              "/slider/135.jpeg",
              "/slider/136.jpeg",
              "/slider/1001.jpeg",
              "/slider/1002.jpeg",
              "/slider/1003.jpeg",
              "/slider/1004.jpeg",
              "/slider/1005.jpeg",
              "/slider/1006.jpeg",
              "/slider/1007.jpeg",
              "/slider/1011.jpeg",
              "/slider/1012.jpeg",
              "/slider/1013.jpeg",
              "/slider/1014.jpeg",
              "/slider/1015.jpeg",
              "/slider/1016.jpeg",
              "/slider/1017.jpeg",
            ]}
            direction="right"
          />
        </motion.div>
      </div>
    </section>
  );
};

/* ── 5. EDUCATION, CERTIFICATIONS, ACHIEVEMENTS ── */
const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-[#FFFFFF]">
      <div className="container mx-auto max-w-6xl">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0A0A0A] text-center mb-6">
            Education & Achievements
          </h2>
          <div className="w-24 h-[1px] bg-[#0A0A0A]/20 mx-auto mb-16" />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          {/* Education */}
          <motion.div {...fadeInUp}>
            <h3 className="text-xl md:text-2xl font-light mb-8 flex items-center gap-3 text-[#0A0A0A]">
              <div className="w-10 h-10 border border-[#D8D8D8] flex items-center justify-center">
                <FaGraduationCap className="text-[#666666]" />
              </div>
              <span>Education</span>
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#D8D8D8] p-6 hover:border-[#FF4D00] transition-all duration-300 spotlight-card scale-lift magnetic-hover bg-white"
                >
                  <span className="text-[#666666] text-xs font-light px-2 py-1 border border-[#D8D8D8] inline-block mb-4">
                    {item.duration}
                  </span>
                  <h4 className="text-lg font-normal mt-3 text-[#0A0A0A] leading-tight">
                    {item.degree}
                  </h4>
                  <p className="text-[#666666] text-sm mt-2 font-light">
                    {item.institution}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#D8D8D8]">
                    <p className="text-[#0A0A0A]/70 text-sm font-light">
                      {item.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div {...fadeInUp}>
            <h3 className="text-xl md:text-2xl font-light mb-8 flex items-center gap-3 text-[#0A0A0A]">
              <div className="w-10 h-10 border border-[#D8D8D8] flex items-center justify-center">
                <FaCertificate className="text-[#666666]" />
              </div>
              <span>Certifications</span>
            </h3>
            <div className="space-y-6">
              {certifications.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#D8D8D8] p-6 hover:border-[#FF4D00] transition-all duration-300 spotlight-card scale-lift magnetic-hover bg-white"
                >
                  <span className="text-[#666666] text-xs font-light px-2 py-1 border border-[#D8D8D8] inline-block mb-4">
                    {item.date}
                  </span>
                  <h4 className="text-lg font-normal mt-3 text-[#0A0A0A]">
                    {item.title}
                  </h4>
                  <p className="text-[#666666] text-sm mt-2 font-light">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div {...fadeInUp}>
            <h3 className="text-xl md:text-2xl font-light mb-8 flex items-center gap-3 text-[#0A0A0A]">
              <div className="w-10 h-10 border border-[#D8D8D8] flex items-center justify-center">
                <FaTrophy className="text-[#666666]" />
              </div>
              <span>Leadership</span>
            </h3>
            <div className="space-y-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="border border-[#D8D8D8] p-6 hover:border-[#FF4D00] transition-all duration-300 spotlight-card scale-lift magnetic-hover bg-white"
                >
                  <h4 className="text-lg font-normal text-[#0A0A0A]">
                    {item.title}
                  </h4>
                  <p className="text-[#666666] text-sm mt-3 font-light leading-relaxed">
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

/* ── 6. CONTACT - DARK NAVY STYLE ── */
const ContactSection = () => {
  const [state, handleSubmit] = useForm("myzgzjwz");
  const [selectedService, setSelectedService] = useState("");

  if (state.succeeded) {
    return (
      <section id="contact" className="section-padding bg-[#1a1d2e]">
        <div className="container mx-auto flex flex-col items-center max-w-2xl">
          <div className="w-full border border-white/20 bg-[#252941] p-8 mb-8 flex items-center space-x-4 rounded">
            <div className="text-green-400 text-3xl">
              <FaCheckCircle />
            </div>
            <p className="text-center text-white font-light">
              Thanks for contacting me! I will get back to you soon.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-5 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 bg-[#252941] p-6 rounded hover:bg-[#2d3348] transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-xl text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1 font-light">
                    Email
                  </p>
                  <p className="text-white text-sm font-light">
                    pawartushar8485@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#252941] p-6 rounded hover:bg-[#2d3348] transition-colors">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <FaPhoneAlt className="text-xl text-blue-400" />
                </div>
                <div className="flex flex-col">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1 font-light">
                    Phone
                  </p>
                  <p className="text-white text-sm font-light">
                    +91 84858 33673
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#252941] p-6 rounded hover:bg-[#2d3348] transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-xl text-blue-400" />
              </div>
              <div className="flex flex-col">
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1 font-light">
                  Address
                </p>
                <p className="text-white text-sm font-light">
                  Pune, Maharashtra - 411007
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-[#1a1d2e]">
      <div className="container mx-auto max-w-7xl">
        <motion.div {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white text-center mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-[1px] bg-white/20 mx-auto mb-8" />
          
          {/* Connect with me - Social Icons */}
          <div className="text-center mb-16">
            <h3 className="text-xl font-light text-white/90 mb-6">Connect with me</h3>
            <div className="flex justify-center gap-4">
              <a 
                href="https://github.com/tanuj-cmd-15" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#252941] rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
              >
                <FaGithub className="text-2xl text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="mailto:pawartushar8485@gmail.com"
                className="w-14 h-14 bg-[#252941] rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
              >
                <FaEnvelope className="text-2xl text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="tel:+918485833673"
                className="w-14 h-14 bg-[#252941] rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
              >
                <FaPhoneAlt className="text-2xl text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://maps.google.com/?q=Pune+Maharashtra+411007"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#252941] rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group"
              >
                <FaMapMarkerAlt className="text-2xl text-white/70 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col xl:flex-row gap-12"
          {...fadeInUp}
        >
          {/* Form - Left Side */}
          <div className="xl:w-[55%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 bg-[#252941] p-10 rounded"
            >
              <h3 className="text-2xl xl:text-3xl text-white font-light">
                Let's Work Together
              </h3>
              <p className="text-white/50 text-sm xl:text-base font-light">
                I'm always interested in discussing new opportunities,
                research collaborations, or innovative ML/AI projects.
                Let's connect and explore how we can work together!
              </p>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-white/70 text-xs mb-2 block font-light">Name</label>
                  <Input
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="Your name"
                    required
                    className="bg-[#1a1d2e] border-white/10 text-white"
                  />
                </div>
                <div>
                  <label className="text-white/70 text-xs mb-2 block font-light">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-[#1a1d2e] border-white/10 text-white"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="text-white/70 text-xs mb-2 block font-light">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  className="h-[160px] bg-[#1a1d2e] border-white/10 text-white resize-none"
                  placeholder="Your message..."
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* Hidden service field */}
              <input type="hidden" name="service" value={selectedService} />

              {/* Button */}
              <div className="flex justify-start">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-normal"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
              
              {/* Error message */}
              {state.errors && state.errors.length > 0 && (
                <div className="text-red-400 text-sm text-center font-light">
                  Oops! There was an error submitting the form. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Info - Right Side */}
          <div className="flex-1 flex flex-col justify-center order-1 xl:order-none">
            <div className="mb-12">
              <h3 className="text-2xl font-light text-white mb-6">Contact Information</h3>
              <p className="text-white/60 text-base font-light leading-relaxed">
                I'm always interested in discussing new opportunities,
                research collaborations, or innovative ML/AI projects.
                Let's connect and explore how we can work together!
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-6 bg-[#252941] p-6 rounded hover:bg-[#2d3348] transition-colors">
                <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-2xl text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1 font-light">
                    Email
                  </p>
                  <p className="text-white text-sm xl:text-base font-light">
                    pawartushar8485@gmail.com
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-6 bg-[#252941] p-6 rounded hover:bg-[#2d3348] transition-colors">
                <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-2xl text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1 font-light">
                    Phone
                  </p>
                  <p className="text-white text-sm xl:text-base font-light">
                    +91 84858 33673
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-6 bg-[#252941] p-6 rounded hover:bg-[#2d3348] transition-colors">
                <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-2xl text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white/50 text-xs uppercase tracking-wider mb-1 font-light">
                    Address
                  </p>
                  <p className="text-white text-sm xl:text-base font-light">
                    Pune, Maharashtra - 411007
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ── FOOTER ── */
const Footer = () => (
  <footer className="py-12 bg-[#FFFFFF] border-t border-[#D8D8D8]">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo/Name */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-light tracking-wider text-[#0A0A0A] mb-2">
            TUSHAR PAWAR
          </h3>
          <p className="text-sm text-[#666666] font-light">
            Machine Learning Engineer & Data Scientist
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex gap-6">
          <a href="#hero" className="text-sm text-[#666666] hover:text-[#FF4D00] transition-colors duration-300 font-light uppercase">
            Home
          </a>
          <a href="#about" className="text-sm text-[#666666] hover:text-[#FF4D00] transition-colors duration-300 font-light uppercase">
            About
          </a>
          <a href="#projects" className="text-sm text-[#666666] hover:text-[#FF4D00] transition-colors duration-300 font-light uppercase">
            Projects
          </a>
          <a href="#contact" className="text-sm text-[#666666] hover:text-[#FF4D00] transition-colors duration-300 font-light uppercase">
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p className="text-sm text-[#666666] font-light">
            © {new Date().getFullYear()} Tushar Pawar
          </p>
          <p className="text-xs text-[#999999] font-light mt-1">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  </footer>
);

/* ────────────────── MAIN PAGE ────────────────── */

const Home = () => {
  return (
    <>
      <HeroSection />

      <AboutSection />

      <div className="container mx-auto max-w-6xl">
        <div className="h-[1px] bg-[#D8D8D8]" />
      </div>

      <ProjectsSection />

      <div className="container mx-auto max-w-6xl">
        <div className="h-[1px] bg-[#D8D8D8]" />
      </div>

      <SkillsSection />

      <div className="container mx-auto max-w-6xl">
        <div className="h-[1px] bg-[#D8D8D8]" />
      </div>

      <EducationSection />

      <div className="container mx-auto max-w-6xl">
        <div className="h-[1px] bg-[#D8D8D8]" />
      </div>

      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
