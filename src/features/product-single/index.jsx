import { usePageMeta } from '../../lib/usePageMeta.js';
import ProductSingleView from '../../components/ProductSingle.jsx';

function ProductSingle() {
  usePageMeta('Product Single', 'Shop page - AndShop Ecommerce Vue js, Nuxt js Template');
  return (
    <>

      <ProductSingleView variant={1} />
    </>
  );
}
export default ProductSingle;
