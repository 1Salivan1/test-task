import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./layouts/Container/Container.jsx";
import { RouterProvider } from "react-router-dom";
import "./styles/normalize.css";
import "./styles/global.scss";
import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ConfirmPasswordPage from "./pages/ConfirmPasswordPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/confirm-password",
    element: <ConfirmPasswordPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>
);
