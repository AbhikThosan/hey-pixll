import Link from "next/link";

import Logo from "../../../public/logo/Logo";
import Menu from "../../../public/icons/Menu";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 gap-2 rounded-[80px] border border-[#ffffff1a] bg-[#0a0a0a1a] backdrop-blur-[15px] text-base font-dm font-medium leading-[150%] text-white">
      <div className="">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      <div className="w-1/2 flex items-center justify-between">
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
        <button>
          <Menu />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
