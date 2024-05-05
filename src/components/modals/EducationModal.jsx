import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const EducationModal = ({
  show1,
  handleClose1,
  handleForm1Submit,
  userInput,
  setUserInput,
}) => {
  return (
    <Modal show={show1} onHide={handleClose1} size="lg" animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add Education</Modal.Title>
      </Modal.Header>
      <form
        className="pt-4 d-flex gap-4 flex-column"
        style={{ color: "#8F8F8F", fontSize: "18px" }}
        onSubmit={handleForm1Submit}
      >
        <div className="form-row justify-content-center d-flex gap-4 ">
          {/* Degree/Course */}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Degree/Course">Degree/Course</label>
            <input
              required
              type="text"
              className="form-control  "
              id="Degree/Course"
              placeholder="Ex: BE in Mechanical Engineering"
              value={userInput.degree}
              onChange={(e) =>
                setUserInput({ ...userInput, degree: e.target.value })
              }
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
            />
          </div>
          {/* Institution*/}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Institution">Institution</label>
            <input
              type="text"
              className="form-control  "
              id="Institution"
              placeholder="Ex: PSG Collage of Technology "
              value={userInput.institution}
              onChange={(e) =>
                setUserInput({ ...userInput, institution: e.target.value })
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

        {/* branch/specialisation and roll number */}
        <div className="form-row justify-content-center d-flex gap-4 ">
          {/* Branch/Specialisation */}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Branch/Specialisation">Branch/Specialisation</label>
            <input
              type="text"
              className="form-control  "
              id="Branch/Specialisation"
              placeholder="Ex: Automotive Design"
              value={userInput.branch}
              onChange={(e) =>
                setUserInput({ ...userInput, branch: e.target.value })
              }
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              required
            />
          </div>
          {/* Roll Number*/}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Roll Number">Roll Number</label>
            <input
              type="text"
              className="form-control  "
              id="Roll Number"
              placeholder="Ex: 18DI02"
              value={userInput.rollNumber}
              onChange={(e) =>
                setUserInput({ ...userInput, rollNumber: e.target.value })
              }
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
            />
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
              type="date"
              className="form-control  "
              id="date"
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              value={userInput.startDate}
              placeholder={userInput.startDate}
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
              type="date"
              className="form-control  "
              id="date"
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              value={userInput.endDate}
              name={userInput.endDate}
              onChange={(e) =>
                setUserInput({ ...userInput, endDate: e.target.value })
              }
              required
            />
          </div>
        </div>

        {/* Grade */}
        <div
          style={{ marginLeft: "55px" }}
          className="form-row justify-content-start  d-flex gap-4 "
        >
          <div
            className="form-group col-3"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Grade">Grade</label>
            <input
              type="text"
              className="form-control  "
              id="grade"
              value={userInput.grade}
              onChange={(e) =>
                setUserInput({ ...userInput, grade: e.target.value })
              }
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              required
            />
          </div>
          {/* Grade type*/}
          <div
            className="form-group col-3"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Roll Number"></label>
            <select
              onClick={(e) =>
                setUserInput({ ...userInput, gradeType: e.target.value })
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
              <option>CGPA</option>
              <option>Percentage</option>
            </select>
          </div>
        </div>
        {/* Activities and Roles*/}
        <div className="form-row justify-content-center d-flex gap-4 ">
          <div
            className="form-group col-10"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Activities and Roles">Activities and Roles</label>
            <textarea
              className="form-control  "
              placeholder="Ex: I’ve been selected as a Placement Representative..."
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

export default EducationModal;
