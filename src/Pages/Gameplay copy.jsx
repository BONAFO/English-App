import React, { useState, useRef, useEffect } from "react";
import { Container, Typography, Button, Box, Fade } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import data from "../DB/db.json";
import random from "../Functions/random";

let db = [];

const setDB = (selected) => {
  switch (selected) {
    case 0:
      db = data.adj
        .map((adj, i) => (i === 0 ? null : [adj[0], adj[1]]))
        .filter((adj) => adj !== null);
      break;
    case 1:
      db = data.adj
        .map((adj, i) => (i === 0 ? null : [adj[0], adj[2]]))
        .filter((adj) => adj !== null);
      break;
    case 2:
      db = data.verbs
        .map((verb, i) => (i === 0 ? null : [verb[0], verb[1]]))
        .filter((verb) => verb !== null);
      break;
    case 3:
      db = data.verbs
        .map((verb, i) => (i === 0 ? null : [verb[0], verb[2]]))
        .filter((verb) => verb !== null);
      break;
    default:
      db = [];
      break;
  }
};

export default function GamePlay({ selected }) {
  setDB(selected);

  // índice inicial aleatorio
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

  return (
    <Container
      maxWidth="sm"
      sx={{
        textAlign: "center",
        mt: 5,
        p: 4,
        borderRadius: 3,
        background: "linear-gradient(135deg, #1e1e1e 0%, #2c2c2c 100%)",
        boxShadow: "0 0 20px rgba(0,0,0,0.6)",
      }}
    >
      <Fade in={true} key={currentWord} timeout={500}>
        <Typography variant="h4" gutterBottom>
          {currentWord}
        </Typography>
      </Fade>

      <Box
        sx={{
          mt: 3,
          display: "flex",
          justifyContent: "center",
          gap: 1,
          position: "relative",
          cursor: "text",
          "&:hover .slot": {
            borderBottom: "2px solid #90caf9",
            backgroundColor: "rgba(144,202,249,0.1)",
          },
        }}
        onClick={() => inputRef.current?.focus()}
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          maxLength={correctAnswer.length}
          style={{
            position: "absolute",
            zIndex: -1,
            opacity: 0,
          }}
        />

        {Array.from({ length: correctAnswer.length }).map((_, i) => (
          <Box
            key={i}
            className="slot"
            sx={{
              width: "40px",
              height: "50px",
              borderBottom: "2px solid gray",
              textAlign: "center",
              fontSize: "1.5rem",
              lineHeight: "50px",
              transition: "all 0.2s ease",
              color:
                isCorrect === null
                  ? "inherit"
                  : isCorrect
                    ? "lightgreen"
                    : "red",
            }}
          >
            {input[i] || ""}
          </Box>
        ))}
      </Box>

      {isCorrect === null && (
        <Button variant="contained" sx={{ mt: 3 }} onClick={handleSubmit}>
          Comprobar
        </Button>
      )}

      {showCorrection && !isCorrect && (
        <Typography sx={{ mt: 2, color: "lightblue" }}>
          Correcto: {correctAnswer}
        </Typography>
      )}

      {showArrow && (
        <Fade in={showArrow} timeout={600}>
          <Box sx={{ mt: 3 }}>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              onClick={handleNext}
            >
              Continuar
            </Button>
          </Box>
        </Fade>
      )}
    </Container>
  );
}
