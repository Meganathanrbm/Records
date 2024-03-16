import SkillCard from "./SkillCard";
import badge from "../assets/svg/skillBadge.svg";
import report from "../assets/svg/skillReport.svg";
const SkillProfile = () => {
  return (
    <div className="row">
      <div className="col-7">
        <div
          className="rounded-4 p-2"
          style={{ border: "solid 2px #1212124D ", marginBlockEnd: "16px" }}
        >
          <h4 style={{ fontWeight: 700 }}>Role Based Skills</h4>
          <p style={{ color: "#8F8F8F", fontSize: "20px", fontWeight: "400" }}>
            Skills that you earn for your career.
          </p>
          <div
            className="d-flex gap-1 justify-content-start "
            style={{ flexWrap: "wrap" }}
          >
            <SkillCard text="ui" />
            <SkillCard text="css" />
            <SkillCard text="adobe" />
            <SkillCard text="ui" />
            <SkillCard text="css" />

            <SkillCard text="css" />
            <SkillCard text="adobe" />
            <SkillCard text="ui" />
            <SkillCard text="css" />

            <SkillCard text="ui" />
          </div>
        </div>
        <div
          className="rounded-4 p-2"
          style={{ border: "solid 2px #1212124D " }}
        >
          <h4 style={{ fontWeight: 700 }}>Interest Based Skills</h4>
          <p style={{ color: "#8F8F8F", fontSize: "20px", fontWeight: "400" }}>
            Skills that you earn for your will.
          </p>
          <div
            className="d-flex gap-1 justify-content-start "
            style={{ flexWrap: "wrap" }}
          >
            <SkillCard text="ui" />
            <SkillCard text="css" />
            <SkillCard text="adobe" />
            <SkillCard text="ui" />
            <SkillCard text="css" />

            <SkillCard text="css" />
            <SkillCard text="adobe" />
            <SkillCard text="ui" />
            <SkillCard text="css" />

            <SkillCard text="ui" />
          </div>
        </div>
      </div>
      <div className="col-5">
        <div
          className="rounded-4 p-2"
          style={{ border: "solid 2px #1212124D ", marginBlockEnd: "16px" }}
        >
          <h4 style={{ fontWeight: 700 }}>Skill Badges</h4>
          <div
            className="d-flex justify-content-evenly"
            style={{ flexWrap: "wrap" }}
          >
            <div
              className="rounded-4 p-2"
              style={{ border: "solid 2px #1212124D " }}
            >
              <h2>
                <img src={badge} alt="badge" width={40} /> 22
              </h2>
              <p
                style={{
                  color: "#8F8F8F",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                Role Based
              </p>
            </div>{" "}
            <div
              className="rounded-4 p-2"
              style={{ border: "solid 2px #1212124D " }}
            >
              <h2>
                <img src={badge} alt="badge" width={40} /> 7
              </h2>
              <p
                style={{
                  color: "#8F8F8F",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                Interst Based
              </p>
            </div>
          </div>
        </div>

        <div
          className="rounded-4 p-2"
          style={{ border: "solid 2px #1212124D " }}
        >
          <img src={report} alt="report" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default SkillProfile;
