import { useMemo, FC, HTMLAttributes } from 'react';

import './Button.style.scss';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  bg: string;
  color: string;
  text: string;
}

const Button: FC<IButtonProps> = ({ bg, color, text, ...rest }) => {
  const buttonStyles = useMemo(
    () => ({ color, backgroundColor: bg, borderColor: bg }),
    [color, bg]
  );

  return (
    <button className="custom-btn" style={buttonStyles} {...rest}>
      {text}
    </button>
  );
};

export default Button;
