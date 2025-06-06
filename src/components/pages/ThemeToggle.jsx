// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (mode) => {
    const root = document.documentElement;

    if (mode === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.setAttribute("data-theme", isDark ? "dark" : "light");
      root.classList.toggle("dark", isDark);
    } else {
      root.setAttribute("data-theme", mode);
      root.classList.toggle("dark", mode === "dark");
    }

    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    const nextTheme =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    applyTheme(nextTheme);
  };

  const icon =
    theme === "light" ? <Moon size={20} /> :
    theme === "dark" ? <Sun size={20} /> :
    <Sun className="opacity-70" size={20} />;

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-[7rem] right-4 z-50 p-2 rounded-full 
                 bg-white/30 dark:bg-black/30 backdrop-blur-md 
                 border border-gray-300 dark:border-gray-700 
                 text-gray-700 dark:text-gray-200 
                 hover:bg-white/50 dark:hover:bg-black/50 
                 transition-all"
      title={`Theme: ${theme}`}
    >
      {icon}
    </button>
  );
};

export default ThemeToggle;
