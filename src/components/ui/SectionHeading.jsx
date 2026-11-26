export default function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
  className = "",
}) {
  return (
    <div className={`mb-10 max-w-2xl ${className}`}>
      {eyebrow && (
        <span
          className={`mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] ${
            dark ? "text-signal" : "text-chrome"
          }`}
        >
          <span
            className="h-0.5 w-6 rounded-full bg-signal"
            aria-hidden="true"
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl ${
          dark ? "text-foam" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-3.5 text-base leading-relaxed sm:text-lg ${
            dark ? "text-suds/85" : "text-chrome"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
