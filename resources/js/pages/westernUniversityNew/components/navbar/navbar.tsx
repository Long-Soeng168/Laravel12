import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

const NavbarPage = () => {
  return (
    <div >
      <nav className=" h-28 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-screen-2xl mx-auto px-6 xl:px-16 ">
            <Logo />
            {/* Desktop Menu */}
            <NavMenu className="hidden md:block" />
            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarPage;
