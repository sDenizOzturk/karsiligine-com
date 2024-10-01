import { NavLink } from 'react-router-dom';
import routes from '../../utils/routes';
import { FC } from 'react';
import { BaseHeader, headerActiveStyle } from 'binak-react-components';
import { DisplayingRoute } from '../../models/DisplayingRoute';
import logo from '../../assets/logo.png';

const Header: FC = () => {
  const displayingRoutes: DisplayingRoute[] = [];

  displayingRoutes.push({ to: routes.index, text: 'Karşılığı Ne?' });
  displayingRoutes.push({
    to: routes.latest,
    text: 'Son Hesaplamalar',
  });

  return (
    <BaseHeader
      leftContent={
        <>
          {displayingRoutes.map((route) => (
            <NavLink
              key={route.text}
              style={({ isActive }) => (isActive ? headerActiveStyle : {})}
              to={route.to}
              onClick={route.onClick}
            >
              {route.text}
            </NavLink>
          ))}
        </>
      }
      rightContent={<img src={logo}></img>}
    />
  );
};
export default Header;
