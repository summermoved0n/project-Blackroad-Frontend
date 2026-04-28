import ExploreWithUs from "./home/ExploreWithUs";
import FAQ from "./home/FAQ";
import FeelComfort from "./home/FeelComfort";
import HomeHero from "./home/HomeHero";
import KeepInTouch from "./home/KeepInTouch";
import PopularTours from "./home/PopularTours";
import Reviews from "./home/Reviews";
import TravelWithUs from "./home/TravelWithUs";
import WhyChooseUs from "./home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <ExploreWithUs />
      <WhyChooseUs />
      <TravelWithUs />
      <FeelComfort />
      <PopularTours />
      <Reviews />
      <KeepInTouch />
      <FAQ />
    </main>
  );
}
