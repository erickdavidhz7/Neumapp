import axios from "axios";
// import { API_URL } from "../config"
// API_URL es la direccion de nuestro servidor, despues se cambia a un archivo .env o config

const API_URL = "https://neumapp.site:3001";
const instance = axios.create({
  baseURL: API_URL,
  withCredentials: false, // Cambiar esta opcion si en el server cambian la configuracion de los CORS Access-Control-Allow-Origin *  por ==> un dominio en especifico Access-Control-Allow-Origin: http://develop.neumapp.site
});

export default instance;
