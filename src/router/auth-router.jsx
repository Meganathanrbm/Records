import { lazy } from "react";
import LearningContent from "../pages/LearningContent/LearningContent";

const DashBoard = lazy(() => import("../pages/DashBoardPage/index"));
const Learning = lazy(() => import("../pages/LearningPage/index"));
const Tools = lazy(() => import("../pages/ToolsPage/index"));
const Profile = lazy(() => import("../pages/ProfilePage/index"));

const navigationRoutes = [
  {
    name: "DashBoard",
    path: "/dashboard",
    component: <DashBoard />,
  },
  {
    name: "Learning",
    path: "/learning",
    component: <Learning />,
  },
  {
    name: "Tools",
    path: "/tools",
    component: <Tools />,
  },
  {
    name: "Profile",
    path: "/profile",
    component: <Profile />,
  },
  {
    name: "LearningContent",
    path:"/learning-content",
    component: <LearningContent />
  }
];

export default navigationRoutes;
