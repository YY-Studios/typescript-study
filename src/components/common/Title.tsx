import type { ReactNode } from 'react';
import s from './Title.module.css';
interface TitleProps {
  children: ReactNode;
  size: 'sm' | 'md' | 'lg' | 'xlg';
  weight: 'regiular' | 'bold';
}
const Title = ({ children, size, weight }: TitleProps) => {
  return <strong className={`${s[size]} ${s[weight]}`}>{children}</strong>;
};

export default Title;
