function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-2 py-6 text-sm text-center text-white dark:text-gray-400 bg-gray-950">
      <p>
        &copy; {currentYear} Utheshni Uthayananth. Built with React & Tailwind
        CSS.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a
          href="https://github.com/utheshni/todo-app"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-purple-400"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/utheshni-uthayananth"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors duration-300 hover:text-purple-400"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
