"use client";

import { ChevronRightIcon } from "@/components/icons/ChevronRightIcon";
import { Text } from "@/components/Text";
import axios from "axios";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

export default function AccountHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const onLogOut = async () => {
    await axios.post("/api/auth/logout");

    router.replace("/");
    router.refresh();
  };

  const handleNavigate = (path: string) => {
    router.replace(path);
  };

  return (
    <nav className="mb-4">
      <div className="m-auto px-4 py-3 bg-[#171717] rounded-md w-fit flex justify-center items-center gap-2 mb-14">
        <Text as="p" color="white60" size="sm">
          Main
        </Text>
        <ChevronRightIcon pageLinkChevron />
        <Text as="p" color="white60" size="sm">
          Account
        </Text>
      </div>

      <nav className="flex justify-between items-center">
        <div className="text-white/50 flex gap-10">
          <button
            type="button"
            className={clsx("", pathname === "/profile" && "text-white")}
            onClick={() => handleNavigate("/profile")}
          >
            My Profile
          </button>
          <button
            type="button"
            className={clsx(
              "",
              pathname === "/booking-history" && "text-white",
            )}
            onClick={() => handleNavigate("/booking-history")}
          >
            Booking history
          </button>
          <button
            type="button"
            className={clsx("", pathname === "/favorites" && "text-white")}
            onClick={() => handleNavigate("/favorites")}
          >
            Favorites
          </button>
        </div>

        <button
          className="text-white hover:text-orange-300"
          type="button"
          onClick={onLogOut}
        >
          Log Out
        </button>
      </nav>
    </nav>
  );
}
