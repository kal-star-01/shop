import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';
import { ProductTabs } from '../../components/HomeSections.jsx';
import Swiper, { SwiperSlide } from '../../components/Swiper.jsx';
import ProductCard from '../../components/ProductCard.jsx';
import { useStore } from '../../lib/store.jsx';
import Carousel from '../../components/Carousel.jsx';

export default function Electronics() {
  const { products } = useStore();
  const weekly = products.filter((p) => p.type === 'electronics');
  const weeklySwiper = { slidesPerView: 4, slidesPerGroup: 1, spaceBetween: 30, loop: false, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }, breakpoints: { 1024: { slidesPerView: 4, spaceBetween: 40 }, 768: { slidesPerView: 3, spaceBetween: 30 }, 640: { slidesPerView: 2, spaceBetween: 20 }, 300: { slidesPerView: 1, spaceBetween: 10 } } };
  usePageMeta({"title":"Electronics Home - AndShop Ecommerce Vue js Template","metas":[{"name":"description","content":"Electronics Home page - AndShop Ecommerce Vue js, Nuxt js Template "}]});

    return (
      <>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        <div id="__nuxt">
          <div id="__layout">
            <div>
              <div>
                <section id="electronics_banner">
                  <div className="electronics_slider_box">
                    <Carousel options={{ loop: true, margin: 30, autoplay: true, autoplayTimeout: 5000, autoplaySpeed: 1000, autoplayHoverPause: true, nav: true, dots: false, items: 1, responsive: { 0: { items: 1 } } }} id="carousel_ikt7tckgyxi">
  <div className="electronics_slider background_bg" style={{ backgroundImage: "url(\"/assets/img/banner1.78759d2.png\")" }}>
                              <div className="container">
                                <div className="row">
                                  <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                                    <div className="electronics_slider_content">
                                      <h5>NEW TRANDING</h5>
                                      {' '}
                                      <h2>
                                        {"Collection "}
                                        <span>Headphone</span>
                                      </h2>
                                      {' '}
                                      <h4>Introducing Apple Watch Series 4</h4>
                                      {' '}
                                      <Link to="/shop/shop-2" className="theme-btn-one bg-black btn_sm">Shop Now</Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
  <div className="electronics_slider background_bg" style={{ backgroundImage: "url(\"/assets/img/banner2.f97b38f.png\")" }}>
                              <div className="container">
                                <div className="row">
                                  <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                                    <div className="electronics_slider_content">
                                      <h5>NEW TRANDING</h5>
                                      {' '}
                                      <h2>
                                        {"Collection "}
                                        <span>Headphone</span>
                                      </h2>
                                      {' '}
                                      <h4>Anti-Falling Of Design Sweatproof</h4>
                                      {' '}
                                      <Link to="/shop/shop-2" className="theme-btn-one bg-black btn_sm">Shop Now</Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
  <div className="electronics_slider background_bg" style={{ backgroundImage: "url(\"/assets/img/banner3.75394b3.png\")" }}>
                              <div className="container">
                                <div className="row">
                                  <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                                    <div className="electronics_slider_content">
                                      <h5>NEW TRANDING</h5>
                                      {' '}
                                      <h2>
                                        {"Collection "}
                                        <span>Headphone</span>
                                      </h2>
                                      {' '}
                                      <h4>Anti-Falling Of Design Sweatproof.</h4>
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
      <section id="electronics_banner_bottom" className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="el_banner_bottom el-ban-bottom-left">
                <Link to="/shop"><img src="/assets/img/offer1.27ea1b6.jpg" alt="img" /></Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="el_banner_bottom">
                <Link to="/shop"><img src="/assets/img/offer2.ae7d4a8.jpg" alt="img" /></Link>
              </div>
              <div className="el_banner_bottom">
                <Link to="/shop"><img src="/assets/img/offer3.223da69.jpg" alt="img" /></Link>
              </div>
            </div>
          </div>
          <div className="el_feature_wrappers">
            <div className="row">
              <div className="col-sm-6 col-md-6 col-lg-3 col-12">
                <div className="el_feature_box">
                  <img src="/assets/img/car.685f530.png" alt="img" />
                  <div className="el_feature_text"><h3>Free Shipping</h3><p>On all orders over $75.00</p></div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 col-12">
                <div className="el_feature_box">
                  <img src="/assets/img/world.ec8532d.png" alt="img" />
                  <div className="el_feature_text"><h3>Free Returns</h3><p>Returns are free within 9 days</p></div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 col-12">
                <div className="el_feature_box">
                  <img src="/assets/img/lock.a83459b.png" alt="img" />
                  <div className="el_feature_text"><h3>100% Payment Secure</h3><p>Your payment are safe with us.</p></div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 col-12">
                <div className="el_feature_box">
                  <img src="/assets/img/phone.f5a07f0.png" alt="img" />
                  <div className="el_feature_text"><h3>Support 24/7</h3><p>Contact us 24 hours a day</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

                      <section id="electronics_top_product" className="pb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="left_heading_three position-absolute"><h2>Top Product</h2></div>
            </div>
          </div>
          <ProductTabs type="electronics" className="hot-product-area-tabs electronics-product-tabs tabs_right_button" cardVariant={4} />
        </div>
      </section>

                {' '}
                <section id="promotion_banner" className="ptb-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="elec_promo_text">
                          <h2>
                            {"DOLBY ATMOS "}
                            <br />
                            {" SOUND FEATURE"}
                          </h2>
                          {' '}
                          <p>Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                          {' '}
                          <div className="elec_promo_icon">
                            <div className="icon_promo_item">
                              <i className="fab fa-bluetooth-b"></i>
                              {' '}
                              <p>Bluetooth Enabled device</p>
                            </div>
                            {' '}
                            <div className="icon_promo_item">
                              <i className="fas fa-wifi"></i>
                              {' '}
                              <p>Wireless Connections</p>
                            </div>
                            {' '}
                            <div className="icon_promo_item">
                              <i className="fas fa-battery-half"></i>
                              {' '}
                              <p>Rechargeable Battery</p>
                            </div>
                            {' '}
                            <div className="icon_promo_item">
                              <i className="fas fa-volume-up"></i>
                              {' '}
                              <p>Surround Sound System</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {' '}
                      <div className="col-lg-6">
                        <div className="promotion_img">
                          <img src="/assets/img/promotion.c1334aa.png" alt="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                <section id="elce_weekly_deal" className="ptb-100 slider_arrows_on">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="left_heading_three">
                          <h2>Weekly Deal Product</h2>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <Swiper options={weeklySwiper} className="swiper todays_slider position-relative">
                          {weekly.map((e, r) => (
                            <SwiperSlide key={r}><ProductCard product={e} index={r} variant={4} /></SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                <section id="instagram_area_one">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="left_heading_three  insta_heading_elce">
                          <h2 className="text-uppercase">Follow Us Instagram</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  {' '}
                  <div className="container-fluid">
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
        
      </>
    );
}
