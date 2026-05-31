import { BookingStatus } from "../../generated/prisma/enums";
import { Decimal } from "../../generated/prisma/internal/prismaNamespace";

export type UserReviewPayload = {
  tourId: number;
  id: number;
  rating: number;
  comment: string;
  instagram: string | null;
  authorId: number;
};

export type TourListHistoryPayload = {
  id: number;
  totalPrice: Decimal;
  status: BookingStatus;
  tour: {
    id: number;
    title: string;
    imageUrl: string;
    dateOfArrival: Date;
    dateOfDeparture: Date;
  };
};
