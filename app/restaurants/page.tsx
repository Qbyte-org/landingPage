import type { Metadata } from "next";
import SiteShell from "../components/layout/SiteShell";
import PageHeader from "../components/sections/PageHeader";
import Categories from "../components/sections/Categories";
import PopularRestaurants from "../components/sections/PopularRestaurants";
import CityCoverage from "../components/sections/CityCoverage";
import FinalCTA from "../components/sections/FinalCTA";
import Button from "../components/ui/Button";

export const metadata: Metadata = {
  title: "Restaurants — QuickBite",
  description:
    "Browse verified restaurants, home kitchens and vendors delivering across Nigeria on QuickBite.",
};

export default function RestaurantsPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Order food"
        title="Find restaurants near you"
        subtitle="Thousands of verified kitchens, one app. Full ordering goes live with the QuickBite app — preview what's cooking below."
      >
        <Button href="#app" size="lg">
          Get the app
        </Button>
        <Button href="/" variant="outline" size="lg">
          Back home
        </Button>
      </PageHeader>
      <Categories />
      <PopularRestaurants />
      <CityCoverage />
      <FinalCTA />
    </SiteShell>
  );
}
