import React from "react";
import Image from "next/image";
import PersonSupport from "./icons/PersonSupportIcon";
import MenuBurgerIcon from "./icons/MenuBurgerIcon";

export default function Home() {
  return (
    <main>
      <div className="relative w-full h-175 md:h-225">
        <Image
          src="/images/hero_bg.jpg"
          alt="Hero"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div>
        <PersonSupport />
        <MenuBurgerIcon />
      </div>
    </main>
  );
}
