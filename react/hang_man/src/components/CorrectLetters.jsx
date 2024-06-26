import React from "react";

/**
 * Renders the correct letters component.
 *
 * @param {{targetWord:string ; guessedLetters: Array, attempts: number , isGameOver:boolean}} props - The component props.
 * @returns {JSX.Element} The correct letters component.
 */
export default function CorrectLetters({
  targetWord,
  guessedLetters,
  attempts,
  isGameOver,
}) {
  return (
    <div>
      <ul className="guessed-letters" style={{ listStyle: "none" }}>
        {guessedLetters.map((letter, index) => {
          return (
            <li
              className={`guessed-letter ${
                isGameOver && letter == "" ? "missing-letter" : ""
              }`}
              key={index}
            >
              {letter
                ? letter
                : isGameOver
                ? targetWord[index].toUpperCase()
                : ""}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
