import axios from "axios";

const api = axios.create({
  baseURL: "https://mockend.com/juunegreiros/BE-test-api",
  timeout: 20000,
});

export default api;
