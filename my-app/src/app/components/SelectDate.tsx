import React from "react";
import { Text } from "./Text";
import { ArrowDownIcon } from "@/lib/icons/ArrowDownIcon";

export default function SelectDate() {
  return (
    <div className="relative flex">
      <button type="button" className="w-full">
        <Text
          as="p"
          color="white"
          size="sm"
          className="flex items-center justify-between pb-2.5 border-b-1 border-white/10"
        >
          Select date
          <ArrowDownIcon />
        </Text>
      </button>
    </div>
  );
}
