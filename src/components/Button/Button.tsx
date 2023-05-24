import { useMemo, FC, HTMLAttributes } from 'react';

import './Button.style.scss';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  bgColor: string;
  color: string;
  text: string;
}

const Button: FC<IButtonProps> = ({ bgColor, color, text, ...rest }) => {
  const buttonStyles = useMemo(
    () => ({ color, backgroundColor: bgColor, borderColor: bgColor }),
    [color, bgColor]
  );

  return (
    <button className="custom-btn" style={buttonStyles} {...rest}>
      {text}
    </button>
  );
};

export default Button;
