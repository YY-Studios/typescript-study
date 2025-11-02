import BestProductList from './module/best-product-list/BestProductList';
import GeneralProductList from './module/general-produc-list/GeneralProductList';
const Products = () => {
  return (
    <div className="productWrap">
      <BestProductList />
      <GeneralProductList />
    </div>
  );
};

export default Products;
