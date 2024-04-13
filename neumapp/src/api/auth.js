import axios from "./axios";

export const loginRequest = async (user) => axios.post(`/auth/login`, user);

export const registerRequest = async (user) =>
  axios.post(`/auth/register/client`, user);

export const providerRegisterRequest = async (user) =>
  axios.post(`/auth/register/provider`, user);

export const logoutRequest = async () => axios.post("/auth/logout");

export const forgotPasswordRequest = async () =>
  axios.get(`/auth/forgotPassword`);
