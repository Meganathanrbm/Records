import { useState } from "react";
import plus from "../assets/svg/plus.svg";
import ProfileCard from "./ProfileCard";
import logo from "../assets/svg/google.svg";

const LicenseProfile = () => {
  const [data, setData] = useState([
    {
      name: "Placement Representative of the Department",
      field: "At PSG Polytechnic College | Academic",
      startDate: "Mar 2018",
      endDate: "Apr 2021",
      skills: ["html", "css", "js"],
      image: logo,
      button: "Credentials",
    },
    {
      name: "Placement Representative of the Department",
      field: "At PSG Polytechnic College | Academic",
      startDate: "Mar 2018",
      endDate: "Apr 2021",
      skills: ["html", "css", "js"],
      image: logo,
      button: "Credentials",
    },
  ]);
  return (
    <div>
      {" "}
      <div className="row " style={{ paddingInlineEnd: "0" }}>
        <h3 className="col">Licenses and Certifications</h3>
        <button
          type="button"
          className="col btn d-flex justify-content-center align-items-center gap-2  "
          style={{
            color: "white",
            background:
              "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",
            border: "none",
            padding: "0px",
            maxWidth: "250px",
          }}
        >
          Add Credentials
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
              endDate={el.endDate}
              verified={el.verified}
              image={el.image}
              skills={el.skills}
              button={el.button}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LicenseProfile;
