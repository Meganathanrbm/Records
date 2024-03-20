import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Signin from "./pages/RegisterPage";
import Onboarding from "./pages/OnbordingPage";
import Walktrough from "./pages/OnbordingPage/Skills";
import NavigationLayout from "./layouts/NavigationLayout";
import DashBoard from "./pages/DashBoardPage";
import Learning from "./pages/LearningPage";
import Profile from "./pages/ProfilePage";
import Tools from "./pages/ToolsPage";
import navigationRoutes from "./router/auth-router";
import { Suspense } from "react";
import nonAuthRoutes from "./router/non-auth-routes";
import SuspenseLayout from "./layouts/SuspenseLayout";
import LearningContent from "./pages/LearningContent/LearningContent";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavigationLayout />,
      children: [
        {
          path: "/dashboard",
          element: <DashBoard />,
        },
        {
          path: "/learning",
          element: <Learning />,
        },
        {
          path: "/tools",
          element: <Tools />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/register",
      element: <Signin />,
    },
    {
      path: "/onboarding",
      element: <Onboarding />,
    },
    {
      path: "/walktrough",
      element: <Walktrough />,
    },
  ]);
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<SuspenseLayout />}>
            {/* Default route leads to the sign-in page */}
            <Route path="/" element={<Signin />} />

            {/* Routes for authenticated users */}
            <Route element={<NavigationLayout />}>
              {/* Authenticated routes */}
              {navigationRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Route>

            {/* Routes for non-authenticated users */}
            {nonAuthRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
