import { prisma } from "@/lib/prisma";
import BookingPathNames from "./BookingPathNames";
import BookingInfo from "./BookingInfo";
import BookingForm from "./BookingForm";
import { getCurrentUser } from "@/lib/utility/getCurrentUser";

type PageProps = {
  params: Promise<{
    id: number;
  }>;
};

export default async function page({ params }: PageProps) {
  const { id } = await params;

  const getTourById = await prisma.tour.findUnique({
    where: { id: Number(id) },
  });
  const user = await getCurrentUser();
  console.log(user);
  return (
    <main className="pt-17 md:pt-20 bg-[#171717]">
      <div className="bg-[#1e1e1f] px-20 pt-5 pb-37.5">
        <BookingPathNames title={getTourById!.title} />
        <div className="grid grid-cols-[2fr_3fr] gap-7.5">
          <BookingInfo tour={getTourById} />
          <BookingForm user={user} />
        </div>
      </div>
    </main>
  );
}
