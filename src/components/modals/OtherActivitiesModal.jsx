import React from "react";
import { Modal } from "react-bootstrap";

const OtherActivitiesModal = ({
  show,
  handleClose,
  userInput,
  setUserInput,
  handleForm1Submit,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add Activity</Modal.Title>
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
          {/*Activity Name */}
          <div
            className="form-group col-10"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Activity Name">Activity Name</label>
            <input
              type="text"
              className="form-control  "
              placeholder="Ex: Department Secretary"
              value={userInput.activityName}
              onChange={(e) =>
                setUserInput({ ...userInput, activityName: e.target.value })
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
          {/* Organisation/Venue*/}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Organisation/Venue">Organisation/Venue</label>
            <input
              type="text"
              className="form-control  "
              placeholder="Ex: ABC Collage of Arts & Science"
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
          {/*Activity Type*/}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Activity Type">Activity Type</label>

            <input
              type="text"
              className="form-control  "
              value={userInput.activityType}
              onChange={(e) =>
                setUserInput({ ...userInput, activityType: e.target.value })
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

        {/* Description*/}
        <div
          style={{ marginLeft: "55px" }}
          className="form-row justify-content-start d-flex gap-4 "
        >
          <div
            className="form-group col-10"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Description">Description</label>
            <textarea
              className="form-control  "
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
            Save
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default OtherActivitiesModal;
