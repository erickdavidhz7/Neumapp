import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
<<<<<<< HEAD
import { router } from "./routes";
import "./index.css";
import { Providers } from "./providers";
=======
import { router } from './routes';
import Generalogin from './components/Login/Generalogin';
//import './index.css';

>>>>>>> create_login

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Providers>   
         <RouterProvider router={router} />
    </Providers>
=======
    <Generalogin></Generalogin>
>>>>>>> create_login
  </React.StrictMode>
);
