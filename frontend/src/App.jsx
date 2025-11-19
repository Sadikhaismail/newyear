import React, { useState } from "react";
import Batman from "./Batman";
import Wishing from "./Wishing";
import Warning from "./Warning";
import LoveMessage from "./LoveMessage";
import Confession from "./Confession";
import LastMessage from "./LastMessage";

function App() {
  const [step, setStep] = useState("batman");

  return (
    <div>
      {step === "batman" && <Batman onComplete={() => setStep("wishing")} />}
      {step === "wishing" && <Wishing onShock={() => setStep("warning")} />}
      {step === "warning" && <Warning onNext={() => setStep("love")} />}
      {step === "love" && <LoveMessage onNext={() => setStep("confession")} />}
      {step === "confession" && <Confession onNext={() => setStep("last")} />}
      {step === "last" && <LastMessage />}
    </div>
  );
}

export default App;
