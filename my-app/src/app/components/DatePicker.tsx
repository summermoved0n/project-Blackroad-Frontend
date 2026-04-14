import Link from "next/link";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

export default function DatePicker({
  setIsOpenPicker,
}: {
  setIsOpenPicker: (arg: boolean) => void;
}) {
  const [selected, setSelected] = useState<DateRange | undefined>();

  return (
    <DayPicker
      animate
      mode="range"
      numberOfMonths={2}
      selected={selected}
      onSelect={setSelected}
      className="bg-white/30 p-4"
      classNames={{
        months: "flex gap-5 relative",
        weekday: "font-medium text-white bg-black/10",
        nav: "absolute w-full flex justify-between pt-4",
        month_caption: "text-xl font-bold py-4 text-center",
        today: `text-2xl font-semibold text-[#ea9c3f]`,
        selected: `bg-black`,
        chevron: `fill-white`,
        day_selected: "bg-[#ea9c3f]",
      }}
      footer={
        <div className="flex justify-between">
          <button
            className="hover:text-orange-300"
            type="button"
            onClick={() => setIsOpenPicker(false)}
          >
            Close
          </button>

          <Link
            className="bg-white h-7.5 w-15 flex items-center justify-center group"
            href="/tours"
          >
            <span className="group-hover:text-orange-300">Book</span>
          </Link>
        </div>
      }
    />
  );
}
