import { useState } from "react";
import FadeIn from "../components/FadeIn.jsx";
import CertificateViewer from "../components/CertificateViewer.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const schoolProjects = [
  {
    title: "Say-Less",
    category: "WEB DESIGN | FRONT-END DEVELOPMENT",
    description:
      "Say less is a real-time chat platform built for simple and efficient communication. After logging in, users can view their active rooms, recent messages and online participants. Users are able to create new rooms or join existing ones using a short code. Conversation history is saved, allowing users to continue where they left off. Keeping the conversations organized and easy to manage.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "#",
    image: "/projects/project1.jpg",
    pdf: "/projects/Sayless.pdf",
  },
  {
    title: "Enrollment Prototype",
    category: "UI Design | Team Project",
    description:
      "Designed a user interface focusing on student side of a university enrollment system. Created wireframes and interactive prototypes using Figma, ensuring a user-friendly experience for students navigating course selection, registration, and academic planning.",
    technologies: ["Figma", "React", "Node.js"],
    link: "#",
    image: "/projects/project2.jpg",
    pdf: "/projects/Enrollment_system.pdf",
  },
  {
    title: "The Script",
    category: "Web Design | Team Project",
    description:
      "Builds UI, manages components, ensures responsiveness. Collaborates on design, implements features, and optimizes performance for a seamless user experience.",
    technologies: ["Figma", "React", "node.js"],
    link: "#",
    image: "/projects/project3.jpg",
    pdf: "/projects/TheScript-Team-Developer-Portfolio-Documentation.pdf",
  },
  {
    title:
      "TAP N' BREW: A SMART COFFEE MACHINE WITH COIN-OPERATED AND QR CODE PAYMENT INTEGRATION",
    category: "Web Design | Team Project | Documentation",
    description:
      "Our project is entitled Tap N' Brew: A Smart Coffee Machine with Coin-Operated and QR Code Payment Integration. It's a coffee machine but with a twist. It has both a coin slot and a touchscreen LCD display. Customers use the touchscreen to choose between two types of coffee.",
    technologies: ["C++", "Arduino", "Hardware Integration"],
    link: "#",
    image: "/projects/project3.jpg",
    pdf: "/projects/Tap-N-Brew-Documentation.pdf",
  },
];

export default function Schools() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="schools" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            title="School Projects"
            subtitle="Showcasing my web design and UI work from academic pursuits"
          />
        </FadeIn>

        <div className="mt-16 space-y-12">
          {schoolProjects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="overflow-hidden rounded-lg border border-sage/20 bg-white/70 shadow-soft dark:border-sage/10 dark:bg-slate-900/50">
                <div className="grid gap-6 p-6 lg:grid-cols-2">
                  {/* Project Info */}
                  <div className="flex flex-col gap-4">
                    <div>
                      <span className="inline-block rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sage dark:bg-sage/5 dark:text-sage/70">
                        {project.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-navy dark:text-white">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-sage/5 px-3 py-1 text-xs text-sage dark:bg-sage/10 dark:text-sage/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.pdf && (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="mt-2 w-fit rounded-lg bg-sage/90 px-4 py-2 text-sm font-medium text-white transition hover:bg-sage dark:bg-sage/80 dark:hover:bg-sage"
                      >
                        View Project
                      </button>
                    )}
                  </div>

                  {/* Project PDF or Image */}
                  {project.pdf ? (
                    <div className="flex flex-col gap-4">
                      <CertificateViewer certificate={project} />
                    </div>
                  ) : (
                    project.image && (
                      <div
                        className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800 cursor-pointer group"
                        onClick={() => setSelectedProject(project)}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          onError={(e) => {
                            e.target.src =
                              "https://via.placeholder.com/600x450?text=Add+Your+Project+Image";
                          }}
                        />
                        <div className="absolute inset-0 bg-navy/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                          <span className="text-white text-sm font-medium bg-sage/90 px-4 py-2 rounded-full">
                            Click to enlarge
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Lightbox Modal for Full View */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative max-h-[90vh] max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-10 right-0 text-white hover:text-sage transition-colors"
                aria-label="Close"
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Full PDF Viewer */}
              <div className="rounded-lg bg-white p-4 dark:bg-slate-900">
                <CertificateViewer certificate={selectedProject} />

                {/* Project Info */}
                <div className="mt-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
                  <h3 className="text-xl font-semibold text-navy dark:text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {selectedProject.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-sage/10 px-2 py-1 text-xs text-sage dark:bg-sage/20 dark:text-sage/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={selectedProject.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block rounded-lg bg-sage/90 px-4 py-2 text-sm font-medium text-white transition hover:bg-sage dark:bg-sage/80 dark:hover:bg-sage"
                  >
                    View Full PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
