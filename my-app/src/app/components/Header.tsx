"use client";

import Logo from "./Logo";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuBurgerIcon } from "@/lib/icons/MenuBurgerIcon";
import clsx from "clsx";
import { CrossIcon } from "@/lib/icons/CrossIcon";

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
        "text-white border-b border-white/10 h-20 w-full pl-17.5 flex items-center justify-between absolute top-0 left-0 z-10",
        openDropMenu ? "bg-[#171717] backdrop-blur-none" : " backdrop-blur-md",
      )}
    >
      <div
        className={clsx(
          "absolute bg-[#1e1e1f] top-20 left-0 w-full h-screen transform -translate-x-full z-10",
          openDropMenu && "translate-x-0 transition",
        )}
      ></div>
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
      <p>Fr/En</p>
      <Logo />
      <p>Log in</p>
      <Link
        href="/build-tour"
        className="border-l border-white/10 h-20 px-17.5 flex items-center tracking-wider"
      >
        Build trip
      </Link>
    </header>
  );
}
