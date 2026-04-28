import { popularTours } from "@/lib/data/homePageData";
import Carousel from "../components/Carousel";

export default function PopularTours() {
  return (
    <>
      <Carousel tours={popularTours} componentTitle="popular tours" />
    </>
  );
}
