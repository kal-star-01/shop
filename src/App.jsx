import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import './styles/css.q-0ebd7e50.css';
import './styles/css.q-baf0d487.css';
import './styles/poppins.css';
import './styles/vendor.css';
import './styles/owl-nav-fix.css';
import Home from './features/home/index.jsx';
import Page404 from './features/not-found/index.jsx';
import Faq from './features/faq/index.jsx';
import Blog from './features/blog/index.jsx';
import Cart from './features/cart/index.jsx';
import Shop from './features/shop/index.jsx';
import Login from './features/login/index.jsx';
import Grocery from './features/grocery/index.jsx';
import AboutUs from './features/about-us/index.jsx';
import Lookbook from './features/lookbook/index.jsx';
import Pharmacy from './features/pharmacy/index.jsx';
import Register from './features/register/index.jsx';
import Furniture from './features/furniture/index.jsx';
import ContactUs from './features/contact-us/index.jsx';
import MyAccount from './features/my-account/index.jsx';
import BlogBlog2 from './features/blog-two/index.jsx';
import BlogBlog3 from './features/blog-three/index.jsx';
import CartCart2 from './features/cart-two/index.jsx';
import CartCart3 from './features/cart-three/index.jsx';
import CartCart4 from './features/cart-four/index.jsx';
import ComingSoon from './features/coming-soon/index.jsx';
import Electronics from './features/electronics/index.jsx';
import ShopShop2 from './features/shop-two/index.jsx';
import ShopShop3 from './features/shop-three/index.jsx';
import ShopShop4 from './features/shop-four/index.jsx';
import ShopShop5 from './features/shop-five/index.jsx';
import PrivacyPolicy from './features/privacy-policy/index.jsx';
import CartEmptyCart from './features/empty-cart/index.jsx';
import VendorDashboard from './features/vendor-dashboard/index.jsx';
import MyAccountOrders from './features/my-account-orders/index.jsx';
import BlogBlogSingle2 from './features/blog-single-two/index.jsx';
import BlogBlogSingle1 from './features/blog-single-one/index.jsx';
import MyAccountCompare from './features/my-account-compare/index.jsx';
import MyAccountWishlist from './features/my-account-wishlist/index.jsx';
import MyAccountAddresses from './features/my-account-addresses/index.jsx';
import MyAccountDownloads from './features/my-account-downloads/index.jsx';
import MyAccountCheckout1 from './features/my-account-checkout-one/index.jsx';
import MyAccountCheckout2 from './features/my-account-checkout-two/index.jsx';
import VendorDashboardOrder from './features/vendor-orders/index.jsx';
import ContactUsContactUs2 from './features/contact-us-two/index.jsx';
import ProductProductSingle2 from './features/product-single-two/index.jsx';
import ProductProductSingle3 from './features/product-single-three/index.jsx';
import ProductSingle from './features/product-single/index.jsx';
import VendorDashboardProduct from './features/vendor-products/index.jsx';
import VendorDashboardProfile from './features/vendor-profile/index.jsx';
import VendorDashboardSetting from './features/vendor-settings/index.jsx';
import MyAccountOrderTracking from './features/my-account-order-tracking/index.jsx';
import MyAccountAccountDetails from './features/my-account-details/index.jsx';
import MyAccountAccountInfoEdit from './features/my-account-info-edit/index.jsx';
import VendorDashboardAddProduct from './features/vendor-add-product/index.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/grocery" element={<Grocery />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/blog/blog-2" element={<BlogBlog2 />} />
        <Route path="/blog/blog-3" element={<BlogBlog3 />} />
        <Route path="/cart/cart-2" element={<CartCart2 />} />
        <Route path="/cart/cart-3" element={<CartCart3 />} />
        <Route path="/cart/cart-4" element={<CartCart4 />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/shop/shop-2" element={<ShopShop2 />} />
        <Route path="/shop/shop-3" element={<ShopShop3 />} />
        <Route path="/shop/shop-4" element={<ShopShop4 />} />
        <Route path="/shop/shop-5" element={<ShopShop5 />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cart/empty-cart" element={<CartEmptyCart />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/my-account/orders" element={<MyAccountOrders />} />
        <Route path="/blog/blog-single-2" element={<BlogBlogSingle2 />} />
        <Route path="/blog/blog-single" element={<BlogBlogSingle1 />} />
        <Route path="/my-account/compare" element={<MyAccountCompare />} />
        <Route path="/my-account/wishlist" element={<MyAccountWishlist />} />
        <Route path="/my-account/addresses" element={<MyAccountAddresses />} />
        <Route path="/my-account/downloads" element={<MyAccountDownloads />} />
        <Route path="/my-account/checkout-1" element={<MyAccountCheckout1 />} />
        <Route path="/my-account/checkout-2" element={<MyAccountCheckout2 />} />
        <Route path="/vendor-dashboard/order" element={<VendorDashboardOrder />} />
        <Route path="/contact-us/contact-us-2" element={<ContactUsContactUs2 />} />
        <Route path="/product/product-single-2" element={<ProductProductSingle2 />} />
        <Route path="/product/product-single-3" element={<ProductProductSingle3 />} />
        <Route path="/vendor-dashboard/product" element={<VendorDashboardProduct />} />
        <Route path="/vendor-dashboard/profile" element={<VendorDashboardProfile />} />
        <Route path="/vendor-dashboard/setting" element={<VendorDashboardSetting />} />
        <Route path="/my-account/order-tracking" element={<MyAccountOrderTracking />} />
        <Route path="/my-account/account-details" element={<MyAccountAccountDetails />} />
        <Route path="/my-account/account-info-edit" element={<MyAccountAccountInfoEdit />} />
        <Route path="/product/:id" element={<ProductSingle />} />
        <Route path="/vendor-dashboard/add-product" element={<VendorDashboardAddProduct />} />
        </Routes>
      </Layout>
    </>
  );
}
