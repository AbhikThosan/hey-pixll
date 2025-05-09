"use client"
import Link from "next/link";
import { useState } from "react";
import Logo from "../../../../public/logo/Logo";
import Menu from "../../../../public/icons/Menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-6 gap-2 rounded-[80px] border border-[#ffffff1a] bg-[#0a0a0a1a] backdrop-blur-[15px] text-base font-dm font-medium leading-[150%] text-white relative">
      <div className="">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex w-1/2 items-center justify-between">
        <Link href="/work" className="">
          Work
        </Link>
        <Link href="/about" className="">
          About
        </Link>
        <Link href="/blog" className="">
          Blog
        </Link>
        <Link href="/contact" className="">
          Contact
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <Menu />
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`absolute top-full left-0 right-0 mt-4 p-6 rounded-[20px] border border-[#ffffff1a] bg-[#0a0a0a] backdrop-blur-[15px] md:hidden transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col space-y-4">
          <Link 
            href="/work" 
            className="hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </Link>
          <Link 
            href="/about" 
            className="hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/blog" 
            className="hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            className="hover:text-gray-300 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
