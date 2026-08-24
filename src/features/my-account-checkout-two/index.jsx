import { useState } from 'react';
import { usePageMeta } from '../../lib/usePageMeta.js';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';

function Page() {
  usePageMeta('Checkout', 'Checkout page - AndShop Ecommerce Vue js, Nuxt js Template');
  const [openLogin, setOpenLogin] = useState(false);
  const [openCoupon, setOpenCoupon] = useState(false);
  const [userLogin, setUserLogin] = useState({ username: '', password: '' });
  const [user, setUser] = useState({ fname: '', lname: '', companyname: '', country: '2', street: '', city: '', state: '', phone: '', email: '' });
  return (
    <>
      <BreadcrumbSection title="Checkout" crumbs={[{ text: 'Home', to: '/' }, { text: 'Checkout', to: '/my-account/checkout-2' }]} />
      <section className="ptb-100" id="checkout_two">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="accordion" role="tablist">
                <div className="user-actions">
                  <h3 role="tab"><i className="far fa-file"></i> Returning customer? <a href="#" onClick={(e) => { e.preventDefault(); setOpenLogin(!openLogin); }} className="border-0 p-0 bg-transparent">Click here to login</a></h3>
                  <div className={`checkout_info${openLogin ? ' show' : ''}`} style={{ display: openLogin ? 'block' : 'none' }}>
                    <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer please proceed to the Billing &amp; Shipping section.</p>
                    <form>
                      <div className="form_group default-form-box">
                        <label htmlFor="username">Username or email<span>*</span></label>
                        <input value={userLogin.username} onChange={(e) => setUserLogin({ ...userLogin, username: e.target.value })} className="form-control" type="text" id="username" name="username" />
                      </div>
                      <div className="form_group default-form-box">
                        <label htmlFor="password">Password<span>*</span></label>
                        <input value={userLogin.password} onChange={(e) => setUserLogin({ ...userLogin, password: e.target.value })} className="form-control" type="password" id="password" name="password" />
                      </div>
                      <div className="form_group group_3 default-form-box">
                        <button className="theme-btn-one btn-black-overlay btn_md">Login</button>
                        <label className="checkbox-default"><input type="checkbox" /><span>Remember me</span></label>
                      </div>
                      <a href="#">Lost your password?</a>
                    </form>
                  </div>
                </div>
                <div className="user-actions">
                  <h3 role="tab"><i className="far fa-file"></i> Returning customer? <a href="#" onClick={(e) => { e.preventDefault(); setOpenCoupon(!openCoupon); }} className="border-0 p-0 bg-transparent">Click here to enter your code</a></h3>
                  <div className="checkout_info checkout_coupon" style={{ display: openCoupon ? 'block' : 'none' }}>
                    <form action="#"><input placeholder="Coupon code" type="text" /><button className="theme-btn-one btn btn-black-overlay btn-md" type="button">Apply coupon</button></form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="checkout_area_two">
                <form>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="checkout_form_area">
                        <h3>Billing Details</h3>
                        <div className="row pt-4">
                          <div className="col-lg-6"><div className="default-form-box"><label htmlFor="fname">First Name<span>*</span></label><input value={user.fname} onChange={(e) => setUser({ ...user, fname: e.target.value })} className="form-control" type="text" id="fname" name="fname" /></div></div>
                          <div className="col-lg-6"><div className="default-form-box"><label htmlFor="lname">Last Name<span>*</span></label><input value={user.lname} onChange={(e) => setUser({ ...user, lname: e.target.value })} className="form-control" type="text" id="lname" name="lname" /></div></div>
                          <div className="col-12"><div className="default-form-box"><label htmlFor="companyname">Company Name</label><input value={user.companyname} onChange={(e) => setUser({ ...user, companyname: e.target.value })} className="form-control" type="text" id="companyname" name="companyname" /></div></div>
                          <div className="col-12"><div className="default-form-box"><label htmlFor="country">country<span>*</span></label><select value={user.country} onChange={(e) => setUser({ ...user, country: e.target.value })} className="country_option nice-select wide form-control" name="country" id="country"><option value="2">Bangladesh</option><option value="3">Algeria</option><option value="4">Afghanistan</option><option value="5">Ghana</option><option value="6">Albania</option><option value="7">Bahrain</option><option value="8">Colombia</option><option value="9">Dominican Republic</option></select></div></div>
                          <div className="col-12"><div className="default-form-box"><label htmlFor="street">Street address<span>*</span></label><input value={user.street} onChange={(e) => setUser({ ...user, street: e.target.value })} className="form-control" id="street" name="street" placeholder="House number and street name" type="text" /></div></div>
                          <div className="col-12"><div className="default-form-box"><input className="form-control" placeholder="Apartment, suite, unit etc. (optional)" type="text" /></div></div>
                          <div className="col-12"><div className="default-form-box"><label htmlFor="city">Town / City<span>*</span></label><input value={user.city} onChange={(e) => setUser({ ...user, city: e.target.value })} className="form-control" id="city" name="city" type="text" /></div></div>
                          <div className="col-12"><div className="default-form-box"><label htmlFor="state">State / County<span>*</span></label><input value={user.state} onChange={(e) => setUser({ ...user, state: e.target.value })} className="form-control" type="text" id="state" name="state" /></div></div>
                          <div className="col-lg-6"><div className="default-form-box"><label htmlFor="phone">Phone<span>*</span></label><input value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} className="form-control" type="text" id="phone" name="phone" /></div></div>
                          <div className="col-lg-6"><div className="default-form-box"><label htmlFor="email">Email Address<span>*</span></label><input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="form-control" type="email" id="email" name="email" /></div></div>
                          <div className="col-12"><div className="order-notes"><label htmlFor="order_note">Order Notes</label><textarea className="form-control" id="order_note" placeholder="Notes about your order, e.g. special notes for delivery." rows="5"></textarea></div></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <h3>Your order</h3>
                      <div className="order_table table-responsive mb-0">
                        <table>
                          <thead><tr><th>Product</th><th>Total</th></tr></thead>
                          <tbody>
                            <tr><td>Handbag fringilla<strong>× 2</strong></td><td>$165.00</td></tr>
                            <tr><td>Handbag justo<strong>× 2</strong></td><td>$50.00</td></tr>
                            <tr><td>Handbag elit<strong>× 2</strong></td><td>$50.00</td></tr>
                            <tr><td>Handbag Rutrum<strong>× 1</strong></td><td>$50.00</td></tr>
                          </tbody>
                          <tfoot>
                            <tr><th>Cart Subtotal</th><td>$215.00</td></tr>
                            <tr><th>Shipping</th><td><strong>$5.00</strong></td></tr>
                            <tr className="order_total"><th>Order Total</th><td><strong>$220.00</strong></td></tr>
                          </tfoot>
                        </table>
                      </div>
                      <div className="payment_method">
                        <div className="payment-inner panel-default">
                          <button className="bg-transparent p-0 border-0"><input type="checkbox" id="currencyCod" /><label htmlFor="currencyCod"></label> Cash on Delivery</button>
                        </div>
                        <div className="payment-inner panel-default">
                          <button className="bg-transparent p-0 border-0"><input type="checkbox" id="currencyPaypal" /><label htmlFor="currencyPaypal"></label> PayPal</button>
                        </div>
                        <div className="order_button pt-3"><button className="theme-btn-one btn-black-overlay btn_sm">Place Order</button></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Page;
