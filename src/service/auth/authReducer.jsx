import _ from 'lodash';
import { LOGIN } from './authActionTypes';

const initialValues = {
  data: { isAuthenticated: false },
};

export default function (state = initialValues, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('TOKEN', action.payload);
      // store in localstorage when we get token after login
      return { isAuthenticated: action.payload ? true : false };
    default:
      return state;
  }
}
