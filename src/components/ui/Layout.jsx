import { Outlet } from "react-router-dom";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-foam text-ink">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-signal focus:px-4 focus:py-2 focus:font-semibold focus:text-ink"
      >
        Ir para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
