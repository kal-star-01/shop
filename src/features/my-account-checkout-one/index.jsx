import { useState } from 'react';
import { usePageMeta } from '../../lib/usePageMeta.js';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';
import { required, validEmail } from '../../lib/util.js';

function Page() {
  usePageMeta('Checkout', 'Checkout page - AndShop Ecommerce Vue js, Nuxt js Template');
  const [user, setUser] = useState({ fname: '', lname: '', email: '', companyname: '', countryname: '', city: '', zip: '', faddress: '', messages: '' });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  return (
    <>
      <BreadcrumbSection title="Checkout" crumbs={[{ text: 'Home', to: '/' }, { text: 'Checkout', to: '/my-account/checkout' }]} />
      <section className="ptb-100" id="checkout_one">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="checkout-area-bg bg-white">
                  <div className="check-heading"><h3>Billing Information</h3></div>
                  <div className="check-out-form">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <label htmlFor="fname">First name</label>
                          <input value={user.fname} onChange={(e) => setUser({ ...user, fname: e.target.value })} className="form-control" type="text" id="fname" name="fname" placeholder="First name *" />
                          {submitted && !required(user.fname) && <div className="invalid-feedback" style={{ display: 'block' }}>First Name is required</div>}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <label htmlFor="lname">Last name</label>
                          <input value={user.lname} onChange={(e) => setUser({ ...user, lname: e.target.value })} className="form-control" type="text" id="lname" name="lname" placeholder="Last name *" />
                          {submitted && !required(user.lname) && <div className="invalid-feedback" style={{ display: 'block' }}>Last Name is required</div>}
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <label htmlFor="companyname">Company Name</label>
                          <input value={user.companyname} onChange={(e) => setUser({ ...user, companyname: e.target.value })} className="form-control" type="text" id="companyname" name="companyname" placeholder="Company Name" />
                          {submitted && !required(user.companyname) && <div className="invalid-feedback" style={{ display: 'block' }}>Company Name is required</div>}
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <label htmlFor="email">Email Address<span></span></label>
                          <input value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} className="form-control" type="email" id="email" name="email" placeholder="info@gmail.com" />
                          {submitted && (!required(user.email) ? <div className="invalid-feedback" style={{ display: 'block' }}>Email is required</div> : !validEmail(user.email) && <div className="invalid-feedback" style={{ display: 'block' }}>Email is invalid</div>)}
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <label htmlFor="countryname">Country</label>
                          <select value={user.countryname} onChange={(e) => setUser({ ...user, countryname: e.target.value })} className="form-control first_null" id="countryname">
                            <option value="">Select an option...</option>
                            <option value="AX">usa</option>
                            <option value="AF">Afghanistan</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <label htmlFor="city">State/City</label>
                          <select value={user.city} onChange={(e) => setUser({ ...user, city: e.target.value })} className="form-control first_null" id="city">
                            <option value="">Select an option...</option>
                            <option value="AX">Aland Islands</option>
                            <option value="AF">Afghanistan</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <label htmlFor="zip">State/City</label>
                          <input value={user.zip} onChange={(e) => setUser({ ...user, zip: e.target.value })} className="form-control" type="text" id="zip" placeholder="Enter Your zipcode" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <label htmlFor="faddress">Full Address</label>
                          <input value={user.faddress} onChange={(e) => setUser({ ...user, faddress: e.target.value })} className="form-control" type="text" id="faddress" placeholder="Enter your address here.." />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-group">
                          <label htmlFor="messages">Additional Notes</label>
                          <textarea value={user.messages} onChange={(e) => setUser({ ...user, messages: e.target.value })} className="form-control" rows="5" id="messages" placeholder="Order notes"></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="materialUnchecked" />
                          <label className="form-check-label" htmlFor="materialUnchecked">Save In Address Book</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="order_review box-shadow bg-white">
                  <div className="check-heading"><h3>Your Orders</h3></div>
                  <div className="table-responsive order_table">
                    <table className="table">
                      <thead>
                        <tr><th>Product</th><th>Total</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>Blue Dress For Woman<span className="product-qty">x 2</span></td><td>$90.00</td></tr>
                        <tr><td>Lether Gray Tuxedo<span className="product-qty">x 1</span></td><td>$55.00</td></tr>
                        <tr><td>Woman Full Sliv Dresss<span className="product-qty">x 3</span></td><td>$204.00</td></tr>
                      </tbody>
                      <tfoot>
                        <tr><th>SubTotal</th><td className="product-subtotal">$349.00</td></tr>
                        <tr><th>Shipping</th><td>Free Shipping</td></tr>
                        <tr><th>Total</th><td className="product-subtotal">$349.00</td></tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div className="order_review bg-white">
                  <div className="check-heading"><h3>Payment</h3></div>
                  <div className="payment_method">
                    <div className="payment_option">
                      <div className="custome-radio">
                        <input className="form-check-input" required type="radio" name="payment_option" id="exampleRadios3" value="option3" defaultChecked />
                        <label className="form-check-label" htmlFor="exampleRadios3">Direct Bank Transfer</label>
                        <p className="payment-text" data-method="option3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                      </div>
                      <div className="custome-radio">
                        <input className="form-check-input" type="radio" name="payment_option" id="exampleRadios4" value="option4" />
                        <label className="form-check-label" htmlFor="exampleRadios4">Check Payment</label>
                        <p className="payment-text" data-method="option4">Please send your cheque to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                      </div>
                      <div className="custome-radio">
                        <input className="form-check-input" type="radio" name="payment_option" id="exampleRadios5" value="option5" />
                        <label className="form-check-label" htmlFor="exampleRadios5">Paypal</label>
                        <p className="payment-text" data-method="option5">Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.</p>
                      </div>
                    </div>
                  </div>
                  <button className="theme-btn-one btn-black-overlay btn_sm">Place Order</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default Page;
