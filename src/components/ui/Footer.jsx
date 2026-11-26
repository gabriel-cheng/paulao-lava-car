import { MapPin, Phone } from "lucide-react";
import { business } from "../../data/siteData";
import Logo from "./Logo";

const developerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/gabriel-cheng",
    ariaLabel: "Perfil de Gabriel Carvalho no GitHub",
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/gabriel-henrique-ita",
    ariaLabel: "Perfil de Gabriel Carvalho no LinkedIn",
    icon: (
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/12 bg-ink-dark pt-10 pb-24 text-suds sm:pb-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-start gap-2.5">
            <div className="inline-flex rounded-xl bg-white px-4 py-2.5 shadow-sm">
              <Logo size="sm" />
            </div>
            <p className="text-xs text-suds/75">
              © {new Date().getFullYear()} {business.name}. Todos os direitos
              reservados.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-suds/90 sm:items-end">
            <p className="inline-flex items-center gap-2">
              <MapPin
                className="h-4 w-4 shrink-0 text-signal"
                aria-hidden="true"
              />
              <span>
                {business.address.line1}, {business.address.line2}
              </span>
            </p>
            <a
              href={business.phoneLink}
              className="inline-flex items-center gap-2 font-medium text-white transition hover:text-signal"
            >
              <Phone
                className="h-4 w-4 shrink-0 text-signal"
                aria-hidden="true"
              />
              {business.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/12 pt-5 text-xs text-suds/75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Desenvolvido por{" "}
            <span className="font-semibold text-white">Gabriel Carvalho</span>
          </p>

          <div className="flex flex-wrap items-center gap-2.5">
            {developerLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 font-medium text-white/90 transition hover:border-signal/70 hover:text-signal"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
