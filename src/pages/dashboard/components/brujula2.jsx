import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../core/theme/theme";
import "./styles/brujula2.css";
const Brujula2 = ({ data }) => {
  console.log("data: ", data);

  return (
    <Box width="100%">
      <Box display="flex">
        <div class="row">
          <div class="compass-round">
            <img
              src="/compass02.png"
              alt="Imagen"
              id="compass-fond"
              style={rotate(90)}
            />
            <div class="indicator ind-heading" id="heading"></div>
            <div class="indicator ind-waypoint" id="waypoint"></div>
            <div class="indicator" id="wind"></div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Brujula2;
