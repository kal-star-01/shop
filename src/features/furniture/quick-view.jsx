import { useState, useMemo } from 'react';
import { useStore, discountedPrice } from '../../lib/store.jsx';
import { IMG, ratingStars } from '../../lib/util.js';
import Modal from '../../components/Modal.jsx';
import Swiper, { SwiperSlide } from '../../components/Swiper.jsx';

export default function QuickView({ product, onClose }) {
  const { addToCart } = useStore();
  const [qty, setQty] = useState(1);
  const [activeColor, setActiveColor] = useState('');

  const colors = useMemo(() => {
    const arr = [];
    (product?.variants || []).forEach((v) => { if (arr.indexOf(v.color) === -1) arr.push(v.color); });
    return arr;
  }, [product]);

  if (!product) return null;

  const stars = ratingStars(product.rating);
  const handleCart = () => { addToCart(product, qty); };

  return (
    <Modal show onClose={onClose} className="product_one_modal_top">
      <div className="row">
        <div className="col-lg-5 col-md-6 col-sm-12 col-12">
          <div className="products_modal_sliders">
            <Swiper options={{ slidesPerView: 1, spaceBetween: 20, freeMode: true }} className="product-modal-swiper">
              {product.images.map((e, o) => (
                <SwiperSlide key={o}>
                  <img className="img-fluid bg-img" src={IMG(e.src)} alt={e.alt || product.title} />
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
                <a className="theme-btn-one btn-black-overlay btn_sm" href="javascript:void(0)" onClick={handleCart}>
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
  );
}
