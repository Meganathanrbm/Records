import skillLogo from "../assets/svg/skillLogo.svg";
import verified from "../assets/svg/greenTick.svg";
const SkillCard = ({ text, endorsment }) => {
  return (
    <div
      className="d-flex  py-1 px-3 rounded-4 align-items-center gap-2 border"
      // style={{ border: "solid 1px #1212124D ", width: "max-content" }}
    >
      <div>
        <img src={skillLogo} alt="skillLogo" style={{ height: "30px" }} />
      </div>
      <div className="d-flex flex-column  ">
        <h5
          style={{
            fontSize: "14px",
            fontWeight: 700,
            margin: 0,
            display: "flex",
            alignItems: "center",
            gap:"5px"
          }}
        >
          {text} <img src={verified} alt="verified" width={10} />
        </h5>
        <p
          style={{
            color: "#8F8F8F",
            fontSize: "12px",
            fontWeight: 600,
            margin: 0,
          }}
        >
          {endorsment} Endorsements
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
