import { Link } from 'react-router-dom';
import { useState } from 'react';
import { usePageMeta } from '../../lib/usePageMeta.js';
import { ProductTabs } from '../../components/HomeSections.jsx';
import Carousel from '../../components/Carousel.jsx';
import QuickView from './quick-view.jsx';
import { useStore } from '../../lib/store.jsx';

export default function Furniture() {
  usePageMeta({"title":"Furniture Home - AndShop Ecommerce Vue js Template","metas":[{"name":"description","content":"Furniture Home page - AndShop Ecommerce Vue js, Nuxt js Template "}]});
  const { getById } = useStore();
  const [qv, setQv] = useState(null);

    return (
      <>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        <div id="__nuxt">
          <div id="__layout">
            <div>
              <div>
                <section id="furniture_banner">
                  <div className="furniture_slider_box">
                    <Carousel options={{ loop: true, margin: 30, autoplay: true, autoplayTimeout: 5000, autoplaySpeed: 1000, autoplayHoverPause: true, nav: false, dots: true, items: 1, responsive: { 0: { items: 1 } } }} id="carousel_0qu5yy4r8ohr">
  <div className="furniture_slider background_bg" style={{ backgroundImage: "url(\"/assets/img/banner1.48fcd7f.png\")" }}>
                              <div className="container">
                                <div className="row">
                                  <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                                    <div className="furniture_slider_content">
                                      <h5>NEW TRANDING</h5>
                                      {' '}
                                      <h2>Sofa Collection</h2>
                                      {' '}
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                      {' '}
                                      <Link to="/shop/shop-2" className="theme-btn-one bg-black btn_sm">Shop Now</Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
  <div className="furniture_slider background_bg" style={{ backgroundImage: "url(\"/assets/img/banner2.761f4af.png\")" }}>
                              <div className="container">
                                <div className="row">
                                  <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                                    <div className="furniture_slider_content">
                                      <h5>NEW TRANDING</h5>
                                      {' '}
                                      <h2>Wardrobe Collection</h2>
                                      {' '}
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                      {' '}
                                      <Link to="/shop/shop-2" className="theme-btn-one bg-black btn_sm">Shop Now</Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
  <div className="furniture_slider background_bg" style={{ backgroundImage: "url(\"/assets/img/banner3.7b5f229.png\")" }}>
                              <div className="container">
                                <div className="row">
                                  <div className="col-lg-6 col-md-8 col-sm-12 col-12">
                                    <div className="furniture_slider_content">
                                      <h5>NEW TRANDING</h5>
                                      {' '}
                                      <h2>Table Collection</h2>
                                      {' '}
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                      {' '}
                                      <Link to="/shop/shop-2" className="theme-btn-one bg-black btn_sm">Shop Now</Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
</Carousel>
                  </div>
                </section>
                {' '}
      <section id="furniture_banner_bottom" className="pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="furniture_bottom_wrapper">
                <Link to="/shop/shop-3" className="hover_effect_furniture"><img src="/assets/img/feature1.76a76b3.png" alt="img" /></Link>
                <div className="furniture_bottom_content furniture-content-lg">
                  <h5>Outdoor Furniture</h5><h2>Outdoor Dining <br /> Furniture</h2>
                  <Link to="/shop/shop-3">Shop Now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="furniture_bottom_wrapper mb-30">
                <Link to="/shop/shop-3" className="hover_effect_furniture"><img src="/assets/img/feature2.4675327.png" alt="img" /></Link>
                <div className="furniture_bottom_content furniture-content-md">
                  <h5>Outdoor Furniture</h5><h2>Outdoor Dining <br /> Furniture</h2>
                  <Link to="/shop/shop-3">Shop Now</Link>
                </div>
              </div>
              <div className="furniture_bottom_wrapper">
                <Link to="/shop/shop-3" className="hover_effect_furniture"><img src="/assets/img/feature3.3223324.png" alt="img" /></Link>
                <div className="furniture_bottom_content furniture-content-md">
                  <h5>Outdoor Furniture</h5><h2>Outdoor Dining <br /> Furniture</h2>
                  <Link to="/shop/shop-3">Shop Now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="furniture_bottom_wrapper">
                <Link to="/shop/shop-3" className="hover_effect_furniture"><img src="/assets/img/feature4.83b057e.png" alt="img" /></Link>
                <div className="furniture_bottom_content furniture-content-md">
                  <h5>Outdoor Furniture</h5><h2>Outdoor Dining <br /> Furniture</h2>
                  <Link to="/shop/shop-3">Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hot_Product_area" className="ptb-100">
        <div className="container">
          <ProductTabs type="furniture" className="hot-product-area-tabs" cardVariant={6} />
        </div>
      </section>

                {' '}
                <section id="offer_timer_two">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 col-sm-12 col-12">
                        <div className="offer_time_img_two">
                          <img src="/assets/img/offer-time.aac37fa.png" alt="img" />
                        </div>
                      </div>
                      {' '}
                      <div className="col-md-6 col-sm-12 col-12">
                        <div className="offer_time_two_Content">
                          <img src="/assets/img/black.cd6461c.png" alt="img" />
                          {' '}
                          <div id="countdown_two">
                            <ul>
                              <div>
                                <div className="timer">
                                  <ul id="demo">
                                    <li>
                                      <span className="timer-num">-269</span>
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
                                      <span className="timer-num">-17</span>
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
                </section>
                {' '}
                <section id="furniture_popular_product" className="ptb-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="center_heading_two">
                          <h2>Popular Product</h2>
                          {' '}
                          <span className="heading_border"></span>
                        </div>
                      </div>
                    </div>
                    {' '}
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="swiper-container swiper todays_slider position-relative swiper-container-initialized swiper-container-horizontal">
                          <div className="swiper-wrapper" style={{ transform: "translate3d(0px, 0px, 0px)" }}>
                            <div className="swiper-slide swiper-slide-active" style={{ width: "443.333px", marginRight: "40px" }}>
                              <div>
                                <div className="product_box text-center">
                                  <div className="product_img">
                                    <a href="/product/162" className="">
                                      <img src="/assets/img/25.be01cee.png" alt="sofa sets" />
                                    </a>
                                    {' '}
                                    <div className="product_action_box">
                                      <ul className="list_none pr_action_btn">
                                        <li>
                                          <button title="Wishlist">
                                            <i className="far fa-heart"></i>
                                          </button>
                                        </li>
                                        {' '}
                                        <li>
                                          <button id="toggle-btn" title="Quick view" className="action quickview" onClick={() => setQv(getById('162'))}>
                                            <i className="fas fa-expand"></i>
                                          </button>
                                        </li>
                                        {' '}
                                        <li>
                                          <button title="Compare">
                                            <i className="fas fa-exchange-alt"></i>
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  {' '}
                                  <div className="product_info">
                                    <h5 className="product_title text-capitalize">
                                      <a href="/product/162" className="">sofa sets</a>
                                    </h5>
                                    {' '}
                                    <div className="product_price">
                                      <span className="price">$401.8</span>
                                      {' '}
                                      <del>$574</del>
                                    </div>
                                    {' '}
                                    <div className="rating_wrap">
                                      <div className="rating">
                                        <div className="reviews_rating">
                                          <i className="fas fa-star active"></i>
                                          {' '}
                                          <i className="fas fa-star active"></i>
                                          {' '}
                                          <i className="fas fa-star active"></i>
                                          {' '}
                                          <i className="fas fa-star active"></i>
                                          {' '}
                                          <i className="fas fa-star active"></i>
                                        </div>
                                      </div>
                                      {' '}
                                      <span className="rating_num">(21)</span>
                                    </div>
                                    {' '}
                                    <div className="add-to-cart">
                                      <button title="Add To Cart" className="theme-btn-one bg-black btn_sm offcanvas-toggle">
                                        <i className="fas fa-cart-arrow-down"></i>
                                        {" Add To Cart\n          "}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                {' '}
                                <div></div>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-next" style={{ width: "443.333px", marginRight: "40px" }}>
                              <div>
                                <div className="product_box text-center">
                                  <div className="product_img">
                                    <a href="/product/163" className="">
                                      <img src="/assets/img/26.a7c9991.png" alt="Wardrobes" />
                                    </a>
                                    {' '}
                                    <div className="product_action_box">
                                      <ul className="list_none pr_action_btn">
                                        <li>
                                          <button title="Wishlist">
                                            <i className="far fa-heart"></i>
                                          </button>
                                        </li>
                                        {' '}
                                        <li>
                                          <button id="toggle-btn" title="Quick view" className="action quickview" onClick={() => setQv(getById('163'))}>
                                            <i className="fas fa-expand"></i>
                                          </button>
                                        </li>
                                        {' '}
                                        <li>
                                          <button title="Compare">
                                            <i className="fas fa-exchange-alt"></i>
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  {' '}
                                  <div className="product_info">
                                    <h5 className="product_title text-capitalize">
                                      <a href="/product/163" className="">Wardrobes</a>
                                    </h5>
                                    {' '}
                                    <div className="product_price">
                                      <span className="price">$315</span>
                                      {' '}
                                      <del>$630</del>
                                    </div>
                                    {' '}
                                    <div className="rating_wrap">
                                      <div className="rating">
                                        <div className="reviews_rating">
                                          <i className="fas fa-star active"></i>
                                          {' '}
                                          <i className="fas fa-star active"></i>
                                          {' '}
                                          <i className="fas fa-star active"></i>
                                          {' '}
                                          <i className="fas fa-star active"></i>
                                          {' '}
                                          <i className="fas fa-star"></i>
                                        </div>
                                      </div>
                                      {' '}
                                      <span className="rating_num">(21)</span>
                                    </div>
                                    {' '}
                                    <div className="add-to-cart">
                                      <button title="Add To Cart" className="theme-btn-one bg-black btn_sm offcanvas-toggle">
                                        <i className="fas fa-cart-arrow-down"></i>
                                        {" Add To Cart\n          "}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                {' '}
                                <div></div>
                              </div>
                            </div>
                            <div className="swiper-slide" style={{ width: "443.333px", marginRight: "40px" }}>
                              <div>
                                <div className="product_box text-center">
                                  <div className="product_img">
                                    <a href="/product/165" className="">
                                      <img src="/assets/img/27.53f30fa.png" alt="coffee tables" />
                                    </a>
                                    {' '}
                                    <div className="product_action_box">
                                      <ul className="list_none pr_action_btn">
                                        <li>
                                          <button title="Wishlist">
                                            <i className="far fa-heart"></i>
                                          </button>
                                        </li>
                                        {' '}
                                        <li>
                                          <button id="toggle-btn" title="Quick view" className="action quickview" onClick={() => setQv(getById('165'))}>
                                            <i className="fas fa-expand"></i>
                                          </button>
                                        </li>
                                        {' '}
                                        <li>
                                          <button title="Compare">
                                            <i className="fas fa-exchange-alt"></i>
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  {' '}
                                  <div className="product_info">
                                    <h5 className="product_title text-capitalize">
                                      <a href="/product/165" className="">coffee tables</a>
                                    </h5>
                                    {' '}
                                    <div className="product_price">
                                      <span className="price">$400</span>
                                      {' '}
                                      <del>$500</del>
                                    </div>
                                    {' '}
                                    <div className="rating_wrap">
                                      <div className="rating">
                                        <div className="reviews_rating">
                                          <i className="fas fa-star active"></i>
                                          {' '}
                                          <i className="fas fa-star active"></i>
                                          {' '}
                                          <i className="fas fa-star active"></i>
                                          {' '}
                                          <i className="fas fa-star active"></i>
                                          {' '}
                                          <i className="fas fa-star active"></i>
                                        </div>
                                      </div>
                                      {' '}
                                      <span className="rating_num">(21)</span>
                                    </div>
                                    {' '}
                                    <div className="add-to-cart">
                                      <button title="Add To Cart" className="theme-btn-one bg-black btn_sm offcanvas-toggle">
                                        <i className="fas fa-cart-arrow-down"></i>
                                        {" Add To Cart\n          "}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                {' '}
                                <div></div>
                              </div>
                            </div>
                            {' '}
                          </div>
                          <div className="swiper-button-prev swiper-button-white swiper-button-disabled" tabIndex="-1" role="button" aria-label="Previous slide" aria-disabled="true"></div>
                          <div className="swiper-button-next swiper-button-white swiper-button-disabled" tabIndex="-1" role="button" aria-label="Next slide" aria-disabled="true"></div>
                          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                <section id="furniture_story">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-8 offset-lg-2">
                        <div className="our_story_content">
                          <h2>Our Story</h2>
                          {' '}
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatem quaerat
                                                     autem obcaecati nisi dolore reprehenderit fugiat accusamus repellat nihil possimus voluptas ipsa, 
                                                    asperiores maiores quisquam ipsum necessitatibus sit saepe.</p>
                          {' '}
                          <Link to="/about-us" className="theme-btn-one bg-black btn_md">Read Full Story</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                <section id="blog_area_two" className="ptb-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="center_heading_two">
                          <h2>Blog Post</h2>
                          {' '}
                          <span className="heading_border"></span>
                        </div>
                      </div>
                    </div>
                    {' '}
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="blog_post_wrapper">
                          <div className="blog_post_img">
                            <a href="/blog/This%20Designer%20Bronzer%20Has%20Even%20The%20Drugstore-Beauty-Buyers%20Splurging!" className="">
                              <img src="/assets/img/blog1.aea8bf4.jpg" alt="img" />
                            </a>
                            {' '}
                            <div className="blog_post_date">
                              <i className="far fa-calendar-alt"></i>
                              {' '}
                              <span>24 February 2021</span>
                            </div>
                          </div>
                          {' '}
                          <div className="right_block">
                            <div className="right_side_content">
                              <h5>This Designer Bronzer Has Even The Drugstore-Beauty-Buyers Splurging!</h5>
                              {' '}
                              <p>Today kicks off early access to the Sephora Spring Sales Event so I wanted to share some of my top recent beauty buys I’ve been</p>
                              {' '}
                              <a href="/blog/This%20Designer%20Bronzer%20Has%20Even%20The%20Drugstore-Beauty-Buyers%20Splurging!" className="">Read More...</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="blog_post_wrapper">
                          <div className="blog_post_img">
                            <a href="/blog/4%20Fresh%20Ways%20To%20Style%20Leather%20Shorts%20For%20Spring" className="">
                              <img src="/assets/img/blog2.80ff378.jpg" alt="img" />
                            </a>
                            {' '}
                            <div className="blog_post_date">
                              <i className="far fa-calendar-alt"></i>
                              {' '}
                              <span>29 jan 2018</span>
                            </div>
                          </div>
                          {' '}
                          <div className="right_block">
                            <div className="right_side_content">
                              <h5>4 Fresh Ways To Style Leather Shorts For Spring</h5>
                              {' '}
                              <p>We spent spring break this year in California with Cody’s family and it was such a fun getaway. Cody’s family always goes hard on vacation</p>
                              {' '}
                              <a href="/blog/4%20Fresh%20Ways%20To%20Style%20Leather%20Shorts%20For%20Spring" className="">Read More...</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                <section id="instagram_area_one">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="center_heading_two">
                          <h2>FOLLOW US INSTAGRAM</h2>
                          {' '}
                          <span className="heading_border"></span>
                        </div>
                      </div>
                    </div>
                    {' '}
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="swiper-container swiper swiper-container-initialized swiper-container-horizontal">
                          <div className="swiper-wrapper" style={{ transitionDuration: "0ms", transform: "translate3d(-2256px, 0px, 0px)" }}>
                            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="7" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/8.f4481bf.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="8" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/9.21eb18a.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="9" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/10.a7d3041.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="10" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/11.448a247.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="11" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/12.74cc5a9.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="0" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/1.f54ba43.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="1" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/2.cd2e910.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="2" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/3.014f215.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="3" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/4.7880d77.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="4" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/5.f5e03ca.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="5" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/6.324c428.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="6" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/7.3f67973.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="7" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/8.f4481bf.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="8" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/9.21eb18a.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="9" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/10.a7d3041.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="10" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/11.448a247.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide" data-swiper-slide-index="11" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/12.74cc5a9.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/1.f54ba43.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="1" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/2.cd2e910.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="2" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/3.014f215.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="3" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/4.7880d77.jpg" alt="img" />
                                </a>
                              </div>
                            </div>
                            <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="4" style={{ width: "282px" }}>
                              <div className="instgram_post">
                                <a href="#!">
                                  <i className="fab fa-instagram"></i>
                                  {' '}
                                  <img src="/assets/img/5.f5e03ca.jpg" alt="img" />
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
                {' '}
                {' '}
                {' '}
              </div>
              {' '}
              <div>
                
              </div>
            </div>
          </div>
        </div>
        
        <QuickView product={qv} onClose={() => setQv(null)} />
      </>
    );
}
