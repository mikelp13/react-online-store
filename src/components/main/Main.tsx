import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';

import PrivateRoute from '../routes/publicRoutes';
import PublicRoute from '../routes/privateRoutes';
import Spinner from '../spinner/Spinner';

const Main = () => (
  <main>
    <Suspense fallback={<Spinner />}>
      <Switch>
        {mainRoutes.map(route => {
          return route.isPrivate ? (
            <PrivateRoute key={route.path} {...route} />
          ) : (
            <PublicRoute key={route.path} {...route} />
          );
        })}
      </Switch>
    </Suspense>
  </main>
);

export default Main;
