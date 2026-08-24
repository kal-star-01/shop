import { Link } from 'react-router-dom';
import { useStore, discountedPrice } from '../../lib/store.jsx';
import { IMG } from '../../lib/util.js';

export default function CartTable() {
  const { cart, cartTotal, removeCartItem } = useStore();
  return (
    <section className="ptb-100" id="cart_area_one">
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
                      <th className="product_quantity">Quantity</th>
                      <th className="product_total">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.length ? cart.map((e, c) => (
                      <tr key={c}>
                        <td className="product_remove">
                          <button className="bg-transparent remove-btn" onClick={() => removeCartItem(e)}><i className="far fa-trash-alt"></i></button>
                        </td>
                        <td className="product_thumb">
                          <Link to={`/product/${e.id}`}><img src={IMG(e.images[0] && e.images[0].src)} alt="img" /></Link>
                        </td>
                        <td className="product_name"><Link to={`/product/${e.id}`}>{e.title}</Link></td>
                        <td className="product-price">${discountedPrice(e)}</td>
                        <td className="product_quantity"><label>Quantity</label><input min="1" max="100" type="number" value={e.quantity} readOnly /></td>
                        <td className="product_total">${(discountedPrice(e) * e.quantity).toFixed(2)}</td>
                      </tr>
                    )) : (
                      <tr><td className="border-0">No Item found!</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="coupon_code left" data-aos="fade-up" data-aos-delay="200">
              <h3>Coupon</h3>
              <div className="coupon_inner">
                <p>Enter your coupon code if you have one.</p>
                <input className="mb-2" placeholder="Coupon code" type="text" />
                <button className="theme-btn-one btn-black-overlay btn_sm" type="submit">Apply coupon</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="coupon_code right" data-aos="fade-up" data-aos-delay="400">
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
  );
}
