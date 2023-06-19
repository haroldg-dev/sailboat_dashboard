import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../core/theme/theme";

function AppearanceProvider({ children }) {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AppearanceProvider;
