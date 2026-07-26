import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-6 xl:py-8 text-[#0A0A0A] fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-md border-b border-[#D8D8D8] shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo*/}
        <a href="#hero" className="hover:text-[#FF4D00] transition-colors duration-300">
          <h1 className="text-2xl xl:text-3xl font-light tracking-wider">
            TUSHAR PAWAR
          </h1>
        </a>

        {/* desktop nav and hireme button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a href="#contact">
            <button className="px-6 py-3 bg-[#FF4D00] text-white font-medium hover:bg-[#E50000] transition-all duration-300 text-sm uppercase tracking-wide">
              Get In Touch
            </button>
          </a>
        </div>

        {/*mobile nav*/}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;