import { Link } from 'react-router-dom';

export default function BreadcrumbSection({ title, crumbs = [{ text: 'Home', to: '/' }] }) {
  return (
    <section id="common_banner_one">
      <div className="container ">
        <div className="row">
          <div className="col-lg-12">
            <div className="common_banner_text">
              <h2>{title}</h2>
              <ol className="breadcrumb bg-transparent">
                {crumbs.map((c, i) => (
                  <li className={`breadcrumb-item${i === crumbs.length - 1 ? ' active' : ''}`} key={i}>
                    {c.to ? <Link to={c.to}>{c.text}</Link> : <span aria-current="location">{c.text}</span>}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
