import { useEffect, useState } from "react";
import plus from "../assets/svg/plus.svg";
import ProfileCard from "./ProfileCard";
import logo from "../assets/svg/google.svg";

import Modal from "react-bootstrap/Modal";
import VerificationModal from "./modals/VerificationModal";
import { Button } from "react-bootstrap";
import LicenseProfileModal from "./modals/LicenseProfileModal";
import profileApi from "../apis/profile.api";

const LicenseProfile = ({ licensecertifications }) => {
  const [data, setData] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const [show, setShow] = useState(false);
  const [skill, setSkill] = useState("");
  const [verifyModalShow, setVerifyModalShow] = useState(false);
  const [userInput, setUserInput] = useState({
    certificateName: "",
    organisation: "",
    doneVia: "",
    issueDate: "",
    expirationDate: "",
    credentialID: "",
    credentialURL: "",
    skills: [],
    verifierEmail: "",
    isEdit: false,
    licenseCertificationId: "",
  });

  useEffect(() => {
    setData(licensecertifications);
  }, [licensecertifications]);

  const handleSkill = () => {
    setUserInput({ ...userInput, skills: [...skills, skill] });
    setSkill("");
  };
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    setUserInput({
      certificateName: "",
      organisation: "",
      doneVia: "",
      issueDate: "",
      expirationDate: "",
      credentialID: "",
      credentialURL: "",
      skills: [],
      verifierEmail: "",
      isEdit: false,
      licenseCertificationId: "",
    });
  };
  const handleVerifModalClose = () => {
    setVerifyModalShow(false);
    setIsVerified(false);
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
      certificationName: userInput.certificateName,
      organization: userInput.organisation,
      doneVia: userInput.doneVia,
      issuedDate: userInput.issueDate,
      expirationDate: userInput.expirationDate,
      credentialId: userInput.credentialID,
      credentialURL: userInput.credentialURL,
      skills: [
        {
          skillId: "a9cdf97638d14d06b6e6cb21c4d3c9cc",
        },
        {
          skillId: "a4cb1e2bf12a46529c5eb2d5e40e9492",
        },
        {
          skillId: "1197e808d7914a6ebae88f5435847d84",
        },
      ],
    };

    if (!userInput.isEdit) {
      profileApi.addLicenseCertification({
        payload: payloadData,
        success: (res) => {
          console.log("License add successfully", res);
        },
        error: (err) => {
          console.log("failed to add License", err);
        },
      });
    } else {
      profileApi.updateLicenseCertification({
        payload: payloadData,
        suffPath: userInput.licenseCertificationId,
        success: (res) => {
          console.log("License update successfully", res);
        },
        error: (err) => {
          console.log("failed to update License", err);
        },
      });
    }
    setUserInput({
      certificateName: "",
      organisation: "",
      doneVia: "",
      issueDate: "",
      expirationDate: "",
      credentialID: "",
      credentialURL: "",
      skills: [],
      verifierEmail: "",
      isEdit: false,
      licenseCertificationId: "",
    });
  };
  const handleEdit = (data) => {
    setUserInput({
      ...userInput,
      certificateName: data.certificationName,
      organisation: data.organization,
      doneVia: data.doneVia,
      issueDate: data.issuedDate,
      expirationDate: data.expirationDate,
      credentialID: data.credentialId,
      credentialURL: data.credentialURL,
      isEdit: false,
      licenseCertificationId: data.licenseCertificationId,
      skills: data.skills,
      isEdit: true,
      verified: false,
    });
  };
  return (
    <div>
      {" "}
      <div className="row " style={{ paddingInlineEnd: "0" }}>
        <h3 className="col" style={{ fontSize: "18px", fontWeight: "700" }}>
          Licenses and Certifications
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
          Add Credentials
          <img src={plus} alt="add" width={20} height={20} />
        </button>
      </div>
      {/* modal */}
      <LicenseProfileModal
        userInput={userInput}
        setUserInput={setUserInput}
        show={show}
        handleClose={handleClose}
        handleForm1Submit={handleForm1Submit}
      />
      <VerificationModal
        show2={verifyModalShow}
        handleClose2={handleVerifModalClose}
        handleForm2Submit={handleForm2Submit}
        isVerified={isVerified}
        userInput={userInput}
        setUserInput={setUserInput}
        setIsVerified={setIsVerified}
      />
      <div>
        {data.map((el, index) => {
          return (
            <ProfileCard
              handleEdit={handleEdit}
              key={index}
              name={el.certificationName}
              field={`${el.organization}  | ${el.doneVia}`}
              endDate={el.issuedDate}
              verified={el?.verified}
              image={el?.image}
              skills={el?.skills}
              button={"Credentials"}
              url={el?.credentialURL}
              isEdit={setShow}
              data={el}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LicenseProfile;
