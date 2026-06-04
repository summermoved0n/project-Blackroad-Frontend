import { Prisma } from "../../../generated/prisma/client";
import { TourWhereUniqueInput } from "../../../generated/prisma/models";
import { prisma } from "../prisma";

type TourFilterProps = {
  city?: string;
  dates?: string;
  adults?: string;
  children?: string;
  rooms?: string;
  rating?: string;
  category?: string;
  sort?: string;
};

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

export const dbFindFilteredTours = async (filter: TourFilterProps) => {
  const where: Prisma.TourWhereInput = {};
  const orderBy: Prisma.TourOrderByWithRelationInput = {};

  if (filter.rating) {
    where.rating = {
      gte: Number(filter.rating),
    };
  }

  if (filter.category) {
    where.category = {
      in: filter.category?.split(","),
    };
  }

  if (!filter.sort || filter.sort === "default") {
    return prisma.tour.findMany({
      where: {},
    });
  } else if (filter.sort === "price: Low to High") {
    orderBy.price = "asc";
  } else if (filter.sort === "price: High to Low") {
    orderBy.price = "desc";
  } else if (filter.sort === "rating") {
    orderBy.rating = "asc";
  } else if (filter.sort === "popularity") {
    orderBy.rating = "desc";
  }

  return prisma.tour.findMany({
    where,
    orderBy,
  });
};
