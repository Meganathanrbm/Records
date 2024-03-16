import React, { useState } from "react";
import { Link } from "react-router-dom";
import walktrough from "../../../assets/svg/walktrough.svg";
import sectionsAndSkills from "../../../constants/skills.constant";

const Walktrough = () => {
  const [showMore, setShowMore] = useState({});
  const [selectedSkills, setSelectedSkills] = useState([]);
  const sections = sectionsAndSkills;

  const toggleShowMore = (sectionTitle) => {
    setShowMore((prevState) => ({
      ...prevState,
      [sectionTitle]: !prevState[sectionTitle],
    }));
  };

  function selectSkill(item) {
    console.log(item);
    if (selectedSkills.length < 5) {
      setSelectedSkills((prevState) => [...prevState, item]);
    } else {
      alert("You can only select 5 skills");
    }
  }

  return (
    <div className="d-flex min-vh-100">
      <div className="p-4 gap-3 ">
        <Link to="/onboarding">
          <button className="btn btn-secondary mb-3 d-flex gap-2">
            <i class="bi bi-caret-left"></i>Go Back
          </button>
        </Link>
        <section className="d-flex flex-column gap-3 mt-5">
          <h5 style={{ color: "rgba(235, 124, 73, 1)rgba(240, 79, 82, 1)" }}>
            Let's Build your profile
          </h5>
          <h1>What are you most curious about?</h1>
          <p>
            Curiosity is the best guide. Your curiosity never lies, and it knows
            more than you do about what's worth paying attention to.
          </p>
          <img src={walktrough} alt="" className="w-75" />
        </section>
      </div>

      <div
        className=" w-100 d-flex flex-column justify-content-around align-items-center"
        style={{ background: "rgba(237, 242, 246, 1)" }}
      >
        <section className="w-100 d-flex flex-column  justify-content-center align-items-center">
          <div
            className="w-100 d-flex  justify-content-end align-items-center mt-5 pr-4"
            style={{ gap: "7rem" }}
          >
            <div
              className="input-group input-group-sm mb-3  w-50  "
              style={{ height: "5vh" }}
            >
              <span className="input-group-text" id="inputGroup-sizing-sm">
                <i class="bi bi-search"></i>
              </span>
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Search for skills"
              />
            </div>
            <p className="d-flex gap-2 align-items-center">
              Support <i class="bi bi-info-circle"></i>
            </p>
          </div>
          <p>You can select up to 5. Add/Edit later</p>
        </section>
        <div className="w-100 d-flex flex-column justify-content-start align-items-start p-4">
          <section>
            <h5 style={{ color: "rgba(235, 124, 73, 1)rgba(240, 79, 82, 1)" }}>
              Selected
            </h5>
            {selectedSkills.length === 0 ? (
              ""
            ) : (
              <div className="d-flex justify-content-start align-items-center flex-wrap">
                {selectedSkills?.map((item, index) => {
                  return (
                    <div
                      className="d-flex justify-content-around align-items-center rounded-pill pl-2 border bg-white m-1"
                      style={{
                        paddingLeft: " 1rem",
                        paddingRight: "1rem",
                        gap: "0.5rem",
                      }}
                      key={index}
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        srcset=""
                        style={{ width: "20px" }}
                      />
                      <p className="text-center mt-2 pr-2 fw-semibold">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
          {/*  */}
          {sections.map((section, index) => {
            return (
              <section key={index} className="mt-2">
                <h5 style={{ padding: "0.7rem 0rem" }}>{section.title}</h5>
                <div className="d-flex justify-content-start align-items-center flex-wrap">
                  {section.items
                    .slice(
                      0,
                      showMore[section.title] ? section.items.length : 10
                    )
                    .map((item, index) => {
                      return (
                        <div
                          className="d-flex justify-content-around align-items-center rounded-pill pl-1 border bg-white m-1"
                          style={{
                            paddingLeft: " 1rem",
                            paddingRight: "1rem",
                            gap: "0.5rem",
                          }}
                          key={index}
                          onClick={() => selectSkill(item)}
                        >
                          <img
                            src={item.img}
                            alt={item.name}
                            srcset=""
                            style={{ width: "20px" }}
                          />
                          <p className="text-center mt-2 pr-2 fw-semibold">
                            {item.name}
                          </p>
                        </div>
                      );
                    })}
                  <p onClick={() => toggleShowMore(section.title)}>
                    <a class="link-offset-2 link-underline link-underline-opacity-0 d-flex justify-content-center align-items-center">
                      {showMore[section.title] ? "Show less" : "Show more"}
                      {showMore[section.title] ? (
                        <i class="bi bi-caret-up-fill"></i>
                      ) : (
                        <i class="bi bi-caret-down-fill"></i>
                      )}
                    </a>
                  </p>
                </div>
              </section>
            );
          })}
          {/*  */}
        </div>
       <Link to={"/"}> <section className="w-100 d-flex justify-content-end p-3">
          <button className="btn btn-primary">Get Started</button>
        </section></Link>
      </div>
    </div>
  );
};

export default Walktrough;
