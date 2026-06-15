import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import { riderTiers } from "../data/content";

export default function ForRiders() {
  return (
    <section id="riders" className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Earn with QuickBite"
          title="Ride with us — smartphone or not"
          subtitle="Our two-tier rider model means everyone can earn. Sign up directly, or run a fleet of riders through our dispatcher portal."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {riderTiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 0.12}
              className="flex flex-col rounded-card border border-border bg-cream p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="flex items-center gap-4">
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-pill bg-white text-2xl shadow-sm"
                  aria-hidden="true"
                >
                  {tier.emoji}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-navy">{tier.name}</h3>
                  <p className="text-sm text-muted">{tier.tagline}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {tier.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-base text-navy/80">
                    <span
                      className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-pill bg-success text-xs text-white"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/riders" size="lg">
            Start riding
          </Button>
        </div>
      </Container>
    </section>
  );
}
