import React from "react";
import { Modal } from "react-bootstrap";
import Addskills from "../../pages/ProfilePage/Addskills";

const WorkModal = ({
  show,
  handleClose,
  handleForm1Submit,
  userInput,
  setUserInput,
}) => {
  console.log(userInput);
  return (
    <Modal show={show} onHide={handleClose} size="lg" animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add Experience</Modal.Title>
      </Modal.Header>
      <form
        onSubmit={handleForm1Submit}
        className="pt-4 d-flex gap-4 flex-column"
        style={{ color: "#8F8F8F", fontSize: "18px" }}
      >
        <div className="form-row justify-content-center d-flex gap-4 ">
          {/* Title/Role */}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Title/Role">Title/Role</label>
            <input
              type="text"
              className="form-control  "
              placeholder="Ex: Social Media Intern"
              value={userInput.title}
              onChange={(e) =>
                setUserInput({ ...userInput, title: e.target.value })
              }
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              required
            />
          </div>
          {/* Company Name*/}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="company name">Company Name</label>
            <input
              type="text"
              className="form-control  "
              placeholder="Ex: ABC Private Limited "
              value={userInput.companyName}
              onChange={(e) =>
                setUserInput({ ...userInput, companyName: e.target.value })
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
          {/* Employee/Staff ID */}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Employee/Staff ID">Employee/Staff ID</label>
            <input
              type="text"
              className="form-control  "
              placeholder="Ex: R004456"
              value={userInput.employeeId}
              onChange={(e) =>
                setUserInput({ ...userInput, employeeId: e.target.value })
              }
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              required
            />
          </div>
          {/* Work Type*/}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Work Type">Work Type</label>
            <select
              onClick={(e) =>
                setUserInput({ ...userInput, workType: e.target.value })
              }
              value={userInput.workType}
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              className="form-select"
              name="type"
              id=""
            >
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Contract</option>
              <option>Internship</option>
              <option>Freelance</option>
            </select>
          </div>
        </div>

        {/* Location */}
        <div className="form-row justify-content-center d-flex gap-4">
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Location">Location</label>
            <input
              type="text"
              className="form-control  "
              placeholder="Ex: Coimbatore, Tamil Nadu, India"
              value={userInput.location}
              onChange={(e) =>
                setUserInput({ ...userInput, location: e.target.value })
              }
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              required
            />
          </div>

          {/* Location type */}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="End date">Location Type</label>
            <select
              onClick={(e) =>
                setUserInput({ ...userInput, locationType: e.target.value })
              }
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              className="form-select"
              name="type"
              id=""
              value={userInput.locationType}
            >
              {/* <option selected>Select</option> */}
              <option>Office</option>
              <option>WFH</option>
              <option>Hybrid</option>
              <option>Remote</option>
            </select>
          </div>
        </div>

        {/* Date */}
        <div className="form-row justify-content-center d-flex gap-4">
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Start date">Start Date</label>
            <input
              type="Date"
              className="form-control  "
              id="date"
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              value={userInput.startDate}
              onChange={(e) =>
                setUserInput({ ...userInput, startDate: e.target.value })
              }
              required
            />
          </div>

          {/* end date */}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="End date">End Date</label>
            <input
              type="Date"
              className="form-control  "
              id="date"
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              value={userInput.endDate}
              onChange={(e) =>
                setUserInput({ ...userInput, endDate: e.target.value })
              }
              required
            />
          </div>
        </div>
        {/*Currently working in this role*/}
        <div
          style={{ marginRight: "55px" }}
          className="form-row justify-content-end d-flex gap-4 "
        >
          <input
            onChange={(e) =>
              setUserInput({
                ...userInput,
                isCurrentlyWorking: e.target.value,
              })
            }
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault"
            value={userInput.isCurrentlyWorking}
          />
          <label
            style={{ color: "black" }}
            className="form-check-label"
            for="flexCheckDefault"
          >
            Currently working in this role
          </label>
        </div>
        {/* Description*/}
        <div className="form-row justify-content-center d-flex gap-4 ">
          <div
            className="form-group col-10"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Description">Description</label>
            <textarea
              className="form-control  "
              placeholder="Ex: I get an hands on experience in the overview of digital marketing and content writing and..."
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
                padding: "10px 20px",
                marginBottom: "10px",
              }}
              value={userInput.description}
              onChange={(e) =>
                setUserInput({ ...userInput, description: e.target.value })
              }
              name=""
              id=""
              cols="30"
              rows="5"
              required
            ></textarea>
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
            Get Verified
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.61959 0.669742L0.995908 2.27969C0.623187 2.44535 0.379883 2.81807 0.379883 3.22703V5.66007C0.379883 8.53313 2.36773 11.2198 5.0389 11.8721C7.71007 11.2198 9.69792 8.53313 9.69792 5.66007V3.22703C9.69792 2.81807 9.45461 2.44535 9.08189 2.27969L5.45821 0.669742C5.1942 0.550678 4.8836 0.550678 4.61959 0.669742ZM3.63602 8.39853L2.29526 7.05777C2.24733 7.00985 2.20931 6.95295 2.18337 6.89033C2.15744 6.82771 2.14409 6.76059 2.14409 6.69282C2.14409 6.62504 2.15744 6.55792 2.18337 6.4953C2.20931 6.43268 2.24733 6.37579 2.29526 6.32786C2.34318 6.27993 2.40008 6.24192 2.4627 6.21598C2.52532 6.19004 2.59243 6.17669 2.66021 6.17669C2.72799 6.17669 2.79511 6.19004 2.85773 6.21598C2.92035 6.24192 2.97724 6.27993 3.02517 6.32786L4.00356 7.30108L7.04745 4.25719C7.09538 4.20926 7.15228 4.17124 7.2149 4.1453C7.27752 4.11937 7.34463 4.10602 7.41241 4.10602C7.48019 4.10602 7.5473 4.11937 7.60992 4.1453C7.67254 4.17124 7.72944 4.20926 7.77737 4.25719C7.82529 4.30511 7.86331 4.36201 7.88925 4.42463C7.91519 4.48725 7.92854 4.55436 7.92854 4.62214C7.92854 4.68992 7.91519 4.75704 7.88925 4.81965C7.86331 4.88227 7.82529 4.93917 7.77737 4.9871L4.36593 8.39853C4.31804 8.44652 4.26115 8.4846 4.19853 8.51058C4.13591 8.53655 4.06877 8.54992 4.00097 8.54992C3.93318 8.54992 3.86604 8.53655 3.80342 8.51058C3.7408 8.4846 3.68391 8.44652 3.63602 8.39853Z"
                fill="white"
              />
            </svg>
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default WorkModal;
