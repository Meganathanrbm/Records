import React from "react";
import { Modal } from "react-bootstrap";
import Addskills from "../../pages/ProfilePage/Addskills";

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
              <Addskills setUserInput={setUserInput} userInput={userInput} />
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
