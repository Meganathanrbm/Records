import SkillCard from "./SkillCard";
import badge from "../assets/svg/skillBadge.svg";
import report from "../assets/svg/skillReport.svg";
const SkillProfile = () => {
  return (
    <div className="row">
      <div className="col-7">
        <div className="rounded-4 border" style={{ padding: "1rem" }}>
          <h4 style={{ fontWeight: 700, fontSize: "18px" }}>
            Role Based Skills
          </h4>
          <p style={{ color: "#8F8F8F", fontSize: "13px", fontWeight: "400" }}>
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
        <div className="rounded-4 border mt-3 " style={{ padding: "1rem" }}>
          <h4 style={{ fontWeight: 700, fontSize: "18px" }}>
            Interest Based Skills
          </h4>
          <p style={{ color: "#8F8F8F", fontSize: "13px", fontWeight: "400" }}>
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
          className="rounded-4 border"
          style={{ padding: "1rem ", marginBottom: "1rem" }}
        >
          <h4 style={{ fontWeight: 700, fontSize: "18px" }}>Skill Badges</h4>
          <div
            className="d-flex justify-content-around"
            style={{ flexWrap: "wrap", padding: "1rem 0" }}
          >
            <div className="rounded-4 p-2 border" style={{ width: "45%" }}>
              <h2
                style={{
                  color: "rgba(235, 124, 73, 1) rgba(240, 79, 82, 1)",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                <img src={badge} alt="badge" width={40} /> 22
              </h2>
              <p
                style={{
                  color: "#8F8F8F",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Role Based
              </p>
            </div>{" "}
            <div className="rounded-4 p-2 border" style={{ width: "45%" }}>
              <h2
                style={{
                  color: "rgba(235, 124, 73, 1) rgba(240, 79, 82, 1)",
                  fontSize: "24px",
                  fontWeight: "700",
                }}
              >
                <img src={badge} alt="badge" width={40} /> 7
              </h2>
              <p
                style={{
                  color: "#8F8F8F",
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Interst Based
              </p>
            </div>
          </div>
        </div>

        <div
          className="rounded-4 p-2 border mt-3"
          // style={{ border: "solid 2px #1212124D " }}
        >
          <img src={report} alt="report" style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
};

export default SkillProfile;
