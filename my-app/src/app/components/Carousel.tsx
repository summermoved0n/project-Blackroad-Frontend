"use client";

import useEmblaCarousel from "embla-carousel-react";
import { Button } from "./Button";
import { ArrowLeftIcon } from "@/lib/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "@/lib/icons/ArrowRightIcon";
import TourCard from "./TourCard";
import { Text } from "./Text";

type CarouselProps = {
  componentTitle: string;
  tours: {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
  }[];
};

export default function Carousel({ tours, componentTitle }: CarouselProps) {
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
          className="mb-7.5 md:mb-0 md:w-60 text-center md:text-left uppercase"
        >
          {componentTitle}
        </Text>
      </div>

      <div className="embla">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex md:gap-5 touch-pan-y touch-pinch-zoom">
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
          </div>
        </div>

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
    </section>
  );
}
