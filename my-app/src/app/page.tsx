import React from "react";
import Image from "next/image";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <main>
      <div className="relative w-full h-175 md:h-225">
        <Image
          src="/images/Home_hero.jpg"
          alt="Hero"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <Button variant="primary" size="sm">
        Hello world
      </Button>
    </main>
  );
}
