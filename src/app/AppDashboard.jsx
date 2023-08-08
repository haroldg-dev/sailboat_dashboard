import { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../widgets/Topbar";
import { Box } from "@mui/material";

const AppDashboard = () => {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div className="app">
      <main className="content">
        {/* <Box sx={{ position: "absolute", zIndex: "2", width: "100vh" }}>
          <Topbar setIsSidebar={setIsSidebar} />
        </Box> */}
        <Box
          sx={{
            position: "absolute",
            zIndex: "1",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Outlet />
        </Box>
      </main>
    </div>
  );
};

export default AppDashboard;
