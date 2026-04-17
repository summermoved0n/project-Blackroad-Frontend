"use client";

import React, { useState } from "react";
import { Text } from "./Text";
import { ArrowDownIcon } from "@/lib/icons/ArrowDownIcon";

export default function SelectPeopleAndRooms() {
  const [oapsityData, setOpasityData] = useState([
    { id: 1, name: "Adults", quantity: 2 },
    { id: 2, name: "Children", quantity: 0 },
    { id: 3, name: "Room", quantity: 1 },
  ]);
  const [showOpasutyModal, setShowOpasutyModal] = useState(false);

  return (
    <div className="relative flex">
      <button
        type="button"
        className="w-full"
        onClick={() => setShowOpasutyModal(!showOpasutyModal)}
      >
        <Text
          as="p"
          color="white"
          size="sm"
          className="flex items-center justify-between pb-2.5 border-b-1 border-white/10"
        >
          {`${oapsityData[0].quantity} adults, ${oapsityData[1].quantity} children, ${oapsityData[2].quantity} room`}
          <ArrowDownIcon />
        </Text>
      </button>

      {showOpasutyModal && (
        <div className="absolute top-full w-full px-7.5 py-7.5 flex flex-col gap-5 bg-white">
          {oapsityData.map(({ id, name, quantity }) => (
            <div key={id} className="flex justify-between">
              <Text as="p" color="black" size="sm">
                {name}
              </Text>

              <div className="flex">
                <button>-</button>
                <p>{quantity}</p>
                <button>+</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
