import { useEffect, useState } from "react";

// Aberto de segunda a sábado, das 8h às 17h (horário de Brasília).
function checkOpen() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "numeric",
    hour12: false,
  }).formatToParts(new Date());
  const weekday = parts.find((p) => p.type === "weekday").value;
  const hour = Number(parts.find((p) => p.type === "hour").value) % 24;
  return weekday !== "Sun" && hour >= 8 && hour < 17;
}

export default function OpenStatus({ dark = false, className = "" }) {
  const [open, setOpen] = useState(checkOpen);

  useEffect(() => {
    const id = setInterval(() => setOpen(checkOpen()), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm ring-1 ${
        dark
          ? "bg-white/10 text-foam ring-white/15"
          : "bg-ink text-foam ring-ink/10"
      } ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
        {open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3ddc84] opacity-75" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            open ? "bg-[#3ddc84]" : "bg-[#ff6b5e]"
          }`}
        />
      </span>
      <span>
        {open
          ? "Aberto agora • Até as 17h"
          : "Fechado agora • Seg a sáb, das 8h às 17h"}
      </span>
    </div>
  );
}
