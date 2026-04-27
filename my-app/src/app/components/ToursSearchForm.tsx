"use client";

import SearchForm from "./SearchForm";
import Filter from "./Filter";
import ToursList from "./ToursList";
import SortBy from "./SortBy";
import { useFilters } from "@/lib/hooks/useFilters";
import clsx from "clsx";

export default function ToursSearchForm() {
  const { setPage, searchParams } = useFilters();
  const currentPage = Number(searchParams.get("page") || 1);

  return (
    <section className="bg-[#1e1e1f] py-25 px-20">
      <div className="bg-[#171717] rounded-xl md:mb-25">
        <SearchForm />
      </div>

      <div className="flex justify-between items-center md:mb-12.5">
        <SortBy />
      </div>

      <div className="grid md:grid-cols-[1fr_2fr] md:gap-7.5">
        <Filter />
        <ToursList />
      </div>

      <div className="pt-10 flex items-center justify-center gap-10">
        <button
          className={clsx("text-white", currentPage === 1 && "bg-amber-600")}
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <button className="text-white" onClick={() => setPage(currentPage + 1)}>
          Next
        </button>
      </div>
    </section>
  );
}
