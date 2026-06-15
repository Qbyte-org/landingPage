import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Loved across Nigeria"
          title="Customers, vendors & riders agree"
          subtitle="Real stories from the QuickBite community."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
            <figure
              className="flex h-full flex-col rounded-card border border-border bg-cream p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="text-lg text-brand" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-navy/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-pill text-sm font-bold text-white"
                  style={{ backgroundColor: t.accent }}
                  aria-hidden="true"
                >
                  {t.initials}
                </span>
                <span>
                  <span className="block text-sm font-bold text-navy">
                    {t.name}
                  </span>
                  <span className="block text-xs text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
