/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: "#FCEFF5",
        mist: "#F8F6F7",
        blush: "#F6C7D6",
        sage: "#8BA594",
        navy: "#1E2A3B",
        ink: "#0F172A",
        graphite: "#1F1F1F",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', '"Poppins"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.12)",
        glow: "0 12px 30px rgba(15, 23, 42, 0.14)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(900px circle at 80% 10%, rgba(246, 199, 214, 0.6), transparent 60%)",
        "soft-sheen":
          "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(252,239,245,0.6))",
      },
    },
  },
  plugins: [],
};
