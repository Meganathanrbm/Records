import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "../../assets/svg/forgotpassword.svg";
import styles from "./register.module.css";

const ForgetPassword = () => {
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
};

export default ForgetPassword;
