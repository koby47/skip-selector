// ThemeToggleFloating.jsx
import { useEffect, useState } from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';
import { applyThemeFromPreference, setTheme } from '../utils/theme';

export default function ThemeToggleFloating() {
  const [theme, setLocalTheme] = useState(() => localStorage.getItem('theme') || 'system');

  useEffect(() => {
    applyThemeFromPreference();
  }, [theme]);

  const cycleTheme = () => {
    const next = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setLocalTheme(next);
    setTheme(next);
  };

  const icon =
    theme === 'light' ? <Sun className="w-5 h-5 text-yellow-400" /> :
    theme === 'dark' ? <Moon className="w-5 h-5 text-gray-200" /> :
    <Laptop className="w-5 h-5 text-blue-500" />;

  return (
    <button
      onClick={cycleTheme}
      className="fixed bottom-4 right-4 z-50 p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow-lg rounded-full hover:scale-105 transition"
      aria-label="Toggle theme"
    >
      {icon}
    </button>
  );
}
