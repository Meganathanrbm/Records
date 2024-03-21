import { lazy } from "react";

const Signin = lazy(() => import("../pages/RegisterPage/index"));
const Onboarding = lazy(() => import("../pages/OnbordingPage/index"));
const Walktrough = lazy(() => import("../pages/OnbordingPage/Skills/index"));


export default [
  {
    name: "Register",
    path: "/",
    component: <Signin />,
  },
  {
    name: "Onboarding",
    path: "/onboarding",
    component: <Onboarding />,
  },
  {
    name: "Walkthrough",
    path: "/walktrough",
    component: <Walktrough />,
  },
];
