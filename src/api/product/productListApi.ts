import axiosApi from '../axios';
import type { ProductsPrams } from '@/types/product';

export const productListApi = {
  getProducts: (params: ProductsPrams) => {
    return axiosApi('/products', { params });
  },
};
