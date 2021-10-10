import { lazy } from 'react';
import { IRoute } from '../interfaces/interfaces';

const mainRoutes: IRoute[] = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(
      () => import('../pages/home/HomePage' /* webpackChunkName: "HomePage"*/)
    ),
    isPrivate: false,
    restricted: false,
  },
  {
    path: '/login',
    name: 'Login',
    exact: true,
    component: lazy(
      () =>
        import('../pages/login/LoginPage' /* webpackChunkName: "LoginPage"*/)
    ),
    isPrivate: false,
    restricted: true,
  },
  {
    path: '/register',
    name: 'Sign Up',
    exact: true,
    component: lazy(
      () =>
        import(
          '../pages/register/RegisterPage' /* webpackChunkName: "RegisterPage"*/
        )
    ),
    isPrivate: false,
    restricted: true,
  },
  {
    path: '/shop',
    name: 'Shop',
    exact: true,
    component: lazy(
      () => import('../pages/shop/ShopPage' /* webpackChunkName: "ShopPage"*/)
    ),
    isPrivate: true,
    restricted: false,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    exact: true,
    component: lazy(
      () =>
        import(
          '../pages/dashboard/DashboardPage' /* webpackChunkName: "DashboardPage"*/
        )
    ),
    isPrivate: true,
    restricted: false,
  },
  {
    path: '/cart',
    name: 'Cart',
    exact: true,
    component: lazy(
      () => import('../pages/cart/CartPage' /* webpackChunkName: "CartPage"*/)
    ),
    isPrivate: false,
    restricted: false,
  },
];

export default mainRoutes;
