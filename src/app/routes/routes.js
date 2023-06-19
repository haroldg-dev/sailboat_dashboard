import make from "../../shared/utils/make";

export const getPrivateRoutes = () => {
  return [
    {
      path: "/",
      component: make(() => import("../../pages/dashboard")),
    },
  ];
};

export const getPublicRoutes = () => {
  return [
    {
      path: "/login",
      component: make(() => import("../../pages/login")),
    },
  ];
};
