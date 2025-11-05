export interface ProductProps {
  id: number;
  name: string;
  price: number;
  images: string[];
}

export interface ProductsPrams {
  page?: number;
  pageSize?: number;
  order?: 'recent' | 'favorite';
  keyword?: string;
}
