import { Link } from 'react-router-dom';
import { usePageMeta } from '../../lib/usePageMeta.js';
import ApexChart from './apex-chart.jsx';

const lineOptions = {
  chart: { type: 'line', height: 315, id: 'linechart', toolbar: { show: true }, zoom: { enabled: true } },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth' },
  colors: ['#008ffb', '#00e396', '#feb019'],
  grid: { borderColor: '#e0e0e0' },
  xaxis: { categories: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998'] },
  yaxis: { max: 120, tickAmount: 5 },
  legend: { position: 'bottom', horizontalAlign: 'center' },
  series: [
    { name: 'Total Revenue', data: [45, 52, 38, 24, 33, 26, 21, 27] },
    { name: 'Point movments', data: [35, 41, 62, 42, 13, 18, 29, 37] },
    { name: 'Revenue', data: [12, 16, 28, 26, 18, 22, 11, 8] },
  ],
};

const barOptions = {
  chart: { type: 'bar', height: 315, toolbar: { show: true } },
  plotOptions: { bar: { horizontal: false, columnWidth: '55%' } },
  dataLabels: { enabled: false },
  colors: ['#008ffb', '#00e396', '#feb019'],
  grid: { borderColor: '#e0e0e0' },
  xaxis: { categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'] },
  yaxis: { title: { text: '$ (thousands)' }, labels: { formatter: (v) => v } },
  legend: { position: 'bottom', horizontalAlign: 'center' },
  series: [
    { name: 'Recent Orders', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
    { name: 'Pending Payments', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] },
    { name: 'Revenue', data: [35, 41, 36, 26, 45, 48, 52, 53, 41] },
  ],
};

export default function VendorDashboard() {
  usePageMeta({ "title": "Vendor - AndShop Ecommerce Vue js Template", "metas": [{ "name": "description", "content": "Vendor Dashboard - AndShop Ecommerce Vue js, Nuxt js Template" }] });

  return (
    <>
      <div id="__nuxt">
        <div id="__layout">
          <div>
            <div>
              <section id="common_banner_one">
                <div className="container ">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="common_banner_text">
                        <h2>Vendor</h2>
                        {' '}
                        <ol className="breadcrumb bg-transparent">
                          <li className="breadcrumb-item">
                            <Link to="/" className="nuxt-link-active">Home</Link>
                          </li>
                          <li className="breadcrumb-item active">
                            <span aria-current="location">Vendor</span>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {' '}
              <section id="vendor_area" className="ptb-100">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-3">
                      <div className="dashboard_tab_button">
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <Link to="/vendor-dashboard" aria-current="page" className="nav-link nuxt-link-exact-active nuxt-link-active">
                              <i className="fas fa-tachometer-alt"></i>
                              {"Dashboard"}
                            </Link>
                          </li>
                          {' '}
                          <li className="nav-item">
                            <Link to="/vendor-dashboard/product" className="nav-link">
                              <i className="fas fa-shopping-cart"></i>
                              {"Product"}
                            </Link>
                          </li>
                          {' '}
                          <li className="nav-item">
                            <Link to="/vendor-dashboard/order" className="nav-link">
                              <i className="fas fa-shopping-bag"></i>
                              {"Order"}
                            </Link>
                          </li>
                          {' '}
                          <li className="nav-item">
                            <Link to="/vendor-dashboard/profile" className="nav-link">
                              <i className="far fa-id-badge"></i>
                              {"Profile"}
                            </Link>
                          </li>
                          {' '}
                          <li className="nav-item">
                            <Link to="/vendor-dashboard/add-product" className="nav-link">
                              <i className="fas fa-cart-plus"></i>
                              {"Add Product"}
                            </Link>
                          </li>
                          {' '}
                          <li className="nav-item">
                            <Link to="/vendor-dashboard/setting" className="nav-link">
                              <i className="fas fa-user-cog"></i>
                              {"Setting"}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {' '}
                    <div className="col-sm-12 col-md-9 col-lg-9">
                      <div className="dashboard_content">
                        <div id="vendor_dashboard">
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                              <div className="vendor_top_box">
                                <h2>25</h2>
                                {' '}
                                <h4>Total Products</h4>
                              </div>
                            </div>
                            {' '}
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                              <div className="vendor_top_box">
                                <h2>2552</h2>
                                {' '}
                                <h4>Total Sales</h4>
                              </div>
                            </div>
                            {' '}
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                              <div className="vendor_top_box">
                                <h2>50</h2>
                                {' '}
                                <h4>Order Pending</h4>
                              </div>
                            </div>
                          </div>
                          {' '}
                          <div className="row">
                            <div className="col-lg-6">
                              <div id="linechart" className="mychart_area">
                                <ApexChart options={lineOptions} />
                              </div>
                            </div>
                            {' '}
                            <div className="col-lg-6">
                              <div id="chart" className="mychart_area">
                                <ApexChart options={barOptions} />
                              </div>
                            </div>
                          </div>
                          {' '}
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                              <div className="vendor_order_boxed">
                                <h4>Pending Products</h4>
                                {' '}
                                <table className="table pending_table">
                                  <thead className="thead-light">
                                    <tr>
                                      <th scope="col">Image</th>
                                      {' '}
                                      <th scope="col">Product Name</th>
                                      {' '}
                                      <th scope="col">Price</th>
                                      {' '}
                                      <th scope="col">Sales</th>
                                    </tr>
                                  </thead>
                                  {' '}
                                  <tbody>
                                    <tr>
                                      <td scope="row">
                                        <img src="/assets/img/1.1633f2a.jpg" alt="img" />
                                      </td>
                                      {' '}
                                      <td>neck velvet dress</td>
                                      {' '}
                                      <td>$205</td>
                                      {' '}
                                      <td>1000</td>
                                    </tr>
                                    {' '}
                                    <tr>
                                      <td scope="row">
                                        <img src="/assets/img/1.1633f2a.jpg" alt="img" />
                                      </td>
                                      {' '}
                                      <td>neck velvet dress</td>
                                      {' '}
                                      <td>$205</td>
                                      {' '}
                                      <td>1000</td>
                                    </tr>
                                    {' '}
                                    <tr>
                                      <td scope="row">
                                        <img src="/assets/img/1.1633f2a.jpg" alt="img" />
                                      </td>
                                      {' '}
                                      <td>neck velvet dress</td>
                                      {' '}
                                      <td>$205</td>
                                      {' '}
                                      <td>1000</td>
                                    </tr>
                                    {' '}
                                    <tr>
                                      <td scope="row">
                                        <img src="/assets/img/1.1633f2a.jpg" alt="img" />
                                      </td>
                                      {' '}
                                      <td>neck velvet dress</td>
                                      {' '}
                                      <td>$205</td>
                                      {' '}
                                      <td>1000</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                            {' '}
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                              <div className="vendor_order_boxed">
                                <h4>Recent Orders</h4>
                                {' '}
                                <table className="table pending_table">
                                  <thead className="thead-light">
                                    <tr>
                                      <th scope="col">Order Id</th>
                                      {' '}
                                      <th scope="col">Product Details</th>
                                      {' '}
                                      <th scope="col">Status</th>
                                    </tr>
                                  </thead>
                                  {' '}
                                  <tbody>
                                    <tr>
                                      <td scope="row">#21515</td>
                                      {' '}
                                      <td>Neck Velvet Dress</td>
                                      {' '}
                                      <td>Confrimed</td>
                                    </tr>
                                    {' '}
                                    <tr>
                                      <td scope="row">#78153		</td>
                                      {' '}
                                      <td>Belted Trench Coat</td>
                                      {' '}
                                      <td>Shipped</td>
                                    </tr>
                                    {' '}
                                    <tr>
                                      <td scope="row">#51512		</td>
                                      {' '}
                                      <td>Man Print Tee</td>
                                      {' '}
                                      <td>Pending</td>
                                    </tr>
                                    {' '}
                                    <tr>
                                      <td scope="row">#78153	</td>
                                      {' '}
                                      <td>	Belted Trench Coat</td>
                                      {' '}
                                      <td>Shipped</td>
                                    </tr>
                                    {' '}
                                    <tr>
                                      <td scope="row">#78153		</td>
                                      {' '}
                                      <td>Belted Trench Coat</td>
                                      {' '}
                                      <td>Shipped</td>
                                    </tr>
                                    {' '}
                                    <tr>
                                      <td scope="row">#51512		</td>
                                      {' '}
                                      <td>Man Print Tee</td>
                                      {' '}
                                      <td>Pending</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {' '}
            <div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
