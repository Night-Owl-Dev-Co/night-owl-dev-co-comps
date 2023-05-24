import { HTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export interface ILinkProps extends LinkProps {
  name: string;
  to: string;
}

const NavTab = ({ name, to, ...rest }: ILinkProps) => {
  return (
    <Link to={to} {...rest}>
      {name}
    </Link>
  );
};

export default NavTab;
