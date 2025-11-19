import React from "react";
import bgImage from "./assets/image copy 12.png";
import bgImage1 from "./assets/image copy 13.png";



function LastMessage() {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden">

      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover  brightness-75"
        style={{
          backgroundImage: `url(${bgImage1})`,
        }}
      ></div>

      {/* 🔥 Clear Image on Top */}
      <img
        src={bgImage}
        alt="main"
        className="relative z-10 w-full h-full object-contain"
      />

      {/* 🔥 Text */}
      <h1 className="absolute z-20 text-4xl sm:text-6xl font-bold text-white drop-shadow-2xl text-center">
        Can I call you mine?
      </h1>

    </div>
  );
}

export default LastMessage;
