import axios from "axios";

const baseURL = "https://run.mocky.io/v3/";
const token = localStorage.getItem("token");

const base = axios.create({
  baseURL,
  Headers: {
    token: token,
  },
});

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    //console.log(response)
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    //console.log(error)
    return Promise.reject(error);
  }
);

export default base;
