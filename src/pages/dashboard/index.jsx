import { useState, useEffect } from "react";
import io from "socket.io-client";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../core/theme/theme";
import Navigation from "./components/mapviewer";
import Terminal from "./components/Terminal";
import SensorsRigth from "./components/SensorsRigth";
import SensorsLeft from "./components/SensorsLeft";
import Brujula from "./components/brujula";
import GeoReference from "./components/georeference";
const dashboard = () => {
  const [data, setData] = useState({
    sensors: {
      tempInt: null,
      humedad: null,
      velViento: null,
      dirViento: null,
    },
    currentLocation: {
      lat: null,
      lng: null,
    },
  });

  useEffect(() => {
    const newSocket = io(`http://localhost:4000`);
    if (newSocket) {
      newSocket.on("xbee:gps", (res) => {
        setData({
          sensors: {
            tempInt: res.tempInterna,
            humedad: res.humedad,
            velViento: res.velViento,
            dirViento: res.dirViento,
          },
          currentLocation: {
            lat: parseFloat(res.lat),
            lng: parseFloat(res.lng),
          },
        });
      });
    }
  }, []);

  return (
    <>
      <Box>
        <Box sx={{ position: "absolute", top: 0, zIndex: "modal" }}>
          <Navigation currentLocation={data.currentLocation} />
        </Box>
        {/* LEFT COMPONETS */}
        <Box
          p={2}
          width="25vw"
          sx={{
            top: "5vh",
            position: "absolute",
            zIndex: "modal",
          }}
        >
          {/* ROW1 */}
          <Box
            m={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="rgba(35, 35, 35, 0.7)"
            borderRadius="10px"
          >
            <SensorsLeft data={data.sensors} />
          </Box>
          {/* ROW2 */}
          <Box m={2} display="flex">
            <Terminal />
          </Box>
        </Box>
        {/* RIGTH COMPONETS */}
        <Box
          width="25vw"
          p={2}
          sx={{
            top: "5vh",
            position: "absolute",
            zIndex: "modal",
            right: "0vw",
          }}
        >
          {/* ROW1 */}
          <Box
            m={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            backgroundColor="rgba(35, 35, 35, 0.7)"
            borderRadius="10px"
          >
            <SensorsRigth data={data.sensors} />
          </Box>
          {/* ROW2 */}
          <Box m={2} backgroundColor="rgba(35, 35, 35, 0.7)" display="flex">
            <Brujula />
          </Box>
          {/* ROW3 */}
          <Box m={2} display="flex">
            <GeoReference data={data.georeference} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default dashboard;
