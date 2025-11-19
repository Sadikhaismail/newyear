import React, { useEffect, useState } from "react";
import backgroundImage from "./assets/image copy.png";


function Batman({ onComplete }) {
  const [showMessage, setShowMessage] = useState(false);
  const [showNoMessage, setShowNoMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleYes = () => {
    if (onComplete) onComplete(); // goes to next page
  };

  const handleNo = () => {
    setShowNoMessage(true);
  };

  const handleClose = () => {
    setShowNoMessage(false);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-center text-black text-center space-y-6 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "repeat",
      }}
    >
      {showMessage && (
        <>
          <h1 className="text-5xl font-extrabold animate-pop drop-shadow-2xl">
            You are a Batman 🦇💞
          </h1>

          <p className="text-2xl font-semibold mt-20">
            Are you shocked, MY POOKIEEE?
          </p>

          <div className="flex flex-col items-center space-y-4 mt-8">
            <div className="flex space-x-6">
              <button
                onClick={handleYes}
                className="bg-black text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-110"
              >
                Yes 😍
              </button>
              <button
                onClick={handleNo}
                className="bg-black text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-110"
              >
                No 🤨
              </button>
            </div>
          </div>

          {/* Floating Popup */}
          {showNoMessage && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 relative">
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-3 text-gray-500 hover:text-black text-lg font-bold"
                >
                  ✖
                </button>
           <p className="text-lg font-semibold text-black leading-relaxed">
  Baby 😘 that <span className="text-red-600">“No”</span> was just for formality 😏 <br />
  You know you can’t really say no to me 😇 <br />
  So baby, shock and go and click{" "}
  <span className="font-bold text-red-600">YES 🤭</span> — <br />
  be my good boy and take your little shock 💞⚡
</p>


              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Batman;
