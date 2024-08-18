import GradesWrapper from "./components/GradesWrapper";
import { useState } from "react";
import Hero from "./components/Hero";

function App() {
  const [aPlus, setAPlus] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const totalCredits = (aPlus + a + b + c) * 2;
  const [estimation, setEstimation] = useState(null);
  const calculateEstimation = () => {
    if (totalCredits === 0 ) {
      setEstimation('Total Creds cannot be 0.')
      return;
    }
    const result = ((aPlus * 4 + a * 3 + b * 2 + c * 1) / totalCredits) * 2;
    setEstimation(result.toFixed(2))
  }

  return (
    <div>
      <Hero />
      <GradesWrapper
        aPlus={aPlus}
        setAPlus={setAPlus}
        a={a}
        setA={setA}
        b={b}
        setB={setB}
        c={c}
        setC={setC}
        totalCredits={totalCredits}
        estimation={estimation}
        setEstimation={setEstimation}
        calculateEstimation={calculateEstimation}
      />
    </div>
  );
}

export default App;