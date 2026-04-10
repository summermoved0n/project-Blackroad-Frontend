import React from "react";
import { Text } from "./Text";
import { InstagramIcon } from "@/lib/icons/InstagramIcon";
import ReviewStars from "./ReviewStars";

type ReviewsItemProps = {
  stars: 1 | 2 | 3 | 4 | 5;
  description: string;
  author: string;
};

export default function ReviewsItem({
  stars,
  description,
  author,
}: ReviewsItemProps) {
  return (
    <li className="flex flex-col items-center justify-center gap-10 py-12.5 px-5 border border-[rgba(23,23,23,0.1)] first:border-l-0 first:border-r-0 last:border-r-0 last:border-l-0">
      <ReviewStars stars={stars} />
      <Text as="p" color="black60" size="sm" className="text-center">
        {description}
      </Text>
      <div className="flex justify-center gap-2.5">
        <Text as="p" color="black" size="sm">
          {author}
        </Text>
        <InstagramIcon />
      </div>
    </li>
  );
}
