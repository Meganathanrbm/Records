import { useState } from "react";
import plus from "../assets/svg/plus.svg";
import ProfileCard from "./ProfileCard";
import logo from "../assets/svg/collegeLogo.svg";

import Modal from 'react-bootstrap/Modal';
import VerificationModal from "./modals/VerificationModal";
import { Button } from "react-bootstrap";

const OtherProfile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [verifyModalShow, setVerifyModalShow] = useState(false);
  const handleVerifModalClose = () => setVerifyModalShow(false);
  const handleVerifModalShow = () => setVerifyModalShow(true);

  const [data, setData] = useState([
    {
      name: "Placement Representative of the Department",
      field: "At PSG Polytechnic College | Academic",
      startDate: "Mar 2018",
      endDate: "Apr 2021",
      description:
        "Activities: I have been elected as a placement representative for my department of information technology and I could able to manage my class student’s all in and out pla...",

      image: logo,
    },
    {
      name: "Placement Representative of the Department",
      field: "At PSG Polytechnic College | Academic",
      startDate: "Mar 2018",
      endDate: "Apr 2021",
      description:
        "Activities: I have been elected as a placement representative for my department of information technology and I could able to manage my class student’s all in and out pla...",

      image: logo,
    },
  ]);

  const [userInput, setUserInput] = useState([
    {
      activityName: "",
      organisation: "",
      activityType: "",
      startDate: "",
      endDate:"",
      description:"",
    },
  ]);
  return (
    <div>
      {" "}
      <div className="row " style={{ paddingInlineEnd: "0" }}>
        <h3 className="col" style={{ fontSize: "18px", fontWeight: "700" }}>
          Other Activities
        </h3>
        <button
          onClick={handleShow}
          type="button"
          className="col btn d-flex justify-content-center align-items-center gap-2  "
          style={{
            color: "white",
            background:
              "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",
            border: "none",
            padding: "revert-layer",
            maxWidth: "150px",
          }}
        >
          Add Activity
          <img src={plus} alt="add" width={20} height={20} />
        </button>
      </div>
           {/* modal */}
           <Modal show={show} onHide={handleClose} size="lg" animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Activity</Modal.Title>
        </Modal.Header>
        <form
          className="pt-4 d-flex gap-4 flex-column"
          style={{ color: "#8F8F8F", fontSize: "18px" }}
        >
          <div style={{marginLeft:"55px"}} className="form-row justify-content-start d-flex gap-4 ">
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
                onChange={(e)=> setUserInput({...userInput, activityName:e.target.value}) }
                style={{
                  backgroundColor: "#F3F3F3",
                  color: "#858585",
                  fontSize: "18px",
                }}
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
                onChange={(e)=> setUserInput({...userInput, organisation:e.target.value}) }
                style={{
                  backgroundColor: "#F3F3F3",
                  color: "#858585",
                  fontSize: "18px",
                }}
              />
            </div>
            {/*Activity Type*/}
            <div
              className="form-group col-5"
              style={{ position: "relative", zIndex: "1" }}
            >
              <label htmlFor="Activity Type">Activity Type</label>
              <select
              onClick={(e)=> setUserInput({...userInput, projectType:e.target.value})}
               style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              className="form-select" name="type" id="">
                <option selected >Select</option>
                <option  >Office</option>
                <option  >WFH</option>
              </select>
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
                onChange={(e)=> setUserInput({...userInput, startDate:e.target.value})}
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
                onChange={(e)=> setUserInput({...userInput, endDate:e.target.value})}
              />

            </div>

          </div>
        

              {/* Description*/}
              <div style={{marginLeft:"55px"}} className="form-row justify-content-start d-flex gap-4 ">
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
                  padding:"10px 20px",
                  marginBottom:"10px"
                }}
              value={userInput.description} onChange={(e)=> setUserInput({...userInput, description:e.target.value})} name="" id="" cols="30" rows="5"></textarea>
            </div>
            </div>
    
         
        </form>
        <Modal.Footer>
          <Button
                onClick={()=>{
                  handleClose()
                  handleVerifModalShow()
                }}
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

                </Button>
        </Modal.Footer>
      </Modal>
      <VerificationModal show2={verifyModalShow} handleClose2={handleVerifModalClose} />
      <div>
        {data.map((el, index) => {
          return (
            <ProfileCard
              key={index}
              name={el.name}
              field={el.field}
              startDate={el.startDate}
              endDate={el.endDate}
              description={el.description}
              verified={el.verified}
              image={el.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OtherProfile;
