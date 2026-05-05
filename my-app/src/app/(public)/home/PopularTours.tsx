import Carousel from "@/components/Carousel";
import { popularTours } from "@/lib/data/homePageData";

export default function PopularTours() {
  return (
    <>
      <Carousel tours={popularTours} componentTitle="popular tours" />
    </>
  );
}
