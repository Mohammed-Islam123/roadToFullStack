import React from "react";
import "./CurrencyRow.css";

export const CurrencyRow = ({
  currency,
  setCurrency,
  input,
  setInput,
  currencies,
  isDownwordDirection,
  setFromToDirection,
}) => {
  function handleCurrencyChange(eve) {
    setCurrency(eve.target.value);
  }
  const handleChange = (eve) => {
    setInput(eve.target.value);
    setFromToDirection(isDownwordDirection ? true : false);
  };

  return (
    <div
      className="currency-row"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: " 1rem 0",
      }}
    >
      <input type="number" value={input} onChange={handleChange} />
      <select value={currency} onChange={handleCurrencyChange}>
        {currencies.map((curr) => (
          <option key={curr} value={curr}>
            {curr}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};
