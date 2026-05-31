"use client";

import { MenuDotIcon } from "@/components/icons/MenuDotIcon";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

type DotButtonMenuProps = {
  userId: number;
  tourId: number;
  setMenuItem: React.Dispatch<React.SetStateAction<string | null>>;
  userReviews: {
    tourId: number;
    id: number;
    rating: number;
    comment: string;
    instagram: string | null;
    authorId: number;
  }[];
};

export enum MenuItem {
  BookingAgain = "Booking Again",
  LeaveReview = "Leave Review",
  CancelBooking = "Cancel Booking",
}

export default function DotButtonMenu({
  userReviews,
  userId,
  tourId,
  setMenuItem,
}: DotButtonMenuProps) {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useClickOutside(containerRef, () => setShowMenu(false));

  const isDisabledReviewBtn = userReviews.some(
    (review) => review.tourId === tourId && review.authorId === userId,
  );

  return (
    <div ref={containerRef} className="relative w-8">
      <button
        className="w-full h-full flex items-center justify-center"
        type="button"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <MenuDotIcon />
      </button>

      {showMenu && (
        <div className="absolute w-40 bg-white text-black right-0 top-10 shadow-lg">
          <button
            className="px-4 py-2 hover:bg-gray-200"
            type="button"
            onClick={() => {
              setMenuItem(MenuItem.BookingAgain);
              setShowMenu(false);
              router.push(`/tours/${tourId}`);
            }}
          >
            {MenuItem.BookingAgain}
          </button>
          <button
            className="px-4 py-2 hover:bg-gray-200 disabled:text-gray-400"
            type="button"
            disabled={isDisabledReviewBtn}
            onClick={() => {
              setMenuItem(MenuItem.LeaveReview);
              setShowMenu(false);
            }}
          >
            {MenuItem.LeaveReview}
          </button>
          <button
            className="px-4 py-2 hover:bg-gray-200"
            type="button"
            onClick={() => {
              setMenuItem(MenuItem.CancelBooking);
              setShowMenu(false);
            }}
          >
            {MenuItem.CancelBooking}
          </button>
        </div>
      )}
    </div>
  );
}
