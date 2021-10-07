import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { IRoute } from '../../interfaces/interfaces';

const PrivateRoute: FC<IRoute> = ({ component: Component, ...routeProps }) => {
  const isAuth = true;
  return (
    <Route
      {...routeProps}
      render={(props: RouteComponentProps<any>) =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
