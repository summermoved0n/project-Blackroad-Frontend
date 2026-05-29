import { BookingStatus, RoomType } from "../../../generated/prisma/enums";
import { prisma } from "../prisma";

type CreateBookingProps = {
  userId: number;
  tourId: number;
  customerId: number;
  guests: number;
  room: RoomType;
  totalPrice: number;
  status: BookingStatus;
};

export const dbCreateBooking = async (data: CreateBookingProps) =>
  prisma.booking.create({ data });

export const dbFindAllUserBookings = async (filter: { userId: number }) =>
  prisma.booking.findMany({
    where: filter,
    select: {
      id: true,
      status: true,
      totalPrice: true,
      tour: {
        select: {
          title: true,
          imageUrl: true,
          dateOfArrival: true,
          dateOfDeparture: true,
        },
      },
    },
  });
