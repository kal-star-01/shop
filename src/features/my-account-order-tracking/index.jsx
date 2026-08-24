import { usePageMeta } from '../../lib/usePageMeta.js';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';

function Page() {
  usePageMeta('Order Tracking', 'Order Tracking - AndShop Ecommerce Vue js Template');
  return (
    <>
      <BreadcrumbSection title="Order Tracking" crumbs={[{ text: 'Home', to: '/' }]} />
      <section className="ptb-100" id="order_tracking">
        <div className="container"><div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="order_tracking_wrapper">
              <h4>Order Tracking</h4>
              <p>To track your order please enter your Order ID in the box below and press the &quot;Track&quot; button.</p>
              <form>
                <div className="form-group">
                  <label htmlFor="order_id">Order ID</label>
                  <input type="text" id="order_id" name="order_id" placeholder="Found in your order Confirmation email" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Billing Email</label>
                  <input type="email" id="email" name="email" placeholder="Enter Your Email Address" className="form-control" />
                </div>
                <div className="order_track_button">
                  <button className="theme-btn-one btn-black-overlay btn_md">Track</button>
                </div>
              </form>
            </div>
          </div>
        </div></div>
      </section>
    </>
  );
}
export default Page;
