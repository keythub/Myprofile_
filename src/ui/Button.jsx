const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage/70";

const variants = {
  primary:
    "bg-navy text-white shadow-soft hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white",
  secondary:
    "border border-slate-200 bg-white/70 text-slate-700 shadow-soft hover:-translate-y-0.5 hover:border-sage/60 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100",
};

export default function Button({
  // eslint-disable-next-line no-unused-vars
  as: Component = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
