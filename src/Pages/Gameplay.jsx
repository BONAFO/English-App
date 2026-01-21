import { Container, Typography, Button, Box, Fade } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import useGameplay from "../Hook/Gameplay";


export default function GamePlay({ selected }) {


  const {
   
    input,
    setInput,
    isCorrect,
    showCorrection,
    showArrow,
    inputRef,
    handleSubmit,
    handleNext,
    currentWord,
    correctAnswer,
  } = useGameplay(selected);

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
