"use client";

import { Range, getTrackBackground } from "react-range";
import { useState } from "react";

const MIN = 100;
const MAX = 1000;

export default function DualRange() {
  const [values, setValues] = useState([250, 750]);

  return (
    <div className="w-full">
      <p className="mb-5 text-white">
        {values[0]} CA$ — {values[1]} CA$
      </p>

      <Range
        values={values}
        step={1}
        min={MIN}
        max={MAX}
        onChange={(vals) => setValues(vals)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-1 w-full rounded-xl"
            style={{
              ...props.style,
              background: getTrackBackground({
                values,
                colors: [
                  "rgba(255, 255, 255, 0.1)",
                  "#ea9c3f",
                  "rgba(255, 255, 255, 0.1)",
                ],
                min: MIN,
                max: MAX,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => {
          const { key, ...rest } = props;

          return (
            <div
              key={key}
              {...rest}
              className="h-5 w-5 rounded-full bg-[#ea9c3f] flex items-center justify-center shadow"
            ></div>
          );
        }}
      />
    </div>
  );
}
