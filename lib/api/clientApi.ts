import axios from "axios";

const clientApi = axios.create({
  baseURL: "http://localhost:3000",
});

export default clientApi;