"use client";

import Image from "next/image";
import { Text } from "./Text";
import { Button } from "./Button";
import { useState } from "react";
import DatePicker from "./DatePicker";

export default function HomeHero() {
  const [isOpenPicker, setIsOpenPicker] = useState(false);

  return (
    <div className="relative w-full h-180 md:h-225 flex flex-col justify-center items-center gap-7.5">
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
          className="w-[343px] md:hidden"
          onClick={() => setIsOpenPicker(true)}
        >
          Book
        </Button>
      ) : (
        <DatePicker setIsOpenPicker={setIsOpenPicker} />
      )}
    </div>
  );
}
