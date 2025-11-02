import type { ReactNode } from 'react';
import s from './Title.module.css';
interface TitleProps {
  children: ReactNode;
  size: string;
  whight: string;
}
const Title = ({ children, size, whight }: TitleProps) => {
  return <strong className={`${s[size]} ${s[whight]}`}>{children}</strong>;
};

export default Title;
