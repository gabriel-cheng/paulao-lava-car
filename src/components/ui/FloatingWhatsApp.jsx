import { MessageCircle } from "lucide-react";
import { business } from "../../data/siteData";

export default function FloatingWhatsApp() {
  return (
    <a
      className="fixed right-4 bottom-4 z-30 inline-flex items-center gap-2.5 rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-whatsapp-ink shadow-lg shadow-ink/25 ring-2 ring-white/80 transition duration-150 hover:-translate-y-0.5 hover:brightness-95 sm:right-6 sm:bottom-6 sm:text-base"
      href={business.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar uma lavagem"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
