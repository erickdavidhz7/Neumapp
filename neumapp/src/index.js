import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import "./index.css";
import { Providers } from "./providers";

mapboxgl.accessToken = 'pk.eyJ1IjoibHVwYXR0aW4iLCJhIjoiY2x2NGZ3Y3l3MDgyNTJzcDFnYXpwa2theCJ9.-FiQ4H1sz4AbVPnPvZo52w';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
);

