import { Text } from "@/components/Text";
import ReviewsItem from "./ReviewsItem";
import clsx from "clsx";

type ReviewsProps = {
  isDark?: boolean;
  tourReviews: {
    id: number;
    author: {
      id: number;
      name: string | null;
    };
    rating: number;
    comment: string;
    instagram: string | null;
    tourId: number;
  }[];
};

export default function Reviews({ tourReviews, isDark }: ReviewsProps) {
  return (
    <section
      className={clsx(
        "flex flex-col items-center pt-12.5 pb-12.5 mx-4 md:pt-25 ",
        isDark ? "md:mx-0  md:pb-25" : "md:mx-20 md:pb-37.5",
      )}
    >
      <Text
        as="h2"
        color={isDark ? "white" : "black"}
        size="lg"
        spacing="sm"
        className={clsx(isDark ? "mb-25" : "mb-20")}
      >
        REVIEWS
      </Text>

      {tourReviews.length === 0 ? (
        <Text as="p" color={isDark ? "white" : "black"} size="md">
          No reviews yet.
        </Text>
      ) : (
        <ul className="md:grid md:grid-cols-3">
          {tourReviews.map(({ id, rating, comment, author }) => (
            <ReviewsItem
              key={id}
              stars={rating}
              description={comment}
              author={author.name || "Anonymous"}
              isDark={isDark}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
