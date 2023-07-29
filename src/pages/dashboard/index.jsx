import { useState, useContext, useEffect } from "react";
import io from "socket.io-client";
import { Box, Switch, useTheme, Typography } from "@mui/material";
import { tokens } from "../../core/theme/theme";
import Navigation from "./components/mapviewer";
import Terminal from "./components/Terminal";
import SensorsRigth from "./components/SensorsRigth";
import SensorsLeft from "./components/SensorsLeft";
import Brujula from "./components/brujula";
import Brujula2 from "./components/brujula2";
import GeoReference from "./components/georeference";
import { SocketContext } from "../../context";

const dashboard = () => {
  const socket = useContext(SocketContext);

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
    if (socket) {
      socket.on("xbee:datos", (res) => {
        console.log("res: ", res);
        setData({
          sensors: {
            tempInt: res.tempInterna,
            humedad: res.humedad,
            velViento: res.velViento,
            dirViento: res.dirViento,
            presion: res.presion,
            saturacion: res.sat,
            altitud: res.altitud,
          },
          currentLocation: {
            lat: parseFloat(res.lat),
            lng: parseFloat(res.lng),
          },
          space: {
            accelx: res.accelx,
            accely: res.accely,
            brujula: res.brujula,
          },
          satelite: {
            mes: res.mes,
            dia: res.dia,
            hora: res.hora,
            min: res.min,
          },
        });
      });
    }
  }, []);

  const [sensorsChecked, setsensorsChecked] = useState(true);
  const [terminalChecked, setterminalChecked] = useState(true);
  const [sensors2Checked, setsensors2Checked] = useState(true);
  const [georeferenceChecked, setgeoreferenceChecked] = useState(true);
  const [brujulaChecked, setbrujulaChecked] = useState(true);
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
            alignItems="center"
            justifyContent="center"
            backgroundColor="rgba(35, 35, 35, 0.7)"
            borderRadius="10px"
          >
            <Box justifyContent="center" display="flex" width="100%" m="0 30px">
              <Switch
                color="success"
                onChange={(event) => {
                  sensorsChecked
                    ? setsensorsChecked(false)
                    : setsensorsChecked(true);
                }}
              />
            </Box>
            {sensorsChecked ? (
              <></>
            ) : (
              <Box display="flex">
                <SensorsLeft data={data.sensors} />
              </Box>
            )}
          </Box>
          {/* ROW2 */}
          <Box
            m={2}
            backgroundColor="rgba(35, 35, 35, 0.7)"
            borderRadius="10px"
          >
            <Box justifyContent="center" display="flex" width="100%" m="0 30px">
              <Switch
                color="success"
                onChange={(event) => {
                  terminalChecked
                    ? setterminalChecked(false)
                    : setterminalChecked(true);
                }}
              />
            </Box>
            {terminalChecked ? (
              <></>
            ) : (
              <Box display="flex">
                <Terminal />
              </Box>
            )}
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
            alignItems="center"
            justifyContent="center"
            backgroundColor="rgba(35, 35, 35, 0.7)"
            borderRadius="10px"
          >
            <Box justifyContent="center" display="flex" width="100%" m="0 30px">
              <Switch
                color="success"
                onChange={(event) => {
                  sensors2Checked
                    ? setsensors2Checked(false)
                    : setsensors2Checked(true);
                }}
              />
            </Box>
            <Box>
              {sensors2Checked ? (
                <></>
              ) : (
                <Box display="flex">
                  <SensorsRigth data={data.sensors} />
                </Box>
              )}
            </Box>
          </Box>
          {/* ROW2 */}
          <Box
            m={2}
            backgroundColor="rgba(35, 35, 35, 0.7)"
            borderRadius="10px"
          >
            <Box justifyContent="center" display="flex" width="100%" m="0 30px">
              <Switch
                color="success"
                onChange={(event) => {
                  brujulaChecked
                    ? setbrujulaChecked(false)
                    : setbrujulaChecked(true);
                }}
              />
            </Box>
            <Box>
              {brujulaChecked ? (
                <></>
              ) : (
                <Box display="flex">
                  <Brujula2 data={data.sensors} />
                </Box>
              )}
            </Box>
          </Box>
          {/* ROW3 */}
          <Box
            m={2}
            backgroundColor="rgba(35, 35, 35, 0.7)"
            borderRadius="10px"
          >
            <Box justifyContent="center" display="flex" width="100%" m="0 30px">
              <Switch
                color="success"
                onChange={(event) => {
                  georeferenceChecked
                    ? setgeoreferenceChecked(false)
                    : setgeoreferenceChecked(true);
                }}
              />
            </Box>
            <Box>
              {georeferenceChecked ? (
                <></>
              ) : (
                <Box display="flex">
                  <GeoReference />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default dashboard;
