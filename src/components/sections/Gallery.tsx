import SectionHeading from "../ui/SectionHeading";
import Carousel from "./Carousel";
import { carouselImages } from "../../data/siteData";

export default function Gallery() {
  return (
    <section id="galeria" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Galeria"
          title="Mais trabalhos"
          intro="Veja alguns dos nossos diversos trabalhos já feitos."
        />
        <Carousel items={carouselImages} />
      </div>
    </section>
  );
}
