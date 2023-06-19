import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";

const AuthLoginForm = ({ onRecoveryPassword }) => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const handleSignIn = async (params) => {
    navigate("/");
  };

  return (
    <Box>
      <Typography variant="h2" marginBottom="30px">
        Iniciar sesión en tu cuenta
      </Typography>
      <form onSubmit={handleSubmit(handleSignIn)} className="space-y-10">
        <TextField
          fullWidth
          variant="filled"
          type="email"
          label="Nombre de usuario o correo"
          sx={{ gridColumn: "span 2" }}
          error={Boolean(errors.email)}
          {...register("email", { required: true })}
        />
        <TextField
          fullWidth
          variant="filled"
          type="password"
          label="Contraseña"
          sx={{ gridColumn: "span 2" }}
          error={Boolean(errors.password)}
          {...register("password", { required: true })}
        />
        <Box mt="20px">
          <Button
            fullWidth
            type="submit"
            size="large"
            color="secondary"
            variant="contained"
          >
            "Iniciar sesión"
          </Button>
          <Box marginTop="20px">
            <Button
              fullWidth
              type="submit"
              onClick={onRecoveryPassword}
              size="large"
              color="secondary"
              variant="outlined"
            >
              Olvidaste tu contraseña?
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default AuthLoginForm;
