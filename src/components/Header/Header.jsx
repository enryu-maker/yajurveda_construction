import React, { useState } from "react";
import Logo from "../../assets/Header/Logo.png";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4">
      <div className="
        bg-white 
        flex items-center justify-between
        max-w-4xl mx-auto 
        py-2 px-6 
        rounded-full
        mt-6
      ">
        
        {/* Logo */}
        <div>
          <img className="w-24" src={Logo} alt="logo" />
        </div>

        {/* Desktop Nav */}
        <nav className="
          hidden md:flex 
          font-[PoppinsRegular] 
          text-[#26316A] 
          items-center
        ">
          <a className="mx-4 hover:text-[#253672]" href="#">Home</a>
          <a className="mx-4 hover:text-[#253672]" href="#">About</a>
          <a className="mx-4 hover:text-[#253672]" href="#">Projects</a>
          <a className="mx-4 hover:text-[#253672]" href="#">Contact</a>
        </nav>

        {/* Desktop Button */}
        <button className="
          hidden md:block
          bg-[#253672] 
          text-white 
          py-2 px-6 
          rounded-full 
          hover:bg-[#1a2555]
        ">
          Get In Touch
        </button>

        {/* Mobile Menu Button */}
        <button
  onClick={() => setOpen(!open)}
  className="relative w-8 h-8 md:hidden flex flex-col justify-center items-center"
>
  {/* Top bar */}
  <span
    className={`
      bg-[#253672] h-[3px] w-7 rounded-full absolute transition-all duration-300
      ${open ? "rotate-45" : "-translate-y-1"}
    `}
  ></span>

  {/* Bottom bar */}
  <span
    className={`
      bg-[#253672] h-[3px] w-7 rounded-full absolute transition-all duration-300
      ${open ? "-rotate-45" : "translate-y-1"}
    `}
  ></span>
</button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="
          md:hidden 
          bg-white 
          mt-2 
          mx-auto 
          max-w-5xl 
          rounded-2xl 
          py-4 
          shadow-lg 
          text-center
          animate-fadeIn
        ">
          <a className="block py-2 text-[#26316A]" href="#">Home</a>
          <a className="block py-2 text-[#26316A]" href="#">About</a>
          <a className="block py-2 text-[#26316A]" href="#">Projects</a>
          <a className="block py-2 text-[#26316A]" href="#">Contact</a>

          <button className="
            bg-[#253672] 
            text-white 
            py-2 px-6 
            rounded-full 
            mt-3
          ">
            Get In Touch
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
