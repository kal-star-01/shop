import { useState } from 'react';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';
import { required, validEmail } from '../../lib/util.js';

function Page() {
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
            <div className="col-lg-12">
              <div className="contact_info">
                <h3>Contact Information</h3>
                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="left_side_contact">
                <ul>
                  <li className="address_location"><i className="fas fa-map-marker-alt"></i><p>32, Choto Mirzapur, Ahsan Ahmed Road Khulna 9100, Bangladesh</p></li>
                  <li className="address_location"><i className="fas fa-phone-volume"></i><div className="contact_widget"><a href="tel:2873077">+1 (833) 287-3077</a><a href="tel:2873077">+1 (833) 528-8619</a></div></li>
                  <li className="address_location"><i className="far fa-envelope"></i><div className="contact_widget"><a href="mailto:demo@gmail.com">demo@gmail.com</a><a href="mailto:demo@gmail.com">demo@gmail.com</a></div></li>
                </ul>
              </div>
            </div>
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
            <div className="col-lg-12">
              <div className="map_area">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6962663570607!2d89.56355961427838!3d22.813715829827952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff901efac79b59%3A0x5be01a1bc0dc7eba!2sAnd+IT!5e0!3m2!1sen!2sbd!4v1557901943656!5m2!1sen!2sbd"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Page;
