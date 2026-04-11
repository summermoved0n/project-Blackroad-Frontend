import React from "react";
import { Text } from "./Text";
import Image from "next/image";
import ButtonWithArrow from "./ButtonWithArrow";
import { Button } from "./Button";
import { ArrowRightIcon } from "@/lib/icons/ArrowRightIcon";

export default function FeelComfort() {
  return (
    <section className="pt-25 pb-37.5 mx-20">
      <Text
        as="h2"
        color="black"
        size="lg"
        spacing="sm"
        className="text-center mb-20"
      >
        FEEL COMFORT
      </Text>

      <div className="relative grid grid-cols-[2fr_1fr] gap-7.5 items-center">
        <div className="relative h-175">
          <Image
            src="/images/Feel_comfort_left.jpg"
            alt="Hotel Room"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 66vw"
            loading="eager"
          />

          <div className="absolute bg-white w-88 h-63 z-10 top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 pt-20 pl-20">
            <Text as="h3" color="black" size="md" className="mb-[30px]">
              Hotels
            </Text>
            <ButtonWithArrow path="/tours">See all</ButtonWithArrow>
          </div>

          <Button
            variant="tertiary"
            className="absolute flex items-center justify-center top-1/2 right-0 transform -translate-y-1/2 translate-x-[268px] z-10"
          >
            <ArrowRightIcon />
          </Button>
        </div>

        <div className="relative h-137.5">
          <Image
            src="/images/Feel_comfort_right.jpg"
            alt="Hotel Room"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
