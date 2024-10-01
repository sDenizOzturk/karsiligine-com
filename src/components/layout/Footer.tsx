import { NavLink } from 'react-router-dom';
import routes from '../../utils/routes';
import { FC } from 'react';
import { BaseFooter, footerActiveStyle } from 'binak-react-components';
import { DisplayingRoute } from '../../models/DisplayingRoute';

import logo from '../../assets/logo.png';

const Footer: FC = () => {
  const displayingRoutes: DisplayingRoute[] = [];

  displayingRoutes.push({ to: routes.contribute, text: 'Katkı Yap' });

  return (
    <BaseFooter
      rightContent={displayingRoutes.map((route) => (
        <NavLink
          key={route.text}
          style={({ isActive }) => (isActive ? footerActiveStyle : {})}
          to={route.to}
          onClick={route.onClick}
        >
          {route.text}
        </NavLink>
      ))}
      leftContent={<img src={logo}></img>}
    />
  );
};
export default Footer;
