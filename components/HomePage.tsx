import { HomeAboutSection } from "@/components/home/HomeAboutSection";
import { HomeFeaturedMenuSection } from "@/components/home/HomeFeaturedMenuSection";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeServicesSection } from "@/components/home/HomeServicesSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAboutSection />
      <HomeServicesSection />
      <HomeFeaturedMenuSection />
    </>
  );
}
