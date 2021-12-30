import axios from 'axios';

const onRequest = (request) => {
  return request;
};

const onRequestError = (error) => {
  return Promise.reject(error);
};

const onResponse = (response) => {
  return response;
};

const onResponseError = (error) => {
  return Promise.reject(error.response);
};

axios.defaults.timeout = 2 * 60 * 1000;
axios.interceptors.request.use(onRequest, onRequestError);
axios.interceptors.response.use(onResponse, onResponseError);
