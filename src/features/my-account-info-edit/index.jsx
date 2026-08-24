import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';
import { required, minLength, validEmail, sameAs } from '../../lib/util.js';

function Page() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ fname:'', lname:'', email:'', oldPassword:'', password:'', confirmPassword:'' });
  const [submitted, setSubmitted] = useState(false);
const fnameReq = required(user.fname);
const lnameReq = required(user.lname);
const emailReq = required(user.email);
const emailValid = validEmail(user.email);
const oldPasswordReq = required(user.oldPassword);
const oldMin = minLength(6)(user.oldPassword);
const passwordReq = required(user.password);
const pMin = minLength(6)(user.password);
const confirmPasswordReq = required(user.confirmPassword);
const pSame = sameAs('password', user);
  const valid = fnameReq && lnameReq && emailReq && emailValid && oldPasswordReq && oldMin && passwordReq && pMin && confirmPasswordReq && pSame;
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); if (valid) {navigate('/my-account/addresses');} };
  return (
    <>

      <BreadcrumbSection title="Account Info Edit" crumbs={[{text:'Home',to:'/'}]} />
      <section className="ptb-100" id="login_area">
        <div className="container"><div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div className="account_form">
              <h3>Account Info Edit</h3>
              <form onSubmit={handleSubmit}>
                <div className="default-form-box">
                  <label htmlFor="fname">First Name <span>*</span></label>
                  <input className="form-control" type="text" id="fname" name="fname" value={user.fname} onChange={(e)=>setUser({...user,fname:e.target.value})} />
                  {submitted && !fnameReq && <div className='invalid-feedback' style={{display:'block'}}>First Name is required</div>}
                </div>
                <div className="default-form-box">
                  <label htmlFor="lname">Last Name <span>*</span></label>
                  <input className="form-control" type="text" id="lname" name="lname" value={user.lname} onChange={(e)=>setUser({...user,lname:e.target.value})} />
                  {submitted && !lnameReq && <div className='invalid-feedback' style={{display:'block'}}>Last Name is required</div>}
                </div>
                <div className="default-form-box">
                  <label htmlFor="email">Email <span>*</span></label>
                  <input className="form-control" type="email" id="email" name="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} />
                  {submitted && !emailReq && <div className='invalid-feedback' style={{display:'block'}}>Email is required</div>}{submitted && !emailValid && <div className='invalid-feedback' style={{display:'block'}}>Email is invalid</div>}
                </div>
                <div className="default-form-box">
                  <label htmlFor="oldPassword">Old Password <span>*</span></label>
                  <input className="form-control" type="password" id="oldPassword" name="oldPassword" value={user.oldPassword} onChange={(e)=>setUser({...user,oldPassword:e.target.value})} />
                  {submitted && !oldPasswordReq && <div className='invalid-feedback' style={{display:'block'}}>Old Password is required</div>}{submitted && !oldMin && <div className='invalid-feedback' style={{display:'block'}}>At least 6 characters</div>}
                </div>
                <div className="default-form-box">
                  <label htmlFor="password">New Password <span>*</span></label>
                  <input className="form-control" type="password" id="password" name="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} />
                  {submitted && !passwordReq && <div className='invalid-feedback' style={{display:'block'}}>New Password is required</div>}{submitted && !pMin && <div className='invalid-feedback' style={{display:'block'}}>At least 6 characters</div>}
                </div>
                <div className="default-form-box">
                  <label htmlFor="confirmPassword">Confirm Password <span>*</span></label>
                  <input className="form-control" type="password" id="confirmPassword" name="confirmPassword" value={user.confirmPassword} onChange={(e)=>setUser({...user,confirmPassword:e.target.value})} />
                  {submitted && !confirmPasswordReq && <div className='invalid-feedback' style={{display:'block'}}>Confirm Password is required</div>}{submitted && !pSame && <div className='invalid-feedback' style={{display:'block'}}>Passwords must match</div>}
                </div>
                <div className="login_submit"><button className="theme-btn-one btn-black-overlay btn_md">Submit</button></div>
              </form>
            </div>
          </div>
        </div></div>
      </section>
    </>
  );
}
export default Page;
