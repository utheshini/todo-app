function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-2 py-6 text-xs md:text-sm text-center text-slate-400 dark:text-slate-600 bg-slate-100 dark:bg-slate-950/95">
      <p>
        &copy; {currentYear} Utheshini Uthayananth. Built with React & Tailwind
        CSS.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://github.com/utheshini/todo-app"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-purple-700 dark:hover:text-purple-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/utheshini-uthayananth"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-purple-700 dark:hover:text-purple-400"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
