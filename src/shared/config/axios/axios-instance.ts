import axios from 'axios';

export const $axios = axios.create({
  baseURL: __API_URL__,
});
