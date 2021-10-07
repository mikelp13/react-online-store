import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';

import PrivateRoute from '../routes/publicRoutes';
import PublicRoute from '../routes/privateRoutes';

const Main = () => (
  <main>
    <Suspense fallback={<div>LOADING...</div>}>
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
