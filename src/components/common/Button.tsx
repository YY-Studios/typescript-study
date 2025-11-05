import React, { type ReactNode } from 'react';
import s from './Button.module.css';
type ButtonProps = {
  //   oncClick: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button type="button" className={s.btn}>
      {children}
    </button>
  );
};

export default Button;
