import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router';
import { splitLang, withLang } from '../../lang';

const supportedLanguages = [
  { key: 'en', label: 'English' },
  { key: 'hi', label: 'हिंदी' },
  { key: 'mr', label: 'मराठी' },
];

// Real links (not buttons) so crawlers find the /hi and /mr pages.
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [, path] = splitLang(useLocation().pathname);

  return (
    <div className="flex space-x-3">
      {supportedLanguages.map((lang) => (
        <Link
          key={lang.key}
          to={withLang(lang.key, path.startsWith('/services/') && lang.key !== 'en' ? '/' : path)}
          hrefLang={lang.key}
          className={`
            px-3 py-1 text-sm font-[PoppinsSbold] rounded
            transition duration-200
            ${i18n.language === lang.key
              ? 'bg-white text-[#253672] shadow-md'
              : 'text-gray-700 hover:text-[#1e2c8b] hover:bg-gray-100'
            }
          `}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
