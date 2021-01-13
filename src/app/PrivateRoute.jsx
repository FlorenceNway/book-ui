import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  const { render: Component, ...rest } = props;

  if (!isAuthenticated) {
    return (
      <Route
        {...rest}
        exact
        render={(routerProps) => (
          <Redirect
            to={{ pathname: '/', state: { from: routerProps.location } }}
          />
        )}
      />
    );
  }
  // <Route path='/' component={LoginPage} />
  return (
    <Route
      {...rest}
      exact
      render={(routerProps) => <Component {...routerProps} />}
    />
  );
};

export default PrivateRoute;
