import Carousel from "@/components/Carousel";
import { travelWithUsTours } from "@/lib/data/homePageData";

export default function TravelWithUs() {
  return (
    <>
      <Carousel tours={travelWithUsTours} componentTitle="travel with us" />
    </>
  );
}
