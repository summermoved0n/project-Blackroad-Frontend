import React from "react";
import ReviewsItem from "./ReviewsItem";
import { Text } from "./Text";

type Review = {
  id: number;
  stars: 1 | 2 | 3 | 4 | 5;
  description: string;
  author: string;
};

const reviewsData: Review[] = [
  {
    id: 1,
    stars: 5,
    description:
      "Incredible and exciting journey, beautiful views and full of impressions vacation. Loved this trip!",
    author: "Svetlana Pashinskaya",
  },
  {
    id: 2,
    stars: 3,
    description:
      "Great tour. Many impressions of the scenery. Special thanks to the guide Bogdan. In general, the whole route is very thoughtful and Read more..",
    author: "Yana",
  },
  {
    id: 3,
    stars: 4,
    description:
      "The tour program is rich and interesting. They were tired but satisfied. We also liked the hotel. Very cozy and comfortable",
    author: "Irina",
  },
];

export default function Reviews() {
  return (
    <section className="pt-25 pb-37.5 mx-20 flex flex-col items-center">
      <Text as="h2" color="black" size="lg" spacing="sm" className="mb-20">
        REVIEWS
      </Text>

      <ul className="grid grid-cols-3">
        {reviewsData.map(({ id, stars, description, author }) => (
          <ReviewsItem
            key={id}
            stars={stars}
            description={description}
            author={author}
          />
        ))}
      </ul>
    </section>
  );
}
