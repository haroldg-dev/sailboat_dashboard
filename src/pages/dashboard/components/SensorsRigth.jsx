import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../../core/theme/theme";

const SensorsRigth = ({ data }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box p={1} display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Temperatura Externa"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            27 °C
          </Typography>
        </Box>
      </Box>
      <Box p={1} display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Humedad Externa"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            75%
          </Typography>
        </Box>
      </Box>
      <Box p={1} display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Velocidad de Velero"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            10 m/s
          </Typography>
        </Box>
      </Box>
      <Box p={1} display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Dirección de Velero"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            90 °
          </Typography>
        </Box>
      </Box>
      <Box p={1} display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Bateria 2"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            80%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SensorsRigth;
