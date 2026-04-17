"use client";

import React, { useState } from "react";
import { Text } from "./Text";
import { ArrowDownIcon } from "@/lib/icons/ArrowDownIcon";

const citiesList = [
  "Oshawa",
  "Ajax",
  "Whitby",
  "Toronto",
  "Pickering",
  "Brampton",
  "Clear field",
];

export default function SelectMenu() {
  const [showList, setShowList] = useState(false);
  const [cityName, setCityName] = useState("");

  return (
    <div className="relative flex">
      <button
        type="button"
        className="w-full"
        onClick={() => setShowList(!showList)}
      >
        <Text
          as="p"
          color="white"
          size="sm"
          className="flex items-center justify-between pb-2.5 border-b-1 border-white/10"
        >
          {!cityName || cityName === "Clear field"
            ? "Where are you going?"
            : cityName}
          <ArrowDownIcon />
        </Text>
      </button>

      {showList && (
        <ul className="absolute top-full bg-white w-full group">
          {citiesList.map((item) => (
            <li
              key={item}
              className="cursor-pointer py-2.5 px-5 group-hover:bg-white/30"
              onClick={() => {
                setShowList(false);
                setCityName(item);
              }}
            >
              <Text as="p" color="black" size="sm">
                {item}
              </Text>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
