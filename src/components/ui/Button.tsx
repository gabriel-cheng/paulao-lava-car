import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "accent" | "ghost" | "light" | "whatsapp";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
  className?: string;
  children: ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-white border-transparent hover:bg-ink-light shadow-sm",
  accent:
    "bg-signal text-white border-transparent hover:bg-signal-hover shadow-sm",
  ghost:
    "bg-transparent border-ink text-ink hover:bg-ink hover:text-white",
  light:
    "bg-transparent border-white/80 text-white hover:bg-white hover:text-ink",
  whatsapp:
    "bg-whatsapp text-whatsapp-ink border-transparent hover:brightness-95 shadow-sm",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-5 py-3 text-base gap-2",
  lg: "px-6 py-3.5 text-base sm:text-lg gap-2.5",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  children,
}: ButtonProps) {
  const extra = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      className={`inline-flex items-center justify-center rounded-lg border-2 font-semibold transition duration-150 hover:-translate-y-0.5 active:translate-y-0 ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
      href={href}
      {...extra}
    >
      {children}
    </a>
  );
}
