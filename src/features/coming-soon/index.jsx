import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';

export default function ComingSoon() {
  usePageMeta({"title":"Coming Soon - AndShop Ecommerce Vue js Template","metas":[{"name":"description","content":"Coming Soon page - AndShop Ecommerce Vue js, Nuxt js Template"}]});

    return (
      <>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        <div id="__nuxt">
          <div className="nuxt-progress" style={{ width: "100%" }}></div>
          <div id="__layout">
            <div>
              <section id="coming_soon_area" className="ptb-100">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <div className="coming_soon_content">
                        <Link to="/" className="nuxt-link-active">
                          <img src="/assets/img/logo-white.7333c9e.png" alt="coming-soon" />
                        </Link>
                        {' '}
                        <div className="coming_soon_title">
                          <h2>We Are Coming Soon</h2>
                          {' '}
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                     Lorem Ipsum has been the industry's standard dummy text.</p>
                        </div>
                        {' '}
                        <div className="coming_soon_time">
                          <div id="countdown_soon">
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
                                    <span className="timer-num">-53</span>
                                    {"Minutes\n      "}
                                  </li>
                                  {' '}
                                  <li>
                                    <span className="timer-num">-41</span>
                                    {"Seconds\n      "}
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {' '}
                        <div className="coming_soon_newsletter">
                          <h3>Subscribe for our next update</h3>
                          {' '}
                          <form>
                            <div className="input-group">
                              <input type="text" placeholder="Your Email" className="form-control" />
                              {' '}
                              <button type="button" className="theme-btn-one btn-black-overlay btn_md">Subscribe</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        
      </>
    );
}
