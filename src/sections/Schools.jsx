import { useState } from "react";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const schoolProjects = [
  {
    title: "Say-Less",
    category: "WEB DESIGN | FRONT-END DEVELOPMENT",
    description:
      "Say less is a real-time chat platform built for simple and efficient communication. After logging in, users can view their active rooms, recent messages and online participants. Users are able to create new rooms or join existing ones using a short code. Conversation history is saved, allowing users to continue where they left off. Keeping the conversations organized and easy to manage. ",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    link: "#",
    image: "/projects/project1.jpg",
  },
  {
    title: "Enrollment Prototype",
    category: "UI Design",
    description:
      "Designed a user interface focusing on student side of a school projects",
    technologies: ["Figma", "Web Design"],
    link: "#",
    image: "/projects/project2.jpg",
  },
  {
    title: "Another Project",
    category: "Web Design",
    description:
      "Another school project description highlighting your skills and achievements.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "#",
    image: "/projects/project3.jpg",
  },
];

export default function Schools() {
  const [selectedImage, setSelectedImage] = useState(null);

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
                  </div>

                  {/* Project Image */}
                  {project.image && (
                    <div
                      className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800 cursor-pointer group"
                      onClick={() => setSelectedImage(project)}
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
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-navy/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                        <span className="text-white text-sm font-medium bg-sage/90 px-4 py-2 rounded-full">
                          Click to enlarge
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Lightbox Modal for full-size image */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
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

              {/* Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[80vh] w-auto rounded-lg"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/800x600?text=Image+Not+Found";
                }}
              />

              {/* Image Info */}
              <div className="mt-4 rounded-lg bg-white/90 p-4 dark:bg-slate-900/90">
                <h3 className="text-xl font-semibold text-navy dark:text-white">
                  {selectedImage.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {selectedImage.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedImage.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-sage/10 px-2 py-1 text-xs text-sage dark:bg-sage/20 dark:text-sage/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
