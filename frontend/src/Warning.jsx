import React from "react";
import backgroundImage from "./assets/image copy 14.png"; // main background
import img3 from "./assets/image copy 3.png";
import img4 from "./assets/image copy 4.png";
import img5 from "./assets/image copy 5.png";
import img6 from "./assets/image copy 6.png";
import img7 from "./assets/image copy 2.png";
import img8 from "./assets/image copy 8.png";

function Warning({ onNext }) {
  return (
    <div
      className="relative flex flex-col items-center justify-start h-screen text-white text-4xl font-bold text-center animate-fadeIn bg-center bg-no-repeat p-10 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="mt-49">⚠️ WARNING ⚠️</div>

      <p className="text-xl text-blue-500 italic max-w-2xl bg-opacity-40 p-4 rounded-2xl mt-6">
        You might feel a soft rush of butterflies soon 💫 <br />
        Are you ready for that? Because every little thing I’ve been planning is
        wrapped in love 💖 — just for you BABYYYY <br />
        Are you ready to let your heart feel it, my love 🥰?{" "}
        <span
          onClick={onNext}
          className="text-red-500 hover:text-white cursor-pointer transition duration-300 font-semibold"
        >
          Tap My Love 💖
        </span>
      </p>

      {/* 🌸 Decorative corner & side images */}
      {/* Top corners (hidden on small screens) */}
      <img
        src={img3}
        alt="corner-left"
        className="hidden md:block absolute top-6 left-6 w-50 h-44 object-contain opacity-90"
      />
      <img
        src={img4}
        alt="corner-right"
        className="hidden md:block absolute top-6 right-6 w-50 h-44 object-contain opacity-90"
      />

      {/* Bottom corners (hidden on small screens) */}
      <img
        src={img5}
        alt="bottom-left"
        className="hidden md:block absolute bottom-6 left-6 w-50 h-44 object-contain opacity-90"
      />
      <img
        src={img6}
        alt="bottom-right"
        className="hidden md:block absolute bottom-6 right-6 w-50 h-44 object-contain opacity-90"
      />

      {/* Floating middle sides (only show on large screens) */}
      <img
        src={img7}
        alt="middle-left"
        className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-8 w-50 h-44 object-contain opacity-85"
      />
      <img
        src={img8}
        alt="middle-right"
        className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-8 w-52 h-44 object-contain opacity-85"
      />
    </div>
  );
}

export default Warning;
