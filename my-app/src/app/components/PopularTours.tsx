"use client";

import { ArrowLeftIcon } from "@/lib/icons/ArrowLeftIcon";
import { Button } from "./Button";
import { Text } from "./Text";
import { ArrowRightIcon } from "@/lib/icons/ArrowRightIcon";
import TourCard from "./TourCard";
import { useState } from "react";

const tours = [
  {
    id: 1,
    title: "Autumn in the mountains",
    description:
      "Walking in the crowns of trees and watching bears. Rest in a mountain hotel and meeting dawn in the mountains",
    image: "/images/Popular_tours_mountains.jpg",
    price: 6200,
  },
  {
    id: 2,
    title: "Blue lakes and ancient Lubech",
    description:
      "Excursion to Lubech, once a Viking trading post, or to the 'city of the future' Slavutich. Swimming in the cleanest lakes with water of incredible color.",
    image: "/images/Popular_tours_lake.jpg",
    price: 3300,
  },
  {
    id: 3,
    title: "Rest in the canyon",
    description:
      "Moving to the picturesque rock canyon in the village of Buki. Excursion in the form of an easy walk, during which you will see what a large-scale natural event took place here.",
    image: "/images/Travel_with_us(canyon).jpg",
    price: 3000,
  },
  {
    id: 4,
    title: "Dzhurinsky waterfall",
    description:
      "The most full-flowing plain waterfall of Ukraine, which is considered one of the most picturesque and interesting places of Ternopil region.",
    image: "/images/Travel_with_us(waterfall).jpg",
    price: 5000,
  },
];

const toursPerPage = 2;

export default function PopularTours() {
  const [page, setPage] = useState(1);
  const [toursToShow, setToursToShow] = useState(tours.slice(0, toursPerPage));

  const onClickPrevPage = () => {
    if (page !== 1) {
      setPage((prev) => prev - 1);
      setToursToShow(
        tours.slice(
          (page - 2) * toursPerPage,
          (page - 2) * toursPerPage + toursPerPage,
        ),
      );
    }

    return;
  };

  const onClickNextPage = () => {
    if (page < Math.ceil(tours.length / toursPerPage)) {
      setPage((prev) => prev + 1);
      setToursToShow(
        tours.slice(page * toursPerPage, page * toursPerPage + toursPerPage),
      );
    }

    return;
  };

  return (
    <div className="mx-20 pt-25 pb-37.5 flex justify-between">
      <div className="flex flex-col justify-end gap-15">
        <Text as="h2" color="black" size="lg" spacing="sm" className="w-60">
          POPULAR TOURS
        </Text>

        <div className="flex gap-10 ">
          <Button
            variant="tertiary"
            className="flex items-center justify-center"
            onClick={onClickPrevPage}
          >
            <ArrowLeftIcon />
          </Button>

          <Button
            variant="tertiary"
            className="flex items-center justify-center"
            onClick={onClickNextPage}
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </div>

      <div className="flex gap-7.5">
        {toursToShow.map(({ id, title, description, image, price }) => (
          <TourCard
            key={id}
            id={id}
            title={title}
            description={description}
            image={image}
            price={price}
          />
        ))}
      </div>
    </div>
  );
}
