import { useProducts } from '../../hooks/useProducts';
import s from './GeneralProductList.module.css';
import Title from '@/components/common/Title';
import ProductCard from '../../components/ProductCard';
import Filter from '../filter/filter';

const GeneralProductList = () => {
  const { products, loading, error } = useProducts({
    page: 1,
    pageSize: 10,
    order: 'recent',
  });

  if (error) {
    return (
      <div className={s.errorContainer}>
        <p>상품을 불러오는데 실패했습니다.</p>
        <button onClick={() => window.location.reload()}>다시 시도</button>
      </div>
    );
  }

  if (loading) return <div>loading...</div>;
  return (
    <div className={s.generalWrap}>
      <div className={s.header}>
        <Title size={'lg'} weight={'bold'}>
          전체 상품
        </Title>
        <Filter></Filter>
      </div>
      <div className={s.generalPsoructList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default GeneralProductList;
