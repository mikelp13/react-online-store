import React, { FC } from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router';

import { IRoute } from '../../interfaces/interfaces';

const PublicRoute: FC<IRoute> = ({
  component: Component,
  restricted,
  ...routeProps
}) => {
  const isAuth = true;
  return (
    <Route
      {...routeProps}
      render={(props: RouteComponentProps<any>) =>
        isAuth && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
export default PublicRoute;
