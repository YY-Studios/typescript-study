import s from './BestProductList.module.css';
import Title from '@/components/common/Title';
import ProductCard from '../../components/ProductCard';
import { useProducts } from '../../hooks/useProducts';
const BestProductList = () => {
  const { products, loading } = useProducts({
    page: 1,
    size: 4,
    order: 'favorite',
  });
  console.log(products);
  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <Title size={'lg'} whight={'bold'}>
        베스트 상품
      </Title>
      <div className={s.bestProductList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestProductList;
