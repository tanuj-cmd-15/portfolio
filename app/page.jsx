"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import Social from "@/components/Social";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
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
  FaArrowRight,
  FaArrowDown,
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
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";

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
    { icon: <span className="text-2xl font-bold">T</span>, name: "Tesseract" },
    { icon: <span className="text-2xl font-bold">L</span>, name: "Librosa" },
    { icon: <span className="text-lg font-bold">NLP</span>, name: "NLP" },
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

const allSkillNames = [
  ...skills.languages.map(s => s.name),
  ...skills.aiml.map(s => s.name),
  ...skills.webFrameworks.map(s => s.name),
  ...skills.tools.map(s => s.name),
];

const projects = [
  {
    num: "01",
    title: "DOT Digital Certificate Platform",
    description:
      "Production certificate-management system for SPPU's Department of Technology built with Next.js 14, TypeScript, and MongoDB Atlas. Automated credential generation, distribution, and public verification end-to-end.",
    stack: ["Next.js 14", "TypeScript", "MongoDB", "Supabase", "pdf-lib"],
    github: "https://github.com/tusharpawar1217",
    live: null,
    metrics: ["400+ verified certificates issued", "Sub-500ms PDF generation", "JWT session auth"],
  },
  {
    num: "02",
    title: "BeautyBloom Studio E-Commerce",
    description:
      "Full-stack e-commerce platform implementing Domain-Driven Design with Spring Boot and React TypeScript. Architected 40+ RESTful API endpoints for catalog, cart, and order management.",
    stack: ["Spring Boot", "React", "TypeScript", "MySQL", "Stripe"],
    github: "https://github.com/tusharpawar1217",
    live: null,
    metrics: ["40+ REST API endpoints", "Handles 1000+ concurrent users", "Firebase OAuth"],
  },
  {
    num: "03",
    title: "Artsoll — Art E-Commerce UI/UX",
    description:
      "Designed intuitive art marketplace connecting artists with collectors through minimalist interface. Implemented distraction-free gallery grids and interactive artwork previews.",
    stack: ["Figma", "Adobe CC", "UI/UX Design", "Prototyping"],
    github: null,
    live: "https://www.behance.net/gallery/156272515/Artsoll-Website",
    metrics: ["40% increase in engagement", "65% checkout completion", "A/B tested 500+ users"],
  },
  {
    num: "04",
    title: "OCR Document Intelligence System",
    description:
      "End-to-end OCR pipeline with advanced image preprocessing using OpenCV. Achieved 25% improvement in text extraction accuracy on degraded documents with sub-100ms latency.",
    stack: ["FastAPI", "Tesseract", "OpenCV", "React", "PostgreSQL"],
    github: "https://github.com/tusharpawar1217",
    live: null,
    metrics: ["25% accuracy improvement", "Sub-100ms processing", "10K+ docs/day"],
  },
  {
    num: "05",
    title: "Audio Deepfake Detection (SwarParikshak)",
    description:
      "CNN-BiLSTM-Attention architecture fusing LFCC and Mel-spectrogram features for multilingual audio deepfake detection. 0.91% EER and 98.77% validation accuracy.",
    stack: ["PyTorch", "Librosa", "Whisper", "Python"],
    github: "https://github.com/tusharpawar1217",
    live: null,
    metrics: ["0.91% Equal Error Rate", "98.77% accuracy", "34,700+ audio samples"],
  },
  {
    num: "06",
    title: "AI-Powered Interview Platform",
    description:
      "AI recruitment platform with LLM-based semantic answer scoring and emotion detection for automated HR and technical interviews. Resume-parsing ATS pipeline with WebSocket live feedback.",
    stack: ["NLP", "FastAPI", "React", "WebSockets", "SQL"],
    github: "https://github.com/tusharpawar1217",
    live: null,
    metrics: ["LLM semantic scoring", "Real-time WebSocket feedback", "Resume parsing ATS"],
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
      "Organized campus hackathons and technical events, handling planning and logistics for 200+ participants.",
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

/* ───────────────── ANIMATION VARIANTS ───────────────── */

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px", amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const staggerChild = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut", delay },
});

/* ────────────────── SECTION COMPONENTS ────────────────── */

/* ═══ 1. HERO ═══ */
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Top status */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-green" />
              <span className="text-sm text-white/60">Available for opportunities</span>
            </div>
            <span className="text-sm text-white/30 hidden md:inline">📍 Pune, India</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="font-heading font-[800] text-[clamp(3rem,10vw,9rem)] leading-[0.9] tracking-[-0.04em] text-white mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            TUSHAR
            <br />
            PAWAR<span className="text-accent">.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-white/50 max-w-xl mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            ML Engineer & Data Scientist building intelligent systems,{" "}
            <span className="text-white/80">data pipelines, and full-stack applications</span> with
            precision, innovation and impact.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap items-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <a href="#contact" className="pill-btn pill-btn-white">
              Hire Me <BsArrowUpRight className="text-sm" />
            </a>
            <a href="#about" className="pill-btn pill-btn-outline">
              Explore <FaArrowDown className="text-xs" />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Social />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse" />
        <p className="text-white/30 text-[10px] mt-2 uppercase tracking-[0.3em] font-mono">Scroll</p>
      </motion.div>
    </section>
  );
};

/* ═══ 2. ABOUT ═══ */
const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.p className="section-label" {...fadeInUp}>
          // ABOUT ME
        </motion.p>

        <motion.h2 className="section-heading mb-16" {...fadeInUp}>
          CRAFTING <span className="accent">INTELLIGENCE,</span>
          <br />
          ONE PIPELINE AT A TIME.
        </motion.h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {/* About Text — spans 2 cols */}
          <motion.div
            className="bento-card md:col-span-2 xl:col-span-2"
            {...staggerChild(0.1)}
          >
            <p className="text-white/60 leading-[1.8] text-[0.95rem] mb-4">
              I'm a passionate <span className="text-white">M.Tech candidate</span> specializing in Deep
              Learning and applied ML. With hands-on experience in building and evaluating
              CNN-BiLSTM-Attention architectures, I thrive on solving complex problems with data-driven approaches.
            </p>
            <p className="text-white/60 leading-[1.8] text-[0.95rem]">
              Proficient in <span className="text-white">Python, PyTorch, SQL</span>, and building end-to-end ML
              pipelines from data preprocessing through model evaluation. Currently seeking{" "}
              <span className="text-accent">Machine Learning Engineer, Data Scientist, or Data Engineer</span> roles.
            </p>
          </motion.div>

          {/* Education Card */}
          <motion.div className="bento-card" {...staggerChild(0.2)}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <FaGraduationCap />
              </div>
              <h3 className="font-heading font-bold text-lg">Education</h3>
            </div>
            <div className="space-y-5">
              {education.map((edu, i) => (
                <div key={i} className="border-l-2 border-accent/30 pl-4">
                  <p className="text-white font-medium text-sm">{edu.degree}</p>
                  <p className="text-white/40 text-xs mt-1">{edu.institution}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-accent text-xs font-mono">{edu.duration}</span>
                    <span className="text-white/50 text-xs">{edu.result}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Row */}
          {[
            { num: "06", label: "Production Systems\nShipped" },
            { num: "9.15", label: "M.Tech CGPA\nAcademic Topper" },
            { num: "02", label: "Professional\nCertifications" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bento-card flex flex-col justify-center items-center text-center py-8"
              {...staggerChild(0.3 + i * 0.1)}
            >
              <div className="stat-number">{stat.num}</div>
              <div className="stat-label whitespace-pre-line">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══ 3. SKILLS ═══ */
const SkillsSection = () => {
  const categories = [
    { title: "Languages", items: skills.languages },
    { title: "AI / ML", items: skills.aiml },
    { title: "Web & Frameworks", items: skills.webFrameworks },
    { title: "Tools & Cloud", items: skills.tools },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.p className="section-label" {...fadeInUp}>
          // TECH STACK
        </motion.p>

        <motion.h2 className="section-heading mb-6" {...fadeInUp}>
          TOOLS OF THE <span className="accent">TRADE.</span>
        </motion.h2>

        {/* Marquee */}
        <div className="overflow-hidden mb-16 -mx-4 md:-mx-8">
          <div className="marquee-track">
            {[...allSkillNames, ...allSkillNames].map((name, i) => (
              <span key={i} className="marquee-item">
                {name}
                <span className="text-white/10 mx-4">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              className="bento-card"
              {...staggerChild(catIdx * 0.1)}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-white/30 mb-6">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill, i) => (
                  <div
                    key={i}
                    className="tech-tag group"
                  >
                    <span className="text-base group-hover:text-accent transition-colors">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══ 4. PROJECTS ═══ */
const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.p className="section-label" {...fadeInUp}>
          // SELECTED WORK
        </motion.p>

        <motion.h2 className="section-heading mb-16" {...fadeInUp}>
          BUILT. SHIPPED.<br /><span className="accent">RUNNING.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              {...staggerChild(index * 0.08)}
            >
              <div className="project-num">/{project.num}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <span key={i} className="tech-tag text-[11px]">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="space-y-2 mb-5">
                {project.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/40">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    {metric}
                  </div>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 mt-auto pt-4 border-t border-white/5">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 text-white/60 hover:text-white text-xs"
                  >
                    <FaGithub className="text-sm" />
                    <span>GitHub</span>
                  </Link>
                )}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent hover:bg-accent-hover text-black transition-all duration-300 text-xs font-medium"
                  >
                    <BsArrowUpRight className="text-sm" />
                    <span>Live</span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



/* ═══ 6. AWARDS & CERTIFICATIONS ═══ */
const AwardsSection = () => {
  return (
    <section id="awards" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.p className="section-label" {...fadeInUp}>
          // RECOGNITION
        </motion.p>

        <motion.h2 className="section-heading mb-16" {...fadeInUp}>
          WINS WORTH <span className="accent">FRAMING.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Achievements */}
          <motion.div className="bento-card" {...staggerChild(0.1)}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <FaTrophy />
              </div>
              <h3 className="font-heading font-bold text-lg">Achievements</h3>
            </div>
            <div className="space-y-5">
              {achievements.map((item, i) => (
                <div key={i} className="border-l-2 border-accent/30 pl-4">
                  <p className="text-white font-medium text-sm">{item.title}</p>
                  <p className="text-white/40 text-xs mt-2 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div className="bento-card" {...staggerChild(0.2)}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <FaCertificate />
              </div>
              <h3 className="font-heading font-bold text-lg">Certifications</h3>
            </div>
            <div className="space-y-5">
              {certifications.map((cert, i) => (
                <div key={i} className="border-l-2 border-accent/30 pl-4">
                  <p className="text-white font-medium text-sm">{cert.title}</p>
                  <p className="text-white/40 text-xs mt-1">{cert.details}</p>
                  <span className="text-accent text-xs font-mono mt-2 inline-block">{cert.date}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ═══ 7. CONTACT ═══ */
const ContactSection = () => {
  const [formState, handleSubmit] = useForm("xyzgbaqw");

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <motion.p className="section-label" {...fadeInUp}>
          // GET IN TOUCH
        </motion.p>

        <motion.h2 className="section-heading mb-16" {...fadeInUp}>
          LET&apos;S BUILD <span className="accent">SOMETHING.</span>
        </motion.h2>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-5">
          {/* Contact Form */}
          <motion.div className="bento-card xl:col-span-3" {...staggerChild(0.1)}>
            {formState.succeeded ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-white/50 text-sm">I&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-white/30 uppercase tracking-wider mb-2 block font-mono">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/30 uppercase tracking-wider mb-2 block font-mono">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="form-input"
                    />
                    <ValidationError prefix="Email" field="email" errors={formState.errors} />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-white/30 uppercase tracking-wider mb-2 block font-mono">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="text-xs text-white/30 uppercase tracking-wider mb-2 block font-mono">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="form-input resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={formState.errors} />
                </div>
                <button
                  type="submit"
                  disabled={formState.submitting}
                  className="pill-btn pill-btn-copper w-full justify-center text-base"
                >
                  {formState.submitting ? "Sending..." : "Send Message"}
                  <FaArrowRight className="text-sm" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <div className="xl:col-span-2 grid grid-cols-1 gap-5">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                className="bento-card flex items-start gap-4"
                {...staggerChild(0.2 + i * 0.1)}
              >
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-wider font-mono mb-1">{info.title}</p>
                  <p className="text-white text-sm">{info.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Card */}
            <motion.div className="bento-card" {...staggerChild(0.5)}>
              <p className="text-white/30 text-xs uppercase tracking-wider font-mono mb-4">Connect</p>
              <Social />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══ 8. FOOTER ═══ */
const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden py-20 border-t border-white/5">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="footer-bg-text text-center">
          LET&apos;S
          <br />
          BUILD
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading font-bold text-xl text-white">
              Tushar Pawar<span className="text-accent">.</span>
            </p>
            <p className="text-white/30 text-xs mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <Social />
        </div>
      </div>
    </footer>
  );
};

/* ════════════════ PAGE ════════════════ */
export default function Home() {
  // Bento card mouse spotlight effect
  useEffect(() => {
    const cards = document.querySelectorAll('.bento-card');
    const handleMouseMove = (e) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AwardsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
