import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useStore, discountedPrice } from '../lib/store.jsx';
import { IMG, ratingStars } from '../lib/util.js';
import BreadcrumbSection from './Breadcrumb';
import ProductCard from './ProductCard';
import { InstagramArea } from './HomeSections.jsx';
import Swiper, { SwiperSlide } from './Swiper';

export default function ProductSingleView({ variant = 2 }) {
  const { id } = useParams();
  const { products, addToCart, addToWishlist, addToCompare } = useStore();
  const product = products.find((p) => p.id === Number(id)) || products[0];
  const [activeColor, setActiveColor] = useState('');
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState('description');

  const colors = useMemo(() => {
    const arr = [];
    (product.variants || []).forEach((v) => { if (arr.indexOf(v.color) === -1) arr.push(v.color); });
    return arr;
  }, [product]);

  const related = products.filter((p) => p.type === product.type && p.id !== product.id).slice(0, 4);
  const stars = ratingStars(product.rating);

  return (
    <div>
      <BreadcrumbSection title="Shop" crumbs={[{ text: 'Home', to: '/' }, { text: 'Product Single', to: '/product' }]} />
      <section className="ptb-100" id={variant === 3 ? 'product_single_three' : 'product_single_one'}>
        <div className="container">
          <div className="row area_boxed">
            <div className="col-lg-4">
              <div className="product_single_one_img">
                {variant === 2 || variant === 3 ? (
                  <Swiper options={{ slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0, loop: true, mousewheel: true, keyboard: { enabled: true }, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }, autoplay: true }} className="swiper product-single-2-slider">
                    {(product.images || []).map((im, si) => (
                      <SwiperSlide key={si}><img src={IMG(im.src)} alt={im.alt || product.title} className="img-fluid" /></SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <img src={IMG(product.images[0] && product.images[0].src)} alt={product.title} className="img-fluid" />
                )}
              </div>
            </div>
            <div className="col-lg-8">
              <div className="product_details_right_one">
                <div className="modal_product_content_one">
                  <h3 className="text-capitalize">{product.title}</h3>
                  <div className="reviews_rating">
                    {stars.map((s, i) => <i key={i} className={`fas fa-star ${s}`}></i>)}
                    <span>({product.rating} Customer Review)</span>
                  </div>
                  {product.discount ? <h4>${discountedPrice(product)} <del>${product.price}</del></h4> : <h4>${product.price}</h4>}
                  {variant === 3 ? (
                    <>
                      <p>
                        Standard dummy text ever since the 1500s, standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Vivamus magna,
                      </p>
                      <p>
                        lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
                      </p>
                      <ul className="list_three_pro">
                        <li><span>1.</span>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.</li>
                        <li><span>2.</span>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing.</li>
                        <li><span>3.</span>Lorem Ipsum Dolor Sit Amet Consectetur Adipi.</li>
                      </ul>
                      <form id="product_count_form_two">
                        <div className="product_count_one">
                          <div className="b-form-spinbutton form-control border-0 d-inline-flex align-items-stretch">
                            <button type="button" className="btn btn-sm border-0 rounded-0 py-0" aria-label="Decrement" onClick={() => setQty(Math.max(1, qty - 1))}><i className="fas fa-minus"></i></button>
                            <output dir="ltr" className="flex-grow-1 align-self-center border-left border-right"><bdi>{qty}</bdi></output>
                            <button type="button" className="btn btn-sm border-0 rounded-0 py-0" aria-label="Increment" onClick={() => setQty(Math.min(100, qty + 1))}><i className="fas fa-plus"></i></button>
                          </div>
                        </div>
                      </form>
                      <div className="variable-single-item">
                        <div className="product-variable-color">
                          <span className="align_text_color">Color:</span>
                          {['red', 'green', 'blue'].map((c) => (
                            <label htmlFor={`modal-product-color-${c}`} key={c}>
                              <input className="color-select" name="modal-product-color" id={`modal-product-color-${c}`} type="radio" defaultChecked={c === 'red'} />
                              <span className={`product-color-${c}`}></span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="product_details_cat">
                        <ul><li>Category:</li><li><a href="#!">Home,</a></li><li><a href="#!">Bed,</a></li><li><a href="#!">Sofa</a></li></ul>
                      </div>
                      <div className="product_details_cat product_details_bor">
                        <ul><li>Tags:</li><li><a href="#!">Home,</a></li><li><a href="#!">Furniture,</a></li><li><a href="#!">Sofa</a></li></ul>
                      </div>
                      <div className="links_Product_areas area_custom_details">
                        <ul>
                          <li><a className="action wishlist" href="#!" title="Wishlist" onClick={() => addToWishlist(product)}><i className="far fa-heart"></i> Add To Wishlist</a></li>
                          <li><a className="action compare" href="#!" title="Compare" onClick={() => addToCompare(product)}><i className="fas fa-exchange-alt"></i> Add To Compare</a></li>
                          <li><a className="theme-btn-one btn-black-overlay btn_sm" href="#!" onClick={() => addToCart(product, qty)}>Add To Cart</a></li>
                        </ul>
                      </div>
                      <div className="product_detail_socials d-flex align-items-center">
                        <h6>Share:</h6>
                        <ul className="d-flex align-items-center">
                          <li><a href="#!"><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href="#!"><i className="fab fa-pinterest-p"></i></a></li>
                          <li><a href="#!"><i className="fab fa-instagram"></i></a></li>
                          <li><a href="#!"><i className="fab fa-google-plus-g"></i></a></li>
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <p>{product.description}</p>
                      <div className="customs_selects">
                        <select className="customs_sel_box" name="product">
                          <option>Size</option><option>XL</option><option>S</option><option>M</option><option>L</option>
                        </select>
                      </div>
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
                      <form id="product_count_form_two">
                        <div className="product_count_one">
                          <div className="b-form-spinbutton form-control border-0 d-inline-flex align-items-stretch">
                            <button type="button" className="btn btn-sm border-0 rounded-0 py-0" aria-label="Decrement" onClick={() => setQty(Math.max(1, qty - 1))}><i className="fas fa-minus"></i></button>
                            <output dir="ltr" className="flex-grow-1 align-self-center border-left border-right"><bdi>{qty}</bdi></output>
                            <button type="button" className="btn btn-sm border-0 rounded-0 py-0" aria-label="Increment" onClick={() => setQty(Math.min(100, qty + 1))}><i className="fas fa-plus"></i></button>
                          </div>
                        </div>
                      </form>
                      <div className="links_Product_areas">
                        <ul>
                          <li><button className="action wishlist bg-transparent" title="Wishlist" onClick={() => addToWishlist(product)}><i className="far fa-heart mr-1"></i> Add To Wishlist</button></li>
                          <li><button className="action compare bg-transparent" title="Compare" onClick={() => addToCompare(product)}><i className="fas fa-exchange-alt mr-1"></i> Add To Compare</button></li>
                        </ul>
                        <button className="theme-btn-one btn-black-overlay btn_sm" onClick={() => addToCart(product, qty)}>Add To Cart</button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="product_details_tabs">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a href="#description" role="tab" className={`nav-link${tab === 'description' ? ' active' : ''}`} onClick={(e) => { e.preventDefault(); setTab('description'); }}>Description</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a href="#additional" role="tab" className={`nav-link${tab === 'additional' ? ' active' : ''}`} onClick={(e) => { e.preventDefault(); setTab('additional'); }}>Additional Information</a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a href="#review" role="tab" className={`nav-link${tab === 'review' ? ' active' : ''}`} onClick={(e) => { e.preventDefault(); setTab('review'); }}>Reviews</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div role="tabpanel" id="description" className={`tab-pane${tab === 'description' ? ' active' : ''}`} style={{ display: tab === 'description' ? undefined : 'none' }}>
                    <div className="product_description">
                      <p>
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                      </p>
                      <ul>
                        <li>Vivamus magna justo, lacinia eget consectetur sed</li>
                        <li>Curabitur aliquet quam id dui posuere blandit</li>
                        <li>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar</li>
                      </ul>
                      <p>
                        Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. porttitor at sem. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                      </p>
                    </div>
                  </div>
                  <div role="tabpanel" id="additional" className={`tab-pane${tab === 'additional' ? ' active' : ''}`} style={{ display: tab === 'additional' ? undefined : 'none' }}>
                    <div className="product_additional">
                      <ul>
                        <li>Weight: <span>400 g</span></li>
                        <li>Dimensions: <span>10 x 10 x 15 cm</span></li>
                        <li>Materials: <span>60% cotton, 40% polyester</span></li>
                        <li>Other Info: <span>American heirloom jean shorts pug seitan letterpress</span></li>
                      </ul>
                    </div>
                  </div>
                  <div role="tabpanel" id="review" className={`tab-pane${tab === 'review' ? ' active' : ''}`} style={{ display: tab === 'review' ? undefined : 'none' }}>
                    <div className="product_reviews">
                      <ul>
                        {['user1.be89a16.png', 'user2.9f6bd36.png', 'user3.3cafa53.png'].map((av, ri) => (
                          <li className="media" key={ri}>
                            <div className="media-img"><img src={IMG(av)} alt="img" /></div>
                            <div className="media-body">
                              <div className="media-header">
                                <div className="media-name"><h4>Sara Anela</h4><p>5 days ago</p></div>
                                <div className="post-share"><a className="replay" href="#!">Replay</a><a href="#!">Report</a></div>
                              </div>
                              <div className="media-pragraph">
                                <div className="product_review_strat">
                                  {[1, 2, 3, 4, 5].map((s) => (
                                    <span key={s}><a href="#!"><i className="fas fa-star"></i></a></span>
                                  ))}
                                </div>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo.</p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-100" id="related_product">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="center_heading">
                <h2>You Might Also Like</h2>
                <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
              </div>
            </div>
          </div>
          <div className="row">
            {related.map((e, o) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={o}>
                <ProductCard product={e} index={o} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <InstagramArea />
    </div>
  );
}
