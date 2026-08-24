import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';

function Page() {
  usePageMeta('Account Details', 'Account details - AndShop Ecommerce Vue js Template');
  return (
    <>
      <BreadcrumbSection title="Account Details" crumbs={[{ text: 'Home', to: '/' }, { text: 'Account details', to: '/my-account/account-details' }]} />
      <section id="my-account_area" className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3">
              <div className="dashboard_tab_button">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/my-account" className="nav-link">
                      <i className="fas fa-tachometer-alt"></i>
                      {"Dashboard"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/my-account/orders" className="nav-link">
                      <i className="fas fa-cart-arrow-down"></i>
                      {"Orders"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/my-account/downloads" className="nav-link">
                      <i className="fas fa-cloud-download-alt"></i>
                      {"Downloads"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/my-account/addresses" className="nav-link">
                      <i className="fas fa-map-marker-alt"></i>
                      {"Addresses"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/my-account/account-details" aria-current="page" className="nav-link nuxt-link-exact-active nuxt-link-active">
                      <i className="fas fa-user"></i>
                      {"Account details"}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      <i className="fas fa-sign-out-alt"></i>
                      {"Logout"}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-9 col-lg-9">
              <div className="dashboard_content">
                <div className="myaccount-content">
                  <h4 className="title">Account details</h4>
                  <div className="login_form_container">
                    <div className="account_details_form">
                      <form>
                        <div className="input-radio">
                          <span className="custom-radio"><input type="radio" checked readOnly value="1" name="id_gender" /> Mr.</span>
                          <span className="custom-radio"><input type="radio" value="1" name="id_gender" /> Mrs.</span>
                        </div>
                        <br />
                        <div className="default-form-box mb-20"><label htmlFor="fname">First name</label><input type="text" id="fname" name="fname" className="form-control" /></div>
                        <div className="default-form-box mb-20"><label htmlFor="lname">Last name</label><input type="text" id="lname" name="lname" className="form-control" /></div>
                        <div className="default-form-box mb-20"><label htmlFor="email">Email</label><input type="email" id="email" name="email" className="form-control" /></div>
                        <div className="default-form-box mb-20"><label htmlFor="password">Password</label><input type="password" id="password" name="password" className="form-control" /></div>
                        <div className="default-form-box mb-20"><label htmlFor="birthday">Birthdate</label><input type="date" name="birthday" id="birthday" className="form-control" /></div>
                        <span className="example"> (E.g.: 05/31/1970) </span>
                        <br />
                        <label htmlFor="offer" className="checkbox-default"><input type="checkbox" id="receive_offer" /><span>Receive offers from our partners</span></label>
                        <br />
                        <label htmlFor="newsletter" className="checkbox-default checkbox-default-more-text"><input type="checkbox" id="newsletter" /><span>Sign up for our newsletter<br /><em>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</em></span></label>
                        <div className="save_button mt-3"><button className="theme-btn-one btn-black-overlay btn_md">Save Change</button></div>
                      </form>
                    </div>
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
