"use client";

const links = [
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Experience", path: "#experience" },
  { name: "Awards", path: "#awards" },
  { name: "Contact", path: "#contact" },
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
    <nav className="flex items-center gap-1">
      {links.map((link, index) => (
        <a
          href={link.path}
          key={index}
          onClick={(e) => handleClick(e, link.path)}
          className="px-4 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Nav;