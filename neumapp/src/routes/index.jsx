import React from "react";
import Landing from "../pages/landing";
import { Route } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Generalogin from "../components/Login/Generalogin";
import Register from "../components/Register";
import ProviderRegister from "../components/providerRegister/ProviderRegister";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/ingresar" element={<Generalogin />} />
      <Route path="/registrar" element={<Register />} />
      <Route path="/prestador" element={<ProviderRegister />} />
    </>
  )
);
