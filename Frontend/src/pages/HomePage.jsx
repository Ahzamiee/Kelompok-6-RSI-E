import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { NewsSection } from "../components/NewsSection";
import { StatisticsSection } from "../components/StatisticsSection";
import { PlanAdventureSection } from "../components/PlanAdventureSection";

export function HomePage({ onNavigate }) {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <NewsSection />
      <StatisticsSection/>
      <PlanAdventureSection onNavigate={onNavigate}/>
    </>
  );
}