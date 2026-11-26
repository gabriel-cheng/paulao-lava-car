import SectionHeading from "../ui/SectionHeading";
import ImageSlot from "../ui/ImageSlot";
import { workExamples } from "../../data/siteData";

export default function WorkExamples() {
  return (
    <section
      id="trabalhos"
      className="border-y border-ink/10 bg-suds/60 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Na prática"
          title="Serviços que já fizemos"
          intro="Veículos reais, atendidos aqui no Paulão."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {workExamples.map((w, i) => (
            <figure
              key={`${w.file}-${i}`}
              className="group flex flex-col overflow-hidden rounded-2xl border-2 border-ink/15 bg-white transition duration-200 hover:-translate-y-0.5 hover:border-ink hover:shadow-[6px_6px_0_#10a0d8]"
            >
              <div className="overflow-hidden">
                <ImageSlot
                  className="rounded-none"
                  imgClassName="transition duration-500 group-hover:scale-105"
                  file={w.file}
                  alt={w.alt}
                  ratio="16 / 9"
                />
              </div>
              <figcaption className="flex items-center justify-between border-t border-ink/10 bg-white px-5 py-3.5">
                <span className="font-display text-xl font-bold tracking-tight text-ink">
                  {w.caption}
                </span>
                <span className="rounded-full bg-suds px-2.5 py-0.5 text-xs font-semibold text-ink">
                  0{i + 1}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
