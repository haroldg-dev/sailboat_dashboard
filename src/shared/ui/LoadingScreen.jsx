import { CircularProgress } from "@mui/material";

const LoadingScreen = () => {
  return (
    <div className="absolute w-full h-full left-0 top-0 flex items-center justify-center">
      <CircularProgress color="secondary" />
    </div>
  );
};

export default LoadingScreen;
