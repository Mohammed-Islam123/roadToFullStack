import React, { useEffect, useState } from "react";
import "./HangedMan.css";
import Letters from "./Letters";
import HangedManDrawing from "./HangedManDrawing";
import CorrectLetters from "./CorrectLetters";

export default function HangedMan() {
  const maxAttemptsNumber = 6;
  const [targetWord, setTargetWord] = useState();
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setGameOver(
      attempts === maxAttemptsNumber ||
        guessedLetters.join("").toLowerCase() == targetWord
    );
  }, [attempts, guessedLetters]);
  useEffect(() => {
    async function getWords() {
      try {
        let result = await fetch("/wordList.json");
        let data = await result.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        setTargetWord(data[randomIndex]);
        setGuessedLetters(Array(data[randomIndex].length).fill(""));
      } catch (error) {
        console.log("there is an error " + error);
      }
    }
    getWords();
    // fetch("/wordList.json")
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));
  }, []);

  return (
    <div
      style={{
        width: "1OO%",
        height: "100vh",
        backgroundColor: "#eee",
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <div className="container">
        {gameOver && (
          <p className="result">
            {" "}
            {attempts < 6
              ? "You won , refrech the page to play again"
              : "You Lost , Refrech the page and try again"}{" "}
          </p>
        )}
        <HangedManDrawing attempts={attempts} />
        <CorrectLetters
          guessedLetters={guessedLetters}
          attempts={attempts}
          isGameOver={gameOver}
          targetWord={targetWord}
        />
        <Letters
          isGameOver={gameOver}
          correctWord={targetWord}
          setAttempts={setAttempts}
          setGuessedLetters={setGuessedLetters}
        />
      </div>
    </div>
  );
}
