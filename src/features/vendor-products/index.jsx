import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';

export default function Product() {
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
                              <Link to="/vendor-dashboard/product" aria-current="page" className="nav-link nuxt-link-exact-active nuxt-link-active">
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
                          <div id="all_product">
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="vendor_order_boxed">
                                  <h4>All Products</h4>
                                  {' '}
                                  <div className="table-responsive">
                                    <table className="table pending_table">
                                      <thead className="thead-light">
                                        <tr>
                                          <th scope="col">Image</th>
                                          {' '}
                                          <th scope="col">Product Name</th>
                                          {' '}
                                          <th scope="col">Category</th>
                                          {' '}
                                          <th scope="col">Price</th>
                                          {' '}
                                          <th scope="col">Stock</th>
                                          {' '}
                                          <th scope="col">Sales</th>
                                          {' '}
                                          <th scope="col">Edit/Delete</th>
                                        </tr>
                                      </thead>
                                      {' '}
                                      <tbody>
                                        <tr>
                                          <td scope="row">
                                            <img src="/assets/img/1.1633f2a.jpg" alt="img" />
                                          </td>
                                          {' '}
                                          <td>Neck Velvet Dress	</td>
                                          {' '}
                                          <td>Women Clothes</td>
                                          {' '}
                                          <td>$205</td>
                                          {' '}
                                          <td>1000</td>
                                          {' '}
                                          <td>2000</td>
                                          {' '}
                                          <td>
                                            <a href="#!">
                                              <i className="fas fa-edit"></i>
                                            </a>
                                            {' '}
                                            <a href="#!">
                                              <i className="fas fa-trash-alt"></i>
                                            </a>
                                          </td>
                                        </tr>
                                        {' '}
                                        <tr>
                                          <td scope="row">
                                            <img src="/assets/img/1.1633f2a.jpg" alt="img" />
                                          </td>
                                          {' '}
                                          <td>Neck Velvet Dress	</td>
                                          {' '}
                                          <td>Women Clothes</td>
                                          {' '}
                                          <td>$205</td>
                                          {' '}
                                          <td>1000</td>
                                          {' '}
                                          <td>2000</td>
                                          {' '}
                                          <td>
                                            <a href="#!">
                                              <i className="fas fa-edit"></i>
                                            </a>
                                            {' '}
                                            <a href="#!">
                                              <i className="fas fa-trash-alt"></i>
                                            </a>
                                          </td>
                                        </tr>
                                        {' '}
                                        <tr>
                                          <td scope="row">
                                            <img src="/assets/img/1.1633f2a.jpg" alt="img" />
                                          </td>
                                          {' '}
                                          <td>Neck Velvet Dress	</td>
                                          {' '}
                                          <td>Women Clothes</td>
                                          {' '}
                                          <td>$205</td>
                                          {' '}
                                          <td>1000</td>
                                          {' '}
                                          <td>2000</td>
                                          {' '}
                                          <td>
                                            <a href="#!">
                                              <i className="fas fa-edit"></i>
                                            </a>
                                            {' '}
                                            <a href="#!">
                                              <i className="fas fa-trash-alt"></i>
                                            </a>
                                          </td>
                                        </tr>
                                        {' '}
                                        <tr>
                                          <td scope="row">
                                            <img src="/assets/img/1.1633f2a.jpg" alt="img" />
                                          </td>
                                          {' '}
                                          <td>Neck Velvet Dress	</td>
                                          {' '}
                                          <td>Women Clothes</td>
                                          {' '}
                                          <td>$205</td>
                                          {' '}
                                          <td>1000</td>
                                          {' '}
                                          <td>2000</td>
                                          {' '}
                                          <td>
                                            <a href="#!">
                                              <i className="fas fa-edit"></i>
                                            </a>
                                            {' '}
                                            <a href="#!">
                                              <i className="fas fa-trash-alt"></i>
                                            </a>
                                          </td>
                                        </tr>
                                        {' '}
                                        <tr>
                                          <td scope="row">
                                            <img src="/assets/img/1.1633f2a.jpg" alt="img" />
                                          </td>
                                          {' '}
                                          <td>Neck Velvet Dress	</td>
                                          {' '}
                                          <td>Women Clothes</td>
                                          {' '}
                                          <td>$205</td>
                                          {' '}
                                          <td>1000</td>
                                          {' '}
                                          <td>2000</td>
                                          {' '}
                                          <td>
                                            <a href="#!">
                                              <i className="fas fa-edit"></i>
                                            </a>
                                            {' '}
                                            <a href="#!">
                                              <i className="fas fa-trash-alt"></i>
                                            </a>
                                          </td>
                                        </tr>
                                        {' '}
                                        <tr>
                                          <td scope="row">
                                            <img src="/assets/img/1.1633f2a.jpg" alt="img" />
                                          </td>
                                          {' '}
                                          <td>Neck Velvet Dress	</td>
                                          {' '}
                                          <td>Women Clothes</td>
                                          {' '}
                                          <td>$205</td>
                                          {' '}
                                          <td>1000</td>
                                          {' '}
                                          <td>2000</td>
                                          {' '}
                                          <td>
                                            <a href="#!">
                                              <i className="fas fa-edit"></i>
                                            </a>
                                            {' '}
                                            <a href="#!">
                                              <i className="fas fa-trash-alt"></i>
                                            </a>
                                          </td>
                                        </tr>
                                        {' '}
                                        <tr>
                                          <td scope="row">
                                            <img src="/assets/img/1.1633f2a.jpg" alt="img" />
                                          </td>
                                          {' '}
                                          <td>Neck Velvet Dress	</td>
                                          {' '}
                                          <td>Women Clothes</td>
                                          {' '}
                                          <td>$205</td>
                                          {' '}
                                          <td>1000</td>
                                          {' '}
                                          <td>2000</td>
                                          {' '}
                                          <td>
                                            <a href="#!">
                                              <i className="fas fa-edit"></i>
                                            </a>
                                            {' '}
                                            <a href="#!">
                                              <i className="fas fa-trash-alt"></i>
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                  {' '}
                                  <div className="btn_right_table">
                                    <Link to="/vendor-dashboard/add-product" className="theme-btn-one bg-black btn_sm">Add Product</Link>
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
