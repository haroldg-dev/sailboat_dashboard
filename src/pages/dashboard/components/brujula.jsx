import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../core/theme/theme";
import "./styles/brujula.css";
const Brujula = ({ data }) => {
  console.log("data brujula: ", data);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%">
      <Box display="flex" justifyContent="center">
        <Typography
          variant="h5"
          sx={{ color: colors.primary[50], fontWeight: "bold" }}
        >
          {"DATOS SPACE"}
        </Typography>
      </Box>
      <Box display="flex">
        <Box>
          <Box marginTop="20%">
            <div class="compass-rectangle">
              <img src="/flights_one.png" alt="Imagen" id="compass-fond" />
              <div
                class="indicator ind-heading"
                style={{
                  transform: `rotate(100deg)translate(-90px)`,
                }}
                id="heading"
              ></div>
              <div
                class="indicator ind-waypoint"
                style={{
                  transform: `rotate(100deg)translate(-90px)`,
                }}
                id="waypoint"
              ></div>
              <div
                class="indicator"
                style={{
                  transform: `rotate(100deg)translate(-90px)`,
                }}
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
      </Box>
    </Box>
  );
};

export default Brujula;
