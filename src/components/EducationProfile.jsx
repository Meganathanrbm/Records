import { useEffect, useState } from "react";
import plus from "../assets/svg/plus.svg";
import ProfileCard from "./ProfileCard";
import logo from "../assets/svg/collegeLogo.svg";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import VerificationModal from "./modals/VerificationModal";
import EducationModal from "./modals/EducationModal";
import profileApi from "../apis/profile.api";

const EducationProfile = ({ educations }) => {
  const [data, setData] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [userInput, setUserInput] = useState({
    degree: "",
    institution: "",
    branch: "",
    rollNumber: "",
    startDate: "",
    endDate: "",
    grade: "",
    gradeType: "",
    description: "",
    verified: false,
    image: null,
    verifierEmail: "",
    isEdit: false,
    educationId: "",
    data: null,
  });

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => {
    setUserInput({
      degree: "",
      institution: "",
      branch: "",
      rollNumber: "",
      startDate: "",
      endDate: "",
      grade: "",
      gradeType: "",
      description: "",
      verified: false,
      image: null,
      verifierEmail: "",
      isEdit: false,
      educationId: "",
      data: null,
    });
    setShow1(true);
  };
  const handleClose2 = () => {
    setShow2(false);
    setIsVerified(false);
    window.location.reload();
  };
  const handleShow2 = () => {
    setShow2(true);
  };

  useEffect(() => {
    setData(educations);
  }, [educations]);

  const handleEdit = (data) => {
    setUserInput({
      ...userInput,
      degree: data?.degree,
      institution: data?.institution,
      branch: data?.branch,
      rollNumber: data?.rollNumber,
      startDate: data?.startMonthYear,
      endDate: data?.endMonthYear,
      grade: data?.grade,
      description: data?.activitiesRoles,
      verified: false,
      image: null,
      isEdit: true,
      educationId: data?.educationId,
    });
  };
  useEffect(() => {
    setUserInput({
      ...userInput,
      degree: data?.degree,
      institution: data?.institution,
      branch: data?.branch,
      rollNumber: data?.rollNumber,
      startDate: data?.startMonthYear,
      endDate: data?.endMonthYear,
      grade: data?.grade,
      description: data?.activitiesRoles,
      verified: false,
      image: null,
      isEdit: true,
      educationId: data?.educationId,
    });
  }, [userInput.data]);
  const handleForm1Submit = (e) => {
    e.preventDefault();
    handleClose1();
    handleShow2();
  };
  const handleForm2Submit = (e) => {
    e.preventDefault();
    setIsVerified(true);
    const payloadData = {
      degree: userInput.degree,
      institution: userInput.institution,
      branch: userInput.branch,
      rollNumber: userInput.rollNumber,
      startMonthYear: userInput.startDate,
      endMonthYear: userInput.endDate,
      grade: userInput.grade,
      activitiesRoles: "Member of Computer Science Club",
      verifierEmail: userInput.verifierEmail,
    };
    if (!userInput.isEdit) {
      profileApi.addEducation({
        payload: payloadData,
        success: (res) => {
          console.log("Education added Successfully!", res);
        },
        error: (err) => {
          console.log("Failed to add education", err);
        },
      });
    } else {
      profileApi.updateEducation({
        payload: payloadData,
        suffPath: userInput.educationId,
        success: (res) => {
          console.log("Education details updated successfully", res);
        },
        error: (err) => {
          console.log("Education details update failed", err);
        },
      });
    }
    setUserInput({
      degree: "",
      institution: "",
      branch: "",
      rollNumber: "",
      startDate: "",
      endDate: "",
      grade: "",
      gradeType: "",
      description: "",
      verified: false,
      image: null,
      verifierEmail: "",
      isEdit: false,
      educationId: "",
    });
  };
  return (
    <div>
      {" "}
      <div className="row " style={{ paddingInlineEnd: "0" }}>
        <h3 className="col" style={{ fontSize: "18px", fontWeight: "700" }}>
          Educational Details
        </h3>
        <button
          onClick={handleShow1}
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
          Add Education
          <img src={plus} alt="add" width={20} height={20} />
        </button>

        {/* model 1 */}
        <EducationModal
          show1={show1}
          userInput={userInput}
          setUserInput={setUserInput}
          handleForm1Submit={handleForm1Submit}
          handleClose1={handleClose1}
        />
        {/* modal2 */}
        <VerificationModal
          userInput={userInput}
          setUserInput={setUserInput}
          show2={show2}
          handleClose2={handleClose2}
          handleForm2Submit={handleForm2Submit}
          isVerified={isVerified}
          setIsVerified={setIsVerified}
        />
      </div>
      <div>
        {data?.map((el) => {
          return (
            <ProfileCard
              key={el?.educationId}
              educations
              handleEdit={handleEdit}
              name={el.institution}
              field={el.degree}
              startDate={el.startMonthYear}
              endDate={el.endMonthYear}
              description={el.activitiesRoles}
              verified={el.verified}
              image={el.image}
              data={el}
              isEdit={setShow1}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EducationProfile;
