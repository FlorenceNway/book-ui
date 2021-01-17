import { LOGIN } from './authActionTypes';

const initialValues = {
  isAuthenticated: !!localStorage.getItem('TOKEN'),
  // isAuthenticated: localStorage.getItem('TOKEN') ? true : false,
};

export default function (state = initialValues, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('TOKEN', action.payload);
      // store in localstorage when we get token after login
      return { isAuthenticated: !!action.payload };
    // {isAuthenticated: action.payload? true : false}
    default:
      return state;
  }
}
