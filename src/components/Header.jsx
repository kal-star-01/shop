import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore, discountedPrice } from '../lib/store.jsx';
import { IMG } from '../lib/util.js';
import SEARCH_ICON from '../data/search-icon.js';

function Sidebar({ id, cls, children, panel, noBackdrop, open, onClose }) {
  const isOpen = open === panel;
  return (
    <div tabIndex="-1" className={`b-sidebar-outer ${cls}`.trim()}>
      <div
        id={id}
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
        className={`b-sidebar b-sidebar-right bg-light text-dark`}
        style={{ display: isOpen ? 'block' : 'none', transform: isOpen ? 'translateX(0)' : '', transition: 'transform 0.3s' }}
      >
        <header className="b-sidebar-header">
          <button type="button" aria-label="Close" className="close text-dark" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
          <span></span>
        </header>
        <div className="b-sidebar-body">{children}</div>
      </div>
      {isOpen && !noBackdrop && <div className="b-sidebar-backdrop" onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.5)', zIndex: 1039 }}></div>}
    </div>
  );
}

export default function Header() {
  const { cart, wishlist, cartTotal, removeCartItem, removeWishlistItem, searchResults, searchProduct } = useStore();
  const [open, setOpen] = useState(null);
  const [searchString, setSearchString] = useState('');
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (open === 'search') {
      const t = setTimeout(() => searchInputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [open]);

  useEffect(() => {
    const onScroll = () => {
      const header = document.getElementById('header');
      const mob = document.getElementById('mobile_header');
      const top = header ? header.offsetTop : 0;
      const sticky = window.pageYOffset > top;
      if (header) header.classList.toggle('sticky', sticky);
      if (mob) mob.classList.toggle('sticky', sticky);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const esc = (e) => { if (e.key === 'Escape') setOpen(null); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', esc);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', esc); };
  }, [open]);

  return (
    <div>
      <header className="header-section d-none d-xl-block">
        <div className="header-wrapper">
          <div id="header" className="header-bottom header-bottom-color--golden section-fluid sticky-header sticky-color--golden">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-between">
                  <div className="header-logo">
                    <div className="logo">
                      <Link to="/"><img src="/assets/img/logo.f486653.png" alt="logo" /></Link>
                    </div>
                  </div>
                  <div className="main-menu menu-color--black menu-hover-color--golden">
                    <nav>
                      <ul>
                        <li className="has-dropdown">
                          <a href="#">Home <i className="fa fa-angle-down"></i></a>
                          <ul className="sub-menu">
                            <li><Link to="/">Fashion</Link></li>
                            <li><Link to="/furniture">Furniture</Link></li>
                            <li><Link to="/electronics">Electronics</Link></li>
                            <li><Link to="/grocery">Grocery</Link></li>
                            <li><Link to="/pharmacy">Pharmacy</Link></li>
                          </ul>
                        </li>
                        <li className="has-dropdown has-megaitem">
                          <a href="#">Shop <i className="fa fa-angle-down"></i></a>
                          <div className="mega-menu">
                            <ul className="mega-menu-inner">
                              <li className="mega-menu-item">
                                <a href="#" className="mega-menu-item-title">Shop Layouts</a>
                                <ul className="mega-menu-sub">
                                  <li><Link to="/shop">Shop Four Grid</Link></li>
                                  <li><Link to="/shop/shop-2">Shop Three Grid</Link></li>
                                  <li><Link to="/shop/shop-3">Shop List View</Link></li>
                                  <li><Link to="/shop/shop-4">Shop Left Sidebar</Link></li>
                                  <li><Link to="/shop/shop-5">Shop Right Sidebar</Link></li>
                                  <li><Link to="/product/1">Product Single</Link></li>
                                  <li><Link to="/product/product-single-2">Product Single Two</Link></li>
                                  <li><Link to="/product/product-single-3">Product Single Three</Link></li>
                                  <li><Link to="/lookbook">Lookbook</Link></li>
                                </ul>
                              </li>
                              <li className="mega-menu-item">
                                <a href="#" className="mega-menu-item-title">Other Pages</a>
                                <ul className="mega-menu-sub">
                                  <li><Link to="/cart/">Cart View One</Link></li>
                                  <li><Link to="/cart/cart-2">Cart View Two</Link></li>
                                  <li><Link to="/cart/cart-3">Cart View Three</Link></li>
                                  <li><Link to="/cart/cart-4">Cart View Four</Link></li>
                                  <li><Link to="/cart/empty-cart">Empty Cart</Link></li>
                                  <li><Link to="/my-account/checkout-1">Checkout View One</Link></li>
                                  <li><Link to="/my-account/checkout-2">Checkout View Two</Link></li>
                                  <li><Link to="/my-account/wishlist">Wishlist</Link></li>
                                  <li><Link to="/my-account/compare">Compare</Link></li>
                                  <li><Link to="/my-account/order-tracking">Order Tracking</Link></li>
                                </ul>
                              </li>
                              <li className="mega-menu-item">
                                <div className="menu-banner">
                                  <Link className="menu-banner-link" to="/shop">
                                    <img className="menu-banner-img" src="/assets/img/nav_banner.e87f584.png" alt="img" />
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="has-dropdown">
                          <a href="#">Blog <i className="fa fa-angle-down"></i></a>
                          <ul className="sub-menu">
                            <li><Link to="/blog">Blog Grid View One</Link></li>
                            <li><Link to="/blog/blog-2">Blog Grid View Two</Link></li>
                            <li><Link to="/blog/blog-3">Blog List View</Link></li>
                            <li><Link to="/blog/blog-single">Blog Single View One</Link></li>
                            <li><Link to="/blog/blog-single-2">Blog Single View TWo</Link></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="#">Pages <i className="fa fa-angle-down"></i></a>
                          <ul className="sub-menu">
                            <li><Link to="/faq">Frequently Questions</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/404">404 Page</Link></li>
                            <li><Link to="/contact-us">Contact Us One</Link></li>
                            <li><Link to="/contact-us/contact-us-2">Contact Us Two</Link></li>
                            <li><Link to="/coming-soon">Coming Soon</Link></li>
                            <li><Link to="/vendor-dashboard/">Vendor</Link></li>
                            <li><Link to="/my-account">My Account</Link></li>
                            <li><Link to="/login">Login</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/about-us">About Us</Link></li>
                      </ul>
                    </nav>
                  </div>
                  <ul className="header-action-link action-color--black action-hover-color--golden">
                    <li>
                      <a className="offcanvas-toggle" onClick={() => setOpen('wishlist')}>
                        <i className="far fa-heart"></i>
                        <span className="item-count">{wishlist.length}</span>
                      </a>
                    </li>
                    <li>
                      <a className="offcanvas-toggle" onClick={() => setOpen('cart')}>
                        <i className="fas fa-shopping-bag"></i>
                        <span className="item-count">{cart.length}</span>
                      </a>
                    </li>
                    <li>
                      <a className="search_width offcanvas-toggle" onClick={() => setOpen('search')}>
                        <img src={SEARCH_ICON} alt="img" />
                      </a>
                    </li>
                    <li>
                      <a className="offacnvas offside-about offcanvas-toggle" onClick={() => setOpen('about')}>
                        <i className="fas fa-bars"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div id="mobile_header" className="mobile-header sticky-header sticky-color--golden mobile-header-bg-color--golden section-fluid d-lg-block d-xl-none">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between">
              <div className="mobile-header-left">
                <ul className="mobile-menu-logo">
                  <li><Link to="/"><div className="logo"><img src="/assets/img/logo.f486653.png" alt="logo" /></div></Link></li>
                </ul>
              </div>
              <div className="mobile-right-side">
                <ul className="header-action-link action-color--black action-hover-color--golden">
                  <li><a className="search_width offcanvas-toggle" onClick={() => setOpen('search')}><img src={SEARCH_ICON} alt="img" /></a></li>
                  <li><a className="offcanvas-toggle" onClick={() => setOpen('wishlist')}><i className="far fa-heart"></i><span className="item-count">{wishlist.length}</span></a></li>
                  <li><a className="offcanvas-toggle" onClick={() => setOpen('cart')}><i className="fas fa-shopping-bag"></i><span className="item-count">{cart.length}</span></a></li>
                  <li><a className="offacnvas offside-about offcanvas-toggle" onClick={() => setOpen('about')}><i className="fas fa-bars"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Sidebar id="offcanvas-about" cls="offcanvas-mobile-about-section" panel="about" open={open} onClose={() => setOpen(null)}>
        <div className="mobile-menu-navbar-wrap">
          <div className="offcanvas-menu">
            <div className="v-sidebar-menu vsm_expanded" style={{ maxWidth: '350px' }}>
              <div className="vsm--list">
                {[
                  { title: 'Home', child: [['/', 'Fashion'], ['/furniture', 'Furniture'], ['/electronics', 'Electronics']] },
                  { title: 'Shop', child: [['/shop', 'Shop Four Grid'], ['/shop/shop-2', 'Shop Three Grid'], ['/shop/shop-3', 'Shop List View'], ['/shop/shop-4', 'Shop Left Sidebar'], ['/shop/shop-5', 'Shop Right Sidebar']] },
                  { title: 'Blogs', child: [['/blog', 'Blog Grid View One'], ['/blog/blog-2', 'Blog Grid View Two'], ['/blog/blog-3', 'Blog List View'], ['/blog/blog-single-2', 'Blog Single View Two']] },
                  { title: 'Pages', child: [['/faq', 'Frequently Questions'], ['/privacy-policy', 'Privacy Policy'], ['/404', '404 Page'], ['/contact-us', 'Contact Us One'], ['/coming-soon', 'Coming Soon'], ['/vendor-dashboard', 'Vendor'], ['/my-account', 'My Account'], ['/login', 'Login']] },
                ].map((grp, gi) => (
                  <div className="vsm--item" key={gi}>
                    <a href="#" className="vsm--link vsm--link_level-1"><span className="vsm--title">{grp.title}</span></a>
                    <div className="vsm--dropdown"><div className="vsm--list">
                      {grp.child.map(([to, t], ci) => (
                        <div className="vsm--item" key={ci}>
                          <Link to={to} className="vsm--link vsm--link_level-2" onClick={() => setOpen(null)}><span className="vsm--title">{t}</span></Link>
                        </div>
                      ))}
                    </div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-contact-info">
          <address className="address">
            <img src="/assets/img/logo.f486653.png" alt="logo" />
            <span>Address: Your address goes here.</span>
            <span>Call Us: 0123456789, 0123456789</span>
            <span>Email: demo@example.com</span>
          </address>
          <ul className="social-link">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
          </ul>
          <ul className="user-link">
            <li><Link to="/my-account/wishlist">Wishlist</Link></li>
            <li><Link to="/cart/">Cart</Link></li>
            <li><Link to="/my-account/checkout-1">Checkout</Link></li>
          </ul>
        </div>
      </Sidebar>

      <Sidebar id="offcanvas-add-cart" cls="offcanvas-add-cart-section" panel="cart" noBackdrop open={open} onClose={() => setOpen(null)}>
        <div className="offcanvas-add-cart-wrapper">
          <h4 className="offcanvas-title">Shopping Cart</h4>
          {cart.length ? (
            <>
              <ul className="offcanvas-cart">
                {cart.map((e, o) => (
                  <li className="offcanvas-cart-item-single" key={o}>
                    <div className="offcanvas-cart-item-block">
                      <Link className="offcanvas-cart-item-image-link" to={`/product/${e.id}`} onClick={() => setOpen(null)}>
                        <img className="offcanvas-cart-image" src={IMG(e.images[0] && e.images[0].src)} alt="img" />
                      </Link>
                      <div className="offcanvas-cart-item-content">
                        <Link className="offcanvas-cart-item-link" to={`/product/${e.id}`}>{e.title}</Link>
                        <div className="offcanvas-cart-item-details">
                          <span className="offcanvas-cart-item-details-quantity">{e.quantity} x</span>
                          {e.discount ? <span className="offcanvas-cart-item-details-price">${discountedPrice(e)}</span>
                            : <span className="offcanvas-cart-item-details-price">${e.price}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="offcanvas-cart-item-delete text-right">
                      <button className="offcanvas-cart-item-delete bg-transparent remove-btn" onClick={() => removeCartItem(e)}>
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="offcanvas-cart-total-price">
                <span className="offcanvas-cart-total-price-text">Subtotal:</span>
                <span className="offcanvas-cart-total-price-value">${cartTotal}</span>
              </div>
              <ul className="offcanvas-cart-action-button">
                <li><Link className="theme-btn-one btn-black-overlay btn_md" to="/cart">View Cart</Link></li>
                <li><Link className="theme-btn-one btn-black-overlay btn_md" to="/my-account/checkout-1">Checkout</Link></li>
              </ul>
            </>
          ) : (
            <ul className="offcanvas-cart"><li>Your cart is empty!</li></ul>
          )}
        </div>
      </Sidebar>

      <Sidebar id="offcanvas-wishlish" cls="offcanvas-add-cart-section" panel="wishlist" noBackdrop open={open} onClose={() => setOpen(null)}>
        <div className="offcanvas-wishlist-wrapper">
          <h4 className="offcanvas-title">Wishlist</h4>
          {wishlist.length ? (
            <>
              <ul className="offcanvas-wishlist">
                {wishlist.map((e, o) => (
                  <li className="offcanvas-wishlist-item-single" key={o}>
                    <div className="offcanvas-wishlist-item-block">
                      <Link className="offcanvas-wishlist-item-image-link" to={`/product/${e.id}`}>
                        <img className="offcanvas-wishlist-image" src={IMG(e.images[0] && e.images[0].src)} alt="img" />
                      </Link>
                      <div className="offcanvas-wishlist-item-content">
                        <Link className="offcanvas-wishlist-item-link" to={`/product/${e.id}`}>{e.title}</Link>
                        <div className="offcanvas-wishlist-item-details">
                          <span className="offcanvas-wishlist-item-details-quantity">{e.quantity} x</span>
                          {e.discount ? <span className="offcanvas-wishlist-item-details-price">${discountedPrice(e)}</span>
                            : <span className="offcanvas-wishlist-item-details-price">${e.price}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="offcanvas-wishlist-item-delete text-right">
                      <button className="offcanvas-wishlist-item-delete bg-transparent remove-btn" onClick={() => removeWishlistItem(e)}>
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="offcanvas-wishlist-action-button">
                <li><Link className="theme-btn-one btn-black-overlay btn_md" to="/my-account/wishlist">View wishlist</Link></li>
              </ul>
            </>
          ) : (
            <ul className="offcanvas-wishlist"><li>No Item in your wishlist!</li></ul>
          )}
        </div>
      </Sidebar>

      <Sidebar id="search_sidebar" cls="b-sidebar-outer" panel="search" open={open} onClose={() => setOpen(null)}>
        <div className="px-3 py-2 search-sidebar-content-wrap d-flex justify-content-center align-content-center w-100 h-100">
          <form className="d-flex flex-column justify-content-center product-search-form" onSubmit={(e) => e.preventDefault()}>
            <input type="search" placeholder="Type keyword(s) here" value={searchString}
              ref={searchInputRef}
              onChange={(e) => { setSearchString(e.target.value); searchProduct(e.target.value); }} />
            <button className="btn btn-lg btn-golden">Search</button>
            {searchResults.length ? (
              <ul className="search-results-wrap">
                {searchResults.map((e, o) => (
                  <li key={o}>
                    <div className="offcanvas-cart-item-block mb-3">
                      <Link className="offcanvas-cart-item-image-link" to={`/product/${e.id}`} onClick={() => setOpen(null)}>
                        <img className="offcanvas-cart-image" src={IMG(e.images[0] && e.images[0].src)} alt="img" />
                      </Link>
                      <div className="offcanvas-cart-item-content">
                        <Link className="offcanvas-cart-item-link text-white" to={`/product/${e.id}`}>{e.title}</Link>
                        <div className="offcanvas-cart-item-details">
                          {e.discount ? <span className="offcanvas-cart-item-details-price text-white">${discountedPrice(e)}</span>
                            : <span className="offcanvas-cart-item-details-price text-white">${e.price}</span>}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : null}
          </form>
        </div>
      </Sidebar>
    </div>
  );
}
