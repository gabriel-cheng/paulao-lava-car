import { Check, Droplets, MessageCircle, Sparkles } from "lucide-react";
import Button from "../ui/Button";
import { business } from "../../data/siteData";

function buildServiceWhatsappLink(serviceTitle) {
  const base = business.whatsappLink.split("?")[0];
  const text = `Olá! Vim pelo site e gostaria de saber sobre a ${serviceTitle}.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export default function ServiceCard({ title, description, items, featured }) {
  const Icon = featured ? Sparkles : Droplets;

  return (
    <article
      className={`flex flex-col justify-between rounded-2xl border-2 border-ink p-7 transition duration-200 hover:-translate-y-1 sm:p-8 ${
        featured
          ? "bg-ink text-white shadow-[10px_10px_0_#10a0d8]"
          : "bg-white text-ink shadow-sm hover:shadow-[6px_6px_0_#dcf2fb]"
      }`}
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span
            className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
              featured ? "bg-signal text-white" : "bg-suds text-ink"
            }`}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>

          {featured && (
            <span className="rounded-full bg-signal px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-white">
              Mais completa
            </span>
          )}
        </div>

        <h3
          className={`mt-5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl ${
            featured ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h3>

        <p
          className={`mt-2.5 text-base leading-relaxed ${
            featured ? "text-suds/90" : "text-chrome"
          }`}
        >
          {description}
        </p>

        <ul
          className={`mt-6 space-y-3 border-t pt-6 ${
            featured ? "border-white/15" : "border-ink/10"
          }`}
        >
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 font-medium">
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                  featured ? "bg-signal/30 text-[#7fe0ff]" : "bg-suds text-ink"
                }`}
              >
                <Check
                  className="h-3.5 w-3.5 stroke-[2.75]"
                  aria-hidden="true"
                />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-2">
        <Button
          href={buildServiceWhatsappLink(title)}
          variant={featured ? "accent" : "ghost"}
          external
          className="w-full"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Consultar {title.toLowerCase()}
        </Button>
      </div>
    </article>
  );
}
