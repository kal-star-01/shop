import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';

export default function EmptyCart() {
  usePageMeta({"title":"Empty Cart - AndShop Ecommerce Vue js Template","metas":[{"name":"description","content":"Empty Cart page - AndShop Ecommerce Vue js, Nuxt js Template"}]});

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
                          <h2>Empty Cart</h2>
                          {' '}
                          <ol className="breadcrumb bg-transparent">
                            <li className="breadcrumb-item">
                              <Link to="/" className="nuxt-link-active">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">
                              <span aria-current="location">Empty Cart</span>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                <section id="empty_cart_area" className="ptb-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12 col-12">
                        <div className="empaty_cart_area">
                          <img src="/assets/img/empty-cart.1b7e73f.png" alt="img" />
                          {' '}
                          <h2>YOUR CART IS EMPTY</h2>
                          {' '}
                          <h3>Sorry Mate... No Item Found Inside Your Cart!</h3>
                          {' '}
                          <Link to="/shop" className="btn btn-black-overlay btn_md">Continue Shopping</Link>
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
