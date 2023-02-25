import axios, { AxiosResponse } from "axios";
import { resolve } from "path";

const enum ErrorCodes {
  InternalServer = 500,
}

axios.defaults.baseURL = "http://localhost:7005/api"
axios.defaults.withCredentials = true;

const responseBody = (data: AxiosResponse) => data.data;
const errorHandler = (error: any, reject: any) => {
  if (
    error?.response?.status === ErrorCodes.InternalServer &&
    error?.response?.data
  ) {
    reject(error.response.data);
    return;
  }
  reject(error);
};

const getAsync = <T>(url: string, params?: URLSearchParams): Promise<T> => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then((data) => resolve(data.data))
      .catch((error) => errorHandler(error, reject));
  });
};

const postAsync = (url: string, body: {}): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, body)
      .then((data) => resolve(data.data))
      .catch((error) => errorHandler(error, reject));
  });
};

const deleteAsync = (url: string) => {
  axios.delete(url).then(responseBody);
};

export const serviceRequest = {
  postAsync,
  getAsync
};
