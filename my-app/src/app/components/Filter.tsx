"use client";

import { Text } from "./Text";
import DualRange from "./DualRange";
import Checkbox from "./Checkbox";
import { useFilters } from "@/lib/hooks/useFilters";

export default function Filter() {
  const { toggleFilter, searchParams, clearFilter } = useFilters();

  const getSelected = (key: string) => searchParams.get(key)?.split(",") || [];

  const selectedType = getSelected("type");
  const selectedTours = getSelected("tours");
  const selectedCategories = getSelected("categories");
  const selectedRating = getSelected("rating");

  return (
    <div className="py-10 px-7.5 bg-[#171717] h-fit flex flex-col gap-10">
      <Text as="h4" color="white" size="md">
        All filters
      </Text>

      <div className="flex flex-col gap-5">
        <Text as="p" color="white60" size="sm">
          Your budget (per night)
        </Text>

        <DualRange />
      </div>

      <div className="flex flex-col gap-5 items-start">
        <Text as="p" color="white60" size="sm">
          Property Type
        </Text>

        <Checkbox
          checked={selectedType.includes("hotels")}
          onChange={() => toggleFilter("type", "hotels")}
          label="Hotels"
        />
        <Checkbox
          checked={selectedType.includes("cottages")}
          onChange={() => toggleFilter("type", "cottages")}
          label="Cottages"
        />
        <Checkbox
          checked={selectedType.includes("appartments")}
          onChange={() => toggleFilter("type", "appartments")}
          label="Appartments"
        />
      </div>

      <div className="flex flex-col gap-5 items-start">
        <Text as="p" color="white60" size="sm">
          Tours
        </Text>

        <Checkbox
          checked={selectedTours.includes("individual")}
          onChange={() => toggleFilter("tours", "individual")}
          label="Individual"
        />
        <Checkbox
          checked={selectedTours.includes("group")}
          onChange={() => toggleFilter("tours", "group")}
          label="Group"
        />
      </div>

      <div className="flex flex-col gap-5 items-start">
        <Text as="p" color="white60" size="sm">
          Categories
        </Text>

        <Checkbox
          checked={selectedCategories.includes("mountains")}
          onChange={() => toggleFilter("categories", "mountains")}
          label="Mountains"
        />
        <Checkbox
          checked={selectedCategories.includes("lakes")}
          onChange={() => toggleFilter("categories", "lakes")}
          label="Lakes"
        />
      </div>

      <div className="flex flex-col gap-5 items-start">
        <Text as="p" color="white60" size="sm">
          Property rating
        </Text>

        <Checkbox
          checked={selectedRating.includes("1-star")}
          onChange={() => toggleFilter("rating", "1-star")}
          label="1 star"
        />
        <Checkbox
          checked={selectedRating.includes("2-stars")}
          onChange={() => toggleFilter("rating", "2-stars")}
          label="2 stars"
        />
        <Checkbox
          checked={selectedRating.includes("3-stars")}
          onChange={() => toggleFilter("rating", "3-stars")}
          label="3 stars"
        />
        <Checkbox
          checked={selectedRating.includes("4-stars")}
          onChange={() => toggleFilter("rating", "4-stars")}
          label="4 stars"
        />
        <Checkbox
          checked={selectedRating.includes("5-stars")}
          onChange={() => toggleFilter("rating", "5-stars")}
          label="5 stars"
        />
      </div>

      <button
        className="flex w-fit group"
        type="button"
        onClick={() => clearFilter()}
      >
        <Text
          as="p"
          color="white60"
          size="sm"
          className="group-hover:text-[#ea9c3f] transition"
        >
          Clear filters
        </Text>
      </button>
    </div>
  );
}
