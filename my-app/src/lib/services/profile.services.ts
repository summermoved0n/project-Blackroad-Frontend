import { BookingStatus, PaymentStatus } from "../../../generated/prisma/client";
import { dbFindUser } from "../repositories/auth.repo";
import {
  dbFindBookingByFilter,
  dbFindBookingById,
} from "../repositories/booking.repo";
import {
  dbFindPayment,
  dbUpdatePaymentById,
} from "../repositories/payment.repo";
import { dbCancelBooking, dbCreateReview } from "../repositories/profile.repo";
import { dbFindTour } from "../repositories/tour.repo";
import { getCurrentUser } from "../utility/getCurrentUser";

type LeaveReviewProps = {
  review: string;
  rating: number;
  bookingId: number;
};

export const leaveReview = async ({
  review,
  rating,
  bookingId,
}: LeaveReviewProps) => {
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

  const tour = await dbFindTour({ id: booking.tourId });

  if (!tour) {
    throw new Error("Tour not found");
  }

  if (booking.status !== BookingStatus.completed) {
    throw new Error(
      "You are not allowed to review this tour because you haven't completed it yet.",
    );
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

  if (booking?.userId !== user.id) {
    throw new Error("Forbidden");
  }

  if (
    booking.status === BookingStatus.completed ||
    booking.status === BookingStatus.cancelled
  ) {
    throw new Error("Only active bookings can be canceled");
  }

  const payment = await dbFindPayment({ bookingId });

  if (payment?.status !== PaymentStatus.paid) {
    throw new Error("Payment wasn't paid");
  }

  await dbUpdatePaymentById(payment.id, { status: PaymentStatus.refunded });
  await dbCancelBooking(bookingId);
};
