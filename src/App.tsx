import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import './App.css'
import { useState, useEffect } from "react";
import Contact from "./components/Contact/Contact";
import Studies from "./components/Studies/Studies";
import Projects from "./components/Projetcs/Projects";
// import Home from "./components/Home/Home";
// import Projects from "./components/Projects/Projects";
// import Contact from "./components/Contact/Contact";

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
    <Router>
      <div className={`min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

