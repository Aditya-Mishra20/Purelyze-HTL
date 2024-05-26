import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Team from "./components/Team section/Team.jsx";
// import Chatbot from "./components/Chatbot.jsx"
import Chatbot2 from "./components/Chatbot2.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "upload",
        element: <Dashboard />,
      },
      {
        path: "team",
        element: <Team />,
      },
      { path: "Chatbot", element: <Chatbot2/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
