import { Text } from "@/app/components/Text";

export default function TourInclude({
  included,
  notIncluded,
}: {
  included: string[];
  notIncluded: string[];
}) {
  return (
    <section className="py-25">
      <Text as="h2" color="white" size="lg" className="uppercase mb-12.5">
        What is included in the tour price?
      </Text>

      <div className="grid grid-cols-2 gap-10">
        <div>
          <Text as="h3" color="white" size="sm" className="mb-7.5">
            The price includes
          </Text>

          <ul className="flex flex-col gap-4">
            {included.map((item, i) => (
              <li key={i} className="pl-[20px] relative">
                <Text
                  as="p"
                  color="white60"
                  size="sm"
                  className="content-'' before:h-1 before:w-1 before:bg-amber-500 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
                >
                  {item}
                </Text>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Text as="h3" color="white" size="sm" className="mb-7.5">
            Not included
          </Text>

          <ul className="flex flex-col gap-4">
            {notIncluded.map((item, i) => (
              <li key={i} className="pl-[20px] relative">
                <Text
                  as="p"
                  color="white60"
                  size="sm"
                  className="content-'' before:h-1 before:w-1 before:bg-amber-500 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-full"
                >
                  {item}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
