"use client";

import { Text } from "./Text";
import SelectCity from "./SelectCity";
import SelectDate from "./SelectDate";
import SelectPeopleAndRooms from "./SelectPeopleAndRooms";
import Modal from "./Modal";
import DatePicker from "./DatePicker";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function HomeHeroForm() {
  const [pickDate, setPickDate] = useState<DateRange | undefined>();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="hidden md:pl-10 md:block md:h-17.5 md:w-full xl:pl-15 md:backdrop-blur-sm md:mt-30 rounded-xl md:grid md:grid-cols-[1fr_1fr_1fr_180px] md:gap-12.5">
      <SelectCity />
      <SelectDate setShowModal={setShowModal} pickDate={pickDate} />
      <SelectPeopleAndRooms />
      <button
        className="flex items-center justify-center border-l border-white/10"
        type="button"
      >
        <Text as="p" color="white" size="md">
          Search
        </Text>
      </button>

      <Modal openModal={showModal} setOpenModal={setShowModal}>
        <DatePicker setPickDate={setPickDate} setShowModal={setShowModal} />
      </Modal>
    </div>
  );
}
