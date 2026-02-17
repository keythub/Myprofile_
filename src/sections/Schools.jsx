import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const schoolProjects = [
  {
    title: "Project Name",
    category: "Web Design",
    description:
      "Brief description of your school project - what you built, technologies used, and key features.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "UI Design Project",
    category: "UI Design",
    description:
      "Description of your UI design work - tools used, design principles, and outcomes.",
    technologies: ["Figma", "Web Design"],
    link: "#",
  },
  {
    title: "Another Project",
    category: "Web Design",
    description:
      "Another school project description highlighting your skills and achievements.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "#",
  },
];

export default function Schools() {
  return (
    <section id="schools" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            title="School Projects"
            subtitle="Showcasing my web design and UI work from academic pursuits"
          />
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {schoolProjects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <a
                href={project.link}
                className="group flex h-full flex-col rounded-lg border border-sage/20 bg-white/70 p-6 shadow-soft transition hover:border-sage/40 hover:shadow-lg dark:border-sage/10 dark:bg-slate-900/50 dark:hover:border-sage/30"
              >
                <div className="mb-3">
                  <span className="inline-block rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sage dark:bg-sage/5 dark:text-sage/70">
                    {project.category}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-semibold text-navy dark:text-white">
                  {project.title}
                </h3>

                <p className="mb-4 flex-grow text-sm text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-sage/5 px-2 py-1 text-xs text-sage dark:bg-sage/10 dark:text-sage/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
