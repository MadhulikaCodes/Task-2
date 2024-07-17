import React, { useState } from "react";

const Toolbar = () => {
  const [selectedRange, setSelectedRange] = useState("1w");

  return (
    <div className="flex justify-between items-center mt-4 space-x-4 px-12">
      <div className="flex gap-6">
        <button className="text-gray-500 hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v4h4m12-4v4h-4m-4-4v4m-4-4v4m-4-4v4M12 12V8m0 0V4m0 0h-4m8 0h-4"
            />
          </svg>
        </button>
        <span className="material-icons">fullscreen</span>
        <button className="text-gray-500 hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0l-4 4m4-4l-4-4m-6 16H3m0 0l4-4m-4 4l4 4"
            />
          </svg>
        </button>
        <span className="material-icons">compare_arrows</span>
      </div>
      <div className="flex space-x-2">
        {["1d", "3d", "1w", "1m", "6m", "1y", "max"].map((period) => (
          <button
            key={period}
            className={`py-1 px-3 ${
              selectedRange === period
                ? "bg-blue-500 text-white"
                : "text-gray-600"
            } rounded hover:bg-gray-300`}
            onClick={() => setSelectedRange(period)}
          >
            {period}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;
