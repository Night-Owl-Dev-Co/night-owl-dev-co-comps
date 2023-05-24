import { HTMLAttributes } from 'react';

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {}

const Button = ({ name, ...rest }: LinkProps) => {
  return <a {...rest}>{name}</a>;
};

export default Button;
