import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface INavLinkProps {
  path: string;
  exact: boolean;
  name: string;
  onClick: () => void;
}

const NavigationLink: FC<INavLinkProps> = ({ path, exact, name, onClick }) => (
  <li className="nav-item list">
    <NavLink
      to={path}
      exact={exact}
      className="nav-link link"
      activeClassName="active-link"
      onClick={onClick}
    >
      {name}
    </NavLink>
  </li>
);

export default NavigationLink;
