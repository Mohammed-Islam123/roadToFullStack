import React from "react";

export default function Letters({
  isGameOver,
  correctWord,
  setGuessedLetters,

  setAttempts,
}) {
  const handleSelectLetter = ({ target }) => {
    if (isGameOver) return;
    target.classList.add("selected-letter");

    let index = correctWord.toLowerCase().indexOf(target.value.toLowerCase());
    if (index > -1) {
      setGuessedLetters((prev) => {
        let arr = [...prev];
        arr[index] = target.value;
        return arr;
      });
    } else {
      setAttempts((prev) => prev + 1);
    }
  };
  return (
    <div>
      <ul className="letters">
        {Array.from(Array(26), (_, i) => {
          const value = String.fromCharCode(65 + i);
          return (
            <li key={i}>
              <button
                className="letter"
                value={value}
                onClick={handleSelectLetter}
              >
                {value}
              </button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
