import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { lang } = useParams(); // Get the current language from URL

  const languages = [
    { code: "en", label: "🇺🇸 English" },
    { code: "fr", label: "🇫🇷 Français" },
    { code: "es", label: "🇪🇸 Español" },
    { code: "de", label: "🇩🇪 Deutsch" },
    { code: "ar", label: "🇲🇦 العربية" }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("selectedLanguage", lng);
    setIsOpen(false);

    // Redirect to new language-based route while keeping the same page
    const currentPath = window.location.pathname.split("/").slice(2).join("/") || "";
    navigate(`/${lng}/${currentPath}`);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-xs md:text-base font-semibold px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white rounded-md"
      >
        {languages.find((l) => l.code === (lang || i18n.language))?.label}
      </button>

      {isOpen && (
        <ul className="absolute mt-2 w-32 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-md">
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {lang.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
