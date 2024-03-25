import { useEffect, useState } from "react";
import userImage from "../../assets/svg/userImage.svg";
import BasicProfile from "../../components/BasicProfile";
import EducationProfile from "../../components/EducationProfile";
import WorkProfile from "../../components/WorkProfile";
import OtherProfile from "../../components/OtherProfile";
import LicenseProfile from "../../components/LicenseProfile";
import ProjectProfile from "../../components/ProjectProfile";
import "./ProfilePage.css";
import SkillProfile from "../../components/SkillProfile";
import currentUserState from "../../store/user.store";
import { useRecoilState } from "recoil";
import userApi from "../../apis/user.api";

const Profile = () => {
  const [profileType, setProfileType] = useState("basic");
  const [userProfile, setUserProfile] = useState({});
  const [currentLoggedInUser, setCurrentLoggedInUser] =
    useRecoilState(currentUserState);

  useEffect(() => {
    userApi.handlegetProfile({
      payload: {
        userId: currentLoggedInUser.userId,
      },
      success: (response) => {
        setUserProfile(response.data.data);
      },
      error: (error) => {
        console.log("error", error);
      },
    });
  }, []);

  function handleOnclick(type) {
    setProfileType(type);
  }

  return (
    <div className="row d-flex justify-content-around">
      <div
        className="col col-4 rounded-4 pt-2 border"
        style={{
          // border: "1px solid #1212124D",
          width: "20vw",
          height: "85vh",
        }}
      >
        <div className="row d-flex flex-column  align-items-center text-center ">
          <img
            src={userImage}
            alt="profile"
            style={{ width: "50%", height: "50%" }}
            className="rounded-circle"
          />
          <h4
            style={{
              fontWeight: "700",

              color: "#12131A",
            }}
          >
            {userProfile?.name}
          </h4>
        </div>
        <ul
          style={{
            textTransform: "capitalize",
            color: "#8F8F8F",
          }}
          className="d-flex flex-column gap-3 mt-4 profile_ul "
        >
          <li
            style={{ cursor: "pointer" }}
            onClick={() => handleOnclick("basic")}
            className={profileType == "basic" ? "colored" : " "}
          >
            Basic Profile
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => handleOnclick("education")}
            className={profileType == "education" ? "colored" : " "}
          >
            Education
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => handleOnclick("work")}
            className={profileType == "work" ? "colored" : " "}
          >
            Work Experience
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => handleOnclick("license")}
            className={profileType == "license" ? "colored" : " "}
          >
            Licenses & Certifications
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => handleOnclick("skill")}
            className={profileType == "skill" ? "colored" : " "}
          >
            Skill Repository
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => handleOnclick("project")}
            className={profileType == "project" ? "colored" : " "}
          >
            Projects
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => handleOnclick("other")}
            className={profileType == "other" ? "colored" : " "}
          >
            other activities
          </li>
        </ul>
      </div>

      <div className="col col-8 px-4 ">
        <div className="row">
          {profileType === "basic" && (
            <BasicProfile userProfile={userProfile} />
          )}
        </div>
        <div className="row">
          {profileType === "education" && (
            <EducationProfile userProfile={userProfile} />
          )}
        </div>
        <div className="row">
          {profileType === "work" && <WorkProfile userProfile={userProfile} />}
        </div>
        <div className="row">
          {profileType === "license" && (
            <LicenseProfile userProfile={userProfile} />
          )}
        </div>
        <div className="row">
          {profileType === "skill" && (
            <SkillProfile userProfile={userProfile} />
          )}
        </div>
        <div className="row">
          {profileType === "project" && (
            <ProjectProfile userProfile={userProfile} />
          )}
        </div>
        <div className="row">
          {profileType === "other" && (
            <OtherProfile userProfile={userProfile} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
