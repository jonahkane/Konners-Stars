import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import SSBPage from "./components/routes/SSBPage";
import SSSBPage from "./components/routes/SSSBPage";
import VBSPage from "./components/routes/VBSPage";
import Root from "./components/routes/MainAssPage";
import ErrorPage from "./error-page";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainAssPage from "./components/routes/MainAssPage";
import LeadQs from "./components/qs/LeadQs";
import NextSteps from "./components/qs/NextSteps";
import MusicianQs from "./components/qs/MusicianQs";
import VocalistQs from "./components/qs/VocalistQs";
import EngineerQs from "./components/qs/EngineerQs";
import ProducerQs from "./components/qs/ProducerQs";
import FinalDeetz from "./components/qs/FinalDeetz";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/main",
        element: <MainAssPage />,
      },
      {
        path: "/ssbSender",
        element: <SSBPage />,
      },
      {
        path: "/sssbSender",
        element: <SSSBPage />,
      },
      {
        path: "/vbsSender",
        element: <VBSPage />,
      },
      {
        path: "/leadQs",
        element: <LeadQs />,
      },
      {
        path: "/nextSteps",
        element: <NextSteps />,
      },
      {
        path: "/musicianQs",
        element: <MusicianQs />,
      },
      {
        path: "/vocalistQs",
        element: <VocalistQs />,
      },
      {
        path: "/engineerQs",
        element: <EngineerQs />,
      },
      {
        path: "/producerQs",
        element: <ProducerQs />,
      },
      {
        path: "/finalDeetz",
        element: <FinalDeetz />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
