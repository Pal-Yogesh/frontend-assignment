
import React from "react";

function ProfileDetails({ activeTab }) {
  const content = {
    "About Me": {
      section1:
        "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.",
      section2:
        "I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters—Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...",
    },
    Experiences:
      "I have over years of experience in sales and business development across different industries. Currently, I'm working at Salesforce as a Sales Representative, where I manage a portfolio of over 100 clients and consistently exceed sales targets by 20%.",
    Recommended:
      "John Doe, my former manager at TechCorp, praised me for consistently exceeding expectations and delivering impressive results in my role as Business Development Manager. Jane Smith, a client at Salesforce, shared that working with me was a pleasure due to my dedication and client-first approach.",
  };

  return (
    <div className="text-[16px] md:text-[20px] px-4 md:px-6 pt-4 rounded-lg text-[#969696] h-auto md:h-[260px] overflow-y-auto">
      {activeTab === "About Me" ? (
        <>
          <p className="mb-4 w-[611px]">{content["About Me"].section1}</p>
          <p className="w-[611px]">{content["About Me"].section2}</p>
        </>
      ) : (
        <p className="w-[611px]">{content[activeTab]}</p>
      )}
    </div>
  );
}

export default ProfileDetails;
