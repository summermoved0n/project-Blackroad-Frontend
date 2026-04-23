import { Text } from "./Text";
import DualRange from "./DualRange";

export default function Filter() {
  return (
    <div className="py-10 px-7.5 bg-[#171717]">
      <Text as="h4" color="white" size="md" className="mb-10">
        All filters
      </Text>

      <div className="flex flex-col gap-5 mb-10">
        <Text as="p" color="white60" size="sm">
          Your budget (per night)
        </Text>

        <DualRange />
      </div>

      <div className="flex flex-col gap-5 items-start">
        <Text as="p" color="white60" size="sm">
          Property Type
        </Text>

        <div>
          <input type="checkbox" className="hidden peer" />
          <div className="w-5 h-5 border border-amber-300  cursor-pointer peer-checked:bg-orange-500"></div>
        </div>
      </div>
    </div>
  );
}
