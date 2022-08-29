import axios from "axios";

const clientApi = axios.create({
  baseURL: "/",
});

export default clientApi;