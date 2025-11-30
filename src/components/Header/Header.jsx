import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/Common/Logo.png";
import Logo2 from "../../assets/Common/Logo_2.png";

import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {

  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const logoSrc = isHome ? Logo : Logo2;

  const { t } = useTranslation('common');
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  // 1. Conditional Styling Variables
  // Header Background: White for home, Dark Blue for others (e.g., /about)
  const headerBgClass =
    currentPath === '/'
      ? 'bg-white'
      : 'bg-[#253672]';

  // Desktop Nav Text Color: Dark Blue for home, White for others
  const navTextColorClass =
    currentPath === '/'
      ? 'text-[#26316A]' // Original dark text color for white background
      : 'text-white';   // White text for dark background

  // Mobile Menu Bar Color: Dark Blue for home, White for others (to contrast with headerBgClass)
  const hamburgerBarColor =
    currentPath === '/'
      ? 'bg-[#253672]'
      : 'bg-white';

  // Mobile Menu Container Background: White for home, Dark Blue for others 
  // (Assuming you want the mobile menu container to match the header)
  const mobileMenuBgClass =
    currentPath === '/'
      ? 'bg-white'
      : 'bg-[#253672]';

  // Mobile Menu Link Text Color: Dark Blue for home, White for others
  const mobileLinkTextColor =
    currentPath === '/'
      ? 'text-[#26316A]'
      : 'text-white';

  // Define the navigation items structure
  const navItems = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'services', href: '/#services' },
    { key: 'ourCompany', href: '/ourCompany' },
    { key: 'financialplan', href: '/financialplan' },

    // { key: 'projects', href: '/#projects' },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50 px-4">
      {/* Primary Header Container */}
      <div className={`
        ${headerBgClass} 
        flex items-center justify-between
        max-w-4xl mx-auto 
        py-2 px-6 
        rounded-full
        mt-6
      `}>

        {/* Logo */}
        <div>
          {/* NOTE: If your logo is color-sensitive, you may need to use a conditional logo source here */}
          <img className="w-24" src={logoSrc} alt="logo" />
        </div>

        {/* Desktop Nav */}
        <nav className={`
          hidden md:flex 
          font-[PoppinsRegular] 
          ${navTextColorClass} 
          items-center
        `}>
          {navItems.map(item => (
            <HashLink
              key={item.key}
              // Changed hover to opacity for better contrast management on both light/dark BG
              className="mx-4 hover:opacity-90 transition duration-150"
              smooth
              to={item.href}

            >
              {t(`header.nav.${item.key}`)}
            </HashLink>
          ))}
        </nav>

        {/* Desktop Button - (Kept static, assuming dark button works on both backgrounds) */}
        <HashLink smooth to="/#contact">
          <button
            className={`
            ${currentPath === '/' ? 'bg-[#253672]' : 'bg-white'}
            ${currentPath === '/' ? 'text-white' : 'text-[#253672]'}
            ${currentPath === '/' ? 'hover:bg-[#1a2555]' : 'hover:bg-white/90'}
            hidden md:block
            py-2 px-6 
            rounded-full 
            transition duration-150
          `}
          >
            {t('header.button')}
          </button>
        </HashLink>


        {/* Mobile Menu Button (Hamburger) */}
        <button
          onClick={() => setOpen(!open)}
          className="relative w-8 h-8 md:hidden flex flex-col justify-center items-center"
        >
          {/* Top bar */}
          <span
            className={`
              ${hamburgerBarColor} h-[3px] w-7 rounded-full absolute transition-all duration-300
              ${open ? "rotate-45" : "-translate-y-1"}
            `}
          ></span>

          {/* Bottom bar */}
          <span
            className={`
              ${hamburgerBarColor} h-[3px] w-7 rounded-full absolute transition-all duration-300
              ${open ? "-rotate-45" : "translate-y-1"}
            `}
          ></span>
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className={`
          md:hidden 
          ${mobileMenuBgClass} // Dynamic Mobile Menu Background
          mt-2 
          mx-auto 
          max-w-5xl 
          rounded-2xl 
          py-4 
          shadow-lg 
          text-center
          animate-fadeIn
        `}>
          {/* Mobile Nav Links */}
          {navItems.map(item => (
            <a
              key={item.key}
              className={`block py-2 ${mobileLinkTextColor} hover:opacity-80 transition duration-150`} // Dynamic Link Color
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {t(`header.nav.${item.key}`)}
            </a>
          ))}

          {/* Mobile Button - (Kept static, assuming dark button works on both backgrounds) */}
          <HashLink smooth to="/#contact">
            <button className={`
            ${currentPath === '/' ? 'bg-[#253672]' : 'bg-white'}
            ${currentPath === '/' ? 'text-white' : 'text-[#253672]'}
            py-2 px-6 
            rounded-full 
            mt-3
            hover:bg-[#1a2555]
            transition duration-150
          `}
              onClick={() => setOpen(false)}
            >
              {t('header.button')}
            </button>
          </HashLink>
        </div>
      )}
    </header>
  );
}

export default Header;