import { useState } from 'react';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';
import { required, minLength, validEmail } from '../../lib/util.js';

function Page() {
  const [user, setUser] = useState({ username:'', email:'', password:'' });
  const [submitted, setSubmitted] = useState(false);
const usernameReq = required(user.username);
const emailReq = required(user.email);
const emailValid = validEmail(user.email);
const passwordReq = required(user.password);
const passwordMin = minLength(6)(user.password);
const valid = usernameReq && emailReq && emailValid && passwordReq && passwordMin;
const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); if (valid) {alert('Registered Successfully!');} };
  return (
    <>

      <BreadcrumbSection title='Register' crumbs={[{text:'Home',to:'/'}]} />
      <section className="ptb-100" id="login_area">
        <div className="container"><div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div className="account_form">
              <h3>Register</h3>
              <form onSubmit={handleSubmit}>
                <div className="default-form-box">
                  <label htmlFor="username">Username <span>*</span></label>
                  <input className="form-control" type="text" id="username" name="username" value={user.username} onChange={e=>setUser({...user,username:e.target.value})} />
                  {submitted && !usernameReq && <div className='invalid-feedback' style={{display:'block'}}>Username is required</div>}
                </div>
                <div className="default-form-box">
                  <label htmlFor="email">Email <span>*</span></label>
                  <input className="form-control" type="email" id="email" name="email" value={user.email} onChange={e=>setUser({...user,email:e.target.value})} />
                  {submitted && !emailReq && <div className='invalid-feedback' style={{display:'block'}}>Email is required</div>}{submitted && !emailValid && <div className='invalid-feedback' style={{display:'block'}}>Email is invalid</div>}
                </div>
                <div className="default-form-box">
                  <label htmlFor="password">Password <span>*</span></label>
                  <input className="form-control" type="password" id="password" name="password" value={user.password} onChange={e=>setUser({...user,password:e.target.value})} />
                  {submitted && !passwordReq && <div className='invalid-feedback' style={{display:'block'}}>Password is required</div>}{submitted && !passwordMin && <div className='invalid-feedback' style={{display:'block'}}>Password must be at least 6 characters</div>}
                </div>                <div className="login_submit"><button className="theme-btn-one btn-black-overlay btn_md">Submit</button></div>
              </form>
            </div>
          </div>
        </div></div>
      </section>
    </>
  );
}
export default Page;
