import { TourWhereUniqueInput } from "../../../generated/prisma/models";
import { prisma } from "../prisma";

export const dbFindTour = async (filter: TourWhereUniqueInput) => {
  return prisma.tour.findUnique({
    where: filter,
  });
};

export const dbFindPopularTours = async () => {
  return prisma.tour.findMany({
    where: {
      rating: {
        gte: 4.5,
      },
    },
    select: {
      id: true,
      title: true,
      description: true,
      imageUrl: true,
      price: true,
    },
  });
};
