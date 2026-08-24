import { usePageMeta } from '../../lib/usePageMeta.js';
import ProductSingleView from '../../components/ProductSingle.jsx';

function Page() {
  usePageMeta('Product Single', 'Shop page - AndShop Ecommerce Vue js, Nuxt js Template');
  return (
    <>

      <ProductSingleView variant={2} />
    </>
  );
}
export default Page;
