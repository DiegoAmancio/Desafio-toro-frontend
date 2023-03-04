import { HYDRATE } from 'next-redux-wrapper';
import { WALLET_UPDATE } from '../../actions';

const initialState = {
  checkingAccountAmount: 0,
  positions: [],
  topFiveStocks: [],
  consolidated: 0,
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
    case WALLET_UPDATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default reducer;
