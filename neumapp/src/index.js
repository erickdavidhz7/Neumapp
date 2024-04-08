import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { router } from './routes';
import Generalogin from './components/Login/Generalogin';
//import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Generalogin></Generalogin>
  </React.StrictMode>
);
