"use client";

import { Dispatch, SetStateAction } from "react";
import { Text } from "./Text";
import { ArrowDownIcon } from "@/lib/icons/ArrowDownIcon";
import { DateRange } from "react-day-picker";

type SelectDateProps = {
  pickDate: DateRange | undefined;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export default function SelectDate({
  setShowModal,
  pickDate,
}: SelectDateProps) {
  console.log(pickDate);
  return (
    <div className="relative flex">
      <button
        type="button"
        className="w-full"
        onClick={() => setShowModal(true)}
      >
        <Text
          as="p"
          color="white"
          size="sm"
          className="flex items-center justify-between pb-2.5 border-b-1 border-white/10"
        >
          {!pickDate
            ? "Select date"
            : `${pickDate.from?.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })} - ${pickDate.to?.toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}`}
          <ArrowDownIcon />
        </Text>
      </button>
    </div>
  );
}
