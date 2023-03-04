import axios from 'axios';

const baseUrl = process.env.BACKEND_URL;

export const getAccountPositions = (token: string) =>
  axios
    .get(`${baseUrl}`, {
      headers: {
        Authorization: token,
      },
    })
    .then(({ data }) => data);
