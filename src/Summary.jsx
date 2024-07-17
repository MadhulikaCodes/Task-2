import React from "react";

const Summary = ({data}) => {
 
  return (
    <div className="text-left mt-6 px-11">
      <div className="flex gap-2">
        <h1 className="text-5xl font-bold text-gray-800">{data[data.length - 1]}</h1>
        <span className="text-lg text-slate-500 font-bold">USD</span>
      </div>
      <p className="text-green-500 text-xl mt-2">+2,161.42 (3.54%)</p>
    </div>
  );
};

export default Summary;
