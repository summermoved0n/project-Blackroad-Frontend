"use client";

import Logo from "./Logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuBurgerIcon } from "@/lib/icons/MenuBurgerIcon";
import clsx from "clsx";
import { CrossIcon } from "@/lib/icons/CrossIcon";
import Navigation from "./Navigation";
import { Text } from "./Text";

export default function Header() {
  const [openDropMenu, setOpenDropMenu] = useState(false);

  useEffect(() => {
    if (openDropMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openDropMenu]);

  return (
    <header
      className={clsx(
        "text-white border-b border-white/10 h-17 sm:h-20 w-full px-4 md:pl-17.5 md:px-0 transition flex items-center justify-between absolute top-0 left-0 z-10",
        openDropMenu
          ? "bg-[#171717] transition backdrop-blur-none"
          : " backdrop-blur-md",
      )}
    >
      <div
        className={clsx(
          "absolute bg-[#1e1e1f] top-17 sm:top-20 left-0 w-full h-screen transform -translate-x-full transition z-10 px-4 md:px-20 pt-7.5 md:pt-15",
          openDropMenu && "translate-x-0 transition",
        )}
      >
        <Navigation />
      </div>
      <div className="w-10">
        {!openDropMenu ? (
          <button type="button" onClick={() => setOpenDropMenu(true)}>
            <MenuBurgerIcon />
          </button>
        ) : (
          <button type="button" onClick={() => setOpenDropMenu(false)}>
            <CrossIcon />
          </button>
        )}
      </div>
      <p className="hidden md:block">Fr / En</p>
      <Logo />
      <p>Log in</p>
      <Link
        href="/build-tour"
        className="hidden md:flex border-l border-white/10 h-20 px-17.5  items-center hover:bg-[#ea9c3f] transition"
      >
        <Text as="p" color="white" size="sm" className="">
          Build trip
        </Text>
      </Link>
    </header>
  );
}
