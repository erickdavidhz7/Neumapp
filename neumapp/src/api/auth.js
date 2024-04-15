import axiosInstance from "./axios";

export const loginRequest = async (user) =>
  axiosInstance.post(`/auth/login`, user);

export const registerRequest = async (user) =>
  axiosInstance.post(`/auth/register/client`, user);

export const providerRegisterRequest = async (formData) => {
  axiosInstance.post(`/auth/register/provider`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const logoutRequest = async () => axiosInstance.post("/auth/logout");

export const forgotPasswordRequest = async () =>
  axiosInstance.get(`/auth/forgotPassword`);
