import s from './ProductCard.module.css';
import likeDefault from '@assets/like_default.svg';
// import likeOn from '@assets/like_on.svg';
import { Link } from 'react-router-dom';
interface ProductProps {
  id?: number;
  name?: string;
  price?: number;
  images?: string[];
}
const ProductCard = ({ product }: { product: ProductProps }) => {
  const { id, name, price, images } = product;
  return (
    <Link to={`ewkfwefkwef/${id}`} className={s.productCard}>
      <div className={s.image}>
        <img src={images?.[0] || ''} alt="상품1" />
      </div>
      <div className={s.info}>
        <p className={s.tit}>{name}</p>
        <p className={s.price}>{price}</p>
        <button className={s.like}>
          <img src={likeDefault} alt="" />
          <span className={s.count}>123</span>
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
