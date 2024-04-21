import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import {
  loginRequest,
  userRegisterRequest,
  providerRegisterRequest,
} from "../api/auth";
import { useNavigate } from "react-router-dom";
import {
  formatDataClient,
  formatDataProvider,
  getFormData,
} from "../utils/formatDataProvider";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function useAuthUser() {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const context = useContext(AuthContext);

  const navigate = useNavigate();

  async function createUser(data) {
    try {
      const formData = formatDataClient(data);
      const response = await userRegisterRequest(formData);
      toast.success("Registro exitoso", {
        position: "bottom-right",
        toastId: "registerUserSuccess",
      });
      console.log(response);
      navigate("/mapaprestador");
      await delay(2000);
      navigate("/ingresar")
    } catch (error) {
      console.log(error);
      toast.error(error.message, { position: "bottom-right" });
    }
  }
  async function createProvider(data, coordenadas) {
    try {
      const formData = await formatDataProvider(data, coordenadas);
      const response = await providerRegisterRequest(formData);

      toast.success("Registro exitoso", {
        position: "bottom-right",
        toastId: "registerProviderSuccess",
      });
      await delay(2000);
      navigate("/mapaprestador");
    } catch (error) {
      toast.error(error.message, { position: "bottom-right" });
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
