import ToursSearchForm from "./ToursSearchForm";
import ToursHero from "./ToursHero";
import { dbFindFilteredTours } from "@/lib/repositories/tour.repo";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{
    city?: string;
    dates?: string;
    rating?: string;
    price?: string;
    sort?: string;
    category?: string;
  }>;
}) {
  const params = await searchParams;
  // console.log(params);
  const toursList = await dbFindFilteredTours(params);
  // console.log("toursList", toursList);

  return (
    <main>
      <ToursHero />
      <ToursSearchForm toursListData={toursList} />
    </main>
  );
}
