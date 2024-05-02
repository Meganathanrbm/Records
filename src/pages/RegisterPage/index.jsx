import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import authApi from "../../apis/auth.api";

import currentUserState from "../../store/user.store";

import sigin from "../../assets/svg/sigin.svg";
import logo from "../../assets/svg/logo.svg";
import logo2 from "../../assets/svg/forgotpassword.svg";
import styles from "./register.module.css";
import { FaRegEyeSlash } from "react-icons/fa";
import ForgetPassword from "./ForgetPassword";

const Signin = () => {
  const navigate = useNavigate();
  const [forgetPassword, setForgetPassword] = useState(false);

  const [userData, setUserData] = useState({ email: "", password: "" });
  const [isUserNotAuthenticated, setIsUserNotAuthenticated] = useState(false);
  const [currentLoggedInUser, setCurrentLoggedInUser] =
    useRecoilState(currentUserState);

  function handleLogin() {
    authApi.handleLogin({
      payload: userData,
      success: (res) => {
        console.log("Login Success", res);
        setCurrentLoggedInUser({
          ...currentLoggedInUser,
          email: userData.email,
          isLoggedIn: true,
        });
        navigate("/onboarding");
      },
      error: (err) => {
        message.error(
          err?.response?.data?.message || "Email or Password may incorrect!"
        );
        console.log("Login Error", err);
      },
    });
  }

  const checkIfUserIsLoggedIn = () => {
    if (!currentLoggedInUser.isLoggedIn) {
      authApi.verifySession({
        success: () => {
          navigate("/dashboard");
        },
        error: () => {
          setIsUserNotAuthenticated(true);
        },
      });
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  // if (isUserNotAuthenticated) {
  //   return <h1>Please Login</h1>;
  // }

  const [showPassword, setShowPassword] = useState(false);

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
        <ForgetPassword setForgetPassword={setForgetPassword} />
      ) : (
        <div
          className={`container bg-white position-absolute  top-50 start-50 translate-middle d-flex p-2 rounded min-vh-80 border `}
          style={{
            width: "900px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,.5)",
          }}
        >
          <div className="container bg-primary w-50 d-flex flex-column justify-content-start align-items-start  p-5 gap-4 rounded">
            <img src={logo} alt="" />
            <div>
              <h1>Welcome Back</h1>
              <p>
                Login and see your performance and keep your learning curve like
                no one.
              </p>
            </div>
            <section className="w-100 d-flex flex-column justify-content-center align-items-center mb-2">
              <img src={sigin} alt="logo" className="w-50 mb-5" />
            </section>
          </div>

          <div className="conatiner w-50 d-flex flex-column justify-content-center align-items-center gap-3 text-black">
            <section className="d-flex flex-column justify-content-center align-items-center">
              <h1>Sign In</h1>
              <p>Let’s open your skill repository.</p>
            </section>

            <section
              className="d-flex flex-column justify-content-center align-items-stretch "
              style={{ width: "75%" }}
            >
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </div>
              {/* </Link> */}
              <div className="mb-3  input-group   ">
                <div
                  style={{ padding: "0 0.5rem" }}
                  className="form-control d-flex  justify-content-between  align-items-center "
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    className=""
                    style={{ width: "160px" }}
                    id="formGroupExampleInput2"
                    placeholder="Password"
                    value={userData.password}
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                  />

                  <button
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="btn "
                    type="button"
                  >
                    <FaRegEyeSlash />
                  </button>
                </div>
              </div>
              {/* <Link to={"/onboarding"}> */}{" "}
              <button
                style={{ width: "100%" }}
                type="button"
                className="btn btn-primary"
                onClick={handleLogin}
              >
                Sign In
              </button>
              {/* </Link> */}
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
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Keep me signed in
                </label>
              </div>
              <label
                className="form-check-label"
                htmlFor="flexCheckChecked"
                onClick={(e) => setForgetPassword(true)}
              >
                Forgot Password ?
              </label>
            </div>

            <h6 style={{ fontSize: "12px" }}>
              Don’t have an account?{" "}
              <span style={{ fontWeight: "bold" }}>Contact Administrator</span>
            </h6>
          </div>
        </div>
      )}
    </div>
  );
};

// function ForgetPassword() {
//   const [nextPage, setNextPage] = useState(true);
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   function sendVerifcationLink() {
//     setNextPage(false);
//     authApi.handleVerificationEmail({
//       payload: { email },
//       success: (res) => {
//         console.log("Verification Email Success", res);
//       },
//       error: (err) => {
//         console.log("Verification Email Error", err);
//       },
//     });
//   }

//   return (
//     <div
//       className={`container bg-white position-absolute  top-50 start-50 translate-middle d-flex p-2 rounded   border text-black `}
//       style={{ width: " -webkit-fill-available" }}
//     >
//       <div className="d-flex flex-column justify-content-between align-items-start p-4 gap-3 w-100">
//         <button
//           className="btn btn-secondary"
//           onClick={() => navigate("/register")}
//         >
//           Go Back
//         </button>
//         <section className="d-flex flex-column justify-content-center align-items-center gap-3 mb-5 w-100 ">
//           <img src={logo2} alt="" />
//           <h1>Forget Password ?</h1>
//           {nextPage ? (
//             <>
//               <p className={styles.forgotPasswordPara}>
//                 Don't worry! Resetting your password is simple. Just type in the
//                 email you registered to Record.
//               </p>
//               <section className="d-flex flex-column justify-content-center align-items-strech w-50">
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="formGroupExampleInput"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </div>
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   onClick={sendVerifcationLink}
//                 >
//                   Send
//                 </button>
//               </section>
//               <p>Don’t have an account? Contact Administrator</p>
//             </>
//           ) : (
//             <>
//               <p>Great, password reset link has been sent to your email.</p>
//               <section className="d-flex flex-column justify-content-center align-items-strech w-50">
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   onClick={() => navigate("/register")}
//                 >
//                   Sign In Now
//                 </button>
//               </section>
//             </>
//           )}
//         </section>

{
  /* // function ForgetPassword() {
//   const [email, setEmail] = useState(true);
//   const navigate = useNavigate();

//   return (
//     <div
//       className={`container bg-white position-absolute  top-50 start-50 translate-middle d-flex p-2 rounded   border text-black `}
//       style={{ width: " -webkit-fill-available" }}
//     >
//       <div className="d-flex flex-column justify-content-between align-items-start p-4 gap-3 w-100">
//         <button
//           className="btn btn-secondary"
//           onClick={() => navigate("/register")}
//         >
//           Go Back
//         </button>
//         <section className="d-flex flex-column justify-content-center align-items-center gap-3 mb-5 w-100 ">
//           <img src={logo2} alt="" />
//           <h1>Forget Password ?</h1>
//           {email ? (
//             <>
//               <p className={styles.forgotPasswordPara}>
//                 Don't worry! Resetting your password is simple. Just type in the
//                 email you registered to Record.
//               </p>
//               <section className="d-flex flex-column justify-content-center align-items-strech w-50">
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="formGroupExampleInput"
//                     placeholder="Email"
//                   />
//                 </div>
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   onClick={(e) => setEmail(false)}
//                 >
//                   Send
//                 </button>
//               </section>
//               <p>Don’t have an account? Contact Administrator</p>
//             </>
//           ) : (
//             <>
//               <p>Great, password reset link has been sent to your email.</p>
//               <section className="d-flex flex-column justify-content-center align-items-strech w-50">
//                 <button
//                   type="button"
//                   className="btn btn-primary"
//                   onClick={() => navigate("/register")}
//                 >
//                   Sign In Now
//                 </button>
//               </section>
//             </>
//           )}
//         </section>


//         <section className="d-flex justify-content-between w-100">
//           <p>Privacy policy</p>
//           <p>CopyRights 2022</p>
//         </section>
//       </div>
//     </div>
//   );
// } */
}

export default Signin;
