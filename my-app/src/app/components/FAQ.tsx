import React from "react";
import { Text } from "./Text";
import FAQItem from "./FAQItem";
import Link from "next/link";

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
];

export default function FAQ() {
  return (
    <section className="py-12.5 mx-4 md:py-37.5 md:mx-20 grid md:grid-cols-[400px_1fr] justify-between items-start">
      <Text as="h2" color="black" size="lg" className="mb-7.5 md:mb-0">
        FAQ
      </Text>

      <ul>
        {faqData.map(({ id, question }) => (
          <FAQItem key={id} question={question} />
        ))}

        <li className="border-t-1 border-black/10 pt-7.5 ">
          <Link href="/faq" className="w-fit">
            <Text as="h3" color="black50" size="sm">
              All questions
            </Text>
          </Link>
        </li>
      </ul>
    </section>
  );
}
