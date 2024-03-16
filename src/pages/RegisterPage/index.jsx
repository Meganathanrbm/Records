import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import sigin from "../../assets/svg/sigin.svg";
import logo from "../../assets/svg/logo.svg";
import logo2 from "../../assets/svg/forgotpassword.svg";
import styles from "./register.module.css";

const Signin = () => {
  const [forgetPassword, setForgetPassword] = useState(false);
  return (
    <div
      className="container-fluid min-vh-100 d-flex text-light "
      style={{ padding: "0" }}
    >
      <div className="container-fluid  w-100  min-vh-100  "></div>
      <div
        className="container-fluid  min-vh-100 "
        style={{
          background:
            "linear-gradient(45deg, rgba(235, 124, 73, 1), rgba(240, 79, 82, 1))",
        }}
      ></div>

      {forgetPassword ? (
        <ForgetPassword />
      ) : (
        <div
          className={`container bg-white position-absolute  top-50 start-50 translate-middle d-flex p-2 rounded min-vh-80 border `}
          style={{ width: "900px" }}
        >
          <div className="container bg-primary w-50 d-flex flex-column justify-content-start align-items-start  p-5 gap-4 rounded">
            <img src={logo} alt="" srcset="" />
            <div>
              <h1>Welcome Back</h1>
              <p>
                Login and see your performance and keep your learning curve like
                no one.
              </p>
            </div>
            <section className="w-100 d-flex flex-column justify-content-center align-items-center mb-2">
              <img src={sigin} alt="logo" srcset="" className="w-50 mb-5" />
            </section>
          </div>

          <div className="conatiner w-50 d-flex flex-column justify-content-center align-items-center gap-3 text-black">
            <section className="d-flex flex-column justify-content-center align-items-center">
              <h1>Sign In</h1>
              <p>Let’s open your skill repository.</p>
            </section>

            <section className="d-flex flex-column justify-content-center align-items-stretch w-50">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Password"
                />
              </div>
              <Link to={"/onboarding"}> <button style={{width:"100%"}} type="button" className="btn btn-primary">
                Sign In
              </button></Link>
            </section>

            <div className="d-flex justify-content-between gap-5 ">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                  checked
                />
                <label className="form-check-label" for="flexCheckChecked">
                  Keep me signed in
                </label>
              </div>
              <label
                className="form-check-label"
                for="flexCheckChecked"
                onClick={(e) => setForgetPassword(true)}
              >
                Forgot Password ?
              </label>
            </div>

            <h6 style={{fontSize:"12px"}}>Don’t have an account? <span style={{fontWeight:"bold"}}>Contact Administrator</span></h6>
          </div>
        </div>
      )}
    </div>
  );
};

function ForgetPassword() {
  const [email, setEmail] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      className={`container bg-white position-absolute  top-50 start-50 translate-middle d-flex p-2 rounded   border text-black `}
      style={{ width: " -webkit-fill-available" }}
    >
      <div className="d-flex flex-column justify-content-between align-items-start p-4 gap-3 w-100">
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/register")}
        >
          Go Back
        </button>
        <section className="d-flex flex-column justify-content-center align-items-center gap-3 mb-5 w-100 ">
          <img src={logo2} alt="" />
          <h1>Forget Password ?</h1>
          {email ? (
            <>
              <p className={styles.forgotPasswordPara}>
                Don't worry! Resetting your password is simple. Just type in the
                email you registered to Record.
              </p>
              <section className="d-flex flex-column justify-content-center align-items-strech w-50">
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Email"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => setEmail(false)}
                >
                  Send
                </button>
              </section>
              <p>Don’t have an account? Contact Administrator</p>
            </>
          ) : (
            <>
              <p>Great, password reset link has been sent to your email.</p>
              <section className="d-flex flex-column justify-content-center align-items-strech w-50">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => navigate("/register")}
                >
                  Sign In Now
                </button>
              </section>
            </>
          )}
        </section>

        <section className="d-flex justify-content-between w-100">
          <p>Privacy policy</p>
          <p>CopyRights 2022</p>
        </section>
      </div>
    </div>
  );
}

export default Signin;
