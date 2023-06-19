import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../../core/theme/theme";

const SensorsLeft = ({ data }) => {
  console.log("sensores: ", data);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box p={1} display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Temperatura Interna"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.tempInt} °C`}
          </Typography>
        </Box>
      </Box>
      <Box p={1} display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Humedad"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.humedad}%`}
          </Typography>
        </Box>
      </Box>
      <Box p={1} display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Velocidad de Viento"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.velViento} Nudos`}
          </Typography>
        </Box>
      </Box>
      <Box p={1} display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Dirección de Viento"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.dirViento} °`}
          </Typography>
        </Box>
      </Box>
      <Box p={1} display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Bateria 1"}
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

export default SensorsLeft;
