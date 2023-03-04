import { combineReducers } from 'redux';
import userReducer from './user';
import loadingReducer from './loading';
import snackbarReducer from './snackbar';
import walletReducer from './wallet';

const rootReducer = combineReducers({
  user: userReducer,
  loading: loadingReducer,
  snackbar: snackbarReducer,
  wallet: walletReducer,
});
export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
