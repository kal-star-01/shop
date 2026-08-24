import { useState, useMemo } from 'react';
import ProductCard from './ProductCard.jsx';
import Swiper, { SwiperSlide } from './Swiper.jsx';
import { useStore } from '../lib/store.jsx';

function useStoreSafe() {
  return useStore();
}

export function ProductTabs({ type = 'fashion', className = 'hot-product-area-tabs', cardVariant = 1, onAlert }) {
  const { products } = useStoreSafe();
  const fashion = useMemo(() => products.filter((p) => p.type === type), [products, type]);
  const categories = useMemo(() => {
    const c = [];
    fashion.forEach((p) => (p.collection || []).forEach((i) => { if (c.indexOf(i) === -1) c.push(i); }));
    return c;
  }, [fashion]);
  const [active, setActive] = useState(0);

  const allPanels = categories.map((c) => fashion.filter((p) => (p.collection || []).find((i) => i === c)));

  return (
    <div className={`tabs ${className}`}>
      <div className="">
        <ul role="tablist" className="nav nav-tabs">
          {categories.map((c, i) => (
            <li role="presentation" className="nav-item" key={i}>
              <a role="tab" href="#" className={`nav-link${active === i ? ' active' : ''}`}
                onClick={(e) => { e.preventDefault(); setActive(i); }}>{c}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="tab-content">
        {allPanels.map((list, i) => (
          <div role="tabpanel" className={`tab-pane row${active === i ? ' active' : ''}`} key={i}>
            {list.map((e, o) => (
              <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={o}>
                <ProductCard product={e} index={o} variant={cardVariant} onAlert={onAlert} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TodaysDeal({ onAlert }) {
  const { products } = useStoreSafe();
  const list = products.filter((p) => p.type === 'fashion');
  const swiperOption = {
    slidesPerView: 4, slidesPerGroup: 1, spaceBetween: 30, loop: false, mousewheel: false,
    keyboard: { enabled: false },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    breakpoints: { 1024: { slidesPerView: 4, spaceBetween: 40 }, 768: { slidesPerView: 3, spaceBetween: 30 }, 640: { slidesPerView: 2, spaceBetween: 20 }, 300: { slidesPerView: 1, spaceBetween: 10 } },
    autoplay: false,
  };
  return (
    <Swiper options={swiperOption} className="todays_slider position-relative">
      {list.map((e, o) => (
        <SwiperSlide key={o}><ProductCard product={e} index={o} variant={1} onAlert={onAlert} /></SwiperSlide>
      ))}
    </Swiper>
  );
}

export function InstagramArea() {
  const posts = ['post8.7c75846.png', 'post9.1d6a1b5.png', 'post10.09f338d.png', 'post11.8f7e2e2.png', 'post12.76401dd.png'];
  const swiperOption = {
    slidesPerView: 5, spaceBetween: 0, slidesPerGroup: 1, loop: true, loopFillGroupWithBlank: true,
    autoplay: { autoplay: true, delay: 2500, disableOnInteraction: true },
    breakpoints: { 992: { slidesPerView: 5 }, 991: { slidesPerView: 3 }, 768: { slidesPerView: 3 }, 767: { slidesPerView: 3 }, 766: { slidesPerView: 3 }, 575: { slidesPerView: 2 }, 400: { slidesPerView: 2 }, 0: { slidesPerView: 1 } },
  };
  return (
    <section id="instagram_area_one">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="center_heading">
              <h2>Follow Us Instagram</h2>
              <p>Mauris luctus nisi sapien tristique dignissim ornare</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper options={swiperOption} className="swiper">
              {posts.map((src, i) => (
                <SwiperSlide key={i}>
                  <div className="instgram_post">
                    <a href="#!">
                      <i className="fab fa-instagram"></i>
                      <img src={`/assets/img/${src}`} alt="img" />
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

