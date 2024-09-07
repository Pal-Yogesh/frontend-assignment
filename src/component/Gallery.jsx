
import React, { useState } from "react";

function Gallery() {
  const [images, setImages] = useState([
    "./addimg.svg",
    "./addimg.svg",
    "./addimg.svg",
  ]);

  const handleAddImage = () => {
    setImages((prevImages) => [...prevImages, "./addimg.svg"]);
  };

  const scrollLeft = () => {
    document.getElementById("image-container").scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    document.getElementById("image-container").scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#363C43] rounded-2xl pb-5 shadow-[5px_5px_15px_rgba(0,0,0,0.9)]">
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-4 px-4">
        <div className="flex items-center mb-4 md:mb-0">
          <img src="./question.svg" alt="img" className="mr-4" />
          <div className="bg-[#171717] w-[149px] h-[62px] flex items-center justify-center rounded-2xl">
            <h2 className="text-[#FFFFFF] font-medium text-[18px] md:text-[20px]">
              Gallery
            </h2>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="./addbutton.svg"
            alt="Add"
            className="cursor-pointer"
            onClick={handleAddImage}
          />
          <img
            src="./iconleft.svg"
            alt="Left"
            className="cursor-pointer"
            onClick={scrollLeft}
          />
          <img
            src="./iconright.svg"
            alt="Right"
            className="cursor-pointer"
            onClick={scrollRight}
          />
        </div>
      </div>

      {/* Gallery grid */}
      <div className="flex space-x-2 overflow-hidden">
        <div className="px-3 pt-5 flex-shrink-0">
          <img src="./window.svg" alt="img" />
        </div>
        <div
          id="image-container"
          className="flex gap-7 overflow-x-auto scrollbar-hide"
        >
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery ${index + 1}`}
              className="rounded w-[150px] h-[140px] md:w-[190px] md:h-[179px] flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
