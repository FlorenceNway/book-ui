import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import Books from '../pages/book/Books';
import BookUpdate from '../pages/book/BookUpdate';
import store from '../store/store';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <PrivateRoute path="/edit/:id" render={BookUpdate} />
          <PrivateRoute path="/books" render={Books} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
