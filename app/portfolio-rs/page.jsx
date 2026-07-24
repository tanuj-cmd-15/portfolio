"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

/* ══════════════════════════════════════════════════════════════
   RS PORTFOLIO - HIGH-PERFORMANCE ARCHITECTURE
   ══════════════════════════════════════════════════════════════ */

// Navigation Component
const Navigation = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full z-[300] bg-[#F3F3F3]/95 backdrop-blur-sm border-b border-[#D8D8D8]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
    >
      <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Initials Logo */}
        <motion.div 
          className="text-2xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.25 }}
        >
          <span className="text-[#0A0A0A]">TP</span>
        </motion.div>

        {/* Menu Trigger */}
        <motion.button
          className="text-2xl font-bold text-[#0A0A0A] hover:text-[#FF4D00] transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open menu"
        >
          =
        </motion.button>
      </div>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="pt-[80px] pb-16 px-6">
      {/* Accent Banner */}
      <div className="accent-banner mb-8" />

      <div className="max-w-[1440px] mx-auto">
        {/* Bracketed Tag */}
        <motion.div 
          className="mono-tag mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          [OPTIMIZED CODE]
        </motion.div>

        {/* Massive Display Headers */}
        <div className="overflow-hidden">
          <motion.h1 
            className="display-heading leading-[0.9]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
          >
            ENGINEERING
          </motion.h1>
          <motion.h1 
            className="display-heading leading-[0.9]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.65, 0, 0.35, 1] }}
          >
            IMMERSIVE
          </motion.h1>
          <motion.h1 
            className="display-heading leading-[0.9]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.65, 0, 0.35, 1] }}
          >
            ML EXPERIENCES
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p 
          className="meta-text mt-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          [ROLE: ML ENGINEER / DATA SCIENTIST] Building production-grade AI/ML pipelines
          with 98.77% accuracy across 34,700+ samples.
        </motion.p>
      </div>
    </section>
  );
};

// Project List Item
const ProjectListItem = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="grid-border py-8 cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-12 gap-6 items-center">
        {/* Project Number */}
        <div className="col-span-1">
          <span className="mono-tag">[{project.num}]</span>
        </div>

        {/* Project Title */}
        <div className="col-span-5">
          <h3 className="heading-lg">{project.title}</h3>
          <div className="flex gap-2 mt-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="mono-tag">[{tag}]</span>
            ))}
          </div>
        </div>

        {/* Role Description */}
        <div className="col-span-4">
          <p className="meta-text">{project.role}</p>
        </div>

        {/* Image Preview */}
        <div className="col-span-2">
          <motion.div 
            className="image-reveal-container aspect-[4/3] rounded-lg overflow-hidden"
            animate={{
              scale: isHovered ? 1.05 : 1,
              opacity: isHovered ? 1 : 0.6
            }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Selected Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      num: "01",
      title: "Audio Deepfake Detection",
      tags: ["PYTORCH", "OPEN"],
      role: "CNN-BiLSTM Model • 98.77% Accuracy",
      image: "/slider/101.png"
    },
    {
      num: "02",
      title: "OCR Intelligence System",
      tags: ["FASTAPI", "OPENCV"],
      role: "Document Processing • 25% Improvement",
      image: "/slider/102.png"
    },
    {
      num: "03",
      title: "Artsoll UI/UX Design",
      tags: ["FIGMA", "DESIGN"],
      role: "E-Commerce Platform • Minimal Interface",
      image: "/slider/103.png"
    },
    {
      num: "04",
      title: "BeautyBloom E-Commerce",
      tags: ["SPRING BOOT", "REACT"],
      role: "Full-Stack Platform • 40+ REST APIs",
      image: "/slider/104.png"
    },
    {
      num: "05",
      title: "DOT Certificate Platform",
      tags: ["NEXT.JS", "TYPESCRIPT"],
      role: "Automated Credentials • 400+ Certificates",
      image: "/slider/106.png"
    }
  ];

  return (
    <section className="px-6 py-16">
      <div className="max-w-[1440px] mx-auto">
        <motion.h2 
          className="heading-xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          SELECTED PROJECTS
        </motion.h2>

        <div>
          {projects.map((project, index) => (
            <ProjectListItem key={project.num} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Interactive Playground
const PlaygroundSection = () => {
  const experiments = [
    { title: "DEPTH SCROLL", tech: "GSAP", color: "#FF4D00" },
    { title: "3D SCROLL", tech: "THREE.JS", color: "#E50000" },
    { title: "HOVER EFFECT", tech: "WEBGL", color: "#FF4D00" },
    { title: "IMMERSIVE SPHERE", tech: "R3F", color: "#E50000" }
  ];

  return (
    <section className="px-6 py-16 bg-[#FFFFFF]">
      <div className="max-w-[1440px] mx-auto">
        <motion.h2 
          className="heading-xl mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          INTERACTIVE PLAYGROUND
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiments.map((exp, index) => (
            <motion.div
              key={index}
              className="card-surface p-8 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div 
                className="w-full aspect-square mb-4 rounded-lg"
                style={{ backgroundColor: exp.color }}
              />
              <h3 className="font-semibold text-lg mb-2">{exp.title}</h3>
              <span className="mono-tag">[{exp.tech}]</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Marquee Ticker
const MarqueeTicker = () => {
  const skills = [
    "REACT / NEXT.JS",
    "PYTORCH",
    "GSAP",
    "THREE.JS",
    "TENSORFLOW",
    "FASTAPI",
    "DOCKER",
    "AWS"
  ];

  return (
    <div className="bg-[#0A0A0A] py-8 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center px-8">
              <span className="text-[#F3F3F3] text-2xl font-bold whitespace-nowrap">
                {skill}
              </span>
              <span className="text-[#FF4D00] text-2xl mx-8">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="px-6 py-16 bg-[#0A0A0A]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-[#F3F3F3] font-bold text-xl mb-4">GET IN TOUCH</h3>
            <p className="text-[#666666] mono-tag">[AVAILABLE FOR HIRE]</p>
          </div>
          <div>
            <p className="text-[#F3F3F3]">pawartushar8485@gmail.com</p>
            <p className="text-[#666666] mt-2">+91 84858 33673</p>
          </div>
          <div>
            <p className="text-[#666666]">Pune, Maharashtra</p>
            <p className="text-[#666666]">India - 411007</p>
          </div>
        </div>
        
        <div className="border-t border-[#D8D8D8] pt-8">
          <p className="text-[#666666] text-sm">
            © 2026 Tushar Pawar. Built with Next.js & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Page Component
import { useState } from "react";

export default function RSPortfolio() {
  return (
    <div className="relative bg-[#F3F3F3]">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      
      <Navigation />
      
      <main id="main-content">
        <HeroSection />
        <ProjectsSection />
        <PlaygroundSection />
        <MarqueeTicker />
        <Footer />
      </main>
    </div>
  );
}
