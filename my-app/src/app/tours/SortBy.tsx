"use client";

import { ArrowDownIcon } from "@/lib/icons/ArrowDownIcon";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { FilterIcon } from "@/lib/icons/FilterIcon";
import { ArrowUpDownIcon } from "@/lib/icons/ArrowUpDownIcon";
import Modal from "../components/Modal";
import { useState } from "react";
import Filter from "../components/Filter";

export default function SortBy() {
  const [openFilterModal, setOpenFilterModal] = useState(false);
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-12.5 mb-7.5 md:mb-12.5 md:mt-0">
      <Text
        as="h3"
        color="white"
        size="lg"
        spacing="sm"
        className="uppercase mb-7.5 md:mb-0"
      >
        choose a tour
      </Text>

      <div className="hidden md:flex items-center gap-7.5">
        <Text as="p" color="white" size="md">
          Sort by:
        </Text>

        <Text as="p" color="white60" size="sm">
          default
        </Text>

        <ArrowDownIcon />
      </div>

      <div className="flex gap-2 w-full md:hidden">
        <Button
          variant="primary"
          size="sm"
          className="flex justify-center items-center gap-2"
          onClick={() => setOpenFilterModal(true)}
        >
          <FilterIcon />
          <Text as="span" color="white" size="sm">
            Filters
          </Text>
        </Button>

        <Button
          variant="primary"
          size="sm"
          className="flex justify-center items-center gap-2"
        >
          <ArrowUpDownIcon />
          <Text as="span" color="white" size="sm">
            Sort
          </Text>
        </Button>
      </div>

      <Modal openModal={openFilterModal} setOpenModal={setOpenFilterModal}>
        <Filter />
      </Modal>
    </div>
  );
}
