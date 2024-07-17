import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Chart");

  return (
    <div className="flex flex-col sm:flex-row sm:space-x-8 px-8 mt-6">
      {["Summary", "Chart", "Statistics", "Analysis", "Settings"].map((tab) => (
        <button
          key={tab}
          className={`py-2 px-4 mb-2 sm:mb-0 ${
            activeTab === tab
              ? "text-black border-b-2 border-blue-500"
              : "text-gray-500"
          } hover:text-blue-500`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
