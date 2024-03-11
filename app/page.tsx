import HeroSection from "../components/sections/hero";
import AboutMeSection from "../components/sections/about-me";
import SkillsSection from "../components/sections/skills";
import ExperienceSection from "../components/sections/experiences";
import WorkSection from "../components/sections/work";
import TestimonialsSection from "../components/sections/testimonials";
import ContactSection from "../components/sections/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
