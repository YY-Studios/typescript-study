import s from './ProductCard.module.css';
import likeDefault from '@assets/like_default.svg';
import likeOn from '@assets/like_on.svg';
import { Link } from 'react-router-dom';
interface ProductProps {
  id?: number;
  name?: string;
  price?: number;
  images?: string[];
}
const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <Link to={''} className={s.productCard}>
      <div className={s.image}>
        <img src={product.images?.[0]} alt="상품1" />
      </div>
      <div className={s.info}>
        <p className={s.tit}>아이패드 미니 팝니다.</p>
        <p className={s.price}>50,000원</p>
        <button className={s.like}>
          <img src={likeDefault} alt="" />
          <span className={s.count}>123</span>
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
