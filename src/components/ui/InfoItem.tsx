import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export interface InfoItemProps {
  label: string;
  icon?: LucideIcon;
  children: ReactNode;
}

export default function InfoItem({ label, icon: Icon, children }: InfoItemProps) {
  return (
    <div className="rounded-xl border border-white/15 bg-white/8 p-5 transition hover:border-signal/70">
      <dt className="flex items-center gap-2 font-display text-xl font-bold tracking-wide text-[#7ce0ff]">
        {Icon && <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />}
        {label}
      </dt>
      <dd className="mt-2 text-base leading-relaxed text-white/90">
        {children}
      </dd>
    </div>
  );
}
