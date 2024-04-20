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
  axiosInstance.post(`/auth/register/provider`, user, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const logoutRequest = async () => axiosInstance.post("/auth/logout");

export const forgotPasswordRequest = async () =>
  axiosInstance.get(`/auth/forgotPassword`);



