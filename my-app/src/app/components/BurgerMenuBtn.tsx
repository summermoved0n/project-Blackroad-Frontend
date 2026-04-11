"use client";

import { MenuBurgerIcon } from "@/lib/icons/MenuBurgerIcon";
import { useState } from "react";

export default function BurgerMenuBtn() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickBtn = () => {
    
  };

  return (
    <button type="button" onClick={handleClickBtn}>
      <MenuBurgerIcon />
    </button>
  );
}
