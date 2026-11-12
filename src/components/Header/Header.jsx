import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";
import { HashLink } from "react-router-hash-link";
import { useLocalePath } from "../../lang";

import Logo from "../../assets/Common/Logo.webp";

const Header = () => {
  const { t } = useTranslation("common");
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const lp = useLocalePath();

  // Get dynamic nav & button from translations
  const navItems = t("header.links", { returnObjects: true });
  const contactButton = t("header.button", { returnObjects: true });

  // One look on every page: white pill, navy text (brand primary).
  const styles = {
    headerBg: "bg-white shadow-[0_8px_24px_rgba(10,17,40,0.18)]",
    textColorDesktop: "text-[#253672]",
    hamburgerColor: "bg-[#253672]",
    mobileBg: "bg-white",
    mobileText: "text-[#253672]",
    button: "bg-[#253672] text-white hover:bg-[#1a2555]",
    logo: Logo,
  };

  return (
    <>
    <a href="#after-header" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:bg-white focus:text-[#253672] focus:px-4 focus:py-2 focus:rounded-lg">{t("a11y.skip")}</a>
    <header className="fixed top-0 left-0 w-full z-50 px-4">
      <div
        className={`${styles.headerBg} flex items-center justify-between max-w-4xl mx-auto px-6 py-2 rounded-full mt-6 transition-all`}
      >
        {/* Logo */}
        <Link to={lp("/")} aria-label={t("a11y.home")}>
          <img src={styles.logo} alt="Yajurved Construction Pvt. Ltd." className="w-24" />
        </Link>

        {/* Desktop Navigation */}
        <nav className={`hidden md:flex items-center font-[PoppinsRegular] ${styles.textColorDesktop}`}>
          {navItems.map(({ label, path }, i) => (
            <HashLink
              key={i}
              smooth
              to={lp(path)}
              aria-current={lp(path) === location.pathname ? "page" : undefined}
              className="mx-4 py-1 border-b-2 border-transparent aria-[current=page]:border-current hover:opacity-90 transition duration-150"
            >
              {label}
            </HashLink>
          ))}
        </nav>

        {/* Desktop Button */}
        <HashLink smooth to={lp(contactButton.path)} className={`hidden md:block ${styles.button} py-2 px-6 rounded-full transition duration-150`}>
          {contactButton.label}
        </HashLink>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={t("a11y.menu")}
          aria-expanded={open}
          className="md:hidden relative w-11 h-11 flex justify-center items-center"
        >
          <span
            className={`${styles.hamburgerColor} h-[3px] w-7 rounded-full absolute transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-1"
            }`}
          />
          <span
            className={`${styles.hamburgerColor} h-[3px] w-7 rounded-full absolute transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-1"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`${styles.mobileBg} md:hidden mt-2 mx-auto max-w-5xl rounded-2xl py-4 shadow-lg text-center animate-fadeIn`}
        >
          {/* Mobile Links */}
          {navItems.map(({ label, path }, i) => (
            <HashLink
              key={i}
              smooth
              to={lp(path)}
              aria-current={lp(path) === location.pathname ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={`block py-2 ${styles.mobileText} hover:opacity-80 transition duration-150`}
            >
              {label}
            </HashLink>
          ))}

          {/* Mobile Button */}
          <HashLink smooth to={lp(contactButton.path)} onClick={() => setOpen(false)} className={`inline-block ${styles.button} py-2 px-6 rounded-full mt-3 transition duration-150`}>
            {contactButton.label}
          </HashLink>
        </div>
      )}
    </header>
    <span id="after-header" tabIndex={-1} />
    </>
  );
};

export default Header;
