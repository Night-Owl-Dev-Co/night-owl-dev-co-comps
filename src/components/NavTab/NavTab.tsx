import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export interface INavTabProps extends LinkProps {
  name: string;
  to: string;
}

const NavTab:FC<INavTabProps> = ({ name, to, ...rest }) => {
  return (
    <Link to={to} {...rest}>
      {name}
    </Link>
  );
};

export default NavTab;
