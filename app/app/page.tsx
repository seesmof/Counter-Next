"use client";

import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState<number>(0);

  return (
    <div className="bg-sky-50 min-h-screen p-3 flex items-center justify-center">
      <div className="bg-white rounded-md border border-sky-300 p-3">
        {/* Flex Container */}
        <div className="flex flex-row items-center gap-2">
          <button
            className="btn"
            onClick={() => setValue((prevValue) => prevValue - 10)}
          >
            - -
          </button>
          <button
            className="btn"
            onClick={() => setValue((prevValue) => prevValue - 1)}
          >
            -
          </button>
          <p>{value}</p>
          <button
            className="btn"
            onClick={() => setValue((prevValue) => prevValue + 1)}
          >
            +
          </button>
          <button
            className="btn"
            onClick={() => setValue((prevValue) => prevValue + 10)}
          >
            + +
          </button>
        </div>
        <button className="btn w-full mt-2" onClick={() => setValue(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}
