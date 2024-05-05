import { useEffect, useState } from "react";
import plus from "../assets/svg/plus.svg";
import ProfileCard from "./ProfileCard";
import VerificationModal from "./modals/VerificationModal";
import OtherActivitiesModal from "./modals/OtherActivitiesModal";
import profileApi from "../apis/profile.api";

const OtherProfile = ({ activities }) => {
  console.log(activities);
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [isVerified, setIsVerified] = useState(false);
  const [verifyModalShow, setVerifyModalShow] = useState(false);
  const [userInput, setUserInput] = useState({
    activityName: "",
    organisation: "",
    activityType: "",
    startDate: "",
    endDate: "",
    description: "",
    activityId: "",
    verifierEmail: "",
    verified: false,
    isEdit: false,
  });
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setUserInput({
      activityName: "",
      organisation: "",
      activityType: "",
      startDate: "",
      endDate: "",
      description: "",
      activityId: "",
      verifierEmail: "",
      verified: false,
      isEdit: false,
    });
    setShow(true);
  };
  const handleVerifModalClose = () => {
    window.location.reload();
    setVerifyModalShow(false);
  };
  const handleVerifModalShow = () => setVerifyModalShow(true);
  const handleForm1Submit = (e) => {
    e.preventDefault();
    handleClose();
    handleVerifModalShow();
  };
  console.log(userInput);
  const handleForm2Submit = (e) => {
    e.preventDefault();
    setIsVerified(true);

    const payloadData = {
      activityName: userInput.activityName,
      organisation: userInput.organisation,
      activityType: userInput.activityType,
      startDate: userInput.startDate,
      endDate: userInput.endDate,
      description: userInput.description,
    };
    if (!userInput.isEdit) {
      profileApi.addActivity({
        payload: payloadData,
        success: (res) => {
          console.log("Other Activity added Successfully!", res);
        },
        error: (err) => {
          console.log("Failed to add Other Activity", err);
        },
      });
    } else {
      profileApi.updateActivity({
        payload: payloadData,
        suffPath: userInput.activityId,
        success: (res) => {
          console.log("Other Activity updated successfully", res);
        },
        error: (err) => {
          console.log("Other Activity update failed", err);
        },
      });
    }
    setUserInput({
      activityName: "",
      organisation: "",
      activityType: "",
      startDate: "",
      endDate: "",
      description: "",
      activityId: "",
      verifierEmail: "",
      isEdit: false,
      verified: false,
    });
  };
  const handleEdit = (data) => {
    setUserInput({
      ...userInput,
      activityName: data?.activityName,
      organisation: data?.organisation,
      activityType: data?.activityType,
      startDate: data?.startDate,
      endDate: data?.endDate,
      description: data?.description,
      activityId: data?.activityId,
      verified: data?.verified,
      isEdit: true,
    });
  };
  useEffect(() => {
    setData(activities);
  }, [activities]);
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
      <OtherActivitiesModal
        show={show}
        handleClose={handleClose}
        handleForm1Submit={handleForm1Submit}
        userInput={userInput}
        setUserInput={setUserInput}
      />
      <VerificationModal
        show2={verifyModalShow}
        handleClose2={handleVerifModalClose}
        userInput={userInput}
        setUserInput={setUserInput}
        handleForm2Submit={handleForm2Submit}
        isVerified={isVerified}
        setIsVerified={setIsVerified}
      />
      <div>
        {data?.map((el) => {
          return (
            <ProfileCard
              key={el.activityId}
              name={el.activityName}
              field={`${el.organisation}  | ${el.activityType}`}
              startDate={el.startDate}
              endDate={el.endDate}
              description={el.description}
              verified={el.verified}
              image={el.image}
              isEdit={setShow}
              handleEdit={handleEdit}
              data={el}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OtherProfile;
