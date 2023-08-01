import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../core/theme/theme";
import "./styles/brujula2.css";
const Brujula2 = ({ data }) => {
  console.log("data: ", data);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%">
      <Box display="flex">
        <Box>
          <Box marginTop="20%">
            <div class="compass-round">
              <img src="/compass02.png" alt="Imagen" id="compass-fond" />
              <div
                class="indicator ind-heading"
                style={{ transform: `rotate(150deg)translate(-90px)` }}
                id="heading"
              ></div>
              <div
                class="indicator ind-waypoint"
                style={{ transform: `rotate(10deg)translate(-90px)` }}
                id="waypoint"
              ></div>
              <div
                class="indicator"
                style={{ transform: `rotate(200deg)translate(-90px)` }}
                id="wind"
              ></div>
            </div>
          </Box>
          <Box margin="-5% 0 0 0" display="flex" justifyContent="space-between">
            <Typography
              marginLeft="20%"
              variant="h5"
              sx={{ color: colors.greenAccent[500] }}
            >
              {"Desviación"}
            </Typography>
            <Typography
              marginRight="20%"
              variant="h5"
              fontWeight="bold"
              sx={{ color: colors.grey[100] }}
            >
              27 °
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <div class="vela-round">
              <div class="linev"></div>
              <div class="lineh"></div>
              <div
                class="vela-pos"
                style={{ transform: `rotate(-80deg)translate(50%)` }}
                id="heading"
              ></div>
              <div
                class="vela-viento"
                style={{ transform: `rotate(10deg)translate(-50px)` }}
                id="waypoint"
              ></div>
            </div>
          </Box>
          <Box
            margin="-11% 0 -5% 0"
            display="flex"
            justifyContent="space-between"
          >
            <Typography
              marginLeft="20%"
              variant="h5"
              sx={{ color: colors.greenAccent[500] }}
            >
              {"Error"}
            </Typography>
            <Typography
              marginRight="20%"
              variant="h5"
              fontWeight="bold"
              sx={{ color: colors.grey[100] }}
            >
              27 °
            </Typography>
          </Box>
          <Box>
            <div class="vela-round">
              <div class="linev"></div>
              <div class="lineh"></div>
              <div
                class="vela-pos"
                style={{ transform: `rotate(80deg)translate(50%)` }}
                id="heading"
              ></div>
            </div>
          </Box>
          <Box
            margin="-11% 0 -4% 0"
            display="flex"
            justifyContent="space-between"
          >
            <Typography
              marginLeft="10%"
              variant="h5"
              sx={{ color: colors.greenAccent[500] }}
            >
              {"E-curso"}
            </Typography>
            <Typography
              marginRight="20%"
              variant="h5"
              fontWeight="bold"
              sx={{ color: colors.grey[100] }}
            >
              27 °
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              marginLeft="10%"
              variant="h5"
              sx={{ color: colors.greenAccent[500] }}
            >
              {"E-direc"}
            </Typography>
            <Typography
              marginRight="20%"
              variant="h5"
              fontWeight="bold"
              sx={{ color: colors.grey[100] }}
            >
              27 °
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Brujula2;
