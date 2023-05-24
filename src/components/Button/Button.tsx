import { HTMLAttributes } from 'react';

import './Button.style.scss';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, ...rest }: IButtonProps) => {
  return (
    <button className="custom-btn" {...rest}>
      {text}
    </button>
  );
};

export default Button;
