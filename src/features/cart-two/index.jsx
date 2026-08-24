import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';
import { useStore, discountedPrice } from '../../lib/store.jsx';
import { IMG } from '../../lib/util.js';

function Page() {
  usePageMeta('Cart', 'Cart page - AndShop Ecommerce Vue js, Nuxt js Template');
  const { cart, cartTotal, removeCartItem } = useStore();
  return (
    <>
      <BreadcrumbSection title="Cart" crumbs={[{ text: 'Home', to: '/' }, { text: 'Cart', to: '/cart' }]} />
      <section className="ptb-100" id="cart_area_two">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="table_desc border-bottom-0">
                <div className="table_page table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="product_thumb">Image</th>
                        <th className="product_name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product_quantity">Quantity</th>
                        <th className="product_total">Total</th>
                        <th className="product_remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.length ? cart.map((e, r) => (
                        <tr key={r}>
                          <td className="product_thumb"><Link to={`/product/${e.id}`}><img src={IMG(e.images[0] && e.images[0].src)} alt="img" /></Link></td>
                          <td className="product_name"><Link to={`/product/${e.id}`}>{e.title}</Link></td>
                          <td className="product-price">${discountedPrice(e)}</td>
                          <td className="product_quantity"><div className="product_count_one"><input min="1" max="100" value={e.quantity} type="number" /></div></td>
                          <td className="product_total">${discountedPrice(e) * e.quantity}</td>
                          <td className="product_remove"><button className="bg-transparent remove-btn" onClick={() => removeCartItem(r)}><i className="far fa-trash-alt"></i></button></td>
                        </tr>
                      )) : (
                        <tr><td className="border-0">No Item found!</td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="coupon_inner_two">
                <input placeholder="Coupon code" type="text" className="mb-2" />
                <button type="submit" className="theme-btn-one btn-black-overlay btn_sm">Apply coupon</button>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div data-aos="fade-up" data-aos-delay="400" className="coupon_code right">
                <h3>Cart Total</h3>
                <div className="coupon_inner">
                  <div className="cart_subtotal"><p>Subtotal</p><p className="cart_amount">${cartTotal}</p></div>
                  <div className="cart_subtotal"><p>Shipping</p><p className="cart_amount"><span>Flat Rate:</span> $25.00</p></div>
                  <a href="#">Calculate shipping</a>
                  <div className="cart_subtotal"><p>Total</p><p className="cart_amount">${cartTotal + 25}</p></div>
                  <div className="checkout_btn">
                    <Link className="theme-btn-one btn-black-overlay btn_sm" to="/my-account/checkout-1">Proceed to Checkout</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Page;
