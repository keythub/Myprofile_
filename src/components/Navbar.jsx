import { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle.jsx";

const navItems = [
  { label: "Home", target: "hero" },
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Services", target: "services" },
  { label: "School Projects", target: "schools" },
  { label: "Why Me", target: "why" },
  { label: "Contact", target: "contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur dark:border-slate-800/60 dark:bg-graphite/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="text-lg font-semibold text-navy dark:text-white">
          Kate Serrano
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              smooth
              duration={600}
              offset={-80}
              className="cursor-pointer transition hover:text-sage"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 p-2 text-slate-700 shadow-soft transition hover:-translate-y-0.5 hover:border-sage/60 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-white/60 bg-white/80 px-4 py-4 text-sm font-medium text-slate-700 shadow-soft backdrop-blur dark:border-slate-800/60 dark:bg-graphite/90 dark:text-slate-200 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.target}
                to={item.target}
                smooth
                duration={600}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer transition hover:text-sage"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
