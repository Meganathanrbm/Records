import skillLogo from "../assets/svg/skillLogo.svg";
import verified from "../assets/svg/greenTick.svg";
const SkillCard = ({ text }) => {
  return (
    <div
      className="d-flex  py-1 px-3 rounded-4 align-items-center gap-2 "
      style={{ border: "solid 1px #1212124D ", width: "max-content" }}
    >
      <div>
        <img src={skillLogo} alt="skillLogo" style={{ height: "50px" }} />
      </div>
      <div className="d-flex flex-column  ">
        <h5 style={{ fontSize: "16px", fontWeight: 700, margin: 0 }}>
          {text} <img src={verified} alt="verified" width={15} />
        </h5>
        <p
          style={{
            color: "#8F8F8F",
            fontSize: "14px",
            fontWeight: 600,
            margin: 0,
          }}
        >
          3 Endorsements
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
