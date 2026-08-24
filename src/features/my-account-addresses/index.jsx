import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';

export default function Addresses() {
  usePageMeta({"title":"Address - AndShop Ecommerce Vue js Template","metas":[{"name":"description","content":"Addresses page - AndShop Ecommerce Vue js, Nuxt js Template"}]});

    return (
      <>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        <div id="__nuxt">
          <div className="nuxt-progress" style={{ width: "100%" }}></div>
          <div id="__layout">
            <div>
              <div>
                <section id="common_banner_one">
                  <div className="container ">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="common_banner_text">
                          <h2>Address</h2>
                          {' '}
                          <ol className="breadcrumb bg-transparent">
                            <li className="breadcrumb-item">
                              <Link to="/" className="nuxt-link-active">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">
                              <span aria-current="location">Addresses</span>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                <section id="my-account_area" className="ptb-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-3 col-lg-3">
                        <div className="dashboard_tab_button">
                          <ul className="navbar-nav">
                            <li className="nav-item">
                              <Link to="/my-account" className="nav-link nuxt-link-active">
                                <i className="fas fa-tachometer-alt"></i>
                                {"Dashboard"}
                              </Link>
                            </li>
                            {' '}
                            <li className="nav-item">
                              <Link to="/my-account/orders" className="nav-link">
                                <i className="fas fa-cart-arrow-down"></i>
                                {"Orders"}
                              </Link>
                            </li>
                            {' '}
                            <li className="nav-item">
                              <Link to="/my-account/downloads" className="nav-link">
                                <i className="fas fa-cloud-download-alt"></i>
                                {"Downloads"}
                              </Link>
                            </li>
                            {' '}
                            <li className="nav-item">
                              <Link to="/my-account/addresses" aria-current="page" className="nav-link nuxt-link-exact-active nuxt-link-active">
                                <i className="fas fa-map-marker-alt"></i>
                                {"Addresses"}
                              </Link>
                            </li>
                            {' '}
                            <li className="nav-item">
                              <Link to="/my-account/account-details" className="nav-link">
                                <i className="fas fa-user"></i>
                                {"Account details"}
                              </Link>
                            </li>
                            {' '}
                            <li className="nav-item">
                              <Link to="/login" className="nav-link">
                                <i className="fas fa-sign-out-alt"></i>
                                {"Logout"}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {' '}
                      <div className="col-sm-12 col-md-9 col-lg-9">
                        <div className="dashboard_content">
                          <div className="myaccount-content">
                            <h4 className="title">Billing Address</h4>
                            {' '}
                            <div className="billing_address">
                              <h5>
                                <strong>Alex Porty</strong>
                              </h5>
                              {' '}
                              <p>
                                {"\n                                1234 Market, Suite #900 "}
                                <br />
                                {"\n                                Lorem Ipsum, #12345\n                               "}
                              </p>
                              {' '}
                              <p>Mobile: (123) 123-456789</p>
                              {' '}
                              <Link to="/my-account/account-info-edit" className="theme-btn-one bg-black btn_sm">Edit Address</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              {' '}
              <div>
                
              </div>
            </div>
          </div>
        </div>
        
      </>
    );
}
