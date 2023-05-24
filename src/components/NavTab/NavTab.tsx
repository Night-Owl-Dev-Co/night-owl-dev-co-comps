import { HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  name: string;
  to: string;
}

const NavTab = ({ name, to, ...rest }: LinkProps) => {
  return (
    <Link to={to} {...rest}>
      {name}
    </Link>
  );
};

export default NavTab;
