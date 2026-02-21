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
    title: "Inbox and Messaging",
    description:
      "Tidy inboxes, prioritize replies, and keep communication flowing.",
    icon: FiInbox,
  },
  {
    title: "Calendar Support",
    description: "Schedule meetings, send confirmations, and manage reminders.",
    icon: FiCalendar,
  },
  {
    title: "Content Scheduling",
    description:
      "Plan posts, organize content ideas, and assist with scheduling.",
    icon: FiShare2,
  },
  {
    title: "Admin Tasks",
    description: "Handle documents, templates, and recurring business tasks.",
    icon: FiClipboard,
  },
  {
    title: "Research and Summaries",
    description: "Gather insights and turn them into clear, quick summaries.",
    icon: FiSearch,
  },
  {
    title: "File and Data Organization",
    description:
      "Organize files, clean data, and keep everything easy to find.",
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
            description="Not sure where to start? We will begin with a small set of priorities and refine the list as we learn your workflow."
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
