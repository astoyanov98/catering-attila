import { HomeAboutSection } from "@/components/home/HomeAboutSection";
import { HomeContactSection } from "@/components/home/HomeContactSection";
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
      {/* <HomeContactSection /> */}
    </>
  );
}
