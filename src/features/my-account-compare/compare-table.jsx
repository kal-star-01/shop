import { Link } from 'react-router-dom';
import { useStore, discountedPrice } from '../../lib/store.jsx';
import { IMG } from '../../lib/util.js';

export default function CompareTable() {
  const { compare, removeCompareItem, addToCart } = useStore();
  return (
    <section className="ptb-100" id="compare_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="table_desc border-bottom-0">
              <div className="table_page table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th className="product_remove">Remove</th>
                      <th className="product_thumb">Image</th>
                      <th className="product_name">Product</th>
                      <th className="product-price">Price</th>
                      <th className="product_total">Add To Cart</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compare.length ? compare.map((e, c) => (
                      <tr key={c}>
                        <td className="product_remove"><button className="bg-transparent remove-btn" onClick={() => removeCompareItem(e)}><i className="far fa-trash-alt"></i></button></td>
                        <td className="product_thumb"><Link to={`/product/${e.id}`}><img src={IMG(e.images[0] && e.images[0].src)} alt="img" /></Link></td>
                        <td className="product_name"><Link to={`/product/${e.id}`}>{e.title}</Link></td>
                        <td className="product-price">${discountedPrice(e)}</td>
                        <td className="product_total"><button className="theme-btn-one btn-black-overlay btn_sm" onClick={() => addToCart(e)}>Add To Cart</button></td>
                      </tr>
                    )) : (
                      <tr><td className="border-0">No item found to compare!</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
