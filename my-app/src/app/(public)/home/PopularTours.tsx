import Carousel from "@/components/Carousel";
import { dbFindPopularTours } from "@/lib/repositories/tour.repo";

export default async function PopularTours() {
  const getPopularTours = await dbFindPopularTours();
  const popularTours = getPopularTours.slice(0, 4);
  console.log("popularTours", popularTours);
  return (
    <>
      <Carousel tours={popularTours} componentTitle="popular tours" />
    </>
  );
}
