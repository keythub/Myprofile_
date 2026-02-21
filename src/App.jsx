import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Services from "./sections/Services.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import Schools from "./sections/Schools.jsx";
import Certificates from "./sections/Certificates.jsx";
import WhyChoose from "./sections/WhyChoose.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

function App() {
  const [theme, setTheme] = useState("light");

  // Sync initial theme with saved preference or system setting.
  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTheme(stored);
      return;
    }
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  // Apply the selected theme to the document root.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative min-h-screen bg-cream bg-hero-glow bg-no-repeat text-slate-800 dark:bg-graphite dark:text-slate-100">
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-blush/40 blur-3xl" />
      <div className="pointer-events-none absolute top-40 left-0 h-64 w-64 rounded-full bg-rose-100/70 blur-3xl dark:bg-slate-800/40" />

      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Schools />
        <Certificates />
        <WhyChoose />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
