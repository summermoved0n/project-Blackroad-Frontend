import { ArrowDownIcon } from "@/lib/icons/ArrowDownIcon";
import { Text } from "../components/Text";

export default function SortBy() {
  return (
    <div className="flex justify-between items-center md:mb-12.5">
      <Text as="h3" color="white" size="lg" spacing="sm" className="uppercase">
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
  );
}
