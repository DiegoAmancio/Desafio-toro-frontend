import axios from 'axios';

const baseUrl = process.env.BACKEND_URL;

export const login = (token: string) =>
  axios
    .get(`${baseUrl}auth/login`, { headers: { token } })
    .then(({ data }) => data);
