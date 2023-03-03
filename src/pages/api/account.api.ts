import axios from 'axios';

const baseUrl = process.env.BACKEND_URL;

export const getAccountPositions = () =>
  axios.get(`${baseUrl}?id=640154b91def1e19b60f4ca6`).then(({ data }) => data);
