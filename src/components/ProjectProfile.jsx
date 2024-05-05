import { useEffect, useState } from "react";
import plus from "../assets/svg/plus.svg";
import ProfileCard from "./ProfileCard";
import logo from "../assets/svg/brokenImg.svg";

import Modal from "react-bootstrap/Modal";
import VerificationModal from "./modals/VerificationModal";
import { Button } from "react-bootstrap";
import ProjectModal from "./modals/ProjectModal";
import profileApi from "../apis/profile.api";

const ProjectProfile = ({ projects }) => {
  const [show, setShow] = useState(false);
  const [skill, setSkill] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [data, setData] = useState([]);
  const [userInput, setUserInput] = useState({
    projectName: "",
    associatedWith: "",
    projectType: "",
    startDate: "",
    endDate: "",
    isWorking: false,
    projectLink: "",
    description: "",
    skills: [],
    verifierEmail: "",
    verified: false,
    isEdit: false,
    projectId: "",
  });

  const handleSkill = () => {
    setUserInput({ ...userInput, skills: [...skills, skill] });
    setSkill("");
  };
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setUserInput({
      projectName: "",
      associatedWith: "",
      projectType: "",
      startDate: "",
      endDate: "",
      isWorking: false,
      projectLink: "",
      description: "",
      skills: [],
      verifierEmail: "",
      verified: false,
      isEdit: false,
      projectId: "",
    });
    setShow(true);
  };
  const [verifyModalShow, setVerifyModalShow] = useState(false);
  const handleVerifModalClose = () => {
    setIsVerified(false);
    setVerifyModalShow(false);
  };
  const handleVerifModalShow = () => setVerifyModalShow(true);

  useEffect(() => {
    setData(projects);
  }, [projects]);
  const handleForm1Submit = (e) => {
    e.preventDefault();
    handleClose();
    handleVerifModalShow();
  };
  const handleForm2Submit = (e) => {
    e.preventDefault();
    setIsVerified(true);
    const payloadData = {
      projectName: userInput.projectName,
      associatedWith: userInput.associatedWith,
      projectType: userInput.projectType,
      startDate: userInput.startDate,
      endDate: userInput.endDate,
      projectLink: userInput.projectLink,
      description: userInput.description,
      skills: [
        {
          skillId: "a631f26e3fef4b95b0e89d3794da4251",
        },
        {
          skillId: "4d29869541794e369808d101770fcf29",
        },
        {
          skillId: "6e3d7293194c4bd9abc174582134ddca",
        },
        {
          skillId: "4a769826de2b4ed29a91516ebd814e7f",
        },
        {
          skillId: "097ad33d6d784ca6840cc2844d28ad25",
        },
      ],
    };
    if (!userInput.isEdit) {
      profileApi.addProject({
        payload: payloadData,
        success: (res) => {
          console.log("Project added Successfully!", res);
        },
        error: (err) => {
          console.log("Failed to add Project", err);
        },
      });
    } else {
      profileApi.updateProject({
        payload: payloadData,
        suffPath: userInput.projectId,
        success: (res) => {
          console.log("Project updated successfully", res);
        },
        error: (err) => {
          console.log("Project update failed", err);
        },
      });
    }
    setUserInput({
      projectName: "",
      associatedWith: "",
      projectType: "",
      startDate: "",
      endDate: "",
      isWorking: false,
      projectLink: "",
      description: "",
      skills: [],
      verifierEmail: "",
      verified: false,
      isEdit: false,
      projectId: "",
    });
  };
  const handleEdit = (data) => {
    setUserInput({
      ...userInput,
      projectName: data?.projectName,
      associatedWith: data?.associatedWith,
      projectType: data?.projectType,
      startDate: data?.startDate,
      endDate: data?.endDate,
      projectLink: data?.projectLink,
      description: data?.description,
      skills: data?.skills,
      verified: data?.verified,
      isEdit: true,
      projectId: data?.projectId,
    });
  };
  return (
    <div>
      {" "}
      <div className="row " style={{ paddingInlineEnd: "0" }}>
        <h3 className="col" style={{ fontSize: "18px", fontWeight: "700" }}>
          Projects
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
          Add Projects
          <img src={plus} alt="add" width={20} height={20} />
        </button>
      </div>
      {/* modal */}
      <ProjectModal
        handleForm1Submit={handleForm1Submit}
        userInput={userInput}
        setUserInput={setUserInput}
        show={show}
        handleClose={handleClose}
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
      <div>
        {data?.map((el, index) => {
          return (
            <ProfileCard
              handleEdit={handleEdit}
              key={index}
              name={el.projectName}
              field={`${el.associatedWith} | ${el.projectType}`}
              startDate={el.startDate}
              endDate={el.endDate}
              verified={el.verified}
              image={el.image}
              skills={el.skills}
              description={el.description}
              button="View Project"
              url={el.projectLink}
              data={el}
              isEdit={setShow}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectProfile;
