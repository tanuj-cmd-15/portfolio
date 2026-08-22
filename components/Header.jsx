import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto flex justify-between items-center py-4 xl:py-5">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
          <span className="text-base xl:text-lg font-heading font-extrabold tracking-wider text-white">
            TP<span className="text-accent">.</span>
          </span>
          <div className="flex flex-col border-l border-white/10 pl-3 gap-0.5 leading-none">
            <span className="text-[9px] font-mono tracking-wider text-white/80 uppercase">
              Beyond Visuals
            </span>
            <span className="text-[8px] font-mono tracking-wider text-white/45 uppercase">
              Built with Visions
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a href="#contact" className="pill-btn pill-btn-white text-sm">
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;