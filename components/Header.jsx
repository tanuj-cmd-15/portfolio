import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-6 xl:py-8 text-white fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo*/}
        <a href="#hero">
          <h1 className="text-2xl xl:text-3xl font-light tracking-wider">
            TUSHAR PAWAR
          </h1>
        </a>

        {/* desktop nav and hireme button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a href="#contact">
            <button className="squarespace-btn-secondary px-6 py-2 text-sm">
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