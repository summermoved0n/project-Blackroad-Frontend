"use client";

import Image from "next/image";
import { Text } from "./Text";
import { Button } from "./Button";
import { useState } from "react";
import DatePicker from "./DatePicker";

export default function HomeHero() {
  const [isOpenPicker, setIsOpenPicker] = useState(false);

  return (
    <div className="relative w-full px-4 lg:px-35 h-180 md:h-225 flex flex-col justify-center items-center gap-7.5">
      <Image
        src="/images/Home_hero.jpg"
        alt="Hero"
        fill
        className="object-cover object-center -z-10"
        sizes="100vw"
        loading="eager"
      />

      <Text
        as="h1"
        color="white"
        size="lg"
        spacing="sm"
        className="w-full text-center"
      >
        INSPIRATION IN EVERY JOURNEY
      </Text>

      {!isOpenPicker ? (
        <Button
          variant="primary"
          size="sm"
          className="md:hidden"
          onClick={() => setIsOpenPicker(true)}
        >
          Book
        </Button>
      ) : (
        <DatePicker setIsOpenPicker={setIsOpenPicker} />
      )}

      <div className="hidden md:block md:h-17.5 md:w-full xl:px-35 md:backdrop-blur-sm mt-30"></div>
    </div>
  );
}
