import { BookingStatus } from "../../../generated/prisma/enums";
import { prisma } from "../prisma";

type ReviewData = {
  comment: string;
  rating: number;
  instagram?: string;
  authorId: number;
  tourId: number;
};

export const dbCreateReview = async (data: ReviewData) =>
  prisma.review.create({ data });

export const dbFindReview = async (filter: { authorId: number }) =>
  prisma.review.findMany({
    where: filter,
    select: {
      id: true,
      comment: true,
      rating: true,
      instagram: true,
      authorId: true,
      tourId: true,
    },
  });

export const dbCancelBooking = async (bookingId: number) =>
  prisma.booking.update({
    where: { id: bookingId },
    data: { status: BookingStatus.cancelled },
  });
