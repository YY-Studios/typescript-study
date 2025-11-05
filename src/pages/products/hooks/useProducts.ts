import { useState, useEffect } from 'react';
import type { ProductProps, ProductsPrams } from '@/types/product';
import { productListApi } from '@/api/product/productListApi';

export function useProducts({
  page,
  pageSize,
  order = 'recent',
}: ProductsPrams) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await productListApi.getProducts({
          page,
          pageSize,
          order,
        });
        setProducts(response.data.list);
        setError(null);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [page, pageSize, order]);

  return { products, loading, error };
}
