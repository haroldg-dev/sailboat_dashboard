import { CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";

const make = (component) => {
  const Component = lazy(component);
  return (
    <Suspense
      fallback={
        <div className="flex pt-60 justify-center">
          <CircularProgress />
        </div>
      }
    >
      <Component />
    </Suspense>
  );
};

export default make;
