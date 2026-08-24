import { usePageMeta } from '../../lib/usePageMeta.js';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';
import WishlistTable from './wishlist-table.jsx';

function Page() {
  usePageMeta('Wishlist', 'Wishlist page');
  return (
    <>

      <BreadcrumbSection title="Wishlist" crumbs={[{text:'Home',to:'/'},{text:'Wishlist'}]} />
      <WishlistTable />
    </>
  );
}
export default Page;
