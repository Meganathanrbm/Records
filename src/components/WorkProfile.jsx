import logo from "../assets/svg/workLogo.svg";
import plus from "../assets/svg/plus.svg";
import ProfileCard from "./ProfileCard";
import { useState } from "react";
const WorkProfile = () => {
  const [data, setData] = useState([
    {
      name: "Technical Research Intern",
      field:
        "National Institute of Technology | Trichy, Tamil Nadu, India | On-site",
      startDate: "Mar 2018",
      endDate: "Apr 2021",
      description:
        "I have learned so much about organisational process and business operations, where I could able to focus on feasibility testing and got a chance to collaborate with tech team...",
      verified: true,
      image: logo,
      skills: ["autoCad", "vehicleDynamic", "fluid"],
      duration: "6mos",
    },
    {
      name: "Technical Research Intern",
      field:
        "National Institute of Technology | Trichy, Tamil Nadu, India | On-site",
      startDate: "Mar 2018",
      endDate: "Apr 2021",
      description:
        "I have learned so much about organisational process and business operations, where I could able to focus on feasibility testing and got a chance to collaborate with tech team...",
      verified: true,
      image: logo,
      skills: ["autoCad", "vehicleDynamic", "fluid"],
      duration: "4mos",
    },
    {
      name: "Technical Research Intern",
      field:
        "National Institute of Technology | Trichy, Tamil Nadu, India | On-site",
      startDate: "Mar 2018",
      endDate: "Apr 2021",
      description:
        "I have learned so much about organisational process and business operations, where I could able to focus on feasibility testing and got a chance to collaborate with tech team...",
      verified: true,
      image: logo,
      skills: ["autoCad", "vehicleDynamic", "fluid"],
      duration: "6mos",
    },
  ]);
  return (
    <div>
      {" "}
      <div className="row " style={{ paddingInlineEnd: "0" }}>
        <h3 className="col"> Work Experience and Internships</h3>
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
          Add Experience
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
              skills={el.skills}
              duration={el.duration}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProfile;
