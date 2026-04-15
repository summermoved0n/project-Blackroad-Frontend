import Image from "next/image";
import React from "react";
import { Text } from "./Text";
import { Button } from "./Button";

export default function KeepInTouch() {
  return (
    <section className="relative w-full h-212.5 px-4 xl:px-0 bg-black/40 flex flex-col items-center justify-center gap-7.5">
      <Text as="h2" color="white" size="lg" spacing="sm">
        Keep in touch
      </Text>

      <Text as="p" color="white60" size="md" spacing="sm">
        Subscribe now and get the first special offers and the latest travel
        news.
      </Text>

      <div className="flex flex-col w-full w-200 md:flex-row md:justify-center gap-7.5 md:gap-2.5">
        <input
          type="email"
          placeholder="Enter email"
          className="h-12.5 md:w-181.5 px-5 py-3.5 border border-white/10 text-white focus:border-[#ea9c3f] focus:outline-none"
        />
        <Button variant="primary" size="sm" className="w-full md:w-40">
          Subscribe
        </Button>
      </div>

      <Image
        src="/images/Keep_in_touch.jpg"
        alt="Mountain Landscape"
        fill
        className="object-cover object-center -z-10"
        sizes="100vw"
        loading="eager"
      />
    </section>
  );
}
