import { HYDRATE } from 'next-redux-wrapper';
import { SNACKBAR_UPDATE } from '../../actions';

const initialState = {
  message: '',
  open: false,
  severity: 'success',
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
    case SNACKBAR_UPDATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
