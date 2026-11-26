const SIZE_MAP = {
  sm: {
    main: "text-[1.75rem]",
    sub: "text-base",
    tagline: "text-[10px]",
  },
  md: {
    main: "text-[2.15rem]",
    sub: "text-lg",
    tagline: "text-[11px]",
  },
  lg: {
    main: "text-[2.65rem]",
    sub: "text-xl",
    tagline: "text-xs",
  },
};

export default function Logo({
  size = "md",
  showTagline = false,
  className = "",
}) {
  const s = SIZE_MAP[size] ?? SIZE_MAP.md;

  return (
    <span className={`inline-flex flex-col select-none ${className}`}>
      <div className="max-w-fit">
        <span
          className={`font-display font-extrabold uppercase leading-[0.88] tracking-tight text-[#FFF] ${s.main}`}
        >
          PAULÃO
        </span>
        <span
          className={`flex justify-end font-display italic font-bold leading-none tracking-[0.04em] text-[#199DD8] ${s.sub}`}
        >
          LAVA-CAR
        </span>
      </div>
      {showTagline && (
        <span
          className={`mt-1.5 font-sans font-semibold uppercase tracking-[0.16em] text-chrome ${s.tagline}`}
        >
          Lavagem Automotiva
        </span>
      )}
    </span>
  );
}
