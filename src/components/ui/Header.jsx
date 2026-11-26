import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import Button from "./Button";
import Logo from "./Logo";
import { business } from "../../data/siteData";

const links = [
  { href: "/#servicos", label: "Serviços" },
  { href: "/#trabalhos", label: "Trabalhos" },
  { href: "/#galeria", label: "Galeria" },
  { href: "/#contato", label: "Contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-white/95 text-ink backdrop-blur-md">
      <div className="mx-auto flex min-h-18 max-w-6xl items-center justify-between gap-4 px-5 py-2 sm:px-8">
        <Link to="/" className="group no-underline">
          <Logo size="md" />
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Principal"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-1 text-sm font-semibold uppercase tracking-wider text-ink/75 transition hover:text-ink after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-signal after:transition-all after:duration-200 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Button
            href={business.whatsappLink}
            variant="primary"
            size="sm"
            external
            className="hidden sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </Button>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 text-ink transition hover:bg-suds/60 md:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-ink/10 bg-white px-5 py-5 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Menu mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-semibold text-ink/85 transition hover:bg-suds/60 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2.5 border-t border-ink/10 pt-4">
            <Button
              href={business.whatsappLink}
              variant="primary"
              size="sm"
              external
              className="w-full"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chamar no WhatsApp
            </Button>
            <a
              href={business.phoneLink}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink/20 px-4 py-2 text-sm font-semibold text-ink transition hover:bg-suds/60"
            >
              <Phone className="h-4 w-4 text-signal" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
