import axios from 'axios';

import { ENV } from '~/utils';

export const codeLeapApi = axios.create({
  baseURL: ENV.REACT_APP_CODE_LEAP_API,
  timeout: 10000,
});
