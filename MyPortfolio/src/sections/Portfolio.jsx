import { useState } from "react";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const portfolioItems = [
  {
    title: "Mock Sample 1",
    category: "Inbox Management",
    description: "Organize a messy Gmail inbox into labeled categories.",
    images: ["/portfolio/sample1.png"], // Can add more: ["/portfolio/sample1.png", "/portfolio/sample1b.png"]
    tags: ["Categorization", "Organization"],
  },
  {
    title: "Mock Sample 2",
    category: "Calendar Management",
    description:
      "Weekly calendar schedule for Sarah.  | Includes meetings, deadlines, and personal time blocks.",
    images: [
      "/portfolio/sample2.png",
      "/portfolio/Sample3.png",
      "/portfolio/sample4.png",
    ], // Example of multiple images
    tags: ["Calendar", "Organization", " Scheduling"],
  },
  {
    title: "Mock Sample 3",
    category: "Project Monitoring & Issue Tracking Management",
    description:
      "managed and tested a system project, where I tracked issues, documented findings, and organized task updates — similar to administrative project coordination.",
    images: ["/portfolio/sample5.png"],
    tags: ["Project Management", "Issue Tracking"],
  },
  // Add more items as needed
];

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setCurrentImageIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setCurrentImageIndex(0);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedItem.images.length - 1 : prev - 1,
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedItem.images.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section id="portfolio" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            title="Portfolio"
            subtitle="A collection of my design work and creative projects"
          />
        </FadeIn>

        {/* Grid Layout */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div
                className="group relative overflow-hidden rounded-lg border border-sage/20 bg-white/70 shadow-soft transition-all duration-300 hover:shadow-lg hover:scale-[1.02] dark:border-sage/10 dark:bg-slate-900/50 cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=Add+Your+Image";
                    }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {/* Multiple images indicator */}
                  {item.images.length > 1 && (
                    <div className="absolute top-3 right-3 rounded-full bg-sage/90 px-3 py-1 text-xs font-semibold text-white">
                      {item.images.length} images
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="mb-2">
                    <span className="inline-block rounded-full bg-sage/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sage dark:bg-sage/5 dark:text-sage/70">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-navy dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mb-3 text-sm text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-sage/5 px-2 py-1 text-xs text-sage dark:bg-sage/10 dark:text-sage/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            <div
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
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
                src={selectedItem.images[currentImageIndex]}
                alt={`${selectedItem.title} - Image ${currentImageIndex + 1}`}
                className="max-h-[80vh] w-auto rounded-lg"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/800x600?text=Image+Not+Found";
                }}
              />

              {/* Navigation Arrows - Only show if multiple images */}
              {selectedItem.images.length > 1 && (
                <>
                  {/* Previous Button */}
                  <button
                    onClick={goToPreviousImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-navy shadow-lg transition-all hover:bg-sage hover:text-white dark:bg-slate-900/90 dark:text-white"
                    aria-label="Previous image"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  {/* Next Button */}
                  <button
                    onClick={goToNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-navy shadow-lg transition-all hover:bg-sage hover:text-white dark:bg-slate-900/90 dark:text-white"
                    aria-label="Next image"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  {/* Image Counter */}
                  <div className="absolute -top-10 left-0 text-white text-sm">
                    {currentImageIndex + 1} / {selectedItem.images.length}
                  </div>
                </>
              )}

              {/* Image Dots Indicator */}
              {selectedItem.images.length > 1 && (
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedItem.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2 w-2 rounded-full transition-all ${
                        idx === currentImageIndex
                          ? "bg-sage w-6"
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Image Info */}
              <div className="mt-4 rounded-lg bg-white/90 p-4 dark:bg-slate-900/90">
                <h3 className="text-xl font-semibold text-navy dark:text-white">
                  {selectedItem.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
