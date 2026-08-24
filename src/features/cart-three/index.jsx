import { usePageMeta } from '../../lib/usePageMeta.js';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';
import { IMG } from '../../lib/util.js';

const ITEMS = [
  { title: 'Handbag fringilla', price: '$65.00', total: '$130.00', img: '1.7190443.png' },
  { title: 'Handbags justo', price: '$90.00', total: '$180.00', img: '2.57e4309.png' },
  { title: 'Handbag elit', price: '$80.00', total: '$160.00', img: '3.1d2f5e9.png' },
];

function Page() {
  usePageMeta('Cart', 'Cart page - AndShop Ecommerce Vue js, Nuxt js Template');
  return (
    <>
      <BreadcrumbSection title="Cart" crumbs={[{ text: 'Home', to: '/' }, { text: 'Cart', to: '/cart' }]} />
      <section className="ptb-100" id="cart_area_three">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
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
                      {ITEMS.map((it, i) => (
                        <tr key={i}>
                          <td className="product_remove"><a href="#"><i className="far fa-trash-alt"></i></a></td>
                          <td className="product_thumb"><a href="/product/product-single-2"><img src={IMG(it.img)} alt="img" /></a></td>
                          <td className="product_name"><a href="/product/product-single-2">{it.title}</a></td>
                          <td className="product-price">{it.price}</td>
                          <td className="product_quantity"><label>Quantity</label><input min="1" max="100" value="1" type="number" /></td>
                          <td className="product_total">{it.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="cart_submit">
                <button className="theme-btn-one btn-black-overlay btn_sm" type="submit">update cart</button>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="coupon_code left">
                <h3>Cart Total</h3>
                <div className="total_cart_inner">
                  <h5>Shipping:</h5>
                  <form action="#!" id="total_cart_form_three">
                    <label className="custom_boxed">Free Shipping<span className="rigth_cart">$0.00</span><input type="radio" name="radio" /><span className="checkmark"></span></label>
                    <label className="custom_boxed">Standard<span className="rigth_cart">$30.00</span><input type="radio" name="radio" /><span className="checkmark"></span></label>
                    <label className="custom_boxed">Express<span className="rigth_cart">$20.00</span><input type="radio" name="radio" /><span className="checkmark"></span></label>
                    <h6 className="estimate_for_country">Estimate For Your Country</h6>
                  </form>
                  <div className="total_catr_three_bottom">
                    <h5>Total Cart<span className="rigth_cart">$50.00</span></h5>
                  </div>
                  <div className="cart_submit">
                    <a className="theme-btn-one btn-black-overlay btn_sm" href="checkout.html">Checkout</a>
                  </div>
                </div>
              </div>
              <div className="coupon_code left bottom_code">
                <h3>Coupon</h3>
                <div className="coupon_inner">
                  <p>Enter your coupon code if you have one.</p>
                  <input className="mb-2" placeholder="Coupon code" type="text" />
                  <button className="theme-btn-one btn-black-overlay btn_sm" type="submit">Apply coupon</button>
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
