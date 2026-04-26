"use client";

import { toursListData } from "@/lib/data/toursPageData";
import { Text } from "./Text";
import ReviewStars from "./ReviewStars";
import ButtonWithArrow from "./ButtonWithArrow";
import clsx from "clsx";
import { EmptyHeartIcon } from "@/lib/icons/EmptyHeartIcon";
import Image from "next/image";

export default function ToursList() {
  return (
    <ul className="grid grid-cols-2 gap-7.5">
      {toursListData.map(
        ({ id, title, img, categories, stars, desc, price }) => (
          <li key={id} id={id.toString()} className="w-full h-fit bg-[#171717]">
            <div className="relative w-full h-[400px]">
              <Text
                as="p"
                color="white"
                size="md"
                className={clsx(
                  "absolute px-5 py-3 top-5 left-5 rounded-md z-10",
                  categories === "Mountains" && "bg-[#213e2b]",
                  categories === "Lakes" && "bg-[#477292]",
                )}
              >
                {categories}
              </Text>
              <button
                type="button"
                className="absolute h-10 w-10 bg-black/40 flex justify-center items-center rounded-full top-5 right-5 z-10"
              >
                <EmptyHeartIcon />
              </button>
              <Image
                src={img}
                alt={title}
                fill
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="px-5 py-5 flex flex-col gap-7.5">
              <Text as="p" color="white" size="md">
                {title}
              </Text>
              <div className="flex justify-between items-center">
                <ReviewStars stars={stars} />
                <Text as="p" color="white" size="sm">
                  {stars}
                </Text>
              </div>
              <Text as="p" color="white60" size="sm">
                {desc}
              </Text>
              <div className="flex justify-between items-center">
                <ButtonWithArrow
                  path={`/tours/${id}`}
                  className="text-white"
                  whiteCircle
                  whiteArrow
                >
                  Book now
                </ButtonWithArrow>
                <Text as="p" color="white" size="md">
                  {price} CA$
                </Text>
              </div>
            </div>
          </li>
        ),
      )}
    </ul>
  );
}
