import React from "react";
import Landing from "../pages/landing";
import { Route } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "../components/login/Login.jsx";
import UserRegister from "../components/userRegister/UserRegister.jsx";
import ProviderRegister from "../components/providerRegister/ProviderRegister.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Landing />} />
      <Route path="/ingresar" element={<Login />} />
      <Route path="/registrar" element={<UserRegister />} />
      <Route path="/prestador" element={<ProviderRegister />} />
    </>
  )
);
