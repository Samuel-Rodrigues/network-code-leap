import { API_BASE } from '@env';
import axios from 'axios';

export const codeLeapApi = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
});
