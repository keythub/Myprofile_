import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const skills = [
  "Email Management",
  "Calendar Organization",
  "Google Workspace",
  "Canva Basics",
  "Data Entry",
  "Social Media Scheduling",
  "Research",
  "Administrative Support",
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Skills"
            title="Tools and tasks I support with confidence"
            description="A focused toolkit designed to keep your workflow organized and your clients cared for."
            align="center"
          />
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <FadeIn key={skill}>
              <div className="rounded-2xl border border-white/70 bg-white/70 p-6 text-sm font-medium text-slate-700 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-sage/60 dark:border-slate-800/60 dark:bg-slate-900/60 dark:text-slate-200">
                {skill}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
