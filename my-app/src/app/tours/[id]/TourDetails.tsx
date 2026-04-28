"use client";

import { useParams } from "next/navigation";

export default function TourDetails() {
  const tourDetails = useParams();

  return (
    <section className="pt-17 sm:pt-20 bg-[#171717]">
      <div className="bg-[#1e1e1f] px-20 py-20">
        <p className="text-white">TourDetails: {tourDetails.id}</p>
      </div>
    </section>
  );
}
