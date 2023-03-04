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

export type OrderPositionDTO = {
  amount: number;
  symbol: string;
};

export const orderStocks = (token: string, order: OrderPositionDTO) =>
  axios
    .post(`${baseUrl}order`, order, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) => data);
