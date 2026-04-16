import React from "react";
import { Text } from "./Text";
import FAQItem from "./FAQItem";
import Link from "next/link";

const faqData = [
  {
    id: 1,
    question: "What is included in the tour price?",
    description:
      "The tour price typically includes accommodation, transportation during the trip, guided excursions, and some meals as specified in the itinerary. Additional services may vary depending on the package selected.",
  },
  {
    id: 2,
    question: "What do you need to pay for separately?",
    description:
      "Personal expenses, optional activities, travel insurance, and certain meals are usually not included in the tour price. International flights may also be excluded unless stated otherwise.",
  },
  {
    id: 3,
    question: "Are there bundled offers or discounts for families or groups?",
    description:
      "Yes, we offer special discounts for families and group bookings. The exact savings depend on the size of the group and the selected tour package.",
  },
  {
    id: 4,
    question: "What are the rules regarding cancellation or change of travel?",
    description:
      "Cancellation and modification policies depend on the specific tour. Generally, changes can be made within a certain period before departure, while cancellations may involve fees based on timing.",
  },
  {
    id: 5,
    question:
      "What opportunities are there for insurance against cancellations and accidents?",
    description:
      "We recommend purchasing travel insurance that covers trip cancellations, medical emergencies, and accidents. Various insurance options are available to provide peace of mind during your journey.",
  },
];

export default function FAQ() {
  return (
    <section className="py-12.5 mx-4 md:py-37.5 md:mx-20 grid md:grid-cols-[400px_1fr] justify-between items-start">
      <Text as="h2" color="black" size="lg" className="mb-7.5 md:mb-0">
        FAQ
      </Text>

      <ul>
        {faqData.map(({ id, question, description }) => (
          <FAQItem key={id} question={question} description={description} />
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
