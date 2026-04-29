import { Text } from "@/app/components/Text";
import clsx from "clsx";

const toorsDatesData = [
  {
    id: 1,
    departure: "2026-04-09",
    return: "2026-04-13",
    cityFrom: "Kyiv",
    price: 500,
  },
  {
    id: 2,
    departure: "2026-05-12",
    return: "2026-05-20",
    cityFrom: "Kyiv",
    price: 800,
  },
];

export default function TourDates() {
  return (
    <section className="py-25">
      <Text as="h2" color="white" size="lg" className="uppercase mb-12.5">
        Dates and prices
      </Text>

      <div className="py-15 px-15 bg-[#171717] grid grid-cols-[1fr_1fr_2fr_1fr_200px] grid-flow-col">
        <div>
          <Text
            as="h3"
            color="white"
            size="sm"
            className="pb-4 border-b border-white/20"
          >
            Date of departure
          </Text>

          {toorsDatesData.map(({ id, departure, cityFrom }) => (
            <div key={id} className={clsx("py-5 border-b border-white/20")}>
              <Text as="h3" color="white60" size="sm" className="">
                {new Date(departure).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </Text>
              <Text as="h3" color="white" size="md" className="">
                {new Date(departure).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </Text>
              <Text as="h3" color="white60" size="sm" className="">
                Departure from{" "}
                <span className="text-[rgba(234,156,63,0.6)]">{cityFrom}</span>
              </Text>
            </div>
          ))}
        </div>

        <div>
          <Text
            as="h3"
            color="white"
            size="sm"
            className="pb-4 border-b border-white/20"
          >
            Date of return
          </Text>

          {toorsDatesData.map(({ id, return: returnDate, cityFrom }) => (
            <div key={id} className={clsx("py-5 border-b border-white/20")}>
              <Text as="h3" color="white60" size="sm" className="">
                {new Date(returnDate).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </Text>
              <Text as="h3" color="white" size="md" className="">
                {new Date(returnDate).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </Text>
              <Text as="h3" color="white60" size="sm" className="">
                Departure from{" "}
                <span className="text-[rgba(234,156,63,0.6)]">{cityFrom}</span>
              </Text>
            </div>
          ))}
        </div>

        <div className="">
          <Text
            as="h3"
            color="white"
            size="sm"
            className="pb-4 border-b border-white/20"
          >
            Choose a room
          </Text>

          {toorsDatesData.map(({ id }) => (
            <div key={id} className="text-white/20 border-b border-white/20">
              <button type="button" className="">Single</button>
              <button type="button">Double</button>
            </div>
          ))}
        </div>

        <div>
          <Text
            as="h3"
            color="white"
            size="sm"
            className="pb-4 border-b border-white/20"
          >
            Price
          </Text>
        </div>

        <div>
          <Text
            as="h3"
            color="white"
            size="sm"
            className="pb-4 border-b border-white/20"
          >
            D
          </Text>
        </div>
      </div>
    </section>
  );
}
