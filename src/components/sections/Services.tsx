import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "./ServiceCard";
import VehicleCard from "../ui/VehicleCard";
import { services, vehicles } from "../../data/siteData";

export default function Services() {
  return (
    <section id="servicos" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Serviços"
          title="Dois tipos de lavagem, três tipos de veículo"
          intro="Escolha a lavagem que combina com o que seu veículo precisa hoje."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {services.map((s) => (
            <ServiceCard key={s.id} {...s} />
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <h3 className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Atendemos
            </h3>
            <span className="h-px flex-1 bg-ink/15" aria-hidden="true" />
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {vehicles.map((v) => (
              <VehicleCard
                key={v.id}
                id={v.id}
                title={v.title}
                image={v.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
