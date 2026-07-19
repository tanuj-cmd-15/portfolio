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
            className="capitalize font-medium hover:text-accent transition-all cursor-pointer"
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;