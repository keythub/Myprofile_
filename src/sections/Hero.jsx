import { Link } from "react-scroll";
import FadeIn from "../components/FadeIn.jsx";
import Button from "../ui/Button.jsx";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pb-20 pt-24 sm:px-6"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn className="flex flex-col gap-6">
          <span className="w-fit rounded-full border border-sage/40 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sage shadow-soft dark:border-sage/30 dark:bg-slate-900/50">
            Calm. Organized. Proactive.
          </span>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Hi, I&apos;m Kate Serrano - Aspiring Virtual Assistant
          </h1>
          <p className="max-w-xl text-lg text-slate-600 dark:text-slate-300">
            I help busy entrepreneurs stay organized and focused with reliable
            support, thoughtful systems, and polished communication.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              as={Link}
              to="services"
              smooth
              duration={600}
              offset={-80}
              variant="primary"
            >
              View Services
            </Button>
            <Button
              as={Link}
              to="contact"
              smooth
              duration={600}
              offset={-80}
              variant="secondary"
            >
              Contact Me
            </Button>
          </div>
        </FadeIn>

        <FadeIn className="relative">
          <div className="absolute -top-6 right-10 h-24 w-24 rounded-full bg-sage/30 blur-2xl" />
          <div className="rounded-2xl border border-white/70 bg-white/70 p-8 shadow-soft backdrop-blur dark:border-slate-800/60 dark:bg-slate-900/60">
            <h3 className="text-xl font-semibold">
              Support that feels seamless
            </h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              I bring calm structure to daily operations, from inbox workflows
              to client follow-ups, so you can stay in your zone of genius.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Detail-focused workflows",
                "Warm, professional tone",
                "Quick response time",
                "Confidential handling",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/60 bg-white/60 px-4 py-3 text-sm text-slate-700 shadow-soft dark:border-slate-800/60 dark:bg-slate-900/60 dark:text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
