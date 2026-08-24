import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';

export default function Setting() {
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
                              <Link to="/vendor-dashboard/profile" className="nav-link">
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
                              <Link to="/vendor-dashboard/setting" aria-current="page" className="nav-link nuxt-link-exact-active nuxt-link-active">
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
                          <div id="vendor_setting">
                            <div className="vendors_settings">
                              <h4>Setting</h4>
                              {' '}
                              <div className="row">
                                <div className="col-lg-6">
                                  <div className="setings_boxed">
                                    <h3>Notifications</h3>
                                    {' '}
                                    <form>
                                      <input type="radio" id="allow_desktop" name="fav_language" defaultValue="" defaultChecked={true} />
                                      {' '}
                                      <label htmlFor="allow_desktop">Allow Desktop Notifications</label>
                                      <br />
                                      {' '}
                                      <input type="radio" id="enable" name="fav_language" defaultValue="" />
                                      {' '}
                                      <label htmlFor="enable">Enable Notifications</label>
                                      <br />
                                      {' '}
                                      <input type="radio" id="get_notification" name="fav_language" defaultValue="" />
                                      {' '}
                                      <label htmlFor="get_notification">Get notification for my own activity</label>
                                      <br />
                                      {' '}
                                      <input type="radio" id="dnd" name="fav_language" defaultValue="" />
                                      {' '}
                                      <label htmlFor="dnd">DND</label>
                                    </form>
                                  </div>
                                </div>
                                {' '}
                                <div className="col-lg-6">
                                  <div className="setings_boxed">
                                    <h3>Deactivate Account</h3>
                                    {' '}
                                    <form>
                                      <input type="radio" id="privacy_oncern" name="deactivate_account" defaultValue="" defaultChecked={true} />
                                      {' '}
                                      <label htmlFor="privacy_oncern">I have a privacy concern</label>
                                      <br />
                                      {' '}
                                      <input type="radio" id="is_temporary" name="deactivate_account" defaultValue="" />
                                      {' '}
                                      <label htmlFor="is_temporary">This is temporary</label>
                                      <br />
                                      {' '}
                                      <input type="radio" id="other" name="deactivate_account" defaultValue="" />
                                      {' '}
                                      <label htmlFor="other">other</label>
                                    </form>
                                    {' '}
                                    <button className="theme-btn-one btn-black-overlay btn_sm ">Deactivate Account</button>
                                  </div>
                                </div>
                                {' '}
                                <div className="col-lg-12">
                                  <div className="setings_boxed">
                                    <h3>Delete Account</h3>
                                    {' '}
                                    <form>
                                      <input type="radio" id="longer_usable" name="delete_account" defaultValue="" defaultChecked={true} />
                                      {' '}
                                      <label htmlFor="longer_usable"> No longer usable</label>
                                      <br />
                                      {' '}
                                      <input type="radio" id="switch_on_other" name="delete_account" defaultValue="" />
                                      {' '}
                                      <label htmlFor="switch_on_other">Want to switch on other account</label>
                                      <br />
                                      {' '}
                                      <input type="radio" id="other_delete" name="delete_account" defaultValue="" />
                                      {' '}
                                      <label htmlFor="other_delete">other</label>
                                    </form>
                                    {' '}
                                    <button className="theme-btn-one btn-black-overlay btn_sm ">Delete Account</button>
                                  </div>
                                </div>
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
