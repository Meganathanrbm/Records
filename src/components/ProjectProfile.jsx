import { useState } from "react";
import plus from "../assets/svg/plus.svg";
import ProfileCard from "./ProfileCard";
import logo from "../assets/svg/brokenImg.svg";

const ProjectProfile = () => {
  const [data, setData] = useState([
    {
      name: "LendQ - Lending & Borrowing Platform UX Case Study",
      field: "At Freelancing | Individual Project",
      description:
        "This is my personal project, where I've created a UX case study for an idea that comes into my mind called LendQ. This project was a solution to a problem that I and many of...",
      startDate: "Mar 2018",
      endDate: "Apr 2021",
      skills: ["html", "css", "js"],
      image: logo,
      button: "View Project",
      verified: "true",
    },
    {
      name: "LendQ - Lending & Borrowing Platform UX Case Study",
      field: "At Freelancing | Individual Project",
      description:
        "This is my personal project, where I've created a UX case study for an idea that comes into my mind called LendQ. This project was a solution to a problem that I and many of...",
      startDate: "Mar 2018",
      endDate: "Apr 2021",
      skills: ["html", "css", "js"],
      image: logo,
      button: "View Project",
    },
    {
      name: "LendQ - Lending & Borrowing Platform UX Case Study",
      field: "At Freelancing | Individual Project",
      description:
        "This is my personal project, where I've created a UX case study for an idea that comes into my mind called LendQ. This project was a solution to a problem that I and many of...",
      startDate: "Mar 2018",
      endDate: "Apr 2021",
      skills: ["html", "css", "js"],
      image: logo,
      button: "View Project",
    },
  ]);
  return (
    <div>
      {" "}
      <div className="row " style={{ paddingInlineEnd: "0" }}>
        <h3 className="col" style={{ fontSize: "18px", fontWeight: "700" }}>
          Projects
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
          Add Projects
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
              description={el.description}
              button={el.button}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectProfile;
