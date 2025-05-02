import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const MIN = 0;
const MAX = 500;

const PriceRangeSlider = () => {
  const [values, setValues] = useState([50, 200]);

  return (
    <div className="mx-auto w-full max-w-md">
      <Range
        values={values}
        step={1}
        min={MIN}
        max={MAX}
        onChange={setValues}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="bg-gray-200 my-4 rounded w-full h-2"
            style={{
              background: getTrackBackground({
                values,
                colors: ["#E5E7EB", "#000000", "#E5E7EB"],
                min: MIN,
                max: MAX,
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="bg-[var(--colorBlack)] shadow-md border-2 rounded-full w-5 h-5"
          />
        )}
      />
      <div className="flex justify-between mt-2 text-gray-700 text-sm">
        <span className="text-[var(--colorBlack)]">${values[0]}</span>
        <span className="text-[var(--colorBlack)]">${values[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
