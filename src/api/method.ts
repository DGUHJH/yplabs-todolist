import axios from 'axios';
import { RequestType } from 'types/common';
import { requestUrl } from './url';

export const hAxios = (url: string, type: RequestType, data?: any) =>
  axios[type](`${requestUrl}${url}`, data);
