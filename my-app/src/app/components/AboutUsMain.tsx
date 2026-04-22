import Image from "next/image";
import { Text } from "./Text";

export default function AboutUsMain() {
  return (
    <section className="pt-12.5 pb-12.5 mx-4 md:pt-37.5 md:pb-50 md:mx-20">
      <div className="md:mb-50">
        <Text as="h2" color="black" size="xl" className="uppercase md:mb-25">
          We change the idea of traveling in Canada!
        </Text>
        <div className="grid grid-cols-3 justify-end gap-7.5">
          <p></p>
          <Text as="p" color="black60" size="sm">
            Magical places and fantastic entertainment are two main components
            of our tours in Ukraine. Although, we must admit, there are several
            more, more prosaic: clear planning, fair price and constant
            improvement.
          </Text>
          <Text as="p" color="black60" size="sm">
            Traveling with Blackroad is not just a tourist product: each of them
            has particles of magic and fairy tales. And we try very hard to make
            you feel them.
          </Text>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-35">
        <div className="relative w-full h-95">
          <div className="absolute bg-white h-full w-7.5"></div>
          <Image
            className="object-cover object-center -z-10"
            src="/images/We_change_left.jpg"
            alt=""
            fill
          />
        </div>

        <Text as="p" color="black60" size="sm">
          Every day we create new travel programs, develop routes, expand our
          base of partners in all tourist corners of the country to provide you
          with maximum opportunities for traveling in Canada.
        </Text>
      </div>
    </section>
  );
}
