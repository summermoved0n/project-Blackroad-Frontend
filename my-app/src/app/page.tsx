import ExploreWithUs from "./components/ExploreWithUs";
import HomeHero from "./components/HomeHero";
import TravelWithUs from "./components/TravelWithUs";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <ExploreWithUs />
      <WhyChooseUs />
      <TravelWithUs />
    </main>
  );
}
