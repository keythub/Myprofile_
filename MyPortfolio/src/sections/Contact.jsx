import { FiInstagram, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import FadeIn from "../components/FadeIn.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";

// Replace placeholder links with your real profiles.
const socials = [
  { label: "Email", icon: FiMail, href: "mailto:kateserrano104@gmail.com" },
  {
    label: "LinkedIn",
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/kate-serrano-ba925a38a/",
  },
  { label: "Twitter", icon: FiTwitter, href: "#" },
  {
    label: "Instagram",
    icon: FiInstagram,
    href: "https://www.instagram.com/yorsomnium_/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Let's work together and grow your business"
            description="Share a bit about your workflow and the support you need. I'll respond within 1-2 business days."
          />
          <div className="mt-8 flex flex-wrap gap-4">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-600 shadow-soft transition hover:-translate-y-0.5 hover:border-sage/60 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200"
                >
                  <Icon size={16} />
                  {social.label}
                </a>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
