import { createBrowserRouter } from "react-router";
import LandingPage from "../landing/LandingPage";
import AppEntry from "../app/AppEntry";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/app",
    element: <AppEntry />,
  },
]);

export default router;
