import {
  FiInbox,
  FiCalendar,
  FiShare2,
  FiClipboard,
  FiSearch,
  FiFolder,
} from "react-icons/fi";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

const services = [
  {
    title: "Inbox Management",
    description:
      "Keep your inbox organized with labels, filters, and timely responses.",
    icon: FiInbox,
  },
  {
    title: "Appointment Scheduling",
    description: "Manage calendars, confirmations, and reminders with ease.",
    icon: FiCalendar,
  },
  {
    title: "Social Media Assistance",
    description:
      "Schedule posts, manage content calendars, and support engagement.",
    icon: FiShare2,
  },
  {
    title: "Administrative Support",
    description:
      "Handle documents, templates, and daily admin tasks efficiently.",
    icon: FiClipboard,
  },
  {
    title: "Online Research",
    description: "Gather clear, organized insights to inform your next move.",
    icon: FiSearch,
  },
  {
    title: "Data Organization",
    description: "Clean and structure data for easy access and reporting.",
    icon: FiFolder,
  },
];

export default function Services() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title="Support designed for busy founders"
            description="Flexible, beginner-friendly services delivered with polish and care."
          />
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title}>
                <div className="h-full rounded-2xl border border-white/70 bg-white/70 p-6 shadow-soft backdrop-blur transition hover:-translate-y-1 hover:border-sage/60 dark:border-slate-800/60 dark:bg-slate-900/60">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sage/20 text-sage">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
