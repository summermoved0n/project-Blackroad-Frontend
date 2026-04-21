import ExploreWithUs from "./components/ExploreWithUs";
import FAQ from "./components/FAQ";
import FeelComfort from "./components/FeelComfort";
import HomeHero from "./components/HomeHero";
import KeepInTouch from "./components/KeepInTouch";
import PopularTours from "./components/PopularTours";
import Reviews from "./components/Reviews";
import TravelWithUs from "./components/TravelWithUs";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <ExploreWithUs />
      <WhyChooseUs />
      {/* <TravelWithUs /> */}
      <FeelComfort />
      <PopularTours />
      <Reviews />
      <KeepInTouch />
      <FAQ />
    </main>
  );
}
