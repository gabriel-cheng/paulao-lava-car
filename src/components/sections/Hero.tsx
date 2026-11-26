import {
  ArrowDown,
  Clock,
  MapPin,
  MessageCircle,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import Button from "../ui/Button";
import ImageSlot from "../ui/ImageSlot";
import OpenStatus from "../ui/OpenStatus";
import { business, heroImage } from "../../data/siteData";

interface HighlightItem {
  icon: LucideIcon;
  text: string;
}

const highlights: HighlightItem[] = [
  { icon: Clock, text: "Seg a sáb • 8h às 17h" },
  { icon: Sparkles, text: "Agente um horário conosco" },
  { icon: MapPin, text: "Jardim Ypê, Paranavaí-PR" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-grid py-12 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-suds/80 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <OpenStatus />

          <h1 className="mt-5 max-w-[14ch] font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-[4.6rem]">
            Lavagem de carros, motos e camionetes em{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Paranavaí.</span>
              <span
                className="absolute right-0 bottom-1 left-0 -z-0 h-3 bg-signal/35 sm:bottom-1.5 sm:h-4"
                aria-hidden="true"
              />
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-chrome sm:text-xl">
            Escolha entre a lavagem simples ou a completa. Atendimento rápido,
            capricho nos detalhes e entrega pronta para rodar no Jardim Ypê.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Button href={business.whatsappLink} size="lg" external>
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Agendar uma lavagem
            </Button>
            <Button href="#servicos" variant="ghost" size="lg">
              Ver serviços
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-ink/12 pt-6 text-sm font-medium text-ink/85">
            {highlights.map(({ icon: Icon, text }) => (
              <li key={text} className="inline-flex items-center gap-2">
                <Icon
                  className="h-4 w-4 shrink-0 text-signal"
                  aria-hidden="true"
                />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:col-span-6 lg:max-w-none">
          <div className="rounded-2xl border-2 border-ink bg-suds shadow-[12px_12px_0_#10a0d8] sm:shadow-[14px_14px_0_#10a0d8]">
            <ImageSlot
              className="rounded-[14px]"
              file={heroImage.file}
              alt={heroImage.alt}
              ratio="16 / 9"
            />
          </div>

          <div className="mt-4 inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-white px-4 py-2.5 text-sm font-semibold text-ink shadow-md sm:absolute sm:-bottom-4 sm:-left-5 sm:mt-0">
            <span className="flex h-2.5 w-2.5 rounded-full bg-signal ring-4 ring-signal/25" />
            <span>Carros • Motos • Camionetes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
