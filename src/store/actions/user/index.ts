import { USER_UPDATE } from '..';

export const userUpdate = (user: {
  id?: string;
  name?: string;
  email?: string;
}) => ({
  type: USER_UPDATE,
  payload: user,
});
