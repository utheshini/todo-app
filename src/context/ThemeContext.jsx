import { createContext, useState, useEffect } from "react";

// Create context for theme
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Get initial theme from localStorage OR system preference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Persist theme in localStorage and update document class
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Toggle theme
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
