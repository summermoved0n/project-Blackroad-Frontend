import React from "react";
import { MenuBurgerIcon } from "../icons/MenuBurgerIcon";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="text-white backdrop-blur-md border-b border-white/10 h-20 w-full px-17.5 flex items-center justify-between absolute top-0 left-0 z-10">
      <MenuBurgerIcon />
      <Logo />
      <p className="border-l border-white/10 h-20 pl-17.5 flex items-center tracking-wider">
        Побудувати подорож
      </p>
    </header>
  );
}
