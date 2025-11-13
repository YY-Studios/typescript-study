import { useProducts } from '../../hooks/useProducts';
import s from './GeneralProductList.module.css';
import Title from '@/components/common/Title';
import ProductCard from '../../components/ProductCard';
import Filter from '../filter/Filter';
import Pagenation from '../pagenation/Pagenation';
import { useEffect, useState } from 'react';

const GeneralProductList = () => {
  const [order, setOrder] = useState<'recent' | 'favorite'>('recent');
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [debouncedKeyword, setDebouncedKeyword] = useState('');
  const { products, loading, error } = useProducts({
    page,
    pageSize: 10,
    order,
    keyword: debouncedKeyword,
  });

  // 여기는 디바운스에요
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedKeyword(keyword);
      console.log(1);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  const handleChangeKeyword = (newKeyword: string) => {
    setKeyword(newKeyword);
    setPage(1);
  };

  const handleChangeOrder = (newOrder: string) => {
    setOrder(newOrder as 'recent' | 'favorite');
    setPage(1);
  };

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
        <Filter
          onOrderChange={handleChangeOrder}
          onKeywordChange={handleChangeKeyword}
          order={order}
        ></Filter>
      </div>
      <div className={s.generalPsoructList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagenation />
    </div>
  );
};

export default GeneralProductList;
