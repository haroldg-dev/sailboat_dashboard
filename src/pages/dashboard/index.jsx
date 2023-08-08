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
      velocidadCuerpo: null,
      posVela: null,
      altitud: null,
      paneles: null,
      bateria: null,
      satelite: {
        mes: null,
        dia: null,
        hora: null,
        min: null,
        satelites: null,
      },
      space: {
        accelx: null,
        accely: null,
        brujula: null,
      },
    },
    currentLocation: {
      lat: null,
      lng: null,
    },
  });

  const [dataAuto, setDataAuto] = useState({
    distanciapnrecta: "0",
    rumboDeseado: "0",
    rumboTomado: "0",
    posVela: "0",
    rudderangle: "0",
    dirviento: "0",
    h: "0",
    p0: "0",
    posact: "0",
    distbefact: "0",
    distanciap0w: "0",
    waypoint: "0",
    t: "0",
  });

  useEffect(() => {
    if (socket.connected) {
      setConnection(true);
      socket.on("xbee:datos", (res) => {
        setData({
          sensors: {
            tempInt: res.tempInterna,
            humedad: res.humedad,
            velViento: res.velViento,
            dirViento: res.dirViento,
            velocidadCuerpo: res.velocidadCuerpo,
            posVela: res.prosVela,
            altitud: res.altitud,
            paneles: res.paneles,
            bateria: res.bateria,
            satelite: {
              mes: res.mes,
              dia: res.dia,
              hora: res.hora,
              min: res.min,
              satelites: res.sat,
            },
            space: {
              accelx: res.accelx,
              accely: res.accely,
              brujula: res.brujula,
            },
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
        });
        //console.log(res)
      });
      socket.on("xbee:dataauto", (res) => {
        setDataAuto({
          distanciapnrecta: res.distanciapnrecta,
          rumboDeseado: res.dhin,
          rumboTomado: res.dh,
          posVela: res.as,
          rudderangle: res.rudderangle,
          dirviento: res.rwh,
          h: res.h,
          p0: res.p0,
          posact: res.posact,
          distbefact: res.distbefact,
          distanciap0w: res.distanciap0w,
          waypoint: res.waypoint,
          t: res.t,
        });
      });
    }
  }, []);
  const [connection, setConnection] = useState(true);
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
            top: "0vh",
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
            {connection ? (
              <Box display="flex">
                <SensorsLeft data={data.sensors} />
              </Box>
            ) : (
              <></>
            )}
          </Box>
          {/* ROW2 */}
          <Box
            m={2}
            backgroundColor="rgba(35, 35, 35, 0.7)"
            borderRadius="10px"
          >
            {connection ? (
              <Box display="flex">
                <Brujula />
              </Box>
            ) : (
              <></>
            )}
          </Box>
        </Box>
        {/* RIGTH COMPONETS */}
        <Box
          width="25vw"
          p={2}
          sx={{
            top: "0vh",
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
            <Box>
              {connection ? (
                <Box display="flex">
                  <Brujula2 data={dataAuto} />
                </Box>
              ) : (
                <></>
              )}
            </Box>
          </Box>
          {/* ROW2 */}
          <Box
            m={2}
            backgroundColor="rgba(35, 35, 35, 0.7)"
            borderRadius="10px"
          >
            <Box>
              {connection ? (
                <Box display="flex">
                  <Terminal />
                </Box>
              ) : (
                <></>
              )}
            </Box>
          </Box>
          {/* ROW3 */}
          {/* <Box
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
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default dashboard;
