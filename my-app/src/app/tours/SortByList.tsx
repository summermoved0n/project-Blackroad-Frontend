"use client";

import React from "react";
import { Text } from "../components/Text";
import { useFilters } from "@/lib/hooks/useFilters";

type SortByListProps = {
  label: string;
  setShowSortList: React.Dispatch<React.SetStateAction<boolean>>;
  setSortName: React.Dispatch<React.SetStateAction<string>>;
};

export default function SortByList({
  label,
  setShowSortList,
  setSortName,
}: SortByListProps) {
  const { setFilter } = useFilters();
  return (
    <button
      onClick={() => {
        setSortName(label);
        setShowSortList(false);
        setFilter("sort", label);
      }}
      className="text-left"
    >
      <Text as="p" color="white60" size="sm">
        {label}
      </Text>
    </button>
  );
}
