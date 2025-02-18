import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Studies from "./components/Studies/Studies";
import Projects from "./components/Projetcs/Projects";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HelmetProvider } from "react-helmet-async";
import './App.css'
const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return <>{children}</>;
};

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Language Handling Wrapper */}
          <LanguageWrapper>
            <div className="flex-grow">
              <Routes>
                {/* Redirect from "/" to default language "/en" */}
                <Route path="/" element={<Navigate to="/en" replace />} />

                {/* Language-Specific Routes */}
                <Route path="/:lang" element={<About />} />
                <Route path="/:lang/about" element={<About />} />
                <Route path="/:lang/studies" element={<Studies />} />
                <Route path="/:lang/projects" element={<Projects />} />
                <Route path="/:lang/contact" element={<Contact />} />
              </Routes>
            </div>
          </LanguageWrapper>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
