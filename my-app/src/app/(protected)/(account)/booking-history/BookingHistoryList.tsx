import { Text } from "@/components/Text";
import BookingHistoryItem from "./BookingHistoryItem";
import {
  TourListHistoryPayload,
  UserReviewPayload,
} from "@/types/profile.types";

type BookingHistoryListProps = {
  userId: number;
  bookingHistoryList: TourListHistoryPayload[];
  userReviews: UserReviewPayload[];
};

export default function BookingHistoryList({
  userReviews,
  userId,
  bookingHistoryList,
}: BookingHistoryListProps) {
  return (
    <section className="p-15 bg-[#171717]">
      <Text as="h1" color="white" size="lg" className="uppercase mb-10">
        Booking History
      </Text>

      <ul className="flex flex-col gap-10">
        {bookingHistoryList.map(({ id, totalPrice, tour, status }) => (
          <BookingHistoryItem
            key={id}
            userId={userId}
            bookingId={id}
            userReviews={userReviews}
            totalPrice={totalPrice.toString()}
            tour={tour}
            status={status}
          />
        ))}
      </ul>
    </section>
  );
}
