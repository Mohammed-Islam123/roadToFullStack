import React, { useContext } from "react";

export default function CalcScreen({ prevNumber, currentNumber, operation }) {
  return (
    <div className="calc-screen">
      <div className="history">
        {`${prevNumber ? prevNumber : "0"} ${operation}`}{" "}
      </div>
      <div className="result">{currentNumber} </div>
    </div>
  );
}
