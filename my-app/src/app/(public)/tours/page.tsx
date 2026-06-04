import ToursSearchForm from "./ToursSearchForm";
import ToursHero from "./ToursHero";
import { dbFindFilteredTours } from "@/lib/repositories/tour.repo";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{
    city?: string;
    dates?: string;
    adults?: string;
    children?: string;
    rooms?: string;
    rating?: string;
  }>;
}) {
  const params = await searchParams;
  console.log(params);
  const toursList = await dbFindFilteredTours(params);

  return (
    <main>
      <ToursHero />
      <ToursSearchForm toursListData={toursList} />
    </main>
  );
}
