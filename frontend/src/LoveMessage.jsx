// LoveMessage.jsx
import React, { useState, useEffect } from "react";
import img9 from "./assets/image copy 9.png";
import img10 from "./assets/image copy 10.png";
import img11 from "./assets/image copy 11.png";

function LoveMessage({ onNext }) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const handleSubmit = () => {
    const normalized = answer.trim().toLowerCase();
    const validAnswers = [
      "my besty your besty besty anjali",
      "my bestie your bestie bestie anjali",
      "besty your besty my besty anjali",
      "bestie your bestie my bestie anjali",
      "anjali",
    ];

    if (validAnswers.some((ans) => normalized.includes(ans))) {
      setIsCorrect(true);
      setIsWrong(false);
    } else {
      setIsWrong(true);
    }
  };

  // ✅ Automatically go to next screen after 1 second when correct
  useEffect(() => {
    if (isCorrect && onNext) {
      const timer = setTimeout(() => onNext(), 3000); // 1 second delay
      return () => clearTimeout(timer);
    }
  }, [isCorrect, onNext]);

  return (
    <div className="relative flex items-center justify-center h-screen text-red-700 text-3xl font-bold text-center overflow-hidden">
      {/* 🌸 2x3 Grid background */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 w-full h-full">
        {[img9, img10, img11, img9, img10, img11].map((src, i) => (
          <img key={i} src={src} alt={`bg-${i}`} className="w-full h-full" />
        ))}
      </div>

      {/* 💌 Content box */}
      <div className="relative bg-opacity-80 p-6 rounded-2xl max-w-xl z-10">
        {!isCorrect ? (
          <>
            <p className="mb-6 leading-relaxed">
              “Hold on, my dudu 💖 <br />
              Before we move ahead, tell me — <br />
              who’s your bubu’s biggest hater? 😤”
            </p>

            <input
              type="text"
              placeholder="Type your answer here..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="text-black text-xl p-2 rounded-md outline-none w-full mb-4 text-center border border-black"
            />

            <button
              onClick={handleSubmit}
              className="bg-yellow-400 hover:bg-pink-400 text-black text-lg font-semibold px-6 py-2 rounded-lg transition-all"
            >
              Submit 💌
            </button>

            {isWrong && (
              <p className="mt-4 text-red-500 text-lg italic">
                😠 Oh duduu… seriously?! You don’t even know whom your bubu hates
                most 😤 <br />
                That means 😡 you never notice when I’m fuming about that one idiot 👊🤨
              </p>
            )}
          </>
        ) : (
          <p className="text-4xl text-ash-600 animate-pulse">
            Here you go MY LOVE
          </p>
        )}
      </div>
    </div>
  );
}

export default LoveMessage;
