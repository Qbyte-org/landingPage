import SiteShell from "./components/layout/SiteShell";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import Categories from "./components/sections/Categories";
import HowItWorks from "./components/sections/HowItWorks";
import PopularRestaurants from "./components/sections/PopularRestaurants";
import AppShowcase from "./components/sections/AppShowcase";
import ForPartners from "./components/sections/ForPartners";
import ForRiders from "./components/sections/ForRiders";
import CityCoverage from "./components/sections/CityCoverage";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import FinalCTA from "./components/sections/FinalCTA";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <TrustBar />
      <Categories />
      <HowItWorks />
      <PopularRestaurants />
      <AppShowcase />
      <ForPartners />
      <ForRiders />
      <CityCoverage />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </SiteShell>
  );
}
