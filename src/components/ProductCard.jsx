import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useStore, discountedPrice } from '../lib/store.jsx';
import { IMG, ratingStars } from '../lib/util.js';
import Modal from './Modal';
import Swiper, { SwiperSlide } from './Swiper';

export default function ProductCard({ product, variant = 1, onAlert }) {
  const { addToCart, addToWishlist, addToCompare } = useStore();
  const [show, setShow] = useState(false);
  const [activeColor, setActiveColor] = useState('');
  const [qty, setQty] = useState(1);

  // Hooks MUST all run before the early return (Rules of Hooks).
  const colors = useMemo(() => {
    const arr = [];
    (product?.variants || []).forEach((v) => { if (arr.indexOf(v.color) === -1) arr.push(v.color); });
    return arr;
  }, [product]);

  if (!product) return null;

  const wrapClass = {
    1: 'product_wrappers_one',
    2: 'product_wrappers_two',
    3: 'product_wrappers_three',
    4: 'product_wrappers_four',
    5: 'product_wrappers_five',
  }[variant] || 'product_wrappers_one';

  const handleCart = (p = product) => {
    addToCart(p, qty);
    if (onAlert) onAlert(3);
  };
  const handleWish = (p = product) => { addToWishlist(p); if (onAlert) onAlert(3); };
  const handleCompare = (p = product) => { addToCompare(p); if (onAlert) onAlert(3); };

  const stars = ratingStars(product.rating);

  return (
    <>
      {variant === 7 ? (
        <div className="product_wrappers_list">
          <div className="row">
            <div className="col-lg-3">
              <div className="thumb">
                <Link className="image" to={`/product/${product.id}`}>
                  <img src={IMG(product.images[0] && product.images[0].src)} alt={product.title} />
                </Link>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="content">
                <div className="product_para_top">
                  <h4 className="title text-capitalize">
                    <Link to={`/product/${product.id}`}>{product.title}</Link>
                  </h4>
                  <p>{product.description}</p>
                  <span className="price">
                    <span className="new">${discountedPrice(product)}</span>
                  </span>
                </div>
                <div className="actions">
                  <button className="action wishlist bg-transparent" title="Wishlist" onClick={() => handleWish()}><i className="far fa-heart"></i></button>
                  <button className="action quickview bg-transparent" id="toggle-btn" title="Quick view" onClick={() => setShow(true)}><i className="fas fa-expand"></i></button>
                  <button className="action compare bg-transparent" title="Compare" onClick={() => handleCompare()}><i className="fas fa-exchange-alt"></i></button>
                </div>
                <button className="add-to-cart offcanvas-toggle btn btn_sm theme-btn-one btn-black-overlay mt-3" title="Add To Cart" onClick={() => handleCart()}>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      ) : variant === 6 ? (
        <div className="product_box text-center">
          <div className="product_img">
            <Link to={`/product/${product.id}`}>
              <img src={IMG(product.images[0] && product.images[0].src)} alt={product.title} />
            </Link>
            <div className="product_action_box">
              <ul className="list_none pr_action_btn">
                <li><button title="Wishlist" onClick={() => handleWish()}><i className="far fa-heart"></i></button></li>
                <li><button className="action quickview" id="toggle-btn" title="Quick view" onClick={() => setShow(true)}><i className="fas fa-expand"></i></button></li>
                <li><button title="Compare" onClick={() => handleCompare()}><i className="fas fa-exchange-alt"></i></button></li>
              </ul>
            </div>
          </div>
          <div className="product_info">
            <h5 className="product_title text-capitalize">
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </h5>
            <div className="product_price">
              <span className="price">${discountedPrice(product)}</span>
              {product.discount ? <del>${product.price}</del> : null}
            </div>
            <div className="rating_wrap"><div className="rating"><div className="reviews_rating">{stars.map((s, i) => <i key={i} className={`fas fa-star ${s}`}></i>)}</div></div></div>
          </div>
        </div>
      ) : variant === 4 ? (
        <div className="product_item_two">
          <div className="product_item_inner">
            <div className="product_img_wrap">
              <Link to={`/product/${product.id}`}>
                <img src={IMG(product.images[0] && product.images[0].src)} alt={product.title} />
              </Link>
            </div>
            <div className="product_button">
              <button title="Add To Cart" onClick={() => handleCart()}>
                <i className="fa fa-shopping-bag"></i>
              </button>
              <button title="Wishlist" onClick={() => handleWish()}>
                <i className="fa fa-heart"></i>
              </button>
              <button className="action quickview" id="toggle-btn" title="Quick view" onClick={() => setShow(true)}>
                <i className="fa fa-eye"></i>
              </button>
            </div>
          </div>
          <div className="product_detail">
            <h5 className="product_title">
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </h5>
            <p className="item_price">{product.discount ? `$${discountedPrice(product)}` : `$${product.price}`}</p>
          </div>
        </div>
      ) : (
      <div className={wrapClass}>
        <div className="thumb">
          <Link className="image" to={`/product/${product.id}`}>
            <img src={IMG(product.images[0] && product.images[0].src)} alt={product.title} />
            <img className="hover-image" src={IMG(product.images[1] && product.images[1].src)} alt={product.title} />
          </Link>
          <span className="badges">
            {product.new ? <span className="new">new</span>
              : product.hot ? <span className="hot">hot</span>
              : <span></span>}
          </span>
          <div className="actions">
            <button className="action wishlist" title="Wishlist" onClick={() => handleWish()}>
              <i className="far fa-heart"></i>
            </button>
            <button className="action quickview" id="toggle-btn" title="Quick view" onClick={() => setShow(true)}>
              <i className="fas fa-expand"></i>
            </button>
            <button className="action compare" title="Compare" onClick={() => handleCompare()}>
              <i className="fas fa-exchange-alt"></i>
            </button>
          </div>
          <button className="add-to-cart offcanvas-toggle" title="Add To Cart" onClick={() => handleCart()}>
            Add To Cart
          </button>
        </div>
        <div className="content">
          <h5 className="title text-capitalize">
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </h5>
          <span className="price">
            {product.discount ? <span className="new">${discountedPrice(product)}</span>
              : <span className="new">${product.price}</span>}
          </span>
        </div>
      </div>
      )}

      <Modal show={show} onClose={() => setShow(false)} className="product_one_modal_top">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12 col-12">
            <div className="products_modal_sliders">
              <Swiper options={{ slidesPerView: 1, spaceBetween: 20, freeMode: true }} className="product-modal-swiper">
                {product.images.map((e, o) => (
                  <SwiperSlide key={o}>
                    <img className="img-fluid bg-img" src={IMG(e.src)} alt={e.alt} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-12 col-12">
            <div className="modal_product_content_one">
              <h3 className="text-capitalize">{product.title}</h3>
              <div className="reviews_rating">
                {stars.map((s, i) => <i key={i} className={`fas fa-star ${s}`}></i>)}
                <span>({product.rating} Customer Review)</span>
              </div>
              {product.discount ? (
                <h4>${discountedPrice(product)} <del>${product.price}</del></h4>
              ) : <h4>${product.price}</h4>}
              <p>{product.description}</p>
              <div className="variable-single-item">
                <span>Color</span>
                <ul className="color-variant d-flex">
                  {colors.map((c, o) => (
                    <li key={o} className={activeColor === c ? 'active' : ''}>
                      <a className={c} style={{ backgroundColor: c }} onClick={() => setActiveColor(c)}></a>
                    </li>
                  ))}
                </ul>
              </div>
              <form id="product_count_form_one">
                <div className="product_count_one">
                  <div role="group" tabIndex="-1" className="b-form-spinbutton form-control border-0 d-inline-flex align-items-stretch">
                    <button tabIndex="-1" type="button" aria-label="Decrement" className="btn btn-sm border-0 rounded-0 py-0" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                      <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="dash" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi-dash b-icon bi"><g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></g></svg>
                    </button>
                    <output dir="ltr" role="spinbutton" tabIndex="0" aria-valuemin="1" aria-valuemax="100" aria-valuenow={qty} className="flex-grow-1 align-self-center border-left border-right"><bdi>{qty}</bdi></output>
                    <button tabIndex="-1" type="button" aria-label="Increment" className="btn btn-sm border-0 rounded-0 py-0" onClick={() => setQty((q) => Math.min(100, q + 1))}>
                      <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="plus" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi-plus b-icon bi"><g transform="translate(8 8) scale(1.25 1.25) translate(-8 -8)"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path></g></svg>
                    </button>
                  </div>
                  <a className="theme-btn-one btn-black-overlay btn_sm" href="javascript:void(0)" onClick={() => handleCart()}>
                    Add To Cart
                  </a>
                </div>
              </form>
              <div className="modal_share_icons_one">
                <h4>SHARE THIS PRODUCT</h4>
                <div className="posted_icons_one">
                  <a href="#!"><i className="fab fa-facebook-f"></i></a>
                  <a href="#!"><i className="fab fa-instagram"></i></a>
                  <a href="#!"><i className="fab fa-twitter"></i></a>
                  <a href="#!"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#!"><i className="fab fa-google-plus-g"></i></a>
                  <a href="#!"><i className="fab fa-pinterest-p"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
