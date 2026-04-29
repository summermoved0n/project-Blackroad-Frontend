"use client";

import { toursListData } from "@/lib/data/toursPageData";
import { notFound, useParams } from "next/navigation";
import TourInfo from "./TourInfo";
import TourDates from "./TourDates";

export default function TourDetails() {
  const tourDetails = useParams();
  const tourData = toursListData.find(
    (item) => item.id === Number(tourDetails.id),
  );

  console.log(tourData);

  if (!tourData) {
    notFound();
  }

  return (
    <main className="pt-17 sm:pt-20 bg-[#171717]">
      <div className="bg-[#1e1e1f] px-20 pt-6.5 pb-37.5">
        <TourInfo tourData={tourData} />
        <TourDates />
      </div>
    </main>
  );
}
