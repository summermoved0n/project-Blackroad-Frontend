import Image from "next/image";
import { Text } from "./Text";

export default function HomeHero() {
  return (
    <div className="relative w-full h-175 md:h-225">
      <Image
        src="/images/Home_hero.jpg"
        alt="Hero"
        fill
        className="object-cover object-center"
        sizes="100vw"
        loading="eager"
      />

      <Text
        as="h1"
        color="white"
        size="lg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
      >
        INSPIRATION IN EVERY JOURNEY
      </Text>
    </div>
  );
}
