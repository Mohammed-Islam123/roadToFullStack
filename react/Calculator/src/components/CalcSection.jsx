import React from "react";
import CalcButton from "./CalcButton";

export default function CalcSection({
  currentNumber,
  setCurrentNumber,
  prevNumber,
  setPrevNumber,
  operation,
  setOperation,
}) {
  const operations = ["AC", "DEL", "DIV", "MUL", "ADD", "SUB", "EQUAL", "DOT"];

  function calculateResult(prev, current) {
    let result;
    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = current != 0 ? prev / current : prev;
        break;
      default:
        result = current;
    }
    setCurrentNumber(result.toString());
    setPrevNumber(result);
    setOperation("");
  }

  const handleOperation = ({ target: { value } }) => {
    switch (value) {
      case "DEL":
        setCurrentNumber((prev) => prev.slice(0, -1));
        break;
      case "AC":
        setCurrentNumber("");
        setOperation("");
        setPrevNumber("");
        break;
      case "EQUAL":
        setPrevNumber((prev) =>
          calculateResult(Number(prev), Number(currentNumber))
        );
      case "DOT":
        setCurrentNumber((prev) => prev + ".");
      default:
        setPrevNumber(currentNumber);
        setCurrentNumber("");

        setOperation(
          `${
            value === "SUB"
              ? "-"
              : value === "ADD"
              ? "+"
              : value === "MUL"
              ? "*"
              : "/"
          }`
        );
    }
  };
  let numbers = [];
  for (let i = 1; i <= 9; i++) {
    numbers.push(
      <CalcButton
        value={i}
        key={i}
        className={"number calc-btn"}
        handlClick={(eve) => {
          setCurrentNumber((prev) => (prev += eve.target.value));
        }}
      />
    );
  }
  return (
    <div className="calc-section">
      {operations.map((ele) => {
        return (
          <CalcButton
            className={`calc-btn ${ele}`}
            handlClick={handleOperation}
            value={ele}
            key={ele}
          />
        );
      })}
      <div className="numbers">{numbers}</div>
      <CalcButton
        value={"ZERO"}
        className={"calc-btn ZERO"}
        handlClick={(eve) => {
          setCurrentNumber((prev) => (prev += "0"));
        }}
      />
    </div>
  );
}
