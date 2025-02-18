import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const { lang } = useParams(); // Get language from URL
    const currentLang = lang || i18n.language; // Use language from URL or default

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="border-b border-gray-300 w-full flex items-center justify-between px-5 py-4 bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
                <div className="flex items-center space-x-4">
                    <button
                        className="text-gray-600 dark:text-white md:hidden focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isMenuOpen ? (
                                <path d="M18 6L6 18M6 6l12 12" />
                            ) : (
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            )}
                        </svg>
                    </button>
                    <div className="md:text-2xl font-bold uppercase text-gray-800 dark:text-white">
                        <Link to={`/${currentLang}`}>
                            {i18n.language === "ar" ? "ربيع لفقير" : "Rabie Lafkir"}
                        </Link>
                    </div>
                </div>

                <motion.ul
                    className={`absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg md:static md:flex md:items-center md:justify-center md:w-auto md:space-x-6 md:bg-transparent md:shadow-none transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 md:opacity-100"}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isMenuOpen || window.innerWidth >= 768 ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {['about', 'studies', 'projects', 'contact'].map((item) => (
                        <li key={item} className="py-3 text-center md:py-0 md:flex md:items-center">
                            <Link to={`/${currentLang}/${item}`} className="block px-6 py-2 text-gray-700 dark:text-white uppercase hover:text-red-500 dark:hover:text-red-400 transition-colors">
                                {t(`navbar.${item}`)}
                            </Link>
                        </li>
                    ))}
                </motion.ul>

                <div className="flex items-center justify-between gap-2">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors"
                    >
                        {darkMode ? "🌙" : "☀️"}
                    </button>

                    <LanguageSwitcher />
                </div>
            </nav>
            <div className="pt-16"></div>
        </>
    );
};

export default Navbar;
