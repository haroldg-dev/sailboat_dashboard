import React, { useState, useContext } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Terminal from "react-console-emulator";
import { SocketContext } from "../../../context";

const myTerminal = () => {
  const socket = useContext(SocketContext);
  const commands = {
    auto: {
      description: "Modo Automatico ON",
      fn: () => {
        socket.emit("xbee:state", "A");
        return "Modo Automatico ON";
      },
    },
    manual: {
      description: "Modo Manual ON",
      fn: () => {
        socket.emit("xbee:state", "M");
        return "Modo Manual ON";
      },
    },
    vela: {
      description: "Mover Vela",
      fn: (data) => {
        return `Mover Vela ${data}°`;
      },
    },
    timon: {
      description: "Mover Timon",
      fn: (data) => {
        return `Mover Timon ${data}°`;
      },
    },
    control: {
      description: "Control",
      fn: (data) => {
        socket.emit("xbee:control", data);
        return `control directo ${data}°`;
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
