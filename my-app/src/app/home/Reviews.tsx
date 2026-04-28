import { reviewsData } from "@/lib/data/homePageData";
import { Text } from "../components/Text";
import ReviewsItem from "./ReviewsItem";

export default function Reviews() {
  return (
    <section className="flex flex-col items-center pt-12.5 pb-12.5 mx-4 md:pt-25 md:pb-37.5 md:mx-20">
      <Text as="h2" color="black" size="lg" spacing="sm" className="mb-20">
        REVIEWS
      </Text>

      <ul className="md:grid md:grid-cols-3">
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
