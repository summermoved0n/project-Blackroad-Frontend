import React from "react";
import { Text } from "./Text";
import { PlusIcon } from "@/lib/icons/PlusIcon";

const faqData = [
  {
    id: 1,
    question: "What is included in the tour price?",
  },
  {
    id: 2,
    question: "What do you need to pay for separately?",
  },
  {
    id: 3,
    question: "Are there bundled offers or discounts for families or groups?",
  },
  {
    id: 4,
    question: "What are the rules regarding cancellation or change of travel?",
  },
  {
    id: 5,
    question:
      "What opportunities are there for insurance against cancellations and accidents?",
  },
  {
    id: 6,
    question: "All questions",
  },
];

export default function FAQ() {
  return (
    <section className="py-37.5 mx-20 grid grid-cols-[400px_1fr] justify-between items-start">
      <Text as="h2" color="black" size="lg">
        FAQ
      </Text>

      <ul className="">
        {faqData.map((faq) => (
          <li
            key={faq.id}
            className="py-10 border-t border-t-black/10 text-base last:text-black/50 flex justify-between items-center cursor-pointer"
          >
            <span>{faq.question}</span>
            <PlusIcon />
          </li>
        ))}
      </ul>
    </section>
  );
}
