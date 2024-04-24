import React from "react";
import Landing from "../pages/landing";
import { Route } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "../components/login/Login.jsx";
import Register from "../components/register/Register.jsx";
import OurServices from "../components/ourServices/OurServices.jsx";
import ForgotPassword from "../components/forgotPassword/ForgotPassword.jsx";
import Maping from "../components/map/Map.jsx";import { MapProvider } from "../components/map/MapProvider.jsx";
import { Provider } from "../components/provider/Provider.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/ingresar" element={<Login />} />
      <Route path="/registrar" element={<Register />} />
      <Route path="/recuperar" element={<ForgotPassword />} />
      <Route path="/servicios" element={<OurServices />} />
      <Route path="/mapa" element={<Maping />} />
      <Route path="/mapaprestador" element={<MapProvider />} />
      <Route path="/prestador" element={<Provider />} />
    </>
  )
);
