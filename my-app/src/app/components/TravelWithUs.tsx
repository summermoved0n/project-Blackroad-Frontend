import { travelWithUsTours } from "@/lib/data/homePageData";
import Carousel from "./Carousel";

export default function TravelWithUs() {
  return (
    <>
      <Carousel tours={travelWithUsTours} componentTitle="travel with us" />
    </>
  );
}
