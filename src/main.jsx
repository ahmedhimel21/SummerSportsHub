import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import Authproviders from "./Provider/Authproviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authproviders>
      <RouterProvider router={router}></RouterProvider>
    </Authproviders>
  </React.StrictMode>
);
