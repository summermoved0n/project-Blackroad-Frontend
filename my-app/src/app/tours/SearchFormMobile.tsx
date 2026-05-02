"use client";

import React, { Dispatch, SetStateAction } from "react";
import { DateRange } from "react-day-picker";
import SelectCity from "../components/SelectCity";
import SelectDate from "../components/SelectDate";
import SelectPeopleAndRooms from "../components/SelectPeopleAndRooms";
import { Button } from "../components/Button";

type SearchFormMobileProps = {
  pickDate: DateRange | undefined;
  setPickDate: Dispatch<SetStateAction<DateRange | undefined>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export default function SearchFormMobile({
  pickDate,
  setPickDate,
  showModal,
  setShowModal,
}: SearchFormMobileProps) {
  return (
    <section className="xl:hidden py-5 px-4 bg-[#171717]">
      <div className="mb-5">
        <SelectCity />
        <SelectDate setShowModal={setShowModal} pickDate={pickDate} />
        <SelectPeopleAndRooms />
      </div>

      <Button variant="primary" size="sm">
        Search
      </Button>
    </section>
  );
}
