import React from "react";
import logo from "../../assets/Common/Logo_icon.png";
import instagramIcon from "../../assets/Common/instagram.png";
import facebookIcon from "../../assets/Common/facebook.png";
import whatsappIcon from "../../assets/Common/whatsapp.png";
import gmailIcon from "../../assets/Common/gmail.png";

const Footer = () => {
    const darkTextColor = "#253672";
    const buttonBg = "#253672";

    const linkItems = [
        "Home",
        "About",
        "Services",
        "Projects",
        "Testimonials",
        "Contact Us",
    ];

    const serviceItems = [
        "Litigation Property",
        "Construction Management",
        "Real Estate Development",
    ];

    const renderLinks = (items) => (
        <ul className="space-y-2">
            {items.map((item) => (
                <li key={item}>
                    <a
                        href={`/${item.toLowerCase().replace(/\s/g, "")}`}
                        className="text-lg font-[PoppinsRegular] hover:text-[#1e2c8b] transition"
                    >
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    );

    return (
        <footer
            className="w-full py-16 px-6 sm:px-10 lg:px-20 font-sans"
            style={{ color: darkTextColor }}
        >
            <div className="max-w-7xl mx-auto">

                {/* ---- MAIN GRID ---- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 pb-16 ">

                    {/* LOGO + SOCIALS */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col space-y-8">
                        <div className="flex items-center space-x-4 flex-wrap">
                            <img
                                src={logo}
                                alt="Yajurveda Logo"
                                className="w-28 sm:w-36 object-contain"
                            />
                            <h3 className="text-xl sm:text-2xl font-[PoppinsSbold] leading-tight">
                                YAJURVEDA <br /> CONSTRUCTION PVT LTD.
                            </h3>
                        </div>

                        <h4 className="text-2xl font-[PoppinsBold] mt-4">
                            Our Socials
                        </h4>

                        {/* SOCIAL ICONS */}
                        <div className="flex space-x-5 text-2xl">
                            <a href="#" className="flex justify-center items-center cursor-pointer hover:text-[#1e2c8b] transition">
                                <img className="w-8 object-contain" src={instagramIcon} alt="" />
                            </a>
                            <a href="#" className="flex justify-center items-center cursor-pointer hover:text-[#1e2c8b] transition">
                                <img className="w-8 object-contain" src={facebookIcon} alt="" />
                            </a>
                            <a href="#" className="flex justify-center items-center cursor-pointer hover:text-[#1e2c8b] transition">
                                <img className="w-8 object-contain" src={whatsappIcon} alt="" />
                            </a>
                            <a href="#" className="flex justify-center items-center cursor-pointer hover:text-[#1e2c8b] transition">
                                <img className="w-9 object-contain" src={gmailIcon} alt="" />
                            </a>
                        </div>

                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4 className="text-2xl font-[PoppinsBold] mb-4 tracking-wide">
                            Quick Links
                        </h4>
                        {renderLinks(linkItems)}
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h4 className="text-2xl font-[PoppinsBold] mb-4 tracking-wide">
                            Services
                        </h4>
                        {renderLinks(serviceItems)}
                    </div>

                    {/* CONTACT DETAILS */}
                    <div>
                        <h4 className="text-2xl font-[PoppinsBold] mb-4 tracking-wide">
                            Contact Details
                        </h4>

                        <p className="font-[PoppinsSbold] mb-1">Call Us</p>
                        <p className="text-lg font-[PoppinsRegular] mb-4">
                            +91 9737073390
                        </p>

                        <p className="font-[PoppinsSbold] mb-1">Address</p>
                        <p className="text-lg font-[PoppinsRegular] mb-4 leading-snug">
                            Gangapur Road,
                            <br />
                            Nashik, 444001
                        </p>

                        <p className="font-[PoppinsSbold] mb-1">Active Hours</p>
                        <p className="text-lg">Mon–Fri</p>
                        <p className="text-lg">11:00 AM to 06:00 PM</p>
                    </div>
                </div>

                {/* ---- BOTTOM SECTION ---- */}
                <div className="mt-8 pt-8 gap-6 md:gap-0 flex flex-col sm:flex-row items-center sm:items-start justify-between border-t border-gray-300 gap-6">
                    <p className="
            text-sm sm:text-base 
            text-gray-600 font-[PoppinsRegular] 
            text-center sm:text-left

          "
                    >
                        © 2025 YAJURVEDA CONSTRUCTION PVT LTD.
                        <br /> All Rights Reserved.
                    </p>

                    <p className="text-gray-600 text-sm sm:text-base font-[PoppinsRegular] text-center sm:text-right">
                        Made with ❤️ by{" "}
                        <a
                            href="https://nerdtech.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="animated-underline"
                        >
                            NerdTech
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
