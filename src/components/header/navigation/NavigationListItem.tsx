import React, { FC } from 'react';
import { IRoute } from '../../../interfaces/interfaces';
import NavigationLink from './NavigationLink';

interface INav {
  isAuth: boolean;
  onClick: () => void;
}

type NavItemProps = IRoute & INav;

const NavigationListItem: FC<NavItemProps> = ({
  isAuth,
  onClick,
  isPrivate,
  restricted,
  ...routeProps
}) => (
  <>
    {!isPrivate && !restricted && (
      <NavigationLink {...routeProps} onClick={onClick} />
    )}

    {isAuth && isPrivate && !restricted && (
      <NavigationLink {...routeProps} onClick={onClick} />
    )}

    {!isAuth && !isPrivate && restricted && (
      <NavigationLink {...routeProps} onClick={onClick} />
    )}
  </>
);

export default NavigationListItem;
