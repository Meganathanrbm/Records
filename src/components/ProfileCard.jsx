import greentick from "../assets/svg/greenTick.svg";
import edit from "../assets/svg/editIcon.svg";
import link from "../assets/svg/link.svg";
const ProfileCard = ({
  name,
  field,
  description,
  startDate,
  endDate,
  verified,
  image,
  skills,
  duration,
  button,
}) => {
  return (
    <div
      className="my-4 row gx-2 rounded-4 px-4 py-2"
      style={{ border: "1px solid #1212124D", position: "relative" }}
    >
      <div className="col-1">
        <img src={image} alt="institute logo" width={50} />
      </div>
      <div className="col-11">
        <img
          src={edit}
          alt="edit"
          style={{
            position: "absolute",
            right: "10px",
            top: 10,
            cursor: "pointer",
          }}
          width={25}
          height={25}
        />
        <div className="d-flex flex-row  align-items-center gap-1">
          <h4>{name} </h4>
          {verified && (
            <img src={greentick} alt="tick" width={20} height={20} />
          )}
        </div>
        <h5 style={{ color: "#444444", fontWeight: 400, fontSize: "18px" }}>
          {field}
        </h5>
        <p style={{ color: "#858585" }}>
          {startDate ? `${startDate} -` : `Issued`} {endDate}{" "}
          {duration ? "| " : null}
          {duration}
        </p>
        <div className="d-flex gap-2 mb-2">
          {skills &&
            skills.map((skill, index) => {
              return (
                <button
                  style={{
                    background: "#F9F9F9",
                    color: "#F04F52",
                    border: "none",
                    borderRadius: "16px",
                    paddingBlock: "4px",
                    paddingInline: "12px",
                  }}
                  key={index}
                >
                  {skill}
                </button>
              );
            })}
        </div>
        <p style={{ fontWeight: 500 }}>{description}</p>
      </div>
      <div className="d-flex justify-content-end">
        {button && (
          <button
            className="d-flex align-items-center gap-1 rounded-1 p-1"
            style={{
              fontSize: 12,
              fontWeight: 500,
              border: "1px solid #F04F52",
              background: "white",
            }}
          >
            {button} <img src={link} alt="link" width={15} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
