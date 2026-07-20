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
import TechStackSlider from "@/components/TechStackSlider";

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

/* ── 1. HERO ── */
const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-72px)] flex items-center relative overflow-hidden pt-2">
      {/* Subtle background gradient orbs using steel & charcoal */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full bg-steel/5 blur-[120px]" />
      <div className="absolute bottom-20 -right-40 w-[600px] h-[600px] rounded-full bg-charcoal/30 blur-[120px]" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-0 xl:pb-16">
          {/* Text */}
          <motion.div
            className="text-center xl:text-left order-2 xl:order-none"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-xl text-slate">
              Machine Learning Engineer & Data Scientist
            </span>
            <h1 className="h1 mb-6">
              Hello I&apos;m
              <br />{" "}
              <span className="text-accent">Tushar Pawar</span>
            </h1>
            <p className="max-w-[540px] mb-9 text-slate text-base leading-relaxed">
              M.Tech (CGPA 9.15) candidate specializing in Deep Learning and
              applied ML, with hands-on experience building CNN-BiLSTM-Attention
              architectures on a 34,700+ sample audio dataset (0.91% EER,
              98.77% accuracy). Proficient in Python, PyTorch, SQL, and
              building end-to-end ML pipelines.
            </p>

            {/* Buttons and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Get In Touch</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="social-3d w-9 h-9 border border-steel rounded-full flex justify-center items-center text-slate text-base hover:bg-accent hover:text-primary hover:border-accent hover:transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-1 xl:order-none mb-8 xl:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Photo />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden xl:flex justify-center -mt-12">
          <a href="#about" className="scroll-indicator text-steel hover:text-accent transition-colors">
            <BsArrowDown className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

/* ── 2. ABOUT ── */
const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="h2 text-center mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="section-divider mb-12" />
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-12">
          {/* Description */}
          <motion.div className="xl:w-1/2" {...fadeInLeft}>
            <p className="text-slate leading-relaxed mb-8">
              I&apos;m a passionate M.Tech candidate specializing in Deep
              Learning and applied ML. With hands-on experience in building and
              evaluating CNN-BiLSTM-Attention architectures, I thrive on solving
              complex problems with data-driven approaches. Proficient in Python,
              PyTorch, SQL, and building end-to-end ML pipelines from data
              preprocessing through model evaluation.
            </p>
            <p className="text-steel leading-relaxed">
              I bring strong skills in problem solving, analytical thinking, and
              team collaboration. Currently seeking Machine Learning Engineer,
              Data Scientist, or Data Engineer roles where I can apply my
              expertise to impactful projects.
            </p>
          </motion.div>

          {/* Info Grid */}
          <motion.div className="xl:w-1/2" {...fadeInRight}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {aboutInfo.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex flex-col gap-1 p-4 rounded-xl bg-charcoal/50 border border-steel/20 hover:border-steel/50 transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-steel text-sm">{item.fieldName}</span>
                  <span className="text-accent text-base">
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

/* ── 3. SKILLS ── */
const SkillCategory = ({ title, skillList }) => (
  <div className="mb-8">
    <h4 className="text-lg font-semibold text-slate mb-4 flex items-center gap-3">
      <span className="w-8 h-[2px] bg-steel inline-block" />
      {title}
    </h4>
    <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
      {skillList.map((skill, index) => (
        <li key={index}>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger className="w-full h-[100px] bg-charcoal rounded-xl flex justify-center items-center group border border-steel/10 hover:border-accent/40 hover:bg-charcoal/80 card-glow transition-all duration-300">
                <div className="text-4xl text-steel group-hover:text-accent transition-all duration-300">
                  {skill.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p className="capitalize">{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      ))}
    </ul>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding section-alt">
      <div className="container mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="h2 text-center mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <div className="section-divider mb-12" />
          <p className="max-w-[700px] text-slate mx-auto text-center mb-12">
            My core expertise lies in building ML pipelines and full-stack
            applications, from data preprocessing through model evaluation and
            deployment.
          </p>
        </motion.div>

        <motion.div {...fadeInUp}>
          <SkillCategory title="Languages" skillList={skills.languages} />
          <SkillCategory title="AI/ML & Libraries" skillList={skills.aiml} />
          <SkillCategory
            title="Web & Frameworks"
            skillList={skills.webFrameworks}
          />
          <SkillCategory title="Tools & Platforms" skillList={skills.tools} />
        </motion.div>

        {/* Soft Skills */}
        <motion.div className="mt-8" {...fadeInUp}>
          <h4 className="text-lg font-semibold text-slate mb-4 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-steel inline-block" />
            Soft Skills
          </h4>
          <div className="flex flex-wrap gap-3">
            {[
              "Problem Solving",
              "Analytical Thinking",
              "Team Collaboration",
              "Adaptive Learning",
              "Decision Making",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full border border-steel text-slate text-sm hover:bg-steel/20 hover:text-accent hover:border-accent/30 transition-all duration-300"
              >
                {skill}
              </span>
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
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="h2 text-center mb-4">
            My <span className="text-accent">Projects</span>
          </h2>
          <div className="section-divider mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-charcoal/60 rounded-2xl p-8 xl:p-10 border border-steel/15 hover:border-steel/40 card-glow transition-all duration-500 group"
              {...fadeInUp}
            >
              <div className="flex flex-col xl:flex-row gap-8">
                {/* Left: Number + Title */}
                <div className="xl:w-1/3">
                  <span className="text-6xl font-extrabold text-steel/30 group-hover:text-steel/60 transition-all duration-500">
                    {project.num}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-4 text-white group-hover:text-accent transition-all duration-500">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm text-accent bg-steel/20 px-3 py-1 rounded-full border border-steel/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-steel hover:text-accent transition-colors"
                  >
                    <BsArrowUpRight className="text-lg" />
                    <span className="text-sm">View on GitHub</span>
                  </Link>
                </div>

                {/* Right: Description + Highlights */}
                <div className="xl:w-2/3">
                  <p className="text-slate leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {project.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-2 text-sm text-accent/90 bg-primary/50 px-3 py-1.5 rounded-lg border border-steel/20"
                      >
                        <span className="w-2 h-2 rounded-full bg-accent" />
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
    <section id="education" className="section-padding section-alt">
      <div className="container mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="h2 text-center mb-4">
            Education & <span className="text-accent">Achievements</span>
          </h2>
          <div className="section-divider mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
          {/* Education */}
          <motion.div {...fadeInUp}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-charcoal rounded-lg flex items-center justify-center border border-steel/30">
                <FaGraduationCap className="text-accent" />
              </div>
              <span>Education</span>
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="bg-charcoal p-6 rounded-xl border border-steel/20 hover:border-steel/50 card-glow transition-all duration-300"
                >
                  <span className="text-accent text-sm font-medium px-2 py-0.5 rounded bg-steel/15">{item.duration}</span>
                  <h4 className="text-lg font-semibold mt-3 text-white">{item.degree}</h4>
                  <p className="text-steel text-sm mt-1">
                    {item.institution}
                  </p>
                  <div className="mt-3 pt-3 border-t border-steel/15">
                    <p className="text-accent text-sm font-medium">
                      {item.result}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div {...fadeInUp}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-charcoal rounded-lg flex items-center justify-center border border-steel/30">
                <FaCertificate className="text-accent" />
              </div>
              <span>Certifications</span>
            </h3>
            <div className="space-y-6">
              {certifications.map((item, index) => (
                <div
                  key={index}
                  className="bg-charcoal p-6 rounded-xl border border-steel/20 hover:border-steel/50 card-glow transition-all duration-300"
                >
                  <span className="text-slate text-sm font-medium px-2 py-0.5 rounded bg-steel/15">{item.date}</span>
                  <h4 className="text-lg font-semibold mt-3 text-white">{item.title}</h4>
                  <p className="text-steel text-sm mt-2">{item.details}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div {...fadeInUp}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-charcoal rounded-lg flex items-center justify-center border border-steel/30">
                <FaTrophy className="text-accent" />
              </div>
              <span>Leadership</span>
            </h3>
            <div className="space-y-6">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="bg-charcoal p-6 rounded-xl border border-steel/20 hover:border-steel/50 card-glow transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-accent">
                    {item.title}
                  </h4>
                  <p className="text-slate text-sm mt-2">
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
      <section id="contact" className="section-padding">
        <div className="container mx-auto flex flex-col items-center">
          <div className="max-w-lg w-full bg-charcoal rounded-xl border border-accent/30 p-6 mb-6 flex items-center space-x-4 glow-accent">
            <div className="text-accent text-3xl">
              <FaCheckCircle />
            </div>
            <p className="text-center text-accent">
              Thanks for contacting me! I will get back to you soon.
            </p>
          </div>

          <div className="flex flex-col xl:flex-col gap-6 mt-5">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div
                  className="w-12 h-12 xl:w-16 xl:h-16
                 bg-charcoal text-accent rounded-xl border border-steel/20
                 flex items-center justify-center"
                >
                  <div className="text-xl xl:text-2xl">{item.icon}</div>
                </div>
                <div className="flex flex-col">
                  <p className="text-steel text-sm xl:text-base">
                    {item.title}
                  </p>
                  <p className="text-white text-sm xl:text-base">
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
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <motion.div {...fadeInUp}>
          <h2 className="h2 text-center mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <div className="section-divider mb-12" />
        </motion.div>

        <motion.div
          className="flex flex-col xl:flex-row gap-[30px]"
          {...fadeInUp}
        >
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-charcoal rounded-xl border border-steel/20"
            >
              <h3 className="text-2xl xl:text-3xl text-accent">
                Let&apos;s Work Together
              </h3>
              <p className="text-steel text-sm xl:text-md">
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
                  className="w-full md:w-1/2 h-12"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
              
              {/* Error message */}
              {state.errors && state.errors.length > 0 && (
                <div className="text-red-500 text-sm text-center">
                  Oops! There was an error submitting the form. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-charcoal text-accent rounded-xl border border-steel/20 flex items-center justify-center hover:border-steel/50 transition-colors">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-steel text-sm xl:text-base">
                      {item.title}
                    </p>
                    <p className="text-accent text-sm xl:text-lg">
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
  <footer className="py-8 border-t border-steel/20">
    <div className="container mx-auto text-center">
      <p className="text-steel text-sm">
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

      <div className="container mx-auto">
        <Stats />
      </div>

      {/* Tech Stack Slider - Infinite horizontal scroll */}
      <TechStackSlider />

      {/* Gradient line separator */}
      <div className="container mx-auto">
        <div className="gradient-border h-[1px] rounded-full opacity-30" />
      </div>

      <AboutSection />

      <div className="container mx-auto">
        <div className="gradient-border h-[1px] rounded-full opacity-30" />
      </div>

      <SkillsSection />

      <div className="container mx-auto">
        <div className="gradient-border h-[1px] rounded-full opacity-30" />
      </div>

      <ProjectsSection />

      <div className="container mx-auto">
        <div className="gradient-border h-[1px] rounded-full opacity-30" />
      </div>

      <EducationSection />

      <div className="container mx-auto">
        <div className="gradient-border h-[1px] rounded-full opacity-30" />
      </div>

      <ContactSection />
      <Footer />
    </>
  );
};

export default Home;
