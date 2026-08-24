import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';
import ProductCard from '../../components/ProductCard.jsx';
import { useStore } from '../../lib/store.jsx';

function Page() {
  const { shuffleproducts } = useStore();
  const [dismiss, setDismiss] = useState(0);
  const [current, setCurrent] = useState(1);
  const paginate = 12;
  const onAlert = (d) => setDismiss(d);
  usePageMeta('Shop List View', 'Shop page');
  const totalPages = Math.ceil(shuffleproducts.length / paginate);
  const onPage = (i) => i >= (current - 1) * paginate && i < current * paginate;
  return (
    <>

      <BreadcrumbSection title="Shop List View" crumbs={[{ text: 'Home', to: '/' }, { text: 'Shop' }]} />
      <section id="shop_main_area" className="ptb-100"><div className="container">
        <div className="row">
          <div className="col-lg-6"><div className="product_filter"><div className="customs_selects"><select className="customs_sel_box"><option>Filter</option><option>Most Popular</option><option>Best Seller</option><option>Tranding</option><option>Featured</option></select></div></div></div>
          <div className="col-lg-6"><div className="product_shot"><div className="product_shot_title"><p>Sort By:</p></div><div className="customs_selects"><select className="customs_sel_box"><option>Sort by Popularity</option><option>Sort by new</option><option>Price: low to high</option><option>Price: high to low</option></select></div><div className="product_shot_view"><ul><li><Link to="/shop/shop-3"><i className="fas fa-list"></i></Link></li><li><Link to="/shop/shop-2"><i className="fas fa-th-large"></i></Link></li><li><Link to="/shop" className="active"><i className="fas fa-th"></i></Link></li></ul></div></div></div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            {shuffleproducts.map((p, i) => (
              <div className="col-lg-12 col-md-6 col-sm-6 col-12" key={i} style={{ display: onPage(i) ? undefined : 'none' }}>
                <ProductCard product={p} variant={7} onAlert={onAlert} />
              </div>
            ))}
            <div className="col-lg-12">
              <div className="product-pagination mb-0">
                <nav aria-label="Page navigation">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0)" onClick={() => setCurrent((c) => Math.max(1, c - 1))}>
                        <span aria-hidden="true"><i className="fa fa-chevron-left" style={{ fontSize: 10 }}></i></span>
                      </a>
                    </li>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((e) => (
                      <li className={`page-item${e === current ? ' active' : ''}`} key={e}>
                        <a className="page-link" href="javascript:void(0)" onClick={(ev) => { ev.preventDefault(); setCurrent(e); }}>{e}</a>
                      </li>
                    ))}
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0)" onClick={() => setCurrent((c) => Math.min(totalPages, c + 1))}>
                        <span aria-hidden="true"><i className="fa fa-chevron-right" style={{ fontSize: 10 }}></i></span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div></section>
      {dismiss > 0 && <div className="alert alert-success" style={{ position: 'fixed', top: 20, right: 20, zIndex: 2000 }}><p className="mb-0">Successfully added to your list</p></div>}
    </>
  );
}
export default Page;
