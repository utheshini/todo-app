import { useContext } from "react";
import { GiCheckMark } from "react-icons/gi";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import ThemeContext from "../context/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 shadow-sm">
      <div className="flex items-center justify-between max-w-4xl mx-auto p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 text-white bg-purple-600 rounded-2xl grid place-items-center">
            <GiCheckMark className="w-4 h-4" />
          </div>
          <h1 className="text-lg font-semibold">
            Todo
            <span className="text-purple-600 dark:text-purple-400">.pro</span>
          </h1>
        </div>
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className="p-3 border bg-slate-200 dark:bg-slate-700 border-slate-200 dark:border-slate-700 rounded-full 
           transition-colors duration-300 cursor-pointer hover:opacity-80"
        >
          {theme === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />}
        </button>
      </div>
    </header>
  );
}

export default Header;
