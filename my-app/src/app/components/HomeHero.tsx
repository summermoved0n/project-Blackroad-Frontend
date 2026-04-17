"use client";

import Image from "next/image";
import { Text } from "./Text";
import { Button } from "./Button";
import { useState } from "react";
import DatePicker from "./DatePicker";
import SelectMenu from "./SelectMenu";
import SelectDate from "./SelectDate";
import SelectPeopleAndRooms from "./SelectPeopleAndRooms";

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

      <div className="hidden md:pl-10 md:block md:h-17.5 md:w-full xl:pl-15 md:backdrop-blur-sm md:mt-30 rounded-xl md:grid md:grid-cols-[1fr_1fr_1fr_180px] md:gap-12.5">
        <SelectMenu />
        <SelectDate />
        <SelectPeopleAndRooms />
        <button
          className="flex items-center justify-center border-l-1 border-white/10"
          type="button"
        >
          <Text as="p" color="white" size="md">
            Search
          </Text>
        </button>
      </div>
    </div>
  );
}
