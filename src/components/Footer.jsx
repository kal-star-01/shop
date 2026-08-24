import { useState } from 'react';
import { Link } from 'react-router-dom';
import { required, validEmail } from '../lib/util.js';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const emailRequired = required(email);
  const emailValid = validEmail(email);
  const showErr = submitted && !emailRequired;
  const showInvalid = submitted && emailRequired && !emailValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (emailRequired && emailValid) alert('Thanks for Subscribe newsletter!');
  };

  return (
    <div>
      <footer id="footer_one">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="footer_left_side">
                <Link to="/"><img src="/assets/img/logo.f486653.png" alt="logo" /></Link>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati culpa assumenda voluptas placeat amet consectetur adipisicing elit. Obcaecati culpa assumenda voluptas placeat.</p>
                <div className="footer_left_side_icon">
                  <ul>
                    <li><a href="#!"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#!"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#!"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="#!"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#!"><i className="fab fa-google-plus-g"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="footer_one_widget">
                <h3>INFORMATION</h3>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/faq">Frequently Questions</Link></li>
                  <li><Link to="/my-account/order-tracking">Order Tracking</Link></li>
                  <li><Link to="/my-account/compare">Compare</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 col-12">
              <div className="footer_one_widget">
                <h3>Your Account</h3>
                <ul>
                  <li><Link to="/cart/">Cart View One</Link></li>
                  <li><Link to="/cart/cart-2">Cart View Two</Link></li>
                  <li><Link to="/cart/empty-cart">Empty Cart</Link></li>
                  <li><Link to="/my-account/checkout-1">Checkout View One</Link></li>
                  <li><Link to="/my-account/checkout-2">Checkout View Two</Link></li>
                  <li><Link to="/my-account/wishlist">Wishlist</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="footer_one_widget">
                <h3>NEWSLETTER</h3>
                <div className="subscribe-form" id="mc_embed_signup">
                  <form onSubmit={handleSubmit}>
                    <div className="mc-form">
                      <input value={email} onChange={(e) => setEmail(e.target.value)}
                        className={`form-control${showErr || showInvalid ? ' is-invalid' : ''}`}
                        type="email" id="email" name="email" placeholder="Your Mail*" />
                      {(showErr || showInvalid) && (
                        <div className="invalid-feedback" style={{ display: 'block' }}>
                          {showErr ? 'Email is required' : 'Email is invalid'}
                        </div>
                      )}
                      <div className="clear">
                        <button className="theme-btn-one btn_md" name="subscribe">
                          <i className="icon-cursor"></i> Send Mail
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section id="copyright_one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="copyright_left">
                <h6>© CopyRight 2021 <span>AndShop</span></h6>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="copyright_right">
                <img src="/assets/img/payment.d633c89.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
