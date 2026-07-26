"use client";

import Link from "next/link";

const links = [
  { name: "home", path: "#hero" },
  { name: "about", path: "#about" },
  { name: "skills", path: "#skills" },
  { name: "projects", path: "#projects" },
  { name: "education", path: "#education" },
  { name: "contact", path: "#contact" },
];

const Nav = () => {
  const handleClick = (e, path) => {
    e.preventDefault();
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <a
            href={link.path}
            key={index}
            onClick={(e) => handleClick(e, link.path)}
            className="text-sm uppercase tracking-wider text-[#666666] hover:text-[#FF4D00] transition-colors duration-300 font-light relative group"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF4D00] group-hover:w-full transition-all duration-300"></span>
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;