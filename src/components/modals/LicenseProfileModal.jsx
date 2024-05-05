import React from "react";
import { Modal } from "react-bootstrap";

const LicenseProfileModal = ({
  show,
  handleClose,
  userInput,
  setUserInput,
  handleForm1Submit,
}) => {
  console.log(userInput);
  return (
    <Modal show={show} onHide={handleClose} size="lg" animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add Credentials</Modal.Title>
      </Modal.Header>
      <form
        onSubmit={handleForm1Submit}
        className="pt-4 d-flex gap-4 flex-column"
        style={{ color: "#8F8F8F", fontSize: "18px" }}
      >
        <div
          style={{ marginLeft: "55px" }}
          className="form-row justify-content-start d-flex gap-4 "
        >
          {/* License/Certification Name */}
          <div
            className="form-group col-10"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="License/Certification Name">
              License/Certification Name
            </label>
            <input
              type="text"
              className="form-control  "
              placeholder="Ex: Social Media Intern"
              value={userInput.certificateName}
              onChange={(e) =>
                setUserInput({
                  ...userInput,
                  certificateName: e.target.value,
                })
              }
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              required
            />
          </div>
        </div>

        <div className="form-row justify-content-center d-flex gap-4 ">
          {/* Organisation */}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Organisation">Organisation</label>
            <input
              type="text"
              className="form-control  "
              placeholder="Ex: ABC Private Limited"
              value={userInput.organisation}
              onChange={(e) =>
                setUserInput({ ...userInput, organisation: e.target.value })
              }
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              required
            />
          </div>
          {/*Done Via*/}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Done Via">Done Via</label>
            <select
              onClick={(e) =>
                setUserInput({ ...userInput, doneVia: e.target.value })
              }
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              className="form-select"
              name="type"
              id=""
            >
              <option selected>Select</option>
              <option>Office</option>
              <option>WFH</option>
            </select>
          </div>
        </div>

        {/* Date */}
        <div className="form-row justify-content-center d-flex gap-4">
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Issued Date">Issued Date</label>
            <input
              type="Date"
              className="form-control  "
              id="date"
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              value={userInput.issueDate}
              onChange={(e) =>
                setUserInput({ ...userInput, issueDate: e.target.value })
              }
              required
            />
          </div>

          {/* Expiration Date */}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Expiration Date">Expiration Date</label>
            <input
              type="Date"
              className="form-control  "
              id="date"
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              value={userInput.expirationDate}
              onChange={(e) =>
                setUserInput({ ...userInput, expirationDate: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="form-row justify-content-center d-flex gap-4 ">
          {/* Credential ID */}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Credential ID">Credential ID</label>
            <input
              type="text"
              className="form-control  "
              value={userInput.credentialID}
              onChange={(e) =>
                setUserInput({ ...userInput, credentialID: e.target.value })
              }
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              required
            />
          </div>
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Credential URL">Credential URL</label>
            <input
              type="text"
              className="form-control  "
              placeholder="Ex: Social Media Intern"
              value={userInput.credentialURL}
              onChange={(e) =>
                setUserInput({ ...userInput, credentialURL: e.target.value })
              }
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              required
            />
          </div>
        </div>

        {/* Skills*/}
        <div className="form-row justify-content-center d-flex gap-4 ">
          <div
            className="form-group col-10"
            style={{
              position: "relative",
              zIndex: "1",
              marginBottom: "10px",
            }}
          >
            <label htmlFor="Skills">Skills</label>
            <p style={{ color: "black", fontSize: "18px" }}>
              Earn upto 5 skill badges by getting verified from your verifier.
            </p>
            <div className="d-flex">
              <input
                type="text"
                className="form-control  "
                placeholder="Ex: HTML, CSS"
                // value={skill}
                // onChange={(e) => setSkill(e.target.value)}
                style={{
                  backgroundColor: "#F3F3F3",
                  color: "#858585",
                  fontSize: "18px",
                  width: "250px",
                }}
              />
              {/* <button
                style={{
                  backgroundColor: "#F3F3F3",
                  color: "#EB7C49",
                  fontWeight: "500",
                }}
                className="btn"
              >
                Add Skills
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1534 7.34826H6.87941V11.52C6.87941 11.7413 6.78935 11.9535 6.62904 12.11C6.46874 12.2664 6.25132 12.3544 6.02461 12.3544C5.7979 12.3544 5.58048 12.2664 5.42017 12.11C5.25987 11.9535 5.16981 11.7413 5.16981 11.52V7.34826H0.895815C0.669108 7.34826 0.451687 7.26035 0.291381 7.10388C0.131075 6.94741 0.0410156 6.73519 0.0410156 6.51391C0.0410156 6.29262 0.131075 6.0804 0.291381 5.92393C0.451687 5.76746 0.669108 5.67956 0.895815 5.67956H5.16981V1.50781C5.16981 1.28653 5.25987 1.07431 5.42017 0.917837C5.58048 0.761366 5.7979 0.673462 6.02461 0.673462C6.25132 0.673462 6.46874 0.761366 6.62904 0.917837C6.78935 1.07431 6.87941 1.28653 6.87941 1.50781V5.67956H11.1534C11.3801 5.67956 11.5975 5.76746 11.7578 5.92393C11.9181 6.0804 12.0082 6.29262 12.0082 6.51391C12.0082 6.73519 11.9181 6.94741 11.7578 7.10388C11.5975 7.26035 11.3801 7.34826 11.1534 7.34826Z"
                    fill="url(#paint0_linear_78_680)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_78_680"
                      x1="5.92091"
                      y1="0.609342"
                      x2="5.92091"
                      y2="14.8114"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EB7C49" />
                      <stop offset="1" stop-color="#F04F52" />
                    </linearGradient>
                  </defs>
                </svg>
              </button> */}
            </div>
          </div>
        </div>

        <Modal.Footer>
          <button
            type="submit"
            className=" d-flex flex-row btn justify-content-center align-items-center gap-2"
            style={{
              color: "white",

              background:
                "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",
              border: "none",

              maxWidth: "250px",
              fontSize: "14px",
            }}
          >
            Save
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default LicenseProfileModal;
