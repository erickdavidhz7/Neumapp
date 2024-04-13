import axios from "axios";
// import { API_URL } from "../config"
// API_URL es la direccion de nuestro servidor, despues se cambia a un archivo .env o config

const API_URL = "https://neumapp.site:3001";
const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default instance;
