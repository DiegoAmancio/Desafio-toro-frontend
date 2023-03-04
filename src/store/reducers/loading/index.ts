import { HYDRATE } from 'next-redux-wrapper';
import { LOADING_UPDATE } from '../../actions';

const initialState = {
  open: false,
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
    case LOADING_UPDATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
