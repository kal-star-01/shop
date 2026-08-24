import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';
import { ShopGrid } from '../../components/Shop.jsx';
import { useStore } from '../../lib/store.jsx';

function Shop() {
  const { shuffleproducts } = useStore();
  const [dismiss, setDismiss] = useState(0);
  usePageMeta('Shop', 'Shop page - AndShop Ecommerce Vue js, Nuxt js Template');
  const onAlert = (d) => setDismiss(d);
  return (
    <>

      <BreadcrumbSection title="Shop" crumbs={[{text:'Home',to:'/'},{text:'Shop'}]} />
      <section id="shop_main_area" className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="product_filter"><div className="customs_selects">
                <select className="customs_sel_box" name="product">
                  <option>Filter</option><option>Most Popular</option><option>Best Seller</option><option>Tranding</option><option>Featured</option>
                </select>
              </div></div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="product_shot">
                <div className="product_shot_title"><p>Sort By:</p></div>
                <div className="customs_selects">
                  <select className="customs_sel_box" name="product">
                    <option>Sort by Popularity</option><option>Sort by new</option><option>Price: low to high</option><option>Price: high to low</option>
                  </select>
                </div>
                <div className="product_shot_view"><ul>
                  <li><Link to="/shop/shop-3"><i className="fas fa-list"></i></Link></li>
                  <li><Link to="/shop/shop-2"><i className="fas fa-th-large"></i></Link></li>
                  <li><Link to="/shop" className="active"><i className="fas fa-th"></i></Link></li>
                </ul></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ShopGrid products={shuffleproducts} cols="col-lg-3 col-md-4 col-sm-6 col-12" onAlert={onAlert} />
            </div>
          </div>
        </div>
      </section>
      {dismiss > 0 && (
        <div className="alert alert-success fade show" role="alert" style={{ position:'fixed', top:20, right:20, zIndex:2000 }}>
          <p className="font-weight-normal mb-0">Successfully added to your list</p>
          <button type="button" className="close" onClick={()=>setDismiss(0)}><span>&times;</span></button>
        </div>
      )}
    </>
  );
}
export default Shop;
