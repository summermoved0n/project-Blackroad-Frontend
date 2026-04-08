"use client";

import { useParams } from "next/navigation";

export default function TourDetails() {
  const test = useParams();

  console.log("test", test);

  return <div className="mt-30 text-white">TourDetails: {test.id}</div>;
}
