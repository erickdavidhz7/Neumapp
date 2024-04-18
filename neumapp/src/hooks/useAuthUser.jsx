import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import {
  loginRequest,
  userRegisterRequest,
  providerRegisterRequest,
} from "../api/auth";
import { useNavigate } from "react-router-dom";
import {
  formatDataClient,
  formatDataProvider,
  getFormData
} from "../utils/formatDataProvider";

function useAuthUser() {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const context = useContext(AuthContext);

  const navigate = useNavigate();

  async function createUser(data) {
    const formData = formatDataClient(data);
    try {
      const res = await userRegisterRequest(formData);
      console.log(res);
      console.log(res.data.token);
      if (res) {
        console.log("Registrado exitosamente");
        navigate("/ingresar");
      } else {
        console.error("Error: Respuesta inesperada del servidor");
      }
    } catch (error) {
      console.error(
        "Error al iniciar sesión",
        error.response?.data || error.message
      );
    }
  }

  async function createProvider(data) {
    const formData = formatDataProvider(data);
    try {
      const res = await providerRegisterRequest(formData);
      console.log(res);
      console.log(res.data.token);
      if (res) {
        console.log("Registrado exitosamente");
        navigate("/ingresar");
      } else {
        console.error("Error: Respuesta inesperada del servidor");
      }
    } catch (error) {
      console.error(
        "Error al iniciar sesión",
        error.response?.data || error.message
      );
    }
  }

  async function loginUser(data) {
    // const url = "https://neumapp.site:3001/auth/login";

    try {
      const res = await loginRequest(data);
      // const res = await axios.post(url, data);
      if (res) {
        context.handlerLogin(res.data.token, "user");
        console.log("Inicio de sesión exitoso");
        setSuccess("Inicio de sesión exitoso");
        navigate("/servicios");
      } else {
        console.error("Error: Respuesta inesperada del servidor");
      }
    } catch (error) {
      console.error(
        "Error al iniciar sesión",
        error.response?.data || error.message
      );
      setError(error.response.data.message);
    }
  }

  return { success, error, createUser, loginUser, createProvider };
}

export default useAuthUser;
