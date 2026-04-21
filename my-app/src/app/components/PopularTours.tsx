"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeftIcon } from "@/lib/icons/ArrowLeftIcon";
import { Button } from "./Button";
import { Text } from "./Text";
import { ArrowRightIcon } from "@/lib/icons/ArrowRightIcon";
import TourCard from "./TourCard";
import { useState } from "react";
import EmblaCarousel from "./Carousel";

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

export default function PopularTours() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  return (
    <section className="relative mx-4 pt-12.5 pb-30 md:mx-20 md:pt-25  md:pt-0 md:pb-0 md:pb-37.5 grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-end gap-15">
        <Text
          as="h2"
          color="black"
          size="lg"
          spacing="sm"
          className="mb-7.5 md:mb-0 md:w-60 text-center md:text-left"
        >
          POPULAR TOURS
        </Text>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 md:relative md:bottom-0 md:left-0 md:transform-none md:translate-0 flex justify-center md:justify-start gap-10">
          <Button
            variant="tertiary"
            className="flex items-center justify-center"
            onClick={goToPrev}
          >
            <ArrowLeftIcon />
          </Button>

          <Button
            variant="tertiary"
            className="flex items-center justify-center"
            onClick={goToNext}
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </div>

      <EmblaCarousel>
        {tours.map(({ id, title, description, image, price }) => (
          <TourCard
            key={id}
            id={id}
            carouselClassName="flex-[0_0_100%] lg:flex-[0_0_50%] xl:md:flex-[0_0_40%] min-w-0"
            title={title}
            description={description}
            image={image}
            price={price}
          />
        ))}
      </EmblaCarousel>
    </section>
  );
}
