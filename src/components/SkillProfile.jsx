import SkillCard from "./SkillCard";
import badge from "../assets/svg/skillBadge.svg";
import report from "../assets/svg/skillReport.svg";
import RadarChart from "../pages/ProfilePage/radarChart";
const SkillProfile = ({ skillRepository }) => {
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
            {skillRepository?.roleBasedSkills.map((skill) => (
              <SkillCard
                endorsment={skill.endorsedCount}
                key={skill.skillId}
                text={skill.skill}
              />
            ))}
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
            {skillRepository?.interestBasedSkills.map((skill) => (
              <SkillCard
                endorsment={skill.endorsedCount}
                key={skill.skillId}
                text={skill.skillName}
              />
            ))}
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
                <img src={badge} alt="badge" width={40} />{" "}
                {skillRepository?.skillBadges?.roleBasedCount}
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
                <img src={badge} alt="badge" width={40} />{" "}
                {skillRepository?.skillBadges?.interestBasedCount}
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
          className="rounded-4 p-2 border mt-2"
          style={{ minHeight: "50vh" }}
        >
          <RadarChart percentages={skillRepository?.percentages} />
        </div>
      </div>
    </div>
  );
};

export default SkillProfile;
