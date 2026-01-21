import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { usePage } from "../Context/PageContext";
import GamePlay from "./Gameplay";
import useMain from "../Hook/Main";

export default function MainGame() {


const {    selectedOption,
    setSelectedOption,
    open,
    setOpen,
    setPage,
    handleSelect,
    handleClose,
    handleMoveOn,
    btns,} = useMain();


  // const btn_style =[
  //     "error",
  // "info",
  // "primary",
  // "secondary",
  // "success",
  // "warning",
  // ];

  return (
    <>
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
        <Typography variant="h4" gutterBottom>
          English Practice Game 🎮
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
          {btns.map((btn) => (
            <>
              <Button
                key={`game-btn-${btn.id}`}
                variant="outlined"
                color={btn.color}
                onClick={() => handleSelect(btn)}
              >
                {btn.name}
              </Button>
            </>
          ))}

          {/* <Button
          variant="contained"
          color=""
          onClick={() => handleSelect(0)}
        >

            





          {selectID(0)}
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={() => handleSelect(1)}
        >
          {selectID(1)}
        </Button>

        <Button
          variant="contained"
          color="warning"
          onClick={() => handleSelect(2)}
        >
          {selectID(2)}
        </Button> */}
        </Box>
        {selectedOption ? (
          <>
            <Dialog
              open={open}
              onClose={handleClose}
              onExited={() => setSelectedOption(null)}
            >
              <DialogTitle>Confirmar selección</DialogTitle>
              <DialogContent>
                <Typography>
                  ¿Quieres practicar <strong>{selectedOption.name}</strong>?
                </Typography>
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClose} color="secondary">
                  Cancelar
                </Button>
                <Button
                  onClick={handleMoveOn}
                  color="primary"
                  variant="contained"
                >
                  Sí, continuar
                </Button>
              </DialogActions>
            </Dialog>
          </>
        ) : (
          ""
        )}
      </Container>
    </>
  );
}
