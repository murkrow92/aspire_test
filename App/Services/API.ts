import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import qs from "querystring";

export const instance = axios.create({
  baseURL: "http://143.244.151.110",
  timeout: 10000,
});

function checkStatus(response: AxiosResponse) {
  console.log("Response", response);
  return response;
}

function logError(error: AxiosError) {
  console.log("Error response", error.response);
  return {
    error: error,
  };
}

export const GET = (
  url: string,
  params = {},
  config: AxiosRequestConfig = {},
) => {
  const queryString = qs.stringify(params);
  const urlWithQuery = `${url}?${queryString}`;
  return instance
    .get(urlWithQuery, config)
    .then(checkStatus)
    .catch(logError);
};

export function POST(
  url: string,
  params = {},
  config: AxiosRequestConfig = {},
) {
  return instance
    .post(url, params, config)
    .then(checkStatus)
    .catch(logError);
}

export function PUT(url: string, params = {}, config: AxiosRequestConfig = {}) {
  return instance
    .put(url, params, config)
    .then(checkStatus)
    .catch(logError);
}

export function getCard() {
  const path = "/aspire/card";
  return GET(path);
}

export function updateCard(params = {}) {
  const path = "/aspire/card";
  return PUT(path, params);
}

export default {
  getCard,
  updateCard,
};
