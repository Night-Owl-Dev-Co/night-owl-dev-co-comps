import { FC, useMemo } from 'react';
import { Link, LinkProps } from 'react-router-dom';

import './NavTab.style.scss';

export interface INavTabProps extends LinkProps {
  color?: string;
  name: string;
  to: string;
}

const NavTab: FC<INavTabProps> = ({ color, name, to, ...rest }) => {
  const navTabStyles = useMemo(() => ({ color }), [color]);
  return (
    <Link to={to} {...rest}>
      <p className="custom-tab" style={navTabStyles}>
        {name}
      </p>
    </Link>
  );
};

export default NavTab;
