"use client";

import SearchForm from "../components/SearchForm";
import Filter from "../components/Filter";
import { useFilters } from "@/lib/hooks/useFilters";
import { toursListData } from "@/lib/data/toursPageData";
import ToursPagination from "./ToursPagination";
import ToursList from "./ToursList";
import SortBy from "./SortBy";

const toursPerPage = 4;
const totalPages = Math.ceil(toursListData.length / toursPerPage);

export default function ToursSearchForm() {
  const { searchParams } = useFilters();
  const currentPage = Number(searchParams.get("page") || 1);
  const paginateListData = toursListData.slice(
    (currentPage - 1) * toursPerPage,
    toursPerPage * currentPage,
  );

  return (
    <section className="bg-[#1e1e1f] py-25 px-20">
      <div className="bg-[#171717] rounded-xl md:mb-25">
        <SearchForm />
      </div>

      <SortBy />

      <div className="grid md:grid-cols-[1fr_2fr] md:gap-7.5">
        <Filter />
        <ToursList paginateListData={paginateListData} />
      </div>

      <ToursPagination currentPage={currentPage} totalPages={totalPages} />
    </section>
  );
}
