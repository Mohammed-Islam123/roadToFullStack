import React from "react";

export default function CalcButton({ value, handlClick, className }) {
  const getValue = (value) => {
    switch (value) {
      case "DIV":
        return "÷";
      case "ADD":
        return "+";
      case "MUL":
        return "*";
      case "SUB":
        return "-";
      case "ZERO":
        return "0";
      case "DOT":
        return ".";
      case "EQUAL":
        return "=";
      default:
        return value;
    }
  };
  return (
    <button className={className} value={value} onClick={handlClick}>
      {" "}
      {getValue(value)}{" "}
    </button>
  );
}
