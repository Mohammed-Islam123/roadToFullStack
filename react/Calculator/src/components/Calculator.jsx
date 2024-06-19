import React, { useState } from "react";
import CalcScreen from "./CalcScreen";
import CalcSection from "./CalcSection";
import "./Calculator.css";
export default function Calculator() {
  const [currentNumber, setCurrentNumber] = useState("");
  const [prevNumber, setPrevNumber] = useState("");
  const [operation, setOperation] = useState("");

  return (
    <div className="container">
      <div className="calculator">
        <CalcScreen
          currentNumber={currentNumber}
          prevNumber={prevNumber}
          operation={operation}
        />
        <CalcSection
          currentNumber={currentNumber}
          setCurrentNumber={setCurrentNumber}
          prevNumber={prevNumber}
          setPrevNumber={setPrevNumber}
          operation={operation}
          setOperation={setOperation}
        />
      </div>
    </div>
  );
}
