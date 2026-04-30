import { Text } from "@/app/components/Text";
import { AnimalsIcon } from "@/lib/icons/AnimalsIcon";
import { HouseIcon } from "@/lib/icons/HouseIcon";
import { MountainIcon } from "@/lib/icons/MountainIcon";
import { NatureIcon } from "@/lib/icons/NatureIcon";

export default function TourAdvantages() {
  return (
    <section className="py-25">
      <Text
        as="h2"
        color="white"
        size="lg"
        spacing="sm"
        className="text-center mb-25"
      >
        Advantages of the tour
      </Text>

      <ul className="grid grid-cols-4 gap-7.5">
        <li className="flex flex-col items-center gap-7.5">
          <MountainIcon />
          <Text as="h3" color="white" size="md" className="text-center">
            Panoramic views
          </Text>
          <Text as="p" color="white60" size="sm" className="text-center">
            Panoramic views from the top of the mountain and the unique beauty
            of rock formations
          </Text>
        </li>

        <li className="flex flex-col items-center gap-7.5">
          <HouseIcon />
          <Text as="h3" color="white" size="md" className="text-center">
            Private cottage
          </Text>
          <Text as="p" color="white60" size="sm" className="text-center">
            Rest in a mountain hotel complex and meeting dawn in the mountains
          </Text>
        </li>

        <li className="flex flex-col items-center gap-7.5">
          <AnimalsIcon />
          <Text as="h3" color="white" size="md" className="text-center">
            Visiting animals
          </Text>
          <Text as="p" color="white60" size="sm" className="text-center">
            Walking in the crowns of trees and watching bears
          </Text>
        </li>

        <li className="flex flex-col items-center gap-7.5">
          <NatureIcon />
          <Text as="h3" color="white" size="md" className="text-center">
            Picturesque nature
          </Text>
          <Text as="p" color="white60" size="sm" className="text-center">
            Walk along the Carpathian trails to very beautiful locations
          </Text>
        </li>
      </ul>
    </section>
  );
}
