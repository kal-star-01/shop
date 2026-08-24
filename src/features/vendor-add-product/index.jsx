import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';

export default function AddProduct() {
  usePageMeta({"title":"Add Product - AndShop Ecommerce Vue js Template","metas":[{"name":"description","content":"Add Product Vendor Dashboard - AndShop Ecommerce Vue js, Nuxt js Template"}]});

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
                          <h2>Add Product</h2>
                          {' '}
                          <ol className="breadcrumb bg-transparent">
                            <li className="breadcrumb-item">
                              <Link to="/" className="nuxt-link-active">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">
                              <span aria-current="location">Add Product</span>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                <section id="add_product_area" className="pt-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8 offset-lg-2">
                        <div className="add_product_wrapper">
                          <div className="back_to_area">
                            <Link to="/vendor-dashboard" className="nuxt-link-active">
                              <i className="fas fa-long-arrow-alt-left"></i>
                              {" Back To Dashboard"}
                            </Link>
                          </div>
                          {' '}
                          <h3>Add Product</h3>
                          {' '}
                          <form className="add_product_form">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="image-input">
                                  <img src="/assets/img/1.7190443.png" alt="img" className="image-preview" />
                                  {' '}
                                  <input type="file" accept="image/*" id="imageInput" />
                                  {' '}
                                  <label htmlFor="imageInput" className="image-button">
                                    <i className="far fa-image"></i>
                                    {"Choose image"}
                                  </label>
                                </div>
                              </div>
                              {' '}
                              <div className="col-lg-6">
                                <div className="fotm-group">
                                  <label htmlFor="product_name">Product Name*</label>
                                  {' '}
                                  <input type="text" id="product_name" placeholder="T-Shirt Form Girls" className="form-control" />
                                </div>
                              </div>
                              {' '}
                              <div className="col-lg-6">
                                <div className="fotm-group">
                                  <label htmlFor="product_price">Product Price*</label>
                                  {' '}
                                  <input type="number" id="product_price" placeholder="2" className="form-control" />
                                </div>
                              </div>
                              {' '}
                              <div className="col-lg-6">
                                <div className="fotm-group">
                                  <label htmlFor="product_unit">Product Unit*</label>
                                  {' '}
                                  <select name="product" id="product_unit">
                                    <option value="Filter">Filter</option>
                                    {' '}
                                    <option value="volvo">Most Popular</option>
                                    {' '}
                                    <option value="saab">Best Seller</option>
                                    {' '}
                                    <option value="mercedes">Tranding</option>
                                    {' '}
                                    <option value="audi">Featured</option>
                                  </select>
                                </div>
                              </div>
                              {' '}
                              <div className="col-lg-6">
                                <div className="fotm-group">
                                  <label htmlFor="product_available">Product Available From*</label>
                                  {' '}
                                  <input type="date" id="product_available" className="form-control" />
                                </div>
                              </div>
                              {' '}
                              <div className="col-lg-6">
                                <div className="fotm-group">
                                  <label htmlFor="estimate_available">Estimate Available For Days*</label>
                                  {' '}
                                  <input type="number" id="estimate_available" placeholder="12" className="form-control" />
                                </div>
                              </div>
                              {' '}
                              <div className="col-lg-6">
                                <div className="fotm-group">
                                  <label htmlFor="available_stock">Available Stock (Quantity)*</label>
                                  {' '}
                                  <input type="number" id="available_stock" placeholder="45" className="form-control" />
                                </div>
                              </div>
                              {' '}
                              <div className="col-lg-6">
                                <div className="fotm-group">
                                  <label htmlFor="whole_sale">Whole Sale Support*</label>
                                  {' '}
                                  <select name="product" id="whole_sale" defaultValue="yes">
                                    <option value="yes">Yes</option>
                                    {' '}
                                    <option value="no">No</option>
                                  </select>
                                </div>
                              </div>
                              {' '}
                              <div className="col-lg-6">
                                <div className="fotm-group">
                                  <label htmlFor="flash_sale">Flash Sale Support*</label>
                                  {' '}
                                  <select name="product" id="flash_sale" defaultValue="yes">
                                    <option value="yes">Yes</option>
                                    {' '}
                                    <option value="no">No</option>
                                  </select>
                                </div>
                              </div>
                              {' '}
                              <div className="col-lg-6">
                                <div className="fotm-group">
                                  <label htmlFor="frequency_support">Frequency Support*</label>
                                  {' '}
                                  <select name="product" id="frequency_support" defaultValue="yes">
                                    <option value="yes">Yes</option>
                                    {' '}
                                    <option value="no">No</option>
                                  </select>
                                </div>
                              </div>
                              {' '}
                              <div className="col-lg-12">
                                <div className="btn_right_table">
                                  <button className="theme-btn-one bg-black btn_sm">Add Product</button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                <section id="instagram_area_one" className="pt-100">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="center_heading">
                          <h2>Follow Us Instagram</h2>
                          {' '}
                          <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
                        </div>
                      </div>
                    </div>
                    {' '}
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="swiper-container swiper swiper-container-initialized swiper-container-horizontal">
                          <div className="swiper-wrapper" style={{ transitionDuration: "0ms", transform: "translate3d(-1692px, 0px, 0px)" }}>
                            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="6" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post8.7c75846.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="7" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post9.1d6a1b5.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="8" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post10.09f338d.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="9" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post11.8f7e2e2.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="10" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post12.76401dd.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="0" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post2.674c295.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="1" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post3.9bf54f3.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="2" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post4.362f450.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="3" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post5.2d86a40.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="4" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post6.cde1726.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="5" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post7.d641f7f.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="6" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post8.7c75846.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="7" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post9.1d6a1b5.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="8" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post10.09f338d.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="9" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post11.8f7e2e2.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="10" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post12.76401dd.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="0" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post2.674c295.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="1" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post3.9bf54f3.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="2" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post4.362f450.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="3" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post5.2d86a40.png" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="4" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/post6.cde1726.png" alt="img" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
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
