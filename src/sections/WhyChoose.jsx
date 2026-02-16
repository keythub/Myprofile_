import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const points = [
  {
    title: "Strong attention to detail",
    description:
      "Every task is completed with accuracy and care, from small details to big-picture flow.",
  },
  {
    title: "Confidential and trustworthy",
    description:
      "Your business information is always handled with discretion and respect.",
  },
  {
    title: "Quick communication",
    description:
      "Clear updates, timely follow-ups, and friendly communication are standard.",
  },
  {
    title: "Dedicated support",
    description:
      "A proactive partner who grows with your business and adapts to your needs.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Why Work With Me"
            title="Professional support with a calm approach"
            description="I prioritize clarity, trust, and a steady workflow so you can focus on the work that matters most."
            align="center"
          />
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {points.map((point) => (
            <FadeIn key={point.title}>
              <div className="rounded-2xl border border-white/70 bg-white/70 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-sage/60 dark:border-slate-800/60 dark:bg-slate-900/60">
                <h3 className="text-lg font-semibold text-navy dark:text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {point.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
