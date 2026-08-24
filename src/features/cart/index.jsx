import { usePageMeta } from '../../lib/usePageMeta.js';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';
import CartTable from './cart-table.jsx';

function Page() {
  usePageMeta('Cart', 'Cart page - AndShop Ecommerce Vue js, Nuxt js Template');
  return (
    <>

      <BreadcrumbSection title="Cart" crumbs={[{text:'Home',to:'/'},{text:'Cart',to:'/cart'}]} />
      <CartTable />
    </>
  );
}
export default Page;
