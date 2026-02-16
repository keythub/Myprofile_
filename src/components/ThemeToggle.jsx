import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle color theme"
      className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 p-2 text-slate-700 shadow-soft transition hover:-translate-y-0.5 hover:border-sage/60 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100"
    >
      {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
    </button>
  );
}
