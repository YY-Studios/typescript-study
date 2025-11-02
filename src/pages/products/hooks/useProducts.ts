import axios from 'axios';
import { useState, useEffect } from 'react';

interface ProductProps {
  id?: number;
  name?: string;
  price?: number;
  images?: string[];
}

interface useProductsPrams {
  page?: number;
  size?: number;
  order?: string;
}

export function useProducts({
  page,
  size,
  order = 'recent',
}: useProductsPrams) {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${size}&orderBy=${order}`,
      )
      .then((response) => {
        setProducts(response.data.list);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, size]);

  return { products, loading };
}
