import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';

export default function MyAccount() {
  usePageMeta({"title":"My Account - AndShop Ecommerce Vue js Template","metas":[{"name":"description","content":"My Account page - AndShop Ecommerce Vue js, Nuxt js Template"}]});

    return (
      <>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        <div id="__nuxt">
          <div id="__layout">
            <div>
              <div>
                <section id="common_banner_one">
                  <div className="container ">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="common_banner_text">
                          <h2>My Account</h2>
                          {' '}
                          <ol className="breadcrumb bg-transparent">
                            <li className="breadcrumb-item">
                              <Link to="/" className="nuxt-link-active">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">
                              <span aria-current="location">Dashboard</span>
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
                              <Link to="/my-account" aria-current="page" className="nav-link nuxt-link-exact-active nuxt-link-active">
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
                              <Link to="/my-account/addresses" className="nav-link">
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
                            <h4 className="title">Dashboard </h4>
                            {' '}
                            <p>
                              {"From your account dashboard. you can easily check & view your "}
                              <Link to="/my-account/orders" className="">recent
                                                              orders</Link>
                              {", manage your "}
                              <Link to="/my-account/addresses" className="">shipping and billing addresses</Link>
                              {" and "}
                              <Link to="/my-account/account-details" className="">Edit your password and account details.</Link>
                            </p>
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
