import axios from 'axios';

import { interceptors } from './axios-interceptor';

export const $axios = axios.create({
  baseURL: __API_URL__,
});
interceptors();
