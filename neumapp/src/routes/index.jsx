import React from "react";
import Landing from "../pages/landing";
import { Route } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Pagina2 from "../pages/pagina2";

export const router = createBrowserRouter(
    createRoutesFromElements(
       <>
         <Route path="/" element={<Landing />}/>
         <Route path="prueba" element={<Pagina2 />} />
       </>
    )
  );