'use client";';

import { Button } from "@/app/components/Button";
import ReviewStars from "@/app/components/ReviewStars";
import { Text } from "@/app/components/Text";
import { ChevronRightIcon } from "@/lib/icons/ChevronRightIcon";
import { EmptyHeartIcon } from "@/lib/icons/EmptyHeartIcon";
import Image from "next/image";
import { useRouter } from "next/navigation";

type TourInfoProps = {
  tourData: {
    id: number;
    categories: string;
    title: string;
    img: string;
    stars: 1 | 2 | 3 | 4 | 5;
    desc: string;
    price: number;
  };
};

export default function TourInfo({ tourData }: TourInfoProps) {
  const route = useRouter();

  const { id, categories, title, img, stars, desc, price } = tourData || {};
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="py-3 px-5 bg-[#171717] rounded-md flex w-fit justify-center items-center gap-2 mb-12.5">
        <Text as="p" color="white60" size="xs">
          Main
        </Text>
        <ChevronRightIcon pageLinkChevron />
        <Text as="p" color="white60" size="xs">
          Choose a tour
        </Text>
        <ChevronRightIcon pageLinkChevron />

        <Text as="h1" color="white60" size="xs">
          {title}
        </Text>
      </div>

      <div className="flex justify-between items-center w-full mb-10">
        <Text as="h2" color="white" size="xl" className="uppercase">
          {title}
        </Text>

        <button
          type="button"
          className="w-53.5 h-12 bg-[#171717] rounded-md text-white text-[16px] flex justify-center items-center gap-5"
        >
          Add to Favorites
          <EmptyHeartIcon />
        </button>
      </div>

      <div className="w-full h-163 grid grid-cols-[1fr_400px] gap-35">
        <div className="relative bg-white">
          <Image
            className="object-cover object-center"
            src={img}
            alt={title}
            fill
            sizes="50vw"
          />
        </div>

        <div className="flex flex-col justify-between">
          <Text as="h3" color="white" size="md">
            Tour Information
          </Text>

          <ReviewStars stars={stars} />

          <div className="w-75 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <Text as="h4" color="white60" size="sm">
                Route:
              </Text>
              <Text as="p" color="white" size="sm">
                Verkhovyna - Vizhnitsa - Kamenetz-Podolsky - Satanov -
                Chernivtsi
              </Text>
            </div>

            <div className="flex justify-between items-center">
              <Text as="h4" color="white60" size="sm">
                Tour dates:
              </Text>
              <Text as="p" color="white" size="sm">
                19.10, 09.11
              </Text>
            </div>

            <div className="flex justify-between items-center">
              <Text as="h4" color="white60" size="sm">
                Duration:
              </Text>
              <Text as="p" color="white" size="sm">
                4 days
              </Text>
            </div>

            <div className="flex justify-between items-center">
              <Text as="h4" color="white60" size="sm">
                Food:
              </Text>
              <Text as="p" color="white" size="sm">
                Breakfasts
              </Text>
            </div>

            <div className="flex justify-between items-center">
              <Text as="h4" color="white60" size="sm">
                Category:
              </Text>
              <Text as="p" color="white" size="sm">
                {categories}
              </Text>
            </div>
          </div>

          <div className="pt-11 mb-10 border-t border-t-white/10 flex justify-between items-center">
            <Text as="p" color="white" size="sm">
              Price for 1 person
            </Text>
            <Text as="p" color="white" size="md">
              {price} CA$
            </Text>
          </div>

          <Button onClick={() => route.push(`${id}/booking`)} variant="primary">
            Book now
          </Button>
        </div>
      </div>
    </section>
  );
}
