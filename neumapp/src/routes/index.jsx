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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/ingresar" element={<Login />} />
      <Route path="/registrar" element={<Register />} />
      <Route path="/recuperar" element={<ForgotPassword />} />
      <Route path="/servicios" element={<OurServices />} />
      <Route path="/mapa" element={<Maping />} />
    </>
  )
);
