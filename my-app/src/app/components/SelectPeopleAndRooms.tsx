import { useState } from "react";
import { Text } from "./Text";
import { ArrowDownIcon } from "@/lib/icons/ArrowDownIcon";
import SelectPeopleAndRoomsItem from "./SelectPeopleAndRoomsItem";

export default function SelectPeopleAndRooms() {
  const [adults, setAdulst] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const [showOpasityModal, setShowOpasityModal] = useState(false);

  return (
    <div className="relative flex">
      <button
        type="button"
        className="w-full"
        onClick={() => setShowOpasityModal(!showOpasityModal)}
      >
        <Text
          as="p"
          color="white"
          size="sm"
          className="flex items-center justify-between pb-2.5 border-b-1 border-white/10"
        >
          {`${adults} adults, ${children} children, ${rooms} room`}
          <ArrowDownIcon />
        </Text>
      </button>

      {showOpasityModal && (
        <div className="absolute top-full w-full px-2.5 py-2.5 xl:px-7.5 xl:py-7.5 flex flex-col gap-5 bg-white">
          <SelectPeopleAndRoomsItem
            title={"Adults"}
            quantity={adults}
            setQuantity={setAdulst}
          />
          <SelectPeopleAndRoomsItem
            title={"Children"}
            quantity={children}
            setQuantity={setChildren}
          />
          <SelectPeopleAndRoomsItem
            title={"Rooms"}
            quantity={rooms}
            setQuantity={setRooms}
          />
        </div>
      )}
    </div>
  );
}
