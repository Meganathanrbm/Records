import { useState } from "react";
import userImage from "../../assets/svg/userImage.svg";
import BasicProfile from "../../components/BasicProfile";
import EducationProfile from "../../components/EducationProfile";
import WorkProfile from "../../components/WorkProfile";
import OtherProfile from "../../components/OtherProfile";
import LicenseProfile from "../../components/LicenseProfile";
import ProjectProfile from "../../components/ProjectProfile";
import "./ProfilePage.css";
import SkillProfile from "../../components/SkillProfile";
const Profile = () => {
  const [profileType, setProfileType] = useState("basic");
  return (
    <div className="row">
      <div
        className="col col-4 rounded-4 pt-2"
        style={{ border: "1px solid #1212124D", minHeight: "80vh" }}
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
            Akshay Kumar
          </h4>
        </div>
        <ul
          style={{
            textTransform: "capitalize",
            color: "#8F8F8F",
            fontWeight: "500",
            fontSize: "20px",
          }}
          className="d-flex flex-column gap-4 pt-4 "
        >
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setProfileType("basic")}
            className={profileType == "basic" ? "colored" : " "}
          >
            Basic Profile
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setProfileType("education")}
            className={profileType == "education" ? "colored" : " "}
          >
            Education
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setProfileType("work")}
            className={profileType == "work" ? "colored" : " "}
          >
            Work Experience
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setProfileType("license")}
            className={profileType == "license" ? "colored" : " "}
          >
            Licenses & Certifications
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setProfileType("skill")}
            className={profileType == "skill" ? "colored" : " "}
          >
            Skill Repository
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setProfileType("project")}
            className={profileType == "project" ? "colored" : " "}
          >
            Projects
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => setProfileType("other")}
            className={profileType == "other" ? "colored" : " "}
          >
            other activities
          </li>
        </ul>
      </div>
      <div className="col col-8 px-4">
        <div className="row">{profileType === "basic" && <BasicProfile />}</div>
        <div className="row">
          {profileType === "education" && <EducationProfile />}
        </div>
        <div className="row">{profileType === "work" && <WorkProfile />}</div>
        <div className="row">
          {profileType === "license" && <LicenseProfile />}
        </div>
        <div className="row">{profileType === "skill" && <SkillProfile />}</div>
        <div className="row">
          {profileType === "project" && <ProjectProfile />}
        </div>
        <div className="row">{profileType === "other" && <OtherProfile />}</div>
      </div>
    </div>
  );
};

export default Profile;
