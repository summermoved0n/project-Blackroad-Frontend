import Image from "next/image";
import { Text } from "./Text";
import ButtonWithArrow from "./ButtonWithArrow";

type TourCardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

export default function TourCard({
  id,
  title,
  description,
  image,
  price,
}: TourCardProps) {
  return (
    <div
      id={id.toString()}
      className="relative bg-black/30 h-187.5 w-100 p-10 flex items-end"
    >
      <Image
        className="object-cover -z-10 shadow-black/60"
        src={image}
        alt={title}
        fill
        sizes="25vw"
        loading="eager"
      />
      <div className="flex flex-col gap-[30px]">
        <Text as="h3" color="white" size="md">
          {title}
        </Text>
        <Text as="p" color="white60" size="sm">
          {description}
        </Text>

        <div className="flex justify-between">
          <ButtonWithArrow className="text-white" whiteArrow>
            Book now
          </ButtonWithArrow>

          <Text as="p" color="white" size="md">
            ${price} CA$
          </Text>
        </div>
      </div>
    </div>
  );
}
