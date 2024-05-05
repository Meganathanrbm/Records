import logo from "../assets/svg/workLogo.svg";
import plus from "../assets/svg/plus.svg";
import ProfileCard from "./ProfileCard";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import VerificationModal from "./modals/VerificationModal";
import WorkModal from "./modals/WorkModal";
import profileApi from "../apis/profile.api";

const WorkProfile = ({ workexperiences }) => {
  const [show, setShow] = useState(false);
  const [skill, setSkill] = useState([
    {
      skillId: "71a645ccc42e40bfb236208f6d294667",
    },
    {
      skillId: "8434b94f541548059914de7362856a67",
    },
    {
      skillId: "867419a57b664918b18ca795cf0c00ee",
    },
    {
      skillId: "d6ec19ec70594df0b340edc6e129bb76",
    },
    {
      skillId: "0117ac9a468a4807a7db851b2b7de2a0",
    },
  ]);
  const [isVerified, setIsVerified] = useState(false);
  const [data, setData] = useState([]);

  const [userInput, setUserInput] = useState({
    title: "",
    companyName: "",
    employeeId: "",
    workType: "",
    location: "",
    locationType: "",
    startDate: "",
    endDate: "",
    isCurrentlyWorking: false,
    description: "",
    skills: [],
    verifierEmail: "",
    isEdit: false,
    workExperienceId: "",
  });
  const handleSkill = () => {
    setUserInput({ ...userInput, skills: [...skills, ...skill] });
    setSkill("");
  };
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setUserInput({
      title: "",
      companyName: "",
      employeeId: "",
      workType: "",
      location: "",
      locationType: "",
      startDate: "",
      endDate: "",
      isCurrentlyWorking: false,
      description: "",
      skills: [],
      verifierEmail: "",
      isEdit: false,
      workExperienceId: "",
    });
    setShow(true);
  };
  const [verifyModalShow, setVerifyModalShow] = useState(false);
  const handleVerifModalClose = () => {
    setIsVerified(false);
    setVerifyModalShow(false);
    window.location.reload();
  };
  const handleVerifModalShow = () => setVerifyModalShow(true);

  const handleForm1Submit = (e) => {
    e.preventDefault();
    handleClose();
    handleVerifModalShow();
  };

  const handleForm2Submit = (e) => {
    e.preventDefault();
    setIsVerified(true);
    const payloadData = {
      role: userInput.title,
      companyName: userInput.companyName,
      employeeId: userInput.employeeId,
      workType: userInput.workType,
      location: userInput.location,
      locationType: userInput.locationType,
      startDate: userInput.startDate,
      endDate: userInput.endDate,
      description: userInput.description,
      skills: skill,
    };
    if (!userInput.isEdit) {
      profileApi.addWorkExperience({
        payload: payloadData,
        success: (res) => {
          console.log("Work Expereince added Successfully!", res);
        },
        error: (err) => {
          console.log("Failed to add Work Expereince", err);
        },
      });
    } else {
      profileApi.updateWorkExperience({
        payload: payloadData,
        suffPath: userInput.workExperienceId,
        success: (res) => {
          console.log("Work Experience updated successfully", res);
        },
        error: (err) => {
          console.log("Work Experience update failed", err);
        },
      });
    }
    setUserInput({
      title: "",
      companyName: "",
      employeeId: "",
      workType: "",
      location: "",
      locationType: "",
      startDate: "",
      endDate: "",
      isCurrentlyWorking: false,
      description: "",
      skills: [],
      verifierEmail: "",
      isEdit: false,
      workExperienceId: "",
    });
  };

  const handleEdit = (data) => {
    setUserInput({
      ...userInput,
      title: data?.role,
      companyName: data?.companyName,
      workType: data?.workType,
      location: data?.location,
      locationType: data?.locationType,
      startDate: data?.startDate,
      endDate: data?.endDate,
      isCurrentlyWorking: false,
      description: data?.description,
      skills: data?.skills,
      isEdit: true,
      verified: data?.verified,
      workExperienceId: data?.workExperienceId,
    });
  };
  useEffect(() => {
    setData(workexperiences);
  }, [workexperiences]);

  return (
    <div>
      {" "}
      <div className="row " style={{ paddingInlineEnd: "0" }}>
        <h3 className="col" style={{ fontSize: "18px", fontWeight: "700" }}>
          {" "}
          Work Experience and Internships
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
            maxWidth: "200px",
          }}
        >
          Add Experience
          <img src={plus} alt="add" width={20} height={20} />
        </button>
        {/* modal */}
        <WorkModal
          skill={skill}
          setSkill={setSkill}
          show={show}
          handleClose={handleClose}
          handleForm1Submit={handleForm1Submit}
          userInput={userInput}
          setUserInput={setUserInput}
        />

        <VerificationModal
          show2={verifyModalShow}
          handleClose2={handleVerifModalClose}
          handleForm2Submit={handleForm2Submit}
          userInput={userInput}
          setUserInput={setUserInput}
          isVerified={isVerified}
          setIsVerified={setIsVerified}
        />
      </div>
      <div>
        {data.map((el, index) => {
          return (
            <ProfileCard
              handleEdit={handleEdit}
              key={index}
              name={el.role}
              field={`${el.companyName} | ${el.location} | ${el.locationType}`}
              startDate={el.startDate}
              endDate={el.endDate}
              description={el.description}
              verified={el.verified}
              image={el?.image}
              skills={el?.skills}
              duration={el.duration}
              isEdit={setShow}
              data={el}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProfile;
