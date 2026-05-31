import { BookingStatus } from "../../../generated/prisma/client";
import { dbFindUser } from "../repositories/auth.repo";
import { dbFindBookingById } from "../repositories/booking.repo";
import { dbCancelBooking, dbCreateReview } from "../repositories/profile.repo";
import { dbFindTour } from "../repositories/tour.repo";
import { getCurrentUser } from "../utility/getCurrentUser";

type LeaveReviewProps = {
  review: string;
  rating: number;
  tourId: number;
};

export const leaveReview = async ({
  review,
  rating,
  tourId,
}: LeaveReviewProps) => {
  const userId = await getCurrentUser();

  if (!userId) {
    throw new Error("Invalid id");
  }

  const user = await dbFindUser({ id: userId });

  if (!user) {
    throw new Error("Unauthorized");
  }

  const tour = await dbFindTour({ id: tourId });

  if (!tour) {
    throw new Error("Tour not found");
  }

  await dbCreateReview({
    authorId: user.id,
    tourId: tour.id,
    comment: review,
    rating,
  });
};

export const cancelBooking = async ({ bookingId }: { bookingId: number }) => {
  const userId = await getCurrentUser();

  if (!userId) {
    throw new Error("Invalid id");
  }

  const user = await dbFindUser({ id: userId });

  if (!user) {
    throw new Error("Unauthorized");
  }

  const booking = await dbFindBookingById(bookingId);

  if (!booking) {
    throw new Error("Booking not found");
  }

  if (
    booking.status === BookingStatus.completed ||
    booking.status === BookingStatus.cancelled
  ) {
    throw new Error("Only active bookings can be canceled");
  }

  await dbCancelBooking(bookingId);
};
