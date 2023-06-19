import { Box } from "@mui/material";
import AuthLoginForm from "../auth/AuthLoginForm";
import AuthRecoveryPassword from "../auth/AuthRecoveryPassword";
import { useState } from "react";
import Animatable from "../../shared/ui/Animatable";

const Login = () => {
  const [isRetrieving, setRetrieving] = useState(false);
  return (
    <Box height={"100vh"} display="flex" alignItems={"stretch"}>
      <Box
        width={"50vw"}
        sx={{
          backgroundImage: `url(${"assets/velero.png"})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <Box
        width={"100%"}
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
      >
        <Box maxWidth={"500px"} width="90%" marginX={"auto"}>
          <Animatable key={isRetrieving ? "recovery" : "login"}>
            {isRetrieving ? (
              <AuthRecoveryPassword
                onCancelRecoveryPassword={() => setRetrieving(false)}
              />
            ) : (
              <AuthLoginForm onRecoveryPassword={() => setRetrieving(true)} />
            )}
          </Animatable>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
