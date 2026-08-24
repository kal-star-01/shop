import { useState } from 'react';
import { usePageMeta } from '../../lib/usePageMeta.js';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';
import { required, validEmail } from '../../lib/util.js';

function Page() {
  usePageMeta('Contact Us', 'Contact Us page - AndShop Ecommerce Vue js, Nuxt js Template');
  const [user, setUser] = useState({ firstName: '', phone: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const firstNameReq = required(user.firstName);
  const phoneReq = required(user.phone);
  const emailReq = required(user.email);
  const emailValid = validEmail(user.email);
  const subjectReq = required(user.subject);
  const messageReq = required(user.message);
  const valid = firstNameReq && phoneReq && emailReq && emailValid && subjectReq && messageReq;
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); if (valid) { alert('Form Submitted Successfully!'); } };
  return (
    <>
      <section id="common_banner_one">
        <div className="container">
          <div className="row"><div className="col-lg-12">
            <BreadcrumbSection title="Contact Us" crumbs={[{ text: 'Home', to: '/' }, { text: 'Contact' }]} />
          </div></div>
        </div>
      </section>
      <section className="ptb-100" id="contact_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact_form_one">
                <h3>Get In Touch</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <input className={`form-control${submitted && !firstNameReq ? ' is-invalid' : ''}`} type="text" id="firstName" name="firstName" placeholder="Name*" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                        {submitted && !firstNameReq && <div className="invalid-feedback">Name is required</div>}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <input className={`form-control${submitted && (!emailReq || !emailValid) ? ' is-invalid' : ''}`} type="email" id="email" name="email" placeholder="email*" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        {submitted && !emailReq && <div className="invalid-feedback">Email is required</div>}
                        {submitted && !emailValid && <div className="invalid-feedback">Email is invalid</div>}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <input className={`form-control${submitted && !phoneReq ? ' is-invalid' : ''}`} type="text" id="phone" name="phone" placeholder="Phone*" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                        {submitted && !phoneReq && <div className="invalid-feedback">Phone is required</div>}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <input className={`form-control${submitted && !subjectReq ? ' is-invalid' : ''}`} type="text" id="subject" name="subject" placeholder="Subject" value={user.subject} onChange={(e) => setUser({ ...user, subject: e.target.value })} />
                        {submitted && !subjectReq && <div className="invalid-feedback">Subject is required</div>}
                        {submitted && user.subject.length > 0 && user.subject.length < 6 && <div className="invalid-feedback">Subject must be at least 6 characters</div>}
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="form-group">
                        <textarea className={`form-control${submitted && !messageReq ? ' is-invalid' : ''}`} rows="7" id="message" name="message" placeholder="Message*" value={user.message} onChange={(e) => setUser({ ...user, message: e.target.value })}></textarea>
                        {submitted && !messageReq && <div className="invalid-feedback">Message is required</div>}
                      </div>
                      <div className="submit_bitton_contact_one">
                        <button className="theme-btn-one btn-black-overlay btn_md">Submit</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="left_side_contact">
                <ul>
                  <li className="address_location"><i className="fas fa-map-marker-alt"></i><p>32, Choto Mirzapur, Ahsan Ahmed Road Khulna 9100, Bangladesh</p></li>
                  <li className="address_location"><i className="fas fa-phone-volume"></i><div className="contact_widget"><a href="tel:2873077">+1 (833) 287-3077</a><a href="tel:2873077">+1 (833) 528-8619</a></div></li>
                  <li className="address_location"><i className="far fa-envelope"></i><div className="contact_widget"><a href="mailto:demo@gmail.com">demo@gmail.com</a><a href="mailto:demo@gmail.com">demo@gmail.com</a></div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Page;
