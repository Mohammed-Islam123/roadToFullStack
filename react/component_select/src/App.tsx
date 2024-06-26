import React from "react";
import "./App.css";
import Select from "./components/Select";
const options = [
  { label: "value1", value: 1 },
  { label: "value2", value: 2 },
  { label: "value3", value: 3 },
  { label: "value4", value: 4 },
  { label: "value5", value: 5 },
];

function App() {
  return (
    <>
      <Select options={options} multiSelect={true} />
      <br />
      <br />
      <br />
      <Select options={options} multiSelect={false} />
    </>
  );
}

export default App;
