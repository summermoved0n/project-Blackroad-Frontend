"use client";

import Image from "next/image";
import { Text } from "./Text";
import { Button } from "./Button";
import HomeHeroForm from "./HomeHeroForm";
import { useRouter } from "next/navigation";

export default function HomeHero() {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen px-4 lg:px-35 h-180 flex flex-col justify-center items-center gap-7.5">
      <Image
        src="/images/Home_hero.jpg"
        alt="Trees and mountains"
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

      <Button
        variant="primary"
        size="sm"
        className="md:hidden"
        onClick={() => router.push("/tours")}
      >
        Book
      </Button>

      <HomeHeroForm />
    </div>
  );
}
