import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/Common/Logo_icon.png";
import wordmark from "../../assets/Common/word_mark.png";
import instagramIcon from "../../assets/Common/instagram.png";
import facebookIcon from "../../assets/Common/facebook.png";
import whatsappIcon from "../../assets/Common/whatsapp.png";
import gmailIcon from "../../assets/Common/gmail.png";

const Footer = () => {
    const { t } = useTranslation('common');
    const darkTextColor = "#253672";

    // Retrieve translated link arrays
    const linkItems = t('footer.links', { returnObjects: true });
    const serviceItems = t('footer.services', { returnObjects: true });

    const renderLinks = (items) => (
        <ul className="space-y-2">
            {items.map((item) => (
                <li key={item.label}>
                    <HashLink
                        smooth
                        to={item.path}
                        className="text-lg font-[PoppinsRegular] hover:text-[#1e2c8b] transition"
                    >
                        {item.label}
                    </HashLink>
                </li>
            ))}
        </ul>
    );
    return (
        <footer
            className="w-full py-16 px-6 sm:px-10 lg:px-20 font-sans bg-white"
            style={{ color: darkTextColor }}
        >
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 pb-16 ">

                    <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col space-y-8">
                        <div className="flex items-center space-x-4 flex-wrap">
                            <img
                                src={logo}
                                alt="Yajurveda Logo"
                                className="w-28 sm:w-42 object-contain"
                            />
                            <img
                                src={wordmark}
                                alt="Yajurveda Logo"
                                className="w-28 sm:w-42 object-contain"
                            />
                            {/* <h3 className="text-xl sm:text-2xl font-[PoppinsSbold] leading-tight">
                                {t('footer.companyName')}
                            </h3> */}
                        </div>

                        <h4 className="text-2xl font-[PoppinsBold] mt-4">
                            {t('footer.socialsHeading')}
                        </h4>

                        <div className="flex space-x-5 text-2xl">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.instagram.com/yajurvedgroup/" className="flex justify-center items-center cursor-pointer 
                            transition-transform duration-300 hover:-translate-y-1">
                                <img className="w-8 object-contain" src={instagramIcon} alt="Instagram" />
                            </a>

                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/profile.php?id=61584363862965" className="flex justify-center items-center cursor-pointer 
                            transition-transform duration-300 hover:-translate-y-1">
                                <img className="w-8 object-contain" src={facebookIcon} alt="Facebook" />
                            </a>

                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://wa.me/919327234012"  className="flex justify-center items-center cursor-pointer 
                            transition-transform duration-300 hover:-translate-y-1">
                                <img className="w-8 object-contain" src={whatsappIcon} alt="WhatsApp" />
                            </a>

                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:contact@yajurved" className="flex justify-center items-center cursor-pointer 
                            transition-transform duration-300 hover:-translate-y-1">
                                <img className="w-9 object-contain" src={gmailIcon} alt="Gmail" />
                            </a>
                        </div>

                        <div className="mt-4 pt-4">
                            <LanguageSwitcher />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-2xl font-[PoppinsBold] mb-4 tracking-wide">
                            {t('footer.linksHeading')}
                        </h4>
                        {renderLinks(linkItems)}
                    </div>

                    <div>
                        <h4 className="text-2xl font-[PoppinsBold] mb-4 tracking-wide">
                            {t('footer.servicesHeading')}
                        </h4>
                        {renderLinks(serviceItems)}
                    </div>

                    <div>
                        <h4 className="text-2xl font-[PoppinsBold] mb-4 tracking-wide">
                            {t('footer.contactHeading')}
                        </h4>

                        <p className="font-[PoppinsSbold] mb-1">{t('footer.callUsLabel')}</p>
                        <a
                            href={`tel:${t('footer.phoneNumber')}`}
                            className="block text-lg font-[PoppinsRegular] mb-4 animated-underline cursor-pointer"
                        >
                            {t('footer.phoneNumber')}
                        </a>


                        <p className="font-[PoppinsSbold] mb-1">{t('footer.emailUsLabel')}</p>
                        <a
                            href={`mailto:${t('footer.emailAddress')}`}
                            className="block text-lg font-[PoppinsRegular] mb-4 animated-underline cursor-pointer"
                        >
                            {t('footer.emailAddress')}
                        </a>


                        <p className="font-[PoppinsSbold] mb-1">{t('footer.addressLabel')}</p>
                        <p className="text-lg font-[PoppinsRegular] mb-4 leading-snug">
                            {t('footer.addressLine1')}
                        </p>

                        <p className="font-[PoppinsSbold] mb-1">{t('footer.hoursLabel')}</p>
                        <p className="text-lg">{t('footer.hoursDays')}</p>
                        <p className="text-lg">{t('footer.hoursTime')}</p>
                    </div>
                </div>

                <div className="mt-8 pt-8 gap-6 md:gap-0 flex flex-col sm:flex-row items-center sm:items-start justify-between border-t border-gray-300">
                    <p className="
                        text-sm sm:text-base 
                        text-gray-600 font-[PoppinsRegular] 
                        text-center sm:text-left
                    "
                    >
                        {t('footer.copyright')}
                        <br />
                        {t('footer.allRights')}
                    </p>

                    <p className="text-gray-600 text-sm sm:text-base font-[PoppinsRegular] text-center sm:text-right">
                        {t('footer.madeWith')}{" "}
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