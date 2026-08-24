import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';

export default function Page404() {
  usePageMeta({"title":"Error - AndShop Ecommerce Vue js Template","metas":[{"name":"description","content":"About Us page - AndShop Ecommerce Vue js, Nuxt js Template"}]});

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
                          <h2>Error</h2>
                          {' '}
                          <ol className="breadcrumb bg-transparent">
                            <li className="breadcrumb-item">
                              <Link to="/" className="nuxt-link-active">Home</Link>
                            </li>
                            <li className="breadcrumb-item active">
                              <span aria-current="location">Error</span>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {' '}
                <section id="error_area" className="ptb-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 offset-lg-3">
                        <div className="erorr_wrapper">
                          <h1>404</h1>
                          {' '}
                          <h3>We are sorry, the page you've requested is not available!</h3>
                          {' '}
                          <form>
                            <div className="input-group">
                              <input type="text" className="form-control" />
                              {' '}
                              <button>
                                <i className="fas fa-search"></i>
                              </button>
                            </div>
                          </form>
                          {' '}
                          <Link to="/" className="theme-btn-one btn-black-overlay btn_md nuxt-link-active">Back To Home Page</Link>
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
