import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../components/ui/Logo";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto flex min-h-[48vh] max-w-6xl flex-col items-start justify-center gap-5 px-5 sm:px-8">
        <Logo variant="onLight" size="sm" />
        <span className="inline-flex items-center rounded-full bg-suds px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-ink">
          Erro 404
        </span>
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink sm:text-6xl">
          Página não encontrada
        </h1>
        <p className="max-w-md text-lg text-chrome">
          O endereço que você acessou não existe ou foi movido. Volte para a
          página inicial para ver nossos serviços e horários.
        </p>
        <Link
          className="inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-ink-light"
          to="/"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Voltar ao início
        </Link>
      </div>
    </section>
  );
}
