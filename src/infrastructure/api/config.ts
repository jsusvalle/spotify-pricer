import axios from 'axios';

export const AxiosApi: any = () => {
  const api = axios.create({
    baseURL: 'https://mts.io',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return api;
};

export const instanceApi = AxiosApi();
