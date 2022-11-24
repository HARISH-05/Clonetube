import { Link } from "react-router-dom";
import React from "react";
// import './YT.css';
import './Log.css';

const Log = () => {
    return (
<center className="one">
  <form action="/Home">
        <div className="section">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                  <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                  <label htmlFor="reg-log" />
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                          <h1 className="kis">SOCIALIZO</h1>
                            <h4 className="mb-4 pb-3">Log In</h4>
                            <div className="form-group">
                              <input type="email" name="logemail" className="form-style" id="logemail" autoComplete="off" required  placeholder="Your Email"/>
                              <i className="input-icon uil uil-at" />
                            </div>	
                            <div className="form-group mt-2">
                              <input type="password" name="logpass" className="form-style" id="logpass" autoComplete="off" required  placeholder="Your Password"/>
                              <i className="input-icon uil uil-lock-alt" />
                            </div>
                            <button className="btn mt-4"><Link to="../Home">submit</Link></button>
                            <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                          </div>
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="center-wrap">
                          <div className="section text-center">
                          <h1 className="kis">SOCIALIZO</h1>
                            <h4 className="mb-4 pb-3">Sign Up</h4>
                            <div className="form-group">
                              <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off" />
                              <i className="input-icon uil uil-user" />
                            </div>	
                            <div className="form-group mt-2">
                              <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                              <i className="input-icon uil uil-at" />
                            </div>	
                            <div className="form-group mt-2">
                              <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                              <i className="input-icon uil uil-lock-alt" />
                            </div>
                            <button className="btn mt-4">submit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></form>
        </center>
      );
    }

    export default Log;