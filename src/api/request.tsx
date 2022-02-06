/** @format */

import axios from "axios";
import errorHandler from "./errorHandler";

const request = axios.create();
request.defaults.baseURL = "http://localhost:3030";
request.defaults.timeout = 200000;

request.interceptors.response.use(
  (response: any) => {
    return response?.data;
  },
  async (error: any) => {
    if (error && error.config && error.response && error.config.noToast) {
      return;
    }

    errorHandler(error);
  }
);
export default request;
