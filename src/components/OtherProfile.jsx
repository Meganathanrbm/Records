import { useState } from "react";
import plus from "../assets/svg/plus.svg";
import ProfileCard from "./ProfileCard";
import logo from "../assets/svg/collegeLogo.svg";
const OtherProfile = () => {
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
  return (
    <div>
      {" "}
      <div className="row " style={{ paddingInlineEnd: "0" }}>
        <h3 className="col" style={{ fontSize: "18px", fontWeight: "700" }}>
          Other Activities
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
            maxWidth: "150px",
          }}
        >
          Add Activity
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

export default OtherProfile;
