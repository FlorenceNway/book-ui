import { combineReducers } from 'redux';
import bookReducer from '../service/book/bookReducer';
import authReducer from '../service/auth/authReducer';

const rootReducer = combineReducers({
  bookReducer,
  authReducer,
});

export default rootReducer;
