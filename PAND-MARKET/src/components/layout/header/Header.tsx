import { Link } from 'react-router-dom';
import s from './Header.module.css';
import LogoImg from '@assets/logo.svg';
import ProfileImg from '@assets/profile.svg';
interface Menus {
  name: string;
  link: string;
}
const menus: Menus[] = [
  {
    name: '자유게시판',
    link: '/notice',
  },
  {
    name: '중고마켓',
    link: '/items',
  },
];
const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.left}>
        <a className={s.logo}>
          <img src={LogoImg} alt="판다마켓" />
        </a>
        <div className={s.menus}>
          {menus.map((menu) => {
            return (
              <Link key={menu.link} to={menu.link} className={s.menu}>
                {menu.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className={s.right}>
        <div className={s.profile}>
          <img src={ProfileImg} alt="프로필" />
        </div>
      </div>
    </header>
  );
};

export default Header;
