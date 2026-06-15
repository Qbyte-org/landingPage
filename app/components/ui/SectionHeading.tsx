import type { ReactNode } from "react";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = tone === "light" ? "text-white" : "text-navy";
  const subColor = tone === "light" ? "text-white/70" : "text-muted";

  return (
    <Reveal className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow ? (
        <span className="mb-4 inline-flex items-center gap-2 rounded-pill bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-dark">
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`font-display text-3xl font-extrabold leading-[1.1] sm:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={`mt-4 text-lg leading-relaxed ${subColor}`}>{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
