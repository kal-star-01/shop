import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';
import Carousel from '../../components/Carousel.jsx';

export default function Pharmacy() {
  usePageMeta({"title":"AndShop - AndShop Ecommerce Vue js Template","metas":[{"name":"description","content":"AndShop Ecommerce Vue js, Nuxt js Template"},{"name":"Pharmacy","content":"Pharmacy - AndShop Ecommerce Vue js, Nuxt js Template "}]});

    return (
      <>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        <div id="__nuxt">
          <div id="__layout">
            <div>
              <div>
                <div id="pharmacy_banner">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="pharmacy_banner_img">
                          <Link to="/product/product-single-2" className="">
                            <img src="/assets/img/banner1.55d94c4.png" alt="img" />
                          </Link>
                        </div>
                      </div>
                      {' '}
                      <div className="col-lg-4">
                        <div className="row">
                          <div className="col-lg-12 col-md-6 col-sm-6 col-12">
                            <div className="pharmacy_banner_img banner_last_img">
                              <Link to="/product/product-single-2" className="">
                                <img src="/assets/img/banner2.63adda2.png" alt="img" />
                              </Link>
                            </div>
                          </div>
                          {' '}
                          <div className="col-lg-12 col-md-6 col-sm-6 col-12">
                            <div className="pharmacy_banner_img banner_last_img">
                              <Link to="/product/product-single-2" className="">
                                <img src="/assets/img/banner3.0dc1c0d.png" alt="img" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {' '}
                <section id="pharmacy_categorie" className="ptb-100 slider_button_left_right">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="pharmacy_heading_wrapper">
                          <div className="grocery_heading">
                            <h2>Top Categories</h2>
                          </div>
                          {' '}
                          <div className="view_all_arae">
                            <a href="#!">View all</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {' '}
                    <div className="row position-relative">
                      <div className="col-lg-12">
                        <div className="pharmacy_top_cate">
                          <div className="catigori_slider_box">
                            <Carousel options={{ loop: true, margin: 30, autoplay: true, autoplayTimeout: 4000, autoplaySpeed: 1000, autoplayHoverPause: true, nav: false, dots: false, items: 7, responsive: { 0: { items: 1 }, 576: { items: 2 }, 992: { items: 3 }, 1200: { items: 7 } } }} id="carousel_aj69a7j4blp">
  <div className="pharmacy_top_card">
                                      <Link to="/product/product-single-2" className="">
                                        <img src="/assets/img/prod1.82b2e73.png" alt="img" />
                                        {' '}
                                        <h4>Health care</h4>
                                      </Link>
                                    </div>
  <div className="pharmacy_top_card">
                                      <Link to="/product/product-single-2" className="">
                                        <img src="/assets/img/prod2.b0b0074.png" alt="img" />
                                        {' '}
                                        <h4>Antiseptic</h4>
                                      </Link>
                                    </div>
  <div className="pharmacy_top_card">
                                      <Link to="/product/product-single-2" className="">
                                        <img src="/assets/img/prod3.2ad2105.png" alt="img" />
                                        {' '}
                                        <h4>Medicine</h4>
                                      </Link>
                                    </div>
  <div className="pharmacy_top_card">
                                      <Link to="/product/product-single-2" className="">
                                        <img src="/assets/img/prod4.e935e42.png" alt="img" />
                                        {' '}
                                        <h4>Medical kit</h4>
                                      </Link>
                                    </div>
  <div className="pharmacy_top_card">
                                      <Link to="/product/product-single-2" className="">
                                        <img src="/assets/img/prod1.82b2e73.png" alt="img" />
                                        {' '}
                                        <h4>Health care</h4>
                                      </Link>
                                    </div>
  <div className="pharmacy_top_card">
                                      <Link to="/product/product-single-2" className="">
                                        <img src="/assets/img/prod2.b0b0074.png" alt="img" />
                                        {' '}
                                        <h4>Antiseptic</h4>
                                      </Link>
                                    </div>
  <div className="pharmacy_top_card">
                                      <Link to="/product/product-single-2" className="">
                                        <img src="/assets/img/prod3.2ad2105.png" alt="img" />
                                        {' '}
                                        <h4>Medicine</h4>
                                      </Link>
                                    </div>
</Carousel>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                <div id="pharmacy_promo">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="pharmacy_promo_img">
                          <Link to="/product/product-single-2" className="">
                            <img src="/assets/img/sm-banner1.00a2f25.png" alt="img" />
                          </Link>
                        </div>
                      </div>
                      {' '}
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="pharmacy_promo_img">
                          <Link to="/product/product-single-2" className="">
                            <img src="/assets/img/sm-banner2.f6dce58.png" alt="img" />
                          </Link>
                        </div>
                      </div>
                      {' '}
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="pharmacy_promo_img">
                          <Link to="/product/product-single-2" className="">
                            <img src="/assets/img/sm-banner3.ce0147d.png" alt="img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {' '}
                <section id="pharmacy_featured_product" className="ptb-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="grocery_heading">
                          <h2>Featured Product</h2>
                        </div>
                      </div>
                    </div>
                    {' '}
                    <div className="row position-relative">
                      <div className="col-lg-12">
                        <div className="tabs_left_button">
                          <ul className="nav nav-tabs">
                            <li>
                              <a data-toggle="tab" data-target="#rated" href="#!" className="active">Top rated</a>
                            </li>
                            {' '}
                            <li>
                              <a data-toggle="tab" data-target="#popular" href="#!">Popular</a>
                            </li>
                            {' '}
                            <li>
                              <a data-toggle="tab" data-target="#best_sellers" href="#!">Best Sellers</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {' '}
                      <div className="col-lg-12">
                        <div className="tabs_el_wrapper">
                          <div className="tab-content">
                            <div id="rated" className="tab-pane fade show in active">
                              <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                  <div className="pharmacy_product_card">
                                    <div className="pharmacy_product_img">
                                      <Link to="/product/product-single-2" className="">
                                        <img src="/assets/img/pro-1.2837929.png" alt="img" />
                                      </Link>
                                      {' '}
                                      <span className="batch">Hot</span>
                                      {' '}
                                      <div className="pharmacy_product_icon">
                                        <ul>
                                          <li>
                                            <a href="#!" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                              <i className="fas fa-eye"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingCartModal">
                                              <i className="fas fa-shopping-cart"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                              <i className="fas fa-heart"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="compare.html">
                                              <i className="fas fa-sync-alt"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {' '}
                                    <div className="pharmacy_product_text">
                                      <h3>Antiseptic gel</h3>
                                      {' '}
                                      <p>
                                        {"$100.00 "}
                                        <del>$120.00</del>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {' '}
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                  <div className="pharmacy_product_card">
                                    <div className="pharmacy_product_img">
                                      <Link to="/product/product-single-2" className="">
                                        <img src="/assets/img/pro-2.44d5ab0.png" alt="img" />
                                      </Link>
                                      {' '}
                                      <span className="batch">Hot</span>
                                      {' '}
                                      <div className="pharmacy_product_icon">
                                        <ul>
                                          <li>
                                            <a href="#!" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                              <i className="fas fa-eye"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingCartModal">
                                              <i className="fas fa-shopping-cart"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                              <i className="fas fa-heart"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="compare.html">
                                              <i className="fas fa-sync-alt"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {' '}
                                    <div className="pharmacy_product_text">
                                      <h3>Antiseptic gel</h3>
                                      {' '}
                                      <p>
                                        {"$100.00 "}
                                        <del>$120.00</del>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {' '}
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                  <div className="pharmacy_product_card">
                                    <div className="pharmacy_product_img">
                                      <Link to="/product/product-single-2" className="">
                                        <img src="/assets/img/pro-3.1ae3ad7.png" alt="img" />
                                      </Link>
                                      {' '}
                                      <span className="batch">Hot</span>
                                      {' '}
                                      <div className="pharmacy_product_icon">
                                        <ul>
                                          <li>
                                            <a href="#!" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                              <i className="fas fa-eye"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingCartModal">
                                              <i className="fas fa-shopping-cart"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                              <i className="fas fa-heart"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="compare.html">
                                              <i className="fas fa-sync-alt"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {' '}
                                    <div className="pharmacy_product_text">
                                      <h3>Antiseptic gel</h3>
                                      {' '}
                                      <p>
                                        {"$100.00 "}
                                        <del>$120.00</del>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {' '}
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                  <div className="pharmacy_product_card">
                                    <div className="pharmacy_product_img">
                                      <Link to="/product/product-single-2" className="">
                                        <img src="/assets/img/pro-4.f36c639.png" alt="img" />
                                      </Link>
                                      {' '}
                                      <span className="batch">Hot</span>
                                      {' '}
                                      <div className="pharmacy_product_icon">
                                        <ul>
                                          <li>
                                            <a href="#!" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                              <i className="fas fa-eye"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingCartModal">
                                              <i className="fas fa-shopping-cart"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                              <i className="fas fa-heart"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="compare.html">
                                              <i className="fas fa-sync-alt"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {' '}
                                    <div className="pharmacy_product_text">
                                      <h3>Antiseptic gel</h3>
                                      {' '}
                                      <p>
                                        {"$100.00 "}
                                        <del>$120.00</del>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {' '}
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                  <div className="pharmacy_product_card">
                                    <div className="pharmacy_product_img">
                                      <Link to="/product/product-single-2" className="">
                                        <img src="/assets/img/pro-5.cd5848a.png" alt="img" />
                                      </Link>
                                      {' '}
                                      <span className="batch">Hot</span>
                                      {' '}
                                      <div className="pharmacy_product_icon">
                                        <ul>
                                          <li>
                                            <a href="#!" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                              <i className="fas fa-eye"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingCartModal">
                                              <i className="fas fa-shopping-cart"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                              <i className="fas fa-heart"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="compare.html">
                                              <i className="fas fa-sync-alt"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {' '}
                                    <div className="pharmacy_product_text">
                                      <h3>Antiseptic gel</h3>
                                      {' '}
                                      <p>
                                        {"$100.00 "}
                                        <del>$120.00</del>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {' '}
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                  <div className="pharmacy_product_card">
                                    <div className="pharmacy_product_img">
                                      <Link to="/product/product-single-2" className="">
                                        <img src="/assets/img/pro-2.44d5ab0.png" alt="img" />
                                      </Link>
                                      {' '}
                                      <span className="batch">Hot</span>
                                      {' '}
                                      <div className="pharmacy_product_icon">
                                        <ul>
                                          <li>
                                            <a href="#!" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                              <i className="fas fa-eye"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingCartModal">
                                              <i className="fas fa-shopping-cart"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                              <i className="fas fa-heart"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="compare.html">
                                              <i className="fas fa-sync-alt"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {' '}
                                    <div className="pharmacy_product_text">
                                      <h3>Antiseptic gel</h3>
                                      {' '}
                                      <p>
                                        {"$100.00 "}
                                        <del>$120.00</del>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {' '}
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                  <div className="pharmacy_product_card">
                                    <div className="pharmacy_product_img">
                                      <Link to="/product/product-single-2" className="">
                                        <img src="/assets/img/pro-1.2837929.png" alt="img" />
                                      </Link>
                                      {' '}
                                      <span className="batch">Hot</span>
                                      {' '}
                                      <div className="pharmacy_product_icon">
                                        <ul>
                                          <li>
                                            <a href="#!" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                              <i className="fas fa-eye"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingCartModal">
                                              <i className="fas fa-shopping-cart"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                              <i className="fas fa-heart"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="compare.html">
                                              <i className="fas fa-sync-alt"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {' '}
                                    <div className="pharmacy_product_text">
                                      <h3>Antiseptic gel</h3>
                                      {' '}
                                      <p>
                                        {"$100.00 "}
                                        <del>$120.00</del>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                {' '}
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                  <div className="pharmacy_product_card">
                                    <div className="pharmacy_product_img">
                                      <Link to="/product/product-single-2" className="">
                                        <img src="/assets/img/pro-3.1ae3ad7.png" alt="img" />
                                      </Link>
                                      {' '}
                                      <span className="batch">Hot</span>
                                      {' '}
                                      <div className="pharmacy_product_icon">
                                        <ul>
                                          <li>
                                            <a href="#!" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                              <i className="fas fa-eye"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingCartModal">
                                              <i className="fas fa-shopping-cart"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                              <i className="fas fa-heart"></i>
                                            </a>
                                          </li>
                                          {' '}
                                          <li>
                                            <a href="compare.html">
                                              <i className="fas fa-sync-alt"></i>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    {' '}
                                    <div className="pharmacy_product_text">
                                      <h3>Antiseptic gel</h3>
                                      {' '}
                                      <p>
                                        {"$100.00 "}
                                        <del>$120.00</del>
                                      </p>
                                    </div>
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
                {' '}
                <section id="pharmacy_date_month" className="ptb-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="pharmacy_time_area">
                          <h2>Deal of the month</h2>
                          {' '}
                          <p>
                                        Cur tantas regiones barbarorum obiit, tot maria transmist summo
                                        bono
                                      </p>
                          {' '}
                          <div className="pharmacy_todays_count">
                            <div id="pharmacy_grocery">
                              <ul>
                                <div>
                                  <div className="timer">
                                    <ul id="demo">
                                      <li>
                                        <span className="timer-num">-1015</span>
                                        {"Days\n      "}
                                      </li>
                                      {' '}
                                      <li>
                                        <span className="timer-num">-12</span>
                                        {"Hours\n      "}
                                      </li>
                                      {' '}
                                      <li>
                                        <span className="timer-num">-54</span>
                                        {"Minutes\n      "}
                                      </li>
                                      {' '}
                                      <li>
                                        <span className="timer-num">-47</span>
                                        {"Seconds\n      "}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {' '}
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="pharmacy_date_img">
                              <Link to="/product/product-single-2" className="">
                                <img src="/assets/img/mid-1.ca1abe8.png" alt="img" />
                              </Link>
                            </div>
                          </div>
                          {' '}
                          <div className="col-lg-12">
                            <div className="pharmacy_date_img">
                              <Link to="/product/product-single-2" className="">
                                <img src="/assets/img/mid-2.d28c62f.png" alt="img" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {' '}
                      <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="pharmacy_date_img">
                              <Link to="/product/product-single-2" className="">
                                <img src="/assets/img/mid-3.d390681.png" alt="img" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      {' '}
                      <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="row">
                          <div className="col-lg-12 col-md-6">
                            <div className="pharmacy_date_img">
                              <Link to="/product/product-single-2" className="">
                                <img src="/assets/img/mid-4.6c5a3ec.png" alt="img" />
                              </Link>
                            </div>
                          </div>
                          {' '}
                          <div className="col-lg-12 col-md-6">
                            <div className="pharmacy_date_img">
                              <Link to="/product/product-single-2" className="">
                                <img src="/assets/img/mid-5.84cce03.png" alt="img" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                <section id="pharmacy_hot_item" className="pt-100 slider_button_left_right">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="pharmacy_heading_wrapper">
                          <div className="grocery_heading">
                            <h2>Hot items</h2>
                          </div>
                          {' '}
                          <div className="view_all_arae">
                            <a href="#!">View all</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {' '}
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="pharmacy_hot_item_slider">
                          <div className="catigori_slider_box">
                            <Carousel options={{ loop: true, margin: 30, autoplay: true, autoplayTimeout: 5000, autoplaySpeed: 1000, autoplayHoverPause: true, nav: false, dots: false, items: 4, responsive: { 0: { items: 1 }, 576: { items: 2 }, 992: { items: 3 }, 1200: { items: 4 } } }} id="carousel_3y7h83gorl2">
  <div className="pharmacy_product_card">
                                      <div className="pharmacy_product_img">
                                        <Link to="/product/product-single-2" className="">
                                          <img src="/assets/img/pro-1.2837929.png" alt="img" />
                                        </Link>
                                        {' '}
                                        <span className="batch">Hot</span>
                                        {' '}
                                        <div className="pharmacy_product_icon">
                                          <ul>
                                            <li>
                                              <a href="#!" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                                <i className="fas fa-eye"></i>
                                              </a>
                                            </li>
                                            {' '}
                                            <li>
                                              <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingCartModal">
                                                <i className="fas fa-shopping-cart"></i>
                                              </a>
                                            </li>
                                            {' '}
                                            <li>
                                              <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                <i className="fas fa-heart"></i>
                                              </a>
                                            </li>
                                            {' '}
                                            <li>
                                              <a href="compare.html">
                                                <i className="fas fa-sync-alt"></i>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      {' '}
                                      <div className="pharmacy_product_text">
                                        <h3>Antiseptic gel</h3>
                                        {' '}
                                        <p>
                                          {"$100.00 "}
                                          <del>$120.00</del>
                                        </p>
                                      </div>
                                    </div>
  <div className="pharmacy_product_card">
                                      <div className="pharmacy_product_img">
                                        <Link to="/product/product-single-2" className="">
                                          <img src="/assets/img/pro-1.2837929.png" alt="img" />
                                        </Link>
                                        {' '}
                                        <span className="batch">Hot</span>
                                        {' '}
                                        <div className="pharmacy_product_icon">
                                          <ul>
                                            <li>
                                              <a href="#!" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                                <i className="fas fa-eye"></i>
                                              </a>
                                            </li>
                                            {' '}
                                            <li>
                                              <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingCartModal">
                                                <i className="fas fa-shopping-cart"></i>
                                              </a>
                                            </li>
                                            {' '}
                                            <li>
                                              <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                <i className="fas fa-heart"></i>
                                              </a>
                                            </li>
                                            {' '}
                                            <li>
                                              <a href="compare.html">
                                                <i className="fas fa-sync-alt"></i>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      {' '}
                                      <div className="pharmacy_product_text">
                                        <h3>Antiseptic gel</h3>
                                        {' '}
                                        <p>
                                          {"$100.00 "}
                                          <del>$120.00</del>
                                        </p>
                                      </div>
                                    </div>
  <div className="pharmacy_product_card">
                                      <div className="pharmacy_product_img">
                                        <Link to="/product/product-single-2" className="">
                                          <img src="/assets/img/pro-1.2837929.png" alt="img" />
                                        </Link>
                                        {' '}
                                        <span className="batch">Hot</span>
                                        {' '}
                                        <div className="pharmacy_product_icon">
                                          <ul>
                                            <li>
                                              <a href="#!" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                                <i className="fas fa-eye"></i>
                                              </a>
                                            </li>
                                            {' '}
                                            <li>
                                              <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingCartModal">
                                                <i className="fas fa-shopping-cart"></i>
                                              </a>
                                            </li>
                                            {' '}
                                            <li>
                                              <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                <i className="fas fa-heart"></i>
                                              </a>
                                            </li>
                                            {' '}
                                            <li>
                                              <a href="compare.html">
                                                <i className="fas fa-sync-alt"></i>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      {' '}
                                      <div className="pharmacy_product_text">
                                        <h3>Antiseptic gel</h3>
                                        {' '}
                                        <p>
                                          {"$100.00 "}
                                          <del>$120.00</del>
                                        </p>
                                      </div>
                                    </div>
  <div className="pharmacy_product_card">
                                      <div className="pharmacy_product_img">
                                        <Link to="/product/product-single-2" className="">
                                          <img src="/assets/img/pro-1.2837929.png" alt="img" />
                                        </Link>
                                        {' '}
                                        <span className="batch">Hot</span>
                                        {' '}
                                        <div className="pharmacy_product_icon">
                                          <ul>
                                            <li>
                                              <a href="#!" data-link-action="quickview" title="Quick view" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                                <i className="fas fa-eye"></i>
                                              </a>
                                            </li>
                                            {' '}
                                            <li>
                                              <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingCartModal">
                                                <i className="fas fa-shopping-cart"></i>
                                              </a>
                                            </li>
                                            {' '}
                                            <li>
                                              <a href="#!" data-bs-toggle="modal" data-bs-target="#shoppingWishlistModal">
                                                <i className="fas fa-heart"></i>
                                              </a>
                                            </li>
                                            {' '}
                                            <li>
                                              <a href="compare.html">
                                                <i className="fas fa-sync-alt"></i>
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      {' '}
                                      <div className="pharmacy_product_text">
                                        <h3>Antiseptic gel</h3>
                                        {' '}
                                        <p>
                                          {"$100.00 "}
                                          <del>$120.00</del>
                                        </p>
                                      </div>
                                    </div>
</Carousel>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                <section id="pharmacy_top_brand" className="ptb-100 slider_button_left_right">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="pharmacy_heading_wrapper">
                          <div className="grocery_heading">
                            <h2>Top Brand</h2>
                          </div>
                          {' '}
                          <div className="view_all_arae">
                            <a href="#!">View all</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {' '}
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="pharmacy_top_brand_slider">
                          <div className="catigori_slider_box">
                            <Carousel options={{ loop: true, margin: 30, autoplay: true, autoplayTimeout: 5000, autoplaySpeed: 1000, autoplayHoverPause: true, nav: false, dots: false, items: 5, responsive: { 0: { items: 1 }, 576: { items: 2 }, 992: { items: 3 }, 1200: { items: 5 } } }} id="carousel_d1u2ymu366f">
  <div className="partner_logo_pharmacy">
                                      <Link to="/pharmacy" className="">
                                        <img src="/assets/img/partner_1.507c9c5.png" alt="img" />
                                      </Link>
                                    </div>
  <div className="partner_logo_pharmacy">
                                      <Link to="/pharmacy" className="">
                                        <img src="/assets/img/partner_2.b279f63.png" alt="img" />
                                      </Link>
                                    </div>
  <div className="partner_logo_pharmacy">
                                      <Link to="/pharmacy" className="">
                                        <img src="/assets/img/partner_3.e61b3cb.png" alt="img" />
                                      </Link>
                                    </div>
  <div className="partner_logo_pharmacy">
                                      <Link to="/pharmacy" className="">
                                        <img src="/assets/img/partner_4.f037e89.png" alt="img" />
                                      </Link>
                                    </div>
  <div className="partner_logo_pharmacy">
                                      <Link to="/pharmacy" className="">
                                        <img src="/assets/img/partner_5.e1899bb.png" alt="img" />
                                      </Link>
                                    </div>
</Carousel>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                <div id="pharmacy_banner_bottom" className="pb-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className="pharmacy_banner_bottom_img">
                          <Link to="/product/product-single-2" className="">
                            <img src="/assets/img/add-1.37752bf.png" alt="img" />
                          </Link>
                        </div>
                      </div>
                      {' '}
                      <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="pharmacy_banner_bottom_img">
                          <Link to="/product/product-single-2" className="">
                            <img src="/assets/img/add-2.e2e73e3.png" alt="img" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {' '}
                <section id="pharmacy_footer_top">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3 col-sm-6 co-12">
                        <div className="pharmacy_footer_text">
                          <h4>Store location</h4>
                          {' '}
                          <p>219 Amara Fort Apt. 934</p>
                        </div>
                      </div>
                      {' '}
                      <div className="col-md-3 col-sm-6 co-12">
                        <div className="pharmacy_footer_text">
                          <h4>Work unquiries</h4>
                          {' '}
                          <p>hello@andshop.com</p>
                        </div>
                      </div>
                      {' '}
                      <div className="col-md-3 col-sm-6 co-12">
                        <div className="pharmacy_footer_text">
                          <h4>Call us</h4>
                          {' '}
                          <p>222 345 89 63</p>
                        </div>
                      </div>
                      {' '}
                      <div className="col-md-3 col-sm-6 co-12">
                        <div className="pharmacy_footer_text">
                          <h4>Opning hours</h4>
                          {' '}
                          <p>Mon - Sat: 08.00 - 18.00</p>
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
