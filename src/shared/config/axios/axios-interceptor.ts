import { $axios } from './axios-instance';

// Add a request interceptor

export const interceptors = () => {
  $axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      if (config.headers) {
        config.headers.Authorization = 'There is permission';
      }

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error instanceof Error ? error : new Error(String(error)));
    }
  );
};
