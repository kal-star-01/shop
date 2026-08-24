import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';
import { ShopGrid, ShopSidebar } from '../../components/Shop.jsx';
import { useStore } from '../../lib/store.jsx';

function Page() {
  const { shuffleproducts } = useStore();
  const [dismiss, setDismiss] = useState(0);
  const onAlert = (d) => setDismiss(d);
  usePageMeta('Shop', 'Shop page');
  return (
    <>

      <BreadcrumbSection title="Shop" crumbs={[{ text: 'Home', to: '/' }, { text: 'Shop' }]} />
      <section id="shop_main_area" className="ptb-100"><div className="container">
        <div className="row">
          <div className="col-lg-6"><div className="product_filter"><div className="customs_selects"><select className="customs_sel_box"><option>Filter</option><option>Most Popular</option><option>Best Seller</option><option>Tranding</option><option>Featured</option></select></div></div></div>
          <div className="col-lg-6"><div className="product_shot"><div className="product_shot_title"><p>Sort By:</p></div><div className="customs_selects"><select className="customs_sel_box"><option>Sort by Popularity</option><option>Sort by new</option><option>Price: low to high</option><option>Price: high to low</option></select></div><div className="product_shot_view"><ul><li><Link to="/shop/shop-3"><i className="fas fa-list"></i></Link></li><li><Link to="/shop/shop-2"><i className="fas fa-th-large"></i></Link></li><li><Link to="/shop" className="active"><i className="fas fa-th"></i></Link></li></ul></div></div></div>
        </div>
        <div className="row">
          <div className="col-lg-9"><ShopGrid products={shuffleproducts} cols="col-lg-4 col-md-4 col-sm-6 col-12" onAlert={onAlert} /></div>
          <ShopSidebar onAlert={onAlert} />
        </div>
      </div></section>
      {dismiss > 0 && <div className="alert alert-success" style={{ position: 'fixed', top: 20, right: 20, zIndex: 2000 }}><p className="mb-0">Successfully added to your list</p></div>}
    </>
  );
}
export default Page;
