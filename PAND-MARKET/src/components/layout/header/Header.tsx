import { Link } from 'react-router-dom';
import s from './Header.module.css';
import LogoImg from '@assets/logo.svg';
import ProfileImg from '@assets/profile.svg';
interface Menus {
  name: string;
  link: string;
}
const Header = () => {
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
  return (
    <div className={s.header}>
      <div className={s.left}>
        <h1 className={s.logo}>
          <img src={LogoImg} alt="판다마켓" />
        </h1>
        <div className={s.menus}>
          {menus.map((menu) => {
            return (
              <Link to={menu.link} className={s.menu}>
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
    </div>
  );
};

export default Header;
