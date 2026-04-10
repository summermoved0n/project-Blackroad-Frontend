import { Text } from "./Text";

const dateOfCustomers = [
  { id: 1, numbers: "16", text: "Years of experience" },
  { id: 2, numbers: "5000", text: "Satisfied customers" },
  { id: 3, numbers: "24/7", text: "In touch" },
];

export default function WhyChooseUs() {
  return (
    <div className="px-20 pt-25 pb-37.5 bg-[#1e1e1f]">
      <Text
        as="h2"
        color="white"
        size="lg"
        spacing="sm"
        className="pb-25 flex justify-center"
      >
        WHY CHOOSE US?
      </Text>

      <div className="flex justify-between">
        {dateOfCustomers.map(({ id, numbers, text }) => (
          <div
            key={id}
            className="w-[300px] h-[300px] flex flex-col items-center justify-center gap-2.5 border border-white/10 rounded-full"
          >
            <Text as="p" color="white" size="xl">
              {numbers}
            </Text>
            <Text as="p" color="white60" size="sm">
              {text}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
