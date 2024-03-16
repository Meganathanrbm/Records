import React from "react";
import { Link } from "react-router-dom";
import onboarding from "../../assets/svg/onbording.svg";

const Onboarding = () => {
  return (
    <div className="d-flex flex-column justify-content-around align-items-center min-vh-100 p-3">
      <section className="d-flex  justify-content-end align-items-center w-100">
        {/* <button className="btn btn-secondary mb-3 d-flex gap-2">
          Go Back
        </button> */}
        <p className="d-flex gap-2 align-items-center pl-2">
          Support <i class="bi bi-info-circle"></i>{" "}
        </p>
      </section>
      <section className="d-flex flex-column justify-content-around align-items-center gap-2">
        <h1>Record is your online skill repository</h1>
        <p className="w-75 text-center">
          You can manage and showcase all your courses from anywhere and
          everywhere in a single workspace.
        </p>
        <img src={onboarding} alt="" srcset="" />
      </section>
      <section className="w-100 d-flex justify-content-end">
        <Link to="/walktrough">
          <button className="btn btn-primary p-2">Get Started</button>
        </Link>
      </section>
    </div>
  );
};

export default Onboarding;
