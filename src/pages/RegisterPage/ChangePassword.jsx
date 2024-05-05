import React, { useState } from "react";
import styles from "./register.module.css";
import logo2 from "../../assets/svg/forgotpassword.svg";
import { useNavigate, useParams } from "react-router-dom";
import authApi from "../../apis/auth.api";

const ChangePassword = () => {
  const [password, setPassword] = useState({
    new: "",
    confirm: "",
  });
  const navigate = useNavigate();
  const params = useParams();
  const handleChangePassword = () => {
    if (password.new !== password.confirm) {
      setPassword({ new: "", confirm: "" });
      return alert("Incorrect password");
    }
    const pathSuff = "/" + params.id;
    authApi.changePassword({
      payload: { password: password.confirm },
      pathSuff: pathSuff,
      success: (res) => {
        console.log("Change Password Success", res);

        navigate("/");
      },
      error: (err) => {
        console.error(
          err?.response?.data?.message || "Failed to  Change Password"
        );
        console.log("Change Password Request Error", err);
      },
    });
    setPassword({ new: "", confirm: "" });
  };
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

      <div
        className={`container bg-white position-absolute  top-50 start-50 translate-middle d-flex p-2 rounded   border text-black `}
        style={{ width: " -webkit-fill-available" }}
      >
        <div className="d-flex flex-column justify-content-between align-items-start p-4 gap-3 w-100">
          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            Go Back
          </button>
          <section className="d-flex flex-column justify-content-center align-items-center gap-3 mb-5 w-100 ">
            <img src={logo2} alt="" />
            <h1>Change Password ?</h1>
            <>
              <p className={styles.forgotPasswordPara}>
                Don't worry! Changing your Password is simple. Just Enter your
                new Password.
              </p>
              <section className="d-flex flex-column justify-content-center align-items-strech w-50">
                <div className="mb-3">
                  <input
                    value={password.new}
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput1"
                    placeholder="New Password"
                    onChange={(e) =>
                      setPassword({ ...password, new: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    value={password.confirm}
                    onChange={(e) =>
                      setPassword({ ...password, confirm: e.target.value })
                    }
                    type="password"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Confirm Password"
                    required
                  />
                </div>

                <button
                  onClick={handleChangePassword}
                  type="button"
                  className="btn btn-primary"
                >
                  Change Password
                </button>
              </section>
              <p>Don’t have an account? Contact Administrator</p>
            </>
          </section>

          <section className="d-flex justify-content-between w-100">
            <p>Privacy policy</p>
            <p>CopyRights 2022</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
