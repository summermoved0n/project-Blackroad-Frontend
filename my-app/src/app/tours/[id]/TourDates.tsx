import { Text } from "@/app/components/Text";
import ToursTable from "./ToursTable";
import { toursDatesData } from "@/lib/data/toursPageData";

export default function TourDates() {
  return (
    <section className="py-25">
      <Text as="h2" color="white" size="lg" className="uppercase mb-12.5">
        Dates and prices
      </Text>

      <ToursTable data={toursDatesData} />
    </section>
  );
}
