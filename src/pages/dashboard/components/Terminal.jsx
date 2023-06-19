import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Terminal from "react-console-emulator";

const myTerminal = () => {
  const commands = {
    vela: {
      description: "Mover vela",
      fn: () => {
        return "Se movió la vela";
      },
    },
  };
  return (
    <Box sx={{ opacity: 0.7 }}>
      <Terminal
        commands={commands}
        welcomeMessage={"Ingresa los comandos para controlar el velero"}
        promptLabel={"Comando:"}
      />
    </Box>
  );
};

export default myTerminal;
