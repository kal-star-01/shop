import ProductCard from './ProductCard';
import { useStore } from '../lib/store.jsx';

export default function CategoryProducts({ type, heading, sub, collection, cols = 'col-lg-3 col-md-4 col-sm-6 col-12', onAlert }) {
  const { products } = useStore();
  const list = products.filter((p) => {
    if (type && p.type !== type) return false;
    if (collection && !(p.collection || []).includes(collection)) return false;
    return true;
  });
  return (
    <section className="ptb-100">
      <div className="container">
        {heading && (
          <div className="row">
            <div className="col-lg-12">
              <div className="center_heading">
                <h2>{heading}</h2>
                {sub && <p>{sub}</p>}
              </div>
            </div>
          </div>
        )}
        <div className="row">
          {list.map((e, o) => (
            <div className={cols} key={o}>
              <ProductCard product={e} index={o} onAlert={onAlert} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
