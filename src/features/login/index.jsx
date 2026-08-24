import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BreadcrumbSection from '../../components/Breadcrumb.jsx';
import { required, minLength } from '../../lib/util.js';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: '', password: '' });
  const [submitted, setSubmitted] = useState(false);
  const usernameReq = required(user.username);
  const passwordReq = required(user.password);
  const passwordMin = minLength(6)(user.password);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); if (usernameReq && passwordReq && passwordMin) navigate('/'); };
  return (
    <>

      <BreadcrumbSection title="Login" crumbs={[{text:'Home',to:'/'}]} />
      <section className="ptb-100" id="login_area">
        <div className="container"><div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
            <div className="account_form">
              <h3>Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="default-form-box">
                  <label>Username or email <span>*</span></label>
                  <input className="form-control" className2="" type="text" id="username" name="username" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} />
                  {submitted && !usernameReq && <div className="invalid-feedback" style={{display:'block'}}>Username or Email is required</div>}
                </div>
                <div className="default-form-box">
                  <label htmlFor="password">Password</label>
                  <input className="form-control" type="password" id="password" name="password" value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} />
                  {submitted && !passwordReq && <div className="invalid-feedback" style={{display:'block'}}>Password is required</div>}
                  {submitted && passwordReq && !passwordMin && <div className="invalid-feedback" style={{display:'block'}}>Password must be at least 6 characters</div>}
                </div>
                <div className="login_submit"><button className="theme-btn-one btn-black-overlay btn_md">login</button></div>
                <div className="remember_area"><label className="checkbox-default"><input type="checkbox" /><span>Remember me</span></label></div>
                <Link to="/register">Create Your Account?</Link>
              </form>
            </div>
          </div>
        </div></div>
      </section>
    </>
  );
}
export default Login;
