import { ArrowDownIcon } from "@/lib/icons/ArrowDownIcon";
import SearchForm from "./SearchForm";
import { Text } from "./Text";
import Filter from "./Filter";
import ToursList from "./ToursList";

export default function ToursSearchForm() {
  return (
    <section>
      <div className="bg-[#171717] rounded-xl md:mb-25">
        <SearchForm />
      </div>

      <div className="flex justify-between items-center md:mb-12.5">
        <Text
          as="h3"
          color="white"
          size="lg"
          spacing="sm"
          className="uppercase"
        >
          choose a tour
        </Text>
        <div className="flex items-center gap-7.5">
          <Text as="p" color="white" size="md">
            Sort by:
          </Text>

          <Text as="p" color="white60" size="sm">
            default
          </Text>

          <ArrowDownIcon />
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] md:gap-7.5">
        <Filter />
        <ToursList />
      </div>
    </section>
  );
}
