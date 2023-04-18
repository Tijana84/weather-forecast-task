import axios from "axios";

export const API = axios.create({
  baseURL:
    "https://api.openweathermap.org/data/2.5",
});
