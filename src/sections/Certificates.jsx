import { useState } from "react";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import CertificateViewer from "../components/CertificateViewer.jsx";

const certificates = [
  {
    title: "Content Creation ",
    issuer: "Tesda",
    date: "Thursday, 19 February 2026",
    description:
      "Awarded for completing the Computer System Servicing NC II program with proficiency in hardware and software maintenance.",
    pdf: "/certificates/content_creation.pdf",
  },
  {
    title: "Setting up Computer Networks",
    issuer: "Tesda",
    date: "Tuesday, 8 February 2022, 12:51 PM",
    description:
      "Awarded for completing the Computer Network Setup and Administration program with proficiency in network configuration and troubleshooting.",
    pdf: "/certificates/setting_up_computer_networks.pdf",
  },
  {
    title: "Installing and Configuring Computer Systems",
    issuer: "Tesda",
    date: "Tuesday, 19 October 2021",
    description:
      "Awarded for completing the Installing and Configuring Computer Systems program with proficiency in system installation and configuration.",
    pdf: "/certificates/Installing and Configuring Computer Systems.pdf",
  },
  {
    title: "Introduction to CSS",
    issuer: "Tesda",
    date: "Tuesday, 19 October 2021",
    description:
      "Awarded for completing the Introduction to CSS program with proficiency in styling web pages.",
    pdf: "/certificates/Introduction to CSS.pdf",
  },
  // Add more certificates as needed
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            title="Certificates"
            subtitle="Professional certifications and achievements"
          />
        </FadeIn>

        {/* Certificates List */}
        <div className="mt-16 space-y-12">
          {certificates.map((cert, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="overflow-hidden rounded-lg border border-sage/20 bg-white/70 shadow-soft dark:border-sage/10 dark:bg-slate-900/50">
                <div className="grid gap-6 p-6 lg:grid-cols-2">
                  {/* Certificate Info */}
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-navy dark:text-white">
                        {cert.title}
                      </h3>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-sage dark:text-sage/80">
                        Issuer:{" "}
                        <span className="text-slate-600 dark:text-slate-300">
                          {cert.issuer}
                        </span>
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Date: {cert.date}
                      </p>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300">
                      {cert.description}
                    </p>

                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="mt-2 w-fit rounded-lg bg-sage/90 px-4 py-2 text-sm font-medium text-white transition hover:bg-sage dark:bg-sage/80 dark:hover:bg-sage"
                    >
                      View Certificate
                    </button>
                  </div>

                  {/* Certificate Preview/Viewer */}
                  {cert.pdf && (
                    <div className="flex flex-col gap-4">
                      <CertificateViewer certificate={cert} />
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Lightbox Modal for Full View */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="relative max-h-[90vh] max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
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
                <CertificateViewer certificate={selectedCert} />

                {/* Certificate Info */}
                <div className="mt-4 rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
                  <h3 className="text-xl font-semibold text-navy dark:text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-sage dark:text-sage/80">
                    {selectedCert.issuer}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {selectedCert.date}
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {selectedCert.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
