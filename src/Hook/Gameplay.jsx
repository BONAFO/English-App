import { useEffect, useRef, useState } from "react";
import data from "../DB/db.json";
import random from "../Functions/random";


const setDB = (selected) => {
  switch (selected) {
    case 0:
      return data.adj
        .map((adj, i) => (i === 0 ? null : [adj[0], adj[1]]))
        .filter((adj) => adj !== null);
    case 1:
      return data.adj
        .map((adj, i) => (i === 0 ? null : [adj[0], adj[2]]))
        .filter((adj) => adj !== null);
    case 2:
      return data.verbs
        .map((verb, i) => (i === 0 ? null : [verb[0], verb[1]]))
        .filter((verb) => verb !== null);
    case 3:
      return data.verbs
        .map((verb, i) => (i === 0 ? null : [verb[0], verb[2]]))
        .filter((verb) => verb !== null);
    default:
      return [];
  }
};

export default function useGameplay(selected) {
  let db = [];
  db = setDB(selected);

  const [index, setIndex] = useState(() => random(0, db.length - 1));

  const [input, setInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [showCorrection, setShowCorrection] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setInput("");
    setIsCorrect(null);
    setShowCorrection(false);
    setShowArrow(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [index]);

  const handleSubmit = () => {
    if (input.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setIsCorrect(true);
      setShowArrow(true);
    } else {
      setIsCorrect(false);
      setShowCorrection(true);
      setShowArrow(true);
    }
  };

  // ahora siempre random, sin validaciones
  const handleNext = () => {
    setIndex(random(0, db.length - 1));
  };

  let currentWord = "";
  let correctAnswer = "";

  if (db.length > 0) {
    currentWord = db[index][0];
    correctAnswer = db[index][1];
  } else {
    return "";
  }

  return {
    db,
    setDB,
    index,
    setIndex,
    input,
    setInput,
    isCorrect,
    setIsCorrect,
    showCorrection,
    setShowCorrection,
    showArrow,
    setShowArrow,
    inputRef,
    handleSubmit,
    handleNext,
    currentWord,
    correctAnswer,
  };
}
