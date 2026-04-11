import Logo from "./Logo";
import Link from "next/link";
import BurgerMenuBtn from "./BurgerMenuBtn";

export default function Header() {
  return (
    <header className="text-white backdrop-blur-md border-b border-white/10 h-20 w-full pl-17.5 flex items-center justify-between absolute top-0 left-0 z-10">
      <BurgerMenuBtn />
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
