import { useState } from 'react';
import ProductCard from './ProductCard';
import { useStore } from '../lib/store.jsx';

export function ShopGrid({ products, cols = 'col-lg-4 col-md-4 col-sm-6 col-12', onAlert }) {
  const [current, setCurrent] = useState(1);
  const paginate = 12;

  const totalPages = Math.ceil(products.length / paginate);
  const setPaginate = (i) => i >= (current - 1) * paginate && i < current * paginate;

  return (
    <>
      <div className="row">
        {products.map((e, o) => (
          <div className={cols} key={o} style={{ display: setPaginate(o) ? undefined : 'none' }}>
            <ProductCard product={e} index={o} onAlert={onAlert} />
          </div>
        ))}
        <div className="col-lg-12">
          {totalPages > 1 && (
            <div className="product-pagination mb-0">
              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)" onClick={() => setCurrent((c) => Math.max(1, c - 1))}>
                      <i className="fa fa-chevron-left" style={{ fontSize: 10 }}></i>
                    </a>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((e) => (
                    <li className={`page-item${e === current ? ' active' : ''}`} key={e}>
                      <a className="page-link" href="javascript:void(0)" onClick={(ev) => { ev.preventDefault(); setCurrent(e); }}>{e}</a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a className="page-link" href="javascript:void(0)" onClick={() => setCurrent((c) => Math.min(totalPages, c + 1))}>
                      <i className="fa fa-chevron-right" style={{ fontSize: 10 }}></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export function ShopSidebar() {
  const { products, shuffleProduct, getallProduct } = useStore();
  const [value, setValue] = useState([50, 1000]);
  const shuffle = () => {
    const t = [...products];
    for (let i = t.length - 1; i > 0; i--) { const e = Math.floor(Math.random() * (i + 1)); [t[i], t[e]] = [t[e], t[i]]; }
    shuffleProduct(t.slice(0, 30));
  };
  return (
    <div className="col-lg-3">
      <div className="shop_sidebar_wrapper">
        <div className="shop_Search">
          <form onSubmit={(e) => { e.preventDefault(); shuffle(); }}>
            <input className="form-control" type="text" placeholder="Search..." onKeyUp={shuffle} />
            <button type="button" onClick={shuffle}><i className="fas fa-search"></i></button>
          </form>
        </div>
        <div className="shop_sidebar_boxed">
          <h4>Product Categories</h4>
          <form>
            {['T-shirts', 'Fashion', 'Bags', 'Jackets', 'Shoes', 'Jeans'].map((c, i) => (
              <label className="custom_boxed" key={c}>
                {c}
                <input type="radio" name="radio" defaultChecked={i === 0} onChange={shuffle} />
                <span className="checkmark"></span>
              </label>
            ))}
          </form>
        </div>
        <div className="shop_sidebar_boxed">
          <h4>Price</h4>
          <div className="price_filter">
            <input type="range" min="0" max="5000" value={value[1]}
              onChange={(e) => { setValue([value[0], +e.target.value]); shuffle(); }} />
            <div className="price-slider-amount mt-3 text-capitalize">Price: ${value[0]} - ${value[1]}</div>
          </div>
        </div>
        <div className="shop_sidebar_boxed">
          <h4>Color</h4>
          <div className="product-variable-color">
            {['red', 'tomato', 'green', 'light-green', 'blue', 'light-blue'].map((c, i) => (
              <label htmlFor={`modal-product-color-${c}`} key={c}>
                <input className="color-select" name="modal-product-color" id={`modal-product-color-${c}`} type="radio" defaultChecked={i === 0} onChange={shuffle} />
                <span className={`product-color-${c}`}></span>
              </label>
            ))}
          </div>
        </div>
        <div className="shop_sidebar_boxed">
          <h4>Size</h4>
          <form id="sizes_input">
            {['XS', 'S', 'M', 'L', 'XL'].map((s, i) => (
              <label className="custom_boxed" key={s}>
                {s}
                <input type="radio" name="radio" defaultChecked={i === 0} onChange={shuffle} />
                <span className="checkmark"></span>
              </label>
            ))}
          </form>
        </div>
        <div className="shop_sidebar_boxed">
          <h4>Brand</h4>
          {['Next', 'Adidas', 'Calvin Klein', 'Nike', 'Geox', 'River Island'].map((b, i) => (
            <label className="custom_boxed" key={b}>
              {b}
              <input type="radio" name="radio" defaultChecked={i === 0} onChange={shuffle} />
              <span className="checkmark"></span>
            </label>
          ))}
          <div className="clear_button">
            <button className="theme-btn-one btn_sm btn-black-overlay mt-1" onClick={() => getallProduct()}>Clear Filter</button>
          </div>
        </div>
      </div>
    </div>
  );
}
