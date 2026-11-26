export type LogoVariant = "onLight" | "onDark";
export type LogoSize = "sm" | "md" | "lg";

export interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  showTagline?: boolean;
  className?: string;
}

const SIZE_MAP: Record<
  LogoSize,
  { container: string; text: string; tagline: string }
> = {
  sm: {
    container: "min-w-[8.25rem]",
    text: "text-[1.35rem]",
    tagline: "text-[10px]",
  },
  md: {
    container: "min-w-[9.75rem]",
    text: "text-[1.65rem]",
    tagline: "text-[11px]",
  },
  lg: {
    container: "min-w-[11.75rem]",
    text: "text-[2rem]",
    tagline: "text-xs",
  },
};

export default function Logo({
  variant = "onLight",
  size = "md",
  showTagline = false,
  className = "",
}: LogoProps) {
  const s = SIZE_MAP[size];
  const isDarkBg = variant === "onDark";

  return (
    <span
      className={`inline-flex flex-col select-none ${s.container} ${className}`}
    >
      <span
        className={`self-start font-display font-extrabold uppercase leading-[0.92] tracking-tight ${s.text} ${
          isDarkBg ? "text-white" : "text-ink"
        }`}
      >
        PAULÃO
      </span>
      <span
        className={`flex w-full justify-end font-display font-extrabold uppercase leading-[0.92] tracking-tight ${s.text} ${
          isDarkBg ? "text-[#5ED7FF]" : "text-[#0B82B5]"
        }`}
      >
        LAVA-CAR
      </span>
      {showTagline && (
        <span
          className={`mt-1.5 flex w-full justify-end font-sans font-semibold uppercase tracking-[0.16em] ${s.tagline} ${
            isDarkBg ? "text-suds/80" : "text-chrome"
          }`}
        >
          Paranavaí • PR
        </span>
      )}
    </span>
  );
}
