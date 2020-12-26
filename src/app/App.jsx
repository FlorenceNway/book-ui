import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import Books from '../pages/book/Books';
import BookUpdate from '../pages/book/BookUpdate';
import store from '../store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/edit/:id" component={BookUpdate} />
          <Route path="/books" component={Books} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
