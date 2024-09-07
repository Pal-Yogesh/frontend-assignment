import React from "react";

const tabs = ["About Me", "Experiences", "Recommended"];

function TabSwitcher({ activeTab, setActiveTab }) {
  return (
    <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg overflow-hidden">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex-1 py-2 px-4 md:py-3 md:px-6 ${
            activeTab === tab
              ? "bg-gray-600 text-white"
              : "bg-gray-700 text-gray-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default TabSwitcher;
