import React, { useState } from "react";
import logo2 from "../../assets/svg/forgotpassword.svg";
import styles from "./register.module.css";
import authApi from "../../apis/auth.api";

const ForgetPassword = ({ setForgetPassword }) => {
  const [email, setEmail] = useState(true);
  //reset password request
  const [rprEmail, setRprEmail] = useState("");


  const handleResetPassword = () => {
    console.log(rprEmail);
    authApi.resetPassword({
      payload: { email: rprEmail },
      success: (res) => {
        console.log("Reset Password Request Success", res);
        setEmail(false);
      },
      error: (err) => {
        console.error(
          err?.response?.data?.message || "Failed to Rest Password Request"
        );
        console.log("Rest Password Request Error", err);
      },
    });
  };

  return (
    <div
      className={`container bg-white position-absolute  top-50 start-50 translate-middle d-flex p-2 rounded   border text-black `}
      style={{ width: " -webkit-fill-available" }}
    >
      <div className="d-flex flex-column justify-content-between align-items-start p-4 gap-3 w-100">
        <button
          className="btn btn-secondary"
          onClick={() => setForgetPassword(false)}
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
                    value={rprEmail}
                    onChange={(e) => setRprEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Email"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleResetPassword}
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
                  onClick={() => setForgetPassword(false)}
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
