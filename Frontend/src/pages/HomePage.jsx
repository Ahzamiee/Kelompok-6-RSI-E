import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { NewsSection } from "../components/NewsSection";
import { StatisticsSection } from "../components/StatisticsSection";
import { QuickAccessSection } from "../components/QuickAccessSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <StatisticsSection />
      <QuickAccessSection />
    </>
  );
}