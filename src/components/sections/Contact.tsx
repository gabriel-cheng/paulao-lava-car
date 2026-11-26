import { useState } from "react";
import {
  Check,
  Clock,
  Copy,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import InfoItem from "../ui/InfoItem";
import Button from "../ui/Button";
import OpenStatus from "../ui/OpenStatus";
import { business } from "../../data/siteData";

export default function Contact() {
  const [copied, setCopied] = useState<boolean>(false);
  const fullAddress = `${business.address.line1}, ${business.address.line2}`;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contato"
      className="bg-dark-grid bg-ink py-16 text-white sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHeading
            dark
            eyebrow="Onde estamos"
            title="Venha lavar com a gente"
            intro="Agende um horário pelo WhatsApp ou venha nos fazer uma visita."
            className="mb-7"
          />

          <OpenStatus dark className="mb-7" />

          <div className="flex flex-wrap gap-3">
            <Button
              href={business.whatsappLink}
              variant="accent"
              size="lg"
              external
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Agendar uma lavagem
            </Button>
            <Button href={business.mapsLink} variant="light" size="lg" external>
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Abrir no mapa
            </Button>
          </div>
        </div>

        <dl className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          <InfoItem label="Horário" icon={Clock}>
            {business.hours.map((h) => (
              <span key={h.days} className="block">
                <span className="font-medium text-white">{h.days}:</span>{" "}
                <span className="text-suds/90">{h.time}</span>
              </span>
            ))}
          </InfoItem>

          <InfoItem label="Endereço" icon={MapPin}>
            <span className="block">{business.address.line1}</span>
            <span className="block text-suds/90">{business.address.line2}</span>
            <button
              type="button"
              onClick={handleCopyAddress}
              className="mt-3 inline-flex cursor-pointer items-center gap-1.5 rounded-md bg-white/12 px-2.5 py-1 text-xs font-semibold text-[#7ce0ff] transition hover:bg-white/20"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  Endereço copiado
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                  Copiar endereço
                </>
              )}
            </button>
          </InfoItem>

          <InfoItem label="Telefone" icon={Phone}>
            <a
              href={business.phoneLink}
              className="font-semibold text-white underline decoration-signal underline-offset-4 transition hover:text-[#7ce0ff]"
            >
              {business.phoneDisplay}
            </a>
            <span className="mt-1 block text-xs text-suds/80">
              Toque para ligar diretamente
            </span>
          </InfoItem>

          <InfoItem label="E-mail" icon={Mail}>
            <a
              href={`mailto:${business.email}`}
              className="break-all font-semibold text-white underline decoration-signal underline-offset-4 transition hover:text-[#7ce0ff]"
            >
              {business.email}
            </a>
          </InfoItem>
        </dl>
      </div>
    </section>
  );
}
