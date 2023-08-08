import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../../../core/theme/theme";

const SensorsLeft = ({ data }) => {
  console.log("sensores: ", data);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 20px">
      <Box display="flex" justifyContent="center">
        <Typography
          variant="h5"
          sx={{ color: colors.primary[50], fontWeight: "bold" }}
        >
          {"SENSORES"}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Temp Interna"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.tempInt} °C`}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Hum Interna"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.humedad}%`}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Vel de Viento"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.velViento} Nudos`}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Dir de Viento"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.dirViento} °`}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Vel de Cuerpo"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.velocidadCuerpo}`}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Pos de Vela"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.posVela}`}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Altitud"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.altitud}`}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Bateria"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.bateria}`}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Paneles"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.paneles}`}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography
          variant="h5"
          sx={{ color: colors.primary[50], fontWeight: "bold" }}
        >
          {"SATELITE"}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Fecha"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.satelite.dia} de ${data.satelite.mes}`}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Hora"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.satelite.hora} : ${data.satelite.min}`}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Num de Sat"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.satelite.satelites}`}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography
          variant="h5"
          sx={{ color: colors.primary[50], fontWeight: "bold" }}
        >
          {"SPACE"}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Accel X"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.space.accelx}`}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Accel Y"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.space.accely}`}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {"Brujula"}
          </Typography>
        </Box>
        <Box display="flex">
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {`${data.space.brujula}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SensorsLeft;
