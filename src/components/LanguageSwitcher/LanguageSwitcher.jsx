import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const supportedLanguages = [
    { key: 'en', label: 'English' },
    { key: 'hi', label: 'हिंदी' },
    { key: 'mr', label: 'मराठी' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-3">
      {supportedLanguages.map((lang) => (
        <button
          key={lang.key}
          onClick={() => changeLanguage(lang.key)}
          className={`
            px-3 py-1 text-sm font-[PoppinsSbold] rounded
            transition duration-200
            ${i18n.language === lang.key 
              ? 'bg-white text-[#253672] shadow-md' 
              : 'text-gray-400 hover:text-[#1e2c8b] hover:bg-gray-100'
            }
          `}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;