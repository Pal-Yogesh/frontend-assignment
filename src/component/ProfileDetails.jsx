import React, { useRef, useEffect } from "react";

function ProfileDetails({ activeTab }) {
  const contentRef = useRef(null);
  const scrollbarRef = useRef(null);

  const content = {
    "About Me": {
      section1:
        "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.",
      section2:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum odit est neque eligendi voluptatibus provident quaerat, autem laborum quasi cum.and I was born  in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters—Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...",
    },
    Experiences:
      "I have over years of experience in sales and business development across different industries. Currently, I'm working at Salesforce as a Sales Representative, where I manage a portfolio of over 100 clients and consistently exceed sales targets by 20%.",
    Recommended:
      "John Doe, my former manager at TechCorp, praised me for consistently exceeding expectations and delivering impressive results in my role as Business Development Manager. Jane Smith, a client at Salesforce, shared that working with me was a pleasure due to my dedication and client-first approach.",
  };

  useEffect(() => {
    
    const content = contentRef.current;
    const scrollbar = scrollbarRef.current;

    const handleScroll = () => {
      const scrollPercentage = content.scrollTop / (content.scrollHeight - content.clientHeight);
      scrollbar.style.top = `${scrollPercentage * (content.clientHeight - scrollbar.clientHeight)}px`;
    };

    content.addEventListener("scroll", handleScroll);

    return () => {
      content.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative text-[16px] md:text-[20px] px-4 md:px-6 pt-4 rounded-lg text-[#969696] h-auto md:h-[260px] overflow-hidden">
      <div
        ref={scrollbarRef}
        className="absolute right-0 top-0 rounded cursor-pointer"
        onMouseDown={(e) => {
          const handleMouseMove = (e) => {
            const content = contentRef.current;
            const scrollHeight = content.scrollHeight - content.clientHeight;
            const scrollPercentage = e.clientY / window.innerHeight;
            content.scrollTop = scrollPercentage * scrollHeight;
          };

          window.addEventListener("mousemove", handleMouseMove);
          window.addEventListener("mouseup", () => {
            window.removeEventListener("mousemove", handleMouseMove);
          }, { once: true });
        }}
      >
        <img src="./line.svg" alt="Custom Scrollbar" className="w-full h-full" />
      </div>
      <div
        ref={contentRef}
        className="overflow-y-auto  pr-3 scrollbar-hide"
      >
        {activeTab === "About Me" ? (
          <>

            <p className=" w-[611px] pb-2">{content["About Me"].section1}</p>
            <p className="w-[611px] h-[156px] ">{content["About Me"].section2}</p>
          </>
        ) : (
          <p className="w-[611px] h-[180px]">{content[activeTab]}</p>
        )}
      </div>
    </div>
  );
}

export default ProfileDetails;
