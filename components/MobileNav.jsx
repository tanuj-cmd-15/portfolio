"use client";

import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const links = [
  { name: "home", path: "#hero" },
  { name: "about", path: "#about" },
  { name: "skills", path: "#skills" },
  { name: "projects", path: "#projects" },
  { name: "education", path: "#education" },
  { name: "contact", path: "#contact" },
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
        <CiMenuFries className="text-[32px] text-[#0A0A0A]" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-[#FFFFFF] border-l border-[#D8D8D8]">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <a href="#hero">
            <h1 className="text-4xl font-semibold text-[#0A0A0A]">
              Tushar<span className="text-[#FF4D00]">.</span>
            </h1>
          </a>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <a
                href={link.path}
                key={index}
                onClick={(e) => handleClick(e, link.path)}
                className="text-xl uppercase tracking-wider text-[#666666] hover:text-[#FF4D00] transition-colors duration-300 font-light"
              >
                {link.name}
              </a>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;