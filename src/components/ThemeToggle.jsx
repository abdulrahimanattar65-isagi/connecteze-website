import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle theme"
      className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200/80 bg-white/80 text-gray-700 shadow-sm transition-all hover:bg-white hover:scale-105 dark:border-white/10 dark:bg-white/10 dark:text-gray-200 dark:hover:bg-white/20"
    >
      {isDark ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} />}
    </button>
  );
}