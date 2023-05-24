import { HTMLAttributes } from 'react';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, ...rest }: IButtonProps) => {
  return <button {...rest}>{text}</button>;
};

export default Button;
