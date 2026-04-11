import React from "react";
import Logo from "./Logo";
import { Text } from "./Text";
import { InstagramIcon } from "@/lib/icons/InstagramIcon";
import { FaceBookIcon } from "@/lib/icons/FaceBookIcon";
import Link from "next/link";
import { Button } from "./Button";

const navigationLinks = [
  { name: "Tours", path: "tours" },
  { name: "Hotels", path: "hotels" },
  { name: "About Us", path: "about_us" },
  { name: "FAQ", path: "faq" },
  { name: "Contacts", path: "contacts" },
];

export default function Footer() {
  return (
    <footer className="pt-17.5 pb-25 bg-[#1e1e1f] px-20 grid grid-cols-[1fr_1fr_2fr] ">
      <div className="text-white flex flex-col gap-7.5">
        <Logo />
        <Text as="p" color="white60" size="sm">
          +38050 03 82 920
        </Text>
        <Text as="p" color="white60" size="sm">
          blackroad07@gmail.com
        </Text>
        <div className="flex gap-4">
          <InstagramIcon isWhite />
          <FaceBookIcon />
        </div>
      </div>
      <div>
        <Text as="h2" color="white" size="sm" className="mb-5">
          Menu
        </Text>

        <ul className="flex flex-col gap-5">
          {navigationLinks.map(({ name, path }) => (
            <li key={name}>
              <Link href={`/${path}`}>
                <Text as="p" color="white60" size="sm">
                  {name}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Text as="h2" color="white" size="sm" className="mb-5">
          Subscribe to our news:
        </Text>

        <div className="flex gap-2.5 mb-12.5">
          <input
            type="email"
            placeholder="Enter email"
            className="w-full h-[50px] px-4 text-sm text-white placeholder-white/50 bg-transparent border-b border-white/10 focus:outline-none focus:border-b-orange-500"
          />

          <Button variant="primary" size="sm">
            Subscribe
          </Button>
        </div>

        <div></div>
      </div>
    </footer>
  );
}
