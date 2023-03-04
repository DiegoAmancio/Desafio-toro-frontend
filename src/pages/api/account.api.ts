import axios from 'axios';

const baseUrl = process.env.BACKEND_URL;

export const getAccountPositions = (token: string) =>
  axios
    .get(`${baseUrl}userPosition`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) => data);

export const getTopFiveStocks = (token: string) =>
  axios
    .get(`${baseUrl}trends`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) => data);
