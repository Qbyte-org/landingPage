import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { steps } from "../data/content";

export default function HowItWorks() {
  return (
    <section id="how" className="bg-cream py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Food in three easy steps"
          subtitle="No stress, no long talk. From craving to doorstep in minutes."
        />

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          {/* connector line on desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-brand/30 md:block"
          />
          {steps.map((step, i) => (
            <Reveal
              key={step.title}
              delay={i * 0.12}
              className="relative flex flex-col items-center rounded-card bg-white p-8 text-center shadow-card transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-pill bg-gradient-to-br from-brand to-brand-light text-3xl shadow-md">
                <span aria-hidden="true">{step.emoji}</span>
                <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-pill bg-navy text-sm font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
