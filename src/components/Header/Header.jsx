import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // <-- Import
import Logo from "../../assets/Common/Logo.png";
import { Link } from "react-router-dom"; // NOTE: This component uses <a> tags for scrolling, but 'react-router-dom' is imported. I left the import.

function Header() {
  const { t } = useTranslation('common'); // <-- Use 'common' namespace
  const [open, setOpen] = useState(false);

  // Define the navigation items structure (using keys defined in JSON)
  const navItems = [
    { key: 'home', href: '#hero-section' },
    { key: 'about', href: '#about' },
    { key: 'projects', href: '#projects' },
    { key: 'services', href: '#service' },
  ];

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
          {navItems.map(item => (
            <a 
              key={item.key} 
              className="mx-4 hover:text-[#253672]" 
              href={item.href}
            >
              {t(`header.nav.${item.key}`)} {/* <-- Translated Text */}
            </a>
          ))}
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
          <a href="#contact">
            {t('header.button')} {/* <-- Translated Text */}
          </a>
        </button>

        {/* Mobile Menu Button (Hamburger) */}
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
          {/* Mobile Nav Links */}
          {navItems.map(item => (
             <a 
                key={item.key} 
                className="block py-2 text-[#26316A]" 
                href={item.href}
                onClick={() => setOpen(false)} // Close menu on click
              >
                {t(`header.nav.${item.key}`)} {/* <-- Translated Text */}
              </a>
          ))}
          
          {/* Mobile Button */}
          <button className="
            bg-[#253672] 
            text-white 
            py-2 px-6 
            rounded-full 
            mt-3
          "
          onClick={() => setOpen(false)} // Close menu on click
          >
            <a href="#contact">
              {t('header.button')} {/* <-- Translated Text */}
            </a>
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;