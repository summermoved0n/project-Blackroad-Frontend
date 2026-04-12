"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Text } from "./Text";
import Image from "next/image";
import clsx from "clsx";

const navList = [
  {
    name: "tours",
    path: "/tours",
    img: "/images/Travel_with_us.jpg",
  },
  {
    name: "hotels",
    path: "/hotels",
    img: "/images/Feel_comfort_left.jpg",
  },
  {
    name: "about us",
    path: "/about_us",
    img: "/images/Who_are_we.jpg",
  },
  {
    name: "faq",
    path: "/faq",
    img: "/images/Popular_tours_lake.jpg",
  },
  {
    name: "contacts",
    path: "/contacts",
    img: "/images/Contacts.jpg",
  },
  {
    name: "book a tour",
    path: "/tours/id",
    img: "/images/Keep_in_touch.jpg",
  },
];

export default function Navigation() {
  const [activeImage, setActiveImage] = useState(navList[0].img);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="grid grid-cols-2">
      <ul className="flex flex-col gap-10">
        {navList.map(({ name, path, img }) => (
          <li key={path}>
            <Link href={path}>
              <Text
                as="h2"
                color="white20"
                size="lg"
                onMouseEnter={() => {
                  setActiveImage(img);
                  setIsHover(true);
                }}
                onMouseLeave={() => setIsHover(false)}
                className="relative hover:after:content-[''] hover:after:absolute hover:after:-left-35 hover:after:top-1/2 hover:after:w-25 hover:after:h-[2px] hover:after:bg-white hover:after:transition-all uppercase hover:text-white transition hover:transform hover:translate-x-20"
              >
                {name}
              </Text>
            </Link>
          </li>
        ))}
      </ul>

      <div
        className={clsx("relative w-full h-[550px]", !isHover && "bg-black/80")}
      >
        <Image
          src={activeImage}
          alt={""}
          fill
          className={"objecr-cover object-center transition -z-10"}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}
