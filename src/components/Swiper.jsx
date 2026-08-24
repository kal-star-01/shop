import { Children } from 'react';
import { Swiper as RealSwiper, SwiperSlide as RealSlide } from 'swiper/react';
import { Autoplay, Navigation, Keyboard, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Maps the legacy `options` object onto swiper props/modules; children already
// arrive as SwiperSlide elements.
export default function Swiper({ options = {}, className = '', children }) {
  const slides = Children.toArray(children).filter((c) => c && c.type === SwiperSlide);
  const nav = options.navigation ? true : false;
  return (
    <RealSwiper
      className={className}
      slidesPerView={options.slidesPerView || 1}
      spaceBetween={options.spaceBetween || 0}
      slidesPerGroup={options.slidesPerGroup}
      loop={!!options.loop}
      mousewheel={options.mousewheel}
      keyboard={options.keyboard}
      autoplay={options.autoplay && options.autoplay.autoplay === false ? false : options.autoplay || false}
      navigation={nav}
      pagination={options.pagination || false}
      breakpoints={options.breakpoints}
      modules={[Autoplay, Navigation, Keyboard, Pagination]}
    >
      {slides.map((s, i) => <RealSlide key={i}>{s.props.children}</RealSlide>)}
    </RealSwiper>
  );
}

export function SwiperSlide({ children }) {
  return children;
}
