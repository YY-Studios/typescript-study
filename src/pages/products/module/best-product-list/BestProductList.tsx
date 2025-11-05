import s from './BestProductList.module.css';
import Title from '@/components/common/Title';
import ProductCard from '../../components/ProductCard';
import { useProducts } from '../../hooks/useProducts';
const BestProductList = () => {
  const { products, loading, error } = useProducts({
    page: 1,
    pageSize: 4,
    order: 'favorite',
  });

  if (loading) return <div>Loading...</div>;

  if (error) {
    return (
      <div className={s.errorContainer}>
        <p>상품을 불러오는데 실패했습니다.</p>
        <button onClick={() => window.location.reload()}>다시 시도</button>
      </div>
    );
  }

  return (
    <div>
      <Title size={'lg'} weight={'bold'}>
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
