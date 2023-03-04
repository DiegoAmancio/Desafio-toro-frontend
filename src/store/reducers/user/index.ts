import { HYDRATE } from 'next-redux-wrapper';
import { USER_UPDATE, USER_DELETE } from '../../actions';

const initialState = {
  id: null,
  name: null,
  email: null,
};

const reducer = (
  state = initialState,
  action = {
    type: '',
    payload: {
      user: {},
    },
  },
) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.user };
    case USER_UPDATE:
      return { ...state, ...action.payload };
    case USER_DELETE:
      return {
        id: null,
        name: null,
        email: null,
        token: null,
      };
    default:
      return state;
  }
};

export default reducer;
