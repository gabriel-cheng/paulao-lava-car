import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type TouchEvent,
} from "react";
import { ChevronLeft, ChevronRight, Pause } from "lucide-react";
import type { ImageAsset } from "../../data/siteData";
import ImageSlot from "../ui/ImageSlot";

export interface CarouselProps {
  items: ImageAsset[];
}

const INTERVAL_MS = 4500;

// Carrossel automático e manual: avança sozinho, pausa ao passar o mouse,
// aceita setas, teclado, pontos e deslize no celular.
export default function Carousel({ items }: CarouselProps) {
  const [index, setIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);
  const touchStart = useRef<number | null>(null);
  const total = items.length;

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const go = useCallback(
    (next: number) => {
      if (total === 0) return;
      setIndex((next + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (paused || prefersReducedMotion || total < 2) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % total), INTERVAL_MS);
    return () => clearTimeout(id);
  }, [index, paused, prefersReducedMotion, total]);

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStart.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(delta) > 40) go(index + (delta < 0 ? 1 : -1));
    touchStart.current = null;
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    }
  };

  const currentItem = items[index];

  return (
    <div
      className="mx-auto max-w-4xl"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Galeria de serviços realizados"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-suds shadow-[6px_6px_0_#10a0d8] sm:shadow-[12px_12px_0_#10a0d8]">
        <div
          className="touch-pan-y overflow-hidden"
          onTouchStart={(e) => (touchStart.current = e.touches[0].clientX)}
          onTouchEnd={onTouchEnd}
          onTouchCancel={() => (touchStart.current = null)}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((item, i) => (
              <div
                className="w-full shrink-0"
                key={item.file}
                aria-hidden={i !== index}
                aria-label={`${i + 1} de ${total}`}
              >
                <ImageSlot
                  className="rounded-none"
                  file={item.file}
                  alt={item.alt}
                  ratio="16 / 9"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute top-3 right-3 left-3 flex items-center justify-between gap-2 sm:top-4 sm:right-4 sm:left-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-ink/90 px-3 py-1 text-xs font-bold tracking-wider text-white backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </span>

          {paused && (
            <span className="inline-flex items-center gap-1 rounded-full bg-ink/90 px-2.5 py-1 text-xs font-medium text-[#7fe0ff] backdrop-blur-sm">
              <Pause className="h-3 w-3" aria-hidden="true" />
              Pausado
            </span>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="text-center text-sm font-medium text-chrome sm:flex-1 sm:text-left">
          {currentItem?.alt ?? "Serviço realizado"}
        </p>

        <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-end sm:gap-3">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Imagem anterior"
            className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-ink bg-white text-ink transition active:scale-95 hover:bg-ink hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div
            className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-0.5 sm:flex-initial sm:gap-1"
            role="tablist"
            aria-label="Selecionar imagem"
          >
            {items.map((item, i) => (
              <button
                key={item.file}
                type="button"
                role="tab"
                aria-selected={i === index}
                onClick={() => go(i)}
                aria-label={`Ir para a imagem ${i + 1}`}
                className="inline-flex min-h-10 min-w-7 cursor-pointer items-center justify-center rounded-full p-1 transition active:scale-90"
              >
                <span
                  aria-hidden="true"
                  className={`block h-2.5 rounded-full border-2 border-ink transition-all ${
                    i === index
                      ? "w-7 bg-signal"
                      : "w-2.5 bg-transparent hover:bg-ink/20"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Próxima imagem"
            className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-ink bg-white text-ink transition active:scale-95 hover:bg-ink hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
