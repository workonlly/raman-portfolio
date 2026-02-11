import Image from "next/image";
import PortfolioHero from "./header";
import AboutFeature from "./about";
import ContactSection from "./contact";
import ProfileLocation from "./social";
import WorkedWith from "./slider";
import ServiceCard from "./card";
export default function Home() {
  return (
<div>
  <PortfolioHero></PortfolioHero>
  <WorkedWith></WorkedWith>
  <ServiceCard></ServiceCard>
  <AboutFeature></AboutFeature>
  <ContactSection></ContactSection>
  <ProfileLocation></ProfileLocation>
</div>
  );
}
