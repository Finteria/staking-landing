import axios from "axios";

export const api = () => {
  const config = useRuntimeConfig();
  return axios.create({
    baseURL: config.public.API_URL,
  });
};

export const getGameCalculator = () => api().get("/game-calculator");

export const getAppSettings = () => api().get("/app/settings");

export const registerUser = (data: any) =>
  api()
    .post("/auth/register", data)
    .then((response) => response.data);
