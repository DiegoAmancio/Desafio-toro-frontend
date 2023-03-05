import axios from 'axios';

const baseUrl = process.env.BACKEND_URL;

export const login = (token: string, cpf?: string) =>
  axios
    .post(
      `${baseUrl}auth/login`,
      { cpf },
      { headers: { authorization: token } },
    )
    .then(({ data }) => data);
