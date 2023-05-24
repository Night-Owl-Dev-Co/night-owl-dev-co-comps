import { HTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export interface INavTabProps extends LinkProps {
  name: string;
  to: string;
}

const NavTab = ({ name, to, ...rest }: INavTabProps) => {
  return (
    <Link to={to} {...rest}>
      {name}
    </Link>
  );
};

export default NavTab;
