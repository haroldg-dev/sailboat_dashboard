import { getPrivateRoutes, getPublicRoutes } from "../routes/routes";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoadingScreen from "../../shared/ui/LoadingScreen";

const RouterCreatorProvider = ({ config }) => {
  const loading = false;
  const authenticated = true;
  if (loading) return <LoadingScreen />;
  return (
    <RouterProvider
      router={buildRoutes({
        authenticated,
        privateRoutes: getPrivateRoutes(),
        publicRoutes: getPublicRoutes(),
        config,
      })}
    />
  );
};

const buildRoutes = ({
  authenticated,
  privateRoutes,
  publicRoutes,
  config: { dashboard },
} = {}) => {
  const elements = createRoutesFromElements(
    authenticated ? (
      <Route path="/" element={dashboard}>
        {privateRoutes.map((route) => {
          return (
            <Route
              key={`private-${route.path}`}
              path={route.path}
              element={route.component}
            />
          );
        })}
      </Route>
    ) : (
      <>
        {publicRoutes.map((route) => (
          <Route
            key={`public-${route.path}`}
            path={route.path}
            element={route.component}
          />
        ))}
        <Route path="*" element={<Navigate to={"/login"} />} />
      </>
    )
  );
  const router = createBrowserRouter(elements);
  return router;
};

export default RouterCreatorProvider;
