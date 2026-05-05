import ExploreWithUs from "./(public)/home/ExploreWithUs";
import FAQ from "./(public)/home/FAQ";
import FeelComfort from "./(public)/home/FeelComfort";
import HomeHero from "./(public)/home/HomeHero";
import KeepInTouch from "./(public)/home/KeepInTouch";
import PopularTours from "./(public)/home/PopularTours";
import Reviews from "./(public)/home/Reviews";
import TravelWithUs from "./(public)/home/TravelWithUs";
import WhyChooseUs from "./(public)/home/WhyChooseUs";

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
