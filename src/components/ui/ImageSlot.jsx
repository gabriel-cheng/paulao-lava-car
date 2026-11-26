import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ImageIcon, Maximize2, X, ZoomIn, ZoomOut } from "lucide-react";

// Mostra a imagem de public/images/<file>. Se o arquivo não existir,
// exibe um espaço reservado dizendo exatamente onde colocá-lo.
// Ao clicar em uma imagem carregada, abre um modal ampliado para visualização.
export default function ImageSlot({
  file,
  alt,
  ratio = "16 / 9",
  className = "",
  imgClassName = "",
  zoomable = true,
}) {
  const [failed, setFailed] = useState(!file);
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const triggerRef = useRef(null);
  const closeBtnRef = useRef(null);
  const src = file ? `/images/${file}` : null;

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setZoomed(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeModal = () => {
    setOpen(false);
    setZoomed(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      <div
        className={`relative w-full overflow-hidden rounded-xl bg-suds ${className}`}
        style={{ aspectRatio: ratio }}
      >
        {failed ? (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-chrome/45 bg-gradient-to-br from-suds via-foam to-suds/80 p-5 text-center text-chrome"
            role="img"
            aria-label={alt}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ink/8 text-ink/75">
              <ImageIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <strong className="font-display text-lg font-bold tracking-wide text-ink">
              Sua imagem aqui (1280×720)
            </strong>
            <span className="max-w-full rounded-md bg-white/80 px-2.5 py-1 font-mono text-xs text-ink/80 break-all ring-1 ring-ink/10">
              public/images/{file}
            </span>
          </div>
        ) : zoomable ? (
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Ampliar imagem: ${alt}`}
            className="group/slot relative block h-full w-full cursor-zoom-in border-0 bg-transparent p-0 text-left focus-visible:outline-offset-[-3px]"
          >
            <img
              src={src}
              alt={alt}
              width={1280}
              height={720}
              loading="lazy"
              onError={() => setFailed(true)}
              className={`block h-full w-full object-cover ${imgClassName}`}
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-ink/85 px-2.5 py-1.5 text-xs font-semibold text-white opacity-90 shadow-md backdrop-blur-sm transition duration-200 sm:opacity-0 sm:group-hover/slot:opacity-100 sm:group-focus-visible/slot:opacity-100"
            >
              <Maximize2 className="h-3.5 w-3.5 text-signal" />
              <span>Ampliar</span>
            </span>
          </button>
        ) : (
          <img
            src={src}
            alt={alt}
            width={1280}
            height={720}
            loading="lazy"
            onError={() => setFailed(true)}
            className={`block h-full w-full object-cover ${imgClassName}`}
          />
        )}
      </div>

      {open &&
        !failed &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex flex-col bg-ink-dark/92 p-4 backdrop-blur-md sm:p-6"
          >
            <div
              className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 pb-3 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="truncate text-sm font-medium text-suds sm:text-base">
                {alt}
              </p>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => setZoomed((z) => !z)}
                  aria-label={zoomed ? "Reduzir zoom" : "Aplicar zoom"}
                  className="inline-flex h-10 cursor-pointer items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 text-xs font-semibold text-white transition hover:border-signal hover:bg-white/20"
                >
                  {zoomed ? (
                    <>
                      <ZoomOut className="h-4 w-4 text-signal" aria-hidden="true" />
                      <span className="hidden sm:inline">Ajustar à tela</span>
                    </>
                  ) : (
                    <>
                      <ZoomIn className="h-4 w-4 text-signal" aria-hidden="true" />
                      <span className="hidden sm:inline">Aproximar</span>
                    </>
                  )}
                </button>

                <button
                  ref={closeBtnRef}
                  type="button"
                  onClick={closeModal}
                  aria-label="Fechar visualização"
                  className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:border-signal hover:bg-signal hover:text-white"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div
              className={`flex flex-1 ${
                zoomed
                  ? "items-start justify-start overflow-auto p-2"
                  : "items-center justify-center overflow-hidden"
              }`}
            >
              <img
                src={src}
                alt={alt}
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomed((z) => !z);
                }}
                className={`m-auto rounded-xl border-2 border-white/15 bg-ink shadow-2xl transition-all duration-200 ${
                  zoomed
                    ? "h-auto w-[150vw] max-w-none cursor-zoom-out sm:w-[1280px]"
                    : "max-h-[82vh] max-w-full cursor-zoom-in object-contain"
                }`}
              />
            </div>

            <p className="pt-2 text-center text-xs text-suds/75">
              Clique na imagem para {zoomed ? "ajustar" : "aproximar"} ou pressione
              Esc para fechar
            </p>
          </div>,
          document.body,
        )}
    </>
  );
}
