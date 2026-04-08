import { Suspense } from "react";
import TourDetails from "./TourDetails";

export default function CategoryPage() {
  return (
    <Suspense fallback={null}>
      <TourDetails />
    </Suspense>
  );
}
