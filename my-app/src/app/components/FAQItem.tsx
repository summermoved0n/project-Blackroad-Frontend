import { PlusIcon } from "@/lib/icons/PlusIcon";
import { Text } from "./Text";

type FAQItemProps = { question: string };

export default function FAQItem({ question }: FAQItemProps) {
  return (
    <li className="py-10 border-t border-t-black/10 text-base flex justify-between items-center gap-2">
      <Text as="h3" color="black" size="sm">
        {question}
      </Text>
      <button type="button" className="">
        <PlusIcon />
      </button>
    </li>
  );
}
