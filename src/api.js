import axios from "axios";

const url = "http://www.mocky.io/v2/5b15c4923100004a006f3c07";

const api = axios.create({
  baseURL: url,
});

export default api;
