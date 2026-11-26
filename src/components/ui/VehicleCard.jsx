import { Bike, Car, Truck } from "lucide-react";
import ImageSlot from "./ImageSlot";

const VEHICLE_ICONS = {
  carros: Car,
  motos: Bike,
  camionetes: Truck,
};

export default function VehicleCard({ id, title, image }) {
  const Icon = VEHICLE_ICONS[id] ?? Car;

  return (
    <figure className="group overflow-hidden rounded-2xl border-2 border-ink/15 bg-white transition duration-200 hover:-translate-y-1 hover:border-ink hover:shadow-[6px_6px_0_#10a0d8]">
      <ImageSlot
        className="rounded-none"
        imgClassName="transition duration-500 group-hover:scale-105"
        file={image.file}
        alt={image.alt}
        ratio="16 / 9"
      />
      <figcaption className="flex items-center justify-between border-t border-ink/10 px-5 py-3.5">
        <span className="font-display text-2xl font-bold tracking-tight text-ink">
          {title}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-suds text-ink transition group-hover:bg-signal group-hover:text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </figcaption>
    </figure>
  );
}
