import { useState } from "react";
import plus from "../assets/svg/plus.svg";
import ProfileCard from "./ProfileCard";
import logo from "../assets/svg/collegeLogo.svg";
const EducationProfile = () => {
  const [data, setData] = useState([
    {
      name: "PSG Collage of Technology",
      field: "BE in Mechanical Engineering, Automotive Design",
      startDate: "Mar 2018",
      endDate: "Apr 2021",
      description:
        "Activities and Roles: I've been selected as a Placement Representative & Event Manager for my Department. And Received Best Alumni Award of the...",
      verified: true,
      image: logo,
    },
    {
      name: "Kumaraguru College of Technology",
      field: "Diploma in Automobile Engineering",
      startDate: "Mar 2018",
      endDate: "Apr 2021",
      description:
        "Activities and Roles: Volunteer of NSS Camp & Player in Volley Ball Team of College.",
      verified: false,
      image: logo,
    },
  ]);
  return (
    <div>
      {" "}
      <div className="row " style={{ paddingInlineEnd: "0" }}>
        <h3 className="col" style={{ fontSize: "18px", fontWeight: "700" }}>
          Educational Details
        </h3>
        <button
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
      </div>
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

export default EducationProfile;
