import GradeInput from "./components/GradeInput";
import GradesWrapper from "./components/GradesWrapper";
import { useState } from "react";

function App() {
  const [aPlus, setAPlus] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [totalCredits, setTotalCredits] = useState(0);
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
    <>
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
        setTotalCredits={setTotalCredits}
        estimation={estimation}
        setEstimation={setEstimation}
        calculateEstimation={calculateEstimation}
      />
    </>
  );
}

export default App;