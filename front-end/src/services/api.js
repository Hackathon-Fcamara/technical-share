import axios from "axios";

export const api = axios.create({
  baseURL: "https://ts31.herokuapp.com/"
});
