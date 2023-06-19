import { Box, Button, TextField, Typography } from "@mui/material";

const AuthRecoveryPassword = ({ onCancelRecoveryPassword }) => {
  return (
    <Box>
      <Typography variant="h2" marginBottom="30px">
        Recupera tu contraseña
      </Typography>
      <form className="space-y-10">
        <TextField
          fullWidth
          variant="filled"
          type="email"
          label="Ingresar correo"
          sx={{ gridColumn: "span 2" }}
        />
        <Box mt="20px">
          <Button
            fullWidth
            type="submit"
            size="large"
            color="secondary"
            variant="contained"
          >
            Recuperar contraseña
          </Button>
          <Box marginTop="20px">
            <Button
              fullWidth
              type="submit"
              onClick={onCancelRecoveryPassword}
              size="large"
              color="secondary"
              variant="outlined"
            >
              Volver
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default AuthRecoveryPassword;
