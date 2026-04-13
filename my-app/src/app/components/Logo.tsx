"use client";

import { Italiana } from "next/font/google";
import Link from "next/link";

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: "400",
});

export default function Logo() {
  return (
    <Link href="/" className={`text-2xl sm:text-5xl ${italiana.className}`}>
      BLACKROAD
    </Link>
  );
}
