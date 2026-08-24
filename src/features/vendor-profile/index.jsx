import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';

export default function Profile() {
  usePageMeta({"title":"Vendor - AndShop Ecommerce Vue js Template","metas":[{"name":"description","content":"Vendor Dashboard - AndShop Ecommerce Vue js, Nuxt js Template"}]});

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
                          <h2>Vendor</h2>
                          {' '}
                          <ol className="breadcrumb bg-transparent">
                            <li className="breadcrumb-item">
                              <Link to="/" className="nuxt-link-active">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">
                              <span aria-current="location">Vendor</span>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                <section id="vendor_area" className="ptb-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12 col-md-3 col-lg-3">
                        <div className="dashboard_tab_button">
                          <ul className="navbar-nav">
                            <li className="nav-item">
                              <Link to="/vendor-dashboard" className="nav-link nuxt-link-active">
                                <i className="fas fa-tachometer-alt"></i>
                                {"Dashboard"}
                              </Link>
                            </li>
                            {' '}
                            <li className="nav-item">
                              <Link to="/vendor-dashboard/product" className="nav-link">
                                <i className="fas fa-shopping-cart"></i>
                                {"Product"}
                              </Link>
                            </li>
                            {' '}
                            <li className="nav-item">
                              <Link to="/vendor-dashboard/order" className="nav-link">
                                <i className="fas fa-shopping-bag"></i>
                                {"Order"}
                              </Link>
                            </li>
                            {' '}
                            <li className="nav-item">
                              <Link to="/vendor-dashboard/profile" aria-current="page" className="nav-link nuxt-link-exact-active nuxt-link-active">
                                <i className="far fa-id-badge"></i>
                                {"Profile"}
                              </Link>
                            </li>
                            {' '}
                            <li className="nav-item">
                              <Link to="/vendor-dashboard/add-product" className="nav-link">
                                <i className="fas fa-cart-plus"></i>
                                {"Add Product"}
                              </Link>
                            </li>
                            {' '}
                            <li className="nav-item">
                              <Link to="/vendor-dashboard/setting" className="nav-link">
                                <i className="fas fa-user-cog"></i>
                                {"Setting"}
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {' '}
                      <div className="col-sm-12 col-md-9 col-lg-9">
                        <div className="dashboard_content">
                          <div id="profile_vendor">
                            <div className="vendors_profiles">
                              <h4>Profile</h4>
                              {' '}
                              <ul>
                                <li>
                                  <div className="profils_details_vendor">
                                    <div className="profile_left">
                                      <h4>Company Name:</h4>
                                    </div>
                                    {' '}
                                    <div className="profile_right">
                                      <h4>Fashion Store</h4>
                                    </div>
                                  </div>
                                </li>
                                {' '}
                                <li>
                                  <div className="profils_details_vendor">
                                    <div className="profile_left">
                                      <h4>Email Address:</h4>
                                    </div>
                                    {' '}
                                    <div className="profile_right">
                                      <h4>demo123@gmail.com</h4>
                                    </div>
                                  </div>
                                </li>
                                {' '}
                                <li>
                                  <div className="profils_details_vendor">
                                    <div className="profile_left">
                                      <h4>Country / Region:</h4>
                                    </div>
                                    {' '}
                                    <div className="profile_right">
                                      <h4>Downers Grove, IL</h4>
                                    </div>
                                  </div>
                                </li>
                                {' '}
                                <li>
                                  <div className="profils_details_vendor">
                                    <div className="profile_left">
                                      <h4>Year Established:</h4>
                                    </div>
                                    {' '}
                                    <div className="profile_right">
                                      <h4>2018</h4>
                                    </div>
                                  </div>
                                </li>
                                {' '}
                                <li>
                                  <div className="profils_details_vendor">
                                    <div className="profile_left">
                                      <h4>Total Employees:</h4>
                                    </div>
                                    {' '}
                                    <div className="profile_right">
                                      <h4>101 - 200 People</h4>
                                    </div>
                                  </div>
                                </li>
                                {' '}
                                <li>
                                  <div className="profils_details_vendor">
                                    <div className="profile_left">
                                      <h4>Category:</h4>
                                    </div>
                                    {' '}
                                    <div className="profile_right">
                                      <h4>Clothing</h4>
                                    </div>
                                  </div>
                                </li>
                                {' '}
                                <li>
                                  <div className="profils_details_vendor">
                                    <div className="profile_left">
                                      <h4>Street Address:</h4>
                                    </div>
                                    {' '}
                                    <div className="profile_right">
                                      <h4>549 Sulphur Springs Road</h4>
                                    </div>
                                  </div>
                                </li>
                                {' '}
                                <li>
                                  <div className="profils_details_vendor">
                                    <div className="profile_left">
                                      <h4>City/State:</h4>
                                    </div>
                                    {' '}
                                    <div className="profile_right">
                                      <h4>Downers Grove, IL</h4>
                                    </div>
                                  </div>
                                </li>
                                {' '}
                                <li>
                                  <div className="profils_details_vendor">
                                    <div className="profile_left">
                                      <h4>Zip:</h4>
                                    </div>
                                    {' '}
                                    <div className="profile_right">
                                      <h4>60515</h4>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                              {' '}
                              <div className="btn_left_table">
                                <Link to="/my-account/account-info-edit" className="theme-btn-one bg-black btn_sm">Edit Profile</Link>
                              </div>
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
