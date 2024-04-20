import axiosInstance from "./axios";

export const loginRequest = async (user) =>
  axiosInstance.post(`/auth/login`, user);

export const userRegisterRequest = async (user) =>
  axiosInstance.post(`/auth/register/client`, user, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const providerRegisterRequest = async (user) => {
  try {
    const response = await axiosInstance.post(`/auth/register/provider`, user, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status === 201) return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.errors) {
      const { email, phoneClient } = error.response.data.errors;
      if (email) {
        throw new Error(email[0]);
      }
      if (phoneClient) {
        throw new Error(phoneClient[0]);
      }
    } else {
      console.error("Error desconocido:", error);
      throw new Error(
        "Ocurrió un error al procesar la solicitud. Por favor, inténtalo de nuevo más tarde."
      );
    }
  }
};

export const logoutRequest = async () => axiosInstance.post("/auth/logout");

export const forgotPasswordRequest = async () =>
  axiosInstance.get(`/auth/forgotPassword`);
