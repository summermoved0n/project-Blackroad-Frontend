import { Suspense } from "react";
import TourDetails from "./TourDetails";

export default function page() {
  return (
    <Suspense fallback={null}>
      <TourDetails />
    </Suspense>
  );
}
