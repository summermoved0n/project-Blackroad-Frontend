import Logo from "./Logo";
import { Text } from "./Text";
import { InstagramIcon } from "@/lib/icons/InstagramIcon";
import { FaceBookIcon } from "@/lib/icons/FaceBookIcon";
import Link from "next/link";
import { Button } from "./Button";
import { MastercardIcon } from "@/lib/icons/MastercardIcon";
import { VisaIcon } from "@/lib/icons/VisaIcon";
import clsx from "clsx";

const navigationLinks = [
  { name: "Tours", path: "tours" },
  { name: "Hotels", path: "hotels" },
  { name: "About Us", path: "about_us" },
  { name: "FAQ", path: "faq" },
  { name: "Contacts", path: "contacts" },
];

export default function Footer() {
  return (
    <footer
      className={clsx(
        "py-12.5 px-4 md:py-0 md:pt-17.5 md:pb-25 md:px-20 bg-[#1e1e1f] grid md:grid-cols-[1fr_1fr_2fr] gap-7.5 relative",
        "after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-px after:bg-[#d0d0d0] md:after:left-[5%] md:after:w-[90%]",
      )}
    >
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

        <div className="flex flex-col md:flex-row gap-5 md:gap-2.5 mb-12.5">
          <input
            type="email"
            placeholder="Enter email"
            className="w-full h-[50px] px-4 text-sm text-white placeholder-white/50 bg-transparent border-b border-white/10 focus:outline-none focus:border-b-orange-500"
          />

          <Button variant="primary" size="sm">
            Subscribe
          </Button>
        </div>

        <div className="flex gap-5">
          <MastercardIcon />
          <VisaIcon />
        </div>
      </div>
    </footer>
  );
}
