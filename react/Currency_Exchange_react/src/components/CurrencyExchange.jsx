import { useEffect, useState } from "react";
import { CurrencyRow } from "./CurrencyRow";
const API_KEY = "Your API Key";
const BASE_URL = "https://api.freecurrencyapi.com/v1/";

export default function CurrencyExchange() {
  const [currencies, setCurrencies] = useState([]);
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(1);
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("USD");
  //indicates whether we are converting downword or upword
  const [fromToDirection, setFromToDirection] = useState(true);

  let ExhcangeRate;

  useEffect(() => {
    fetch(`${BASE_URL}/latest?apikey=${API_KEY}&base_currency=${fromCurr}`)
      .then((req) => req.json())
      .then((json) => {
        let curr = Object.keys(json.data);
        setCurrencies(curr);
        ExhcangeRate = json.data[toCurr];

        if (fromToDirection) {
          setToAmount((fromAmount || 0) * ExhcangeRate);
        } else {
          setFromAmount((toAmount || 0) / ExhcangeRate);
        }
      })
      .catch((res) => console.log(`request denied due to ${res}`));
  }, [fromCurr, toCurr, fromAmount, toAmount]);
  return (
    <>
      <div>
        <h1>Currency Exchange</h1>
        <CurrencyRow
          currency={fromCurr}
          setCurrency={setFromCurr}
          input={fromAmount}
          setInput={setFromAmount}
          currencies={currencies}
          isDownwordDirection={true}
          setFromToDirection={setFromToDirection}
        />
        <div className="equal" style={{ fontSize: "5rem", fontWeight: "bold" }}>
          =
        </div>
        <CurrencyRow
          currency={toCurr}
          setCurrency={setToCurr}
          input={toAmount}
          setInput={setToAmount}
          currencies={currencies}
          isDownwordDirection={false}
          setFromToDirection={setFromToDirection}
        />
      </div>
    </>
  );
}
