import React from "react";
import backgroundImage from "./assets/image.png";

function Wishing({ onShock }) {
  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-center px-8"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <p className="mt-90 text-3xl font-semibold italic drop-shadow-lg">
        <span className="text-black">Advance Happy New Year 🥰</span><br />
        <span className="text-red-500"> MY BABBBYYYYY 😍</span>
        <br />
        <span className="text-black">
          Just wanted to be your first sweet little shock 😱 of the year 😲
        </span>

        {/* gap below */}
      <div className="mt-10">
  <span className="text-black">
    Are you ready to shock?{" "}
  </span>
  <span
    onClick={onShock}
    className="cursor-pointer text-red-700 hover:text-red-900 hover:animate-pulse transition duration-300 drop-shadow-[0_0_6px_red]"
  >
    Click Here
  </span>
</div>

      </p>
    </div>
  );
}

export default Wishing;
