import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';
import Timer from './timer.jsx';
import { ProductTabs, TodaysDeal, InstagramArea } from '../../components/HomeSections.jsx';

function Home() {
  const [dismiss, setDismiss] = useState(0);
  usePageMeta('Home', 'Home page - AndShop Ecommerce Vue js, Nuxt js Template');
  const showAlert = (d) => setDismiss(d);
  return (
    <>

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

                <section id="banner_one">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="banner_text_one">
                          <h1 className="flipInX" style={{ animationDuration: "3s", animationDelay: "0.3s" }}>
                            {"\n              Live For\n              "}
                            <span className="flipInX" style={{ animationDuration: "2s", animationDelay: "0.5s" }}>Fashion</span>
                          </h1>
                          {' '}
                          <h3>Save Up To 50%</h3>
                          {' '}
                          <Link to="/shop/shop-3" className="theme-btn-one bg-black btn_md">Shop Now</Link>
                        </div>
                      </div>
                      {' '}
                      <div className="col-lg-6">
                        <div className="hero_img">
                          <img src="/assets/img/man.34e0add.png" alt="img" className="slideInRight" style={{ animationDuration: "3s", animationDelay: "0.3s" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                <section id="product_variation_one" className="pt-100">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="product_variation_one_boxed img-zoom-hover">
                          <img src="/assets/img/woman.3e56b7a.png" alt="img" />
                          {' '}
                          <div className="product_var_one_text">
                            <h4 className="color_one">Outerwear</h4>
                            {' '}
                            <h2>New</h2>
                            {' '}
                            <h4>Collection</h4>
                            {' '}
                            <Link to="/shop/shop-2" className="theme-btn-one bg-black btn_sm">Shop Now</Link>
                          </div>
                        </div>
                        {' '}
                        <div className="product_variation_one_boxed img-zoom-hover">
                          <img src="/assets/img/woman1.f456ab6.png" alt="img" />
                          {' '}
                          <div className="product_var_one_text">
                            <h4 className="color_one">Summer</h4>
                            {' '}
                            <h2>Hot</h2>
                            {' '}
                            <h4>Collection</h4>
                            {' '}
                            <Link to="/shop" className="theme-btn-one bg-black btn_sm">Shop Now</Link>
                          </div>
                        </div>
                      </div>
                      {' '}
                      <div className="col-lg-4 col-md-6">
                        <div className="product_variation_one_boxed img-zoom-hover">
                          <img src="/assets/img/bag.7606d44.png" alt="img" />
                          {' '}
                          <div className="product_var_one_text_center">
                            <h2 className="color_one">10% Offer</h2>
                            {' '}
                            <h4>No Selected Models</h4>
                            {' '}
                            <Link to="/shop/shop-3" className="theme-btn-one bg-black btn_sm">Shop Now</Link>
                          </div>
                        </div>
                      </div>
                      {' '}
                      <div className="col-lg-4 col-md-6">
                        <div className="product_variation_one_boxed img-zoom-hover">
                          <img src="/assets/img/woman4.26b67d7.png" alt="img" />
                          {' '}
                          <div className="product_var_one_text">
                            <h2>New</h2>
                            {' '}
                            <h4 className="color_one">Arrivals</h4>
                            {' '}
                            <Link to="/shop/shop-2" className="theme-btn-one bg-black btn_sm">Shop Now</Link>
                          </div>
                        </div>
                        {' '}
                        <div className="product_variation_one_boxed img-zoom-hover">
                          <img src="/assets/img/kids.5fb714a.png" alt="img" />
                          {' '}
                          <div className="product_var_one_text">
                            <h2>Hot</h2>
                            {' '}
                            <h4 className="color_one">Offer</h4>
                            {' '}
                            <Link to="/shop" className="theme-btn-one bg-black btn_sm">Shop Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                      <section id="hot_Product_area" className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="center_heading">
                <h2>Hot Product</h2>
                <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
              </div>
              <ProductTabs onAlert={showAlert} />
            </div>
          </div>
        </div>
      </section>
      <section id="offer_timer_one">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-4 col-md-7 offset-md-4 col-sm-12 col-12">
              <div className="offer_time_flex">
                <div className="count_down"><div id="countdown"><Timer date="October 15, 2025" /></div></div>
                <div className="offer_timer_text">
                  <h2>20% OFF FOR ALL T-SHIRT COLLECTION</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro quisquam, odit assumenda sit modi commodi esse necessitatibus temporibus aperiam veritatis eveniet!</p>
                  <a href="#!" className="theme-btn-one bg-black btn_md">View More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="to_days_area" className="ptb-100 slider_arrows_one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="center_heading">
                <h2>ToDay's Deal</h2>
                <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
              </div>
            </div>
          </div>
          <div className="row"><div className="col-lg-12">
            <TodaysDeal onAlert={showAlert} />
          </div></div>
        </div>
      </section>
<section id="special_offer_one">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 offset-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="offer_banner_one text-center">
                          <h5>TRENDING</h5>
                          {' '}
                          <h2>New Fashion</h2>
                          {' '}
                          <p>
                                        Consectetur adipisicing elit. Dolores nisi distinctio magni,
                                        iure deserunt doloribus optio
                                      </p>
                          {' '}
                          <Link to="/shop" className="theme-btn-one bg-whites btn_md">Shop Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                <section id="blog_area_one" className="ptb-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="center_heading">
                          <h2>Latest Blog</h2>
                          {' '}
                          <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
                        </div>
                      </div>
                    </div>
                    {' '}
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="blog_one_item img-zoom-hover">
                          <div className="blog_one_img">
                            <a href="/blog/This%20Designer%20Bronzer%20Has%20Even%20The%20Drugstore-Beauty-Buyers%20Splurging!" className="">
                              <img src="/assets/img/post1.3665af9.png" alt="img" />
                            </a>
                          </div>
                          {' '}
                          <div className="blog_text">
                            <h5 className="date_area">
                              <a href="/blog/This%20Designer%20Bronzer%20Has%20Even%20The%20Drugstore-Beauty-Buyers%20Splurging!" className="">24 February 2021</a>
                            </h5>
                            {' '}
                            <h4 className="heading">
                              <a href="/blog/This%20Designer%20Bronzer%20Has%20Even%20The%20Drugstore-Beauty-Buyers%20Splurging!" className="">This Designer Bronzer Has Even The Drugstore-Beauty-Buyers Splurging!</a>
                            </h4>
                            {' '}
                            <p className="para">Today kicks off early access to the Sephora Spring Sales Event so I wanted to share some of my top recent beauty buys I’ve been</p>
                            {' '}
                            <a href="/blog/This%20Designer%20Bronzer%20Has%20Even%20The%20Drugstore-Beauty-Buyers%20Splurging!" className="button">
                              {"Read More"}
                              <i className="fas fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="blog_one_item img-zoom-hover">
                          <div className="blog_one_img">
                            <a href="/blog/4%20Fresh%20Ways%20To%20Style%20Leather%20Shorts%20For%20Spring" className="">
                              <img src="/assets/img/post2.fcb3f77.png" alt="img" />
                            </a>
                          </div>
                          {' '}
                          <div className="blog_text">
                            <h5 className="date_area">
                              <a href="/blog/4%20Fresh%20Ways%20To%20Style%20Leather%20Shorts%20For%20Spring" className="">29 jan 2018</a>
                            </h5>
                            {' '}
                            <h4 className="heading">
                              <a href="/blog/4%20Fresh%20Ways%20To%20Style%20Leather%20Shorts%20For%20Spring" className="">4 Fresh Ways To Style Leather Shorts For Spring</a>
                            </h4>
                            {' '}
                            <p className="para">We spent spring break this year in California with Cody’s family and it was such a fun getaway. Cody’s family always goes hard on vacation</p>
                            {' '}
                            <a href="/blog/4%20Fresh%20Ways%20To%20Style%20Leather%20Shorts%20For%20Spring" className="button">
                              {"Read More"}
                              <i className="fas fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                        <div className="blog_one_item img-zoom-hover">
                          <div className="blog_one_img">
                            <a href="/blog/Shopbop%20Spring%20Sale%20Selects%20All%20Under%20Around%20$100!" className="">
                              <img src="/assets/img/post3.521c979.png" alt="img" />
                            </a>
                          </div>
                          {' '}
                          <div className="blog_text">
                            <h5 className="date_area">
                              <a href="/blog/Shopbop%20Spring%20Sale%20Selects%20All%20Under%20Around%20$100!" className="">24 February 2021</a>
                            </h5>
                            {' '}
                            <h4 className="heading">
                              <a href="/blog/Shopbop%20Spring%20Sale%20Selects%20All%20Under%20Around%20$100!" className="">Shopbop Spring Sale Selects All Under Around $100!</a>
                            </h4>
                            {' '}
                            <p className="para">STRAIGHT LEG DENIM (UNDER $100) – Love all the Ribcage Levi’s styles! They are all really flattering. but since these are wider leg I stuck with my usual size (25).</p>
                            {' '}
                            <a href="/blog/Shopbop%20Spring%20Sale%20Selects%20All%20Under%20Around%20$100!" className="button">
                              {"Read More"}
                              <i className="fas fa-arrow-right"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                      <InstagramArea />
      {dismiss > 0 && (
        <div className="alert alert-success fade show" role="alert" style={{ position: 'fixed', top: 20, right: 20, zIndex: 2000 }}>
          <p className="font-weight-normal mb-0">Successfully added to your list</p>
          <button type="button" className="close" onClick={() => setDismiss(0)} aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
      )}
    </>
  );
}
export default Home;
