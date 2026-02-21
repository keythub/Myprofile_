import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const highlights = [
  "Organized and detail-oriented",
  "Strong communication and client care",
  "Tech-savvy with modern tools",
  "Fast learner and proactive partner",
  "Reliable and committed to deadlines",
];

export default function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn>
          <SectionHeading
            eyebrow="About"
            title="A steady, supportive presence for your business"
            description="I provide dependable virtual support with a calm, professional approach. My goal is to keep your operations running smoothly while you focus on growth, strategy, and the work that lights you up."
          />
        </FadeIn>
        <FadeIn>
          <div className="rounded-2xl border border-white/70 bg-white/70 p-8 shadow-soft backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60">
            <h3 className="text-xl font-semibold">What you can expect</h3>
            <ul className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-sage" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
