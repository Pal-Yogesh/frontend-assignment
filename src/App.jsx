import React, { useState } from "react";
import Gallery from "./component/Gallery";
import ProfileDetails from "./component/ProfileDetails";
import Navbar from "./component/Navbar";

function App() {
  const [activeTab, setActiveTab] = useState("About Me");

  return ( 
    <>
      <div className="pt-[90px] pr-4 pl-4 sm:pr-20 sm:pl-10 ">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="hidden md:block w-full md:w-1/3 p-6 sm:m-1   bg-[#61616182] text-gray-200 rounded-2xl sm:min-h-screen xl:min-h-max">
            <p className="text-[#FFFFFF] text-[18px] font-bold">Instructions of the assignment here...</p>
          </div>

          <div className="w-full md:w-[720px] md:h-[316px] flex flex-col space-y-4">
            <div>
              <div className="bg-[#363C43] rounded-3xl pt-4 px-2 shadow-[5px_5px_15px_rgba(0,0,0,0.9)]">
                <div className="flex">
                  <div className="pt-2">
                    <img src="./question.svg" alt="img" />
                  </div>
                  <div className="px-4">
                    <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
                  </div>
                </div>

                <div className="flex">
                  <div className="  pt-20 px-1">
                    <img src="./window.svg" alt="img" width={52} height={52}/>
                  </div>
                  <div className="pt-3">
                    <ProfileDetails activeTab={activeTab} />
                  </div>
                  <div className="">
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 md:px-12">
              <img src="./longline.svg" alt="img" className="shadow-2xl" />
            </div>

            <Gallery />

            <div className="px-4 md:px-12 pb-10">
              <img src="./longline.svg" alt="img" className="shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
