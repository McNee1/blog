import axios from 'axios';

// import { USER_LC_KEY } from '../../constants/local-storage';

export const $axios = axios.create({
  baseURL: 'http://localhost:8000',
});
