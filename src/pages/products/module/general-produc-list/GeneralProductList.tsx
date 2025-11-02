import { useProducts } from '../../hooks/useProducts';
import Title from '@/components/common/Title';
import ProductCard from '../../components/ProductCard';
import s from './GeneralProductList.module.css';

const GeneralProductList = () => {
  const { products, loading } = useProducts({ page: 1, size: 10 });

  if (loading) return <div>loading...</div>;
  return (
    <div className={s.generalWrap}>
      <Title size={'lg'} whight={'bold'}>
        전체 상품
      </Title>
      <div className={s.generalPsoructList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default GeneralProductList;
