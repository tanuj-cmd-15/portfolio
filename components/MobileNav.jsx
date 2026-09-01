"use client";

import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const links = [
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Experience", path: "#experience" },
  { name: "Awards", path: "#awards" },
  { name: "Contact", path: "#contact" },
];

const MobileNav = () => {
  const handleClick = (e, path) => {
    e.preventDefault();
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[28px] text-white" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-[#09090b] border-l border-white/10">
        {/* Logo */}
        <div className="mt-20 mb-16 text-center">
          <a href="#hero">
            <h1 className="text-2xl font-heading font-bold text-white">
              Tushar<span className="text-accent">.</span>
            </h1>
          </a>
        </div>

        <nav className="flex flex-col justify-center items-center gap-6">
          {links.map((link, index) => (
            <a
              href={link.path}
              key={index}
              onClick={(e) => handleClick(e, link.path)}
              className="text-lg text-white/50 hover:text-white transition-colors duration-300 font-light"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="mt-auto mb-8 flex justify-center">
          <a href="#contact" className="pill-btn pill-btn-copper">
            Let&apos;s Talk
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;