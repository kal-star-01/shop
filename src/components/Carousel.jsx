import { useEffect, useRef } from 'react';
import $ from 'jquery';

// owl.carousel's UMD build expects jQuery on the global scope, so we set
// window.jQuery/$ and dynamically import the plugin before initializing.
export default function Carousel({ options = {}, className = 'owl-carousel owl-theme', id, children }) {
  const ref = useRef(null);

  useEffect(() => {
    let disposed = false;
    window.jQuery = window.$ = $;
    import('owl.carousel').then(() => {
      if (disposed || !ref.current) return;
      const $el = $(ref.current);
      if (!$el.length) return;
      $el.owlCarousel(options);
    });
    return () => {
      disposed = true;
      const $el = ref.current && $(ref.current);
      if ($el && $el.data && $el.data('owl.carousel')) {
        $el.owlCarousel('destroy');
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={ref} id={id} className={className}>{children}</div>;
}
