import React from "react";
import { Text } from "./Text";
import { MinusIcon } from "@/lib/icons/MinusIcon";
import { PlusIcon } from "@/lib/icons/PlusIcon";

type SelectPeopleAndRoomsItem = {
  title: string;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

export default function SelectPeopleAndRoomsItem({
  title,
  quantity,
  setQuantity,
}: SelectPeopleAndRoomsItem) {
  return (
    <div className="flex justify-between">
      <Text as="p" color="black" size="sm">
        {title}
      </Text>
      <div className="flex gap-2 xl:gap-5">
        <button
          type="button"
          onClick={() => setQuantity((prev) => (prev -= 1))}
        >
          <MinusIcon />
        </button>
        <Text as="p" color="black" size="sm">
          {quantity}
        </Text>
        <button
          type="button"
          onClick={() => setQuantity((prev) => (prev += 1))}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  );
}
