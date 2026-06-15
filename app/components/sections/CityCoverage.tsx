import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { cities } from "../data/content";

export default function CityCoverage() {
  return (
    <section id="cities" className="bg-cream py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Where we deliver"
          title="Now serving cities across Nigeria"
          subtitle="We're growing fast. Don't see your city? It's probably next."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {cities.map((city, i) => (
            <Reveal key={city} delay={i * 0.04} direction="up">
            <span
              className="inline-flex items-center gap-2 rounded-pill border border-border bg-white px-5 py-2.5 text-base font-semibold text-navy shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand-dark"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 21s7-5.7 7-11a7 7 0 1 0-14 0c0 5.3 7 11 7 11Z"
                  stroke="#ff6b00"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="10" r="2.5" stroke="#ff6b00" strokeWidth="2" />
              </svg>
              {city}
            </span>
            </Reveal>
          ))}
          <span className="inline-flex items-center rounded-pill bg-brand-dark px-5 py-2.5 text-base font-semibold text-white">
            + More coming soon
          </span>
        </div>
      </Container>
    </section>
  );
}
