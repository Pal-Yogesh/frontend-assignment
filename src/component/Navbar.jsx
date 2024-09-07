
import React from "react";

const tabs = ["About Me", "Experiences", "Recommended"];

function Navbar({ activeTab, setActiveTab }) {
  return (
    <div className="flex flex-wrap md:flex-nowrap space-x-2 p-2 bg-[#171717] rounded-3xl md:w-[611px] w-full md:h-[64px]">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`flex-1 md:flex-none rounded-2xl text-[1rem] md:text-[1.125rem] font-medium md:w-[195px] w-full md:h-[49px] h-[40px] transition-all duration-300 ${
            activeTab === tab
              ? "bg-[#28292F] text-[#A3ADB2]"
              : "bg-[#171717] text-[#FFFFFF]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default Navbar;
