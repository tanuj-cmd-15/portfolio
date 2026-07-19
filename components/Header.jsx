import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-steel/10">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo*/}
        <a href="#hero">
          <h1 className="text-4xl font-semibold">
            Tushar
            <span className="text-accent">.</span>
          </h1>
        </a>

        {/* desktop nav and hireme button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a href="#contact">
            <Button>Hire me</Button>
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