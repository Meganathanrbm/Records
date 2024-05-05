import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { IoClose } from "react-icons/io5";

import walktrough from "../../../assets/svg/walktrough.svg";
import userApi from "../../../apis/user.api";
import currentUserState from "../../../store/user.store";
import skillApi from "../../../apis/skill.api";
import "./walkthrough.css";
import axiosInstance from "../../../configs/axios-instance";

const Walktrough = () => {
  const navigate = useNavigate();
  const [showWarning, setShowWarning] = useState({
    status: false,
    message: "",
  });
  const [showMore, setShowMore] = useState({});
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [allSkills, setAllSkills] = useState(null);
  const [currentLoggedInUser, setCurrentLoggedInUser] =
    useRecoilState(currentUserState);
  const skills = selectedSkills.map((skill) => skill.skillId);
  const [searchParams, setSearchParams] = useSearchParams({ q: "" });
  const q = searchParams.get("q");

  const toggleShowMore = (sectionTitle) => {
    setShowMore((prevState) => ({
      ...prevState,
      [sectionTitle]: !prevState[sectionTitle],
    }));
  };

  function selectSkill(item) {
    if (selectedSkills.length < 5) {
      if (!selectedSkills.includes(item)) {
        setSelectedSkills((prevState) => [...prevState, item]);
      } else {
        setShowWarning({
          status: true,
          message: "Aldready selected!",
        });
      }
    } else {
      setShowWarning({
        status: true,
        message: "You can only select 5 skills",
      });
    }
  }
  //warning for selected skills
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWarning({ status: false, message: "" });
    }, 2500);

    return () => clearTimeout(timer);
  }, [showWarning]);

  useEffect(() => {
    skillApi.getSkills({
      query: q,
      success: (res) => {
        console.log("Skills");
        setAllSkills(res.data.data);
      },
      error: (err) => {
        console.log("Skills Error", err);
      },
    });
  }, [q]);

  function handleOnboarding() {
    userApi.handleOnboarding({
      payload: skills,
      success: (res) => {
        console.log("Onboarding Success", res);
        setCurrentLoggedInUser({
          ...currentLoggedInUser,
          isOnBoardingCompleted: true,
        });
        navigate("/dashboard");
      },
      error: (err) => {
        console.log("Onboarding Error", err);
      },
    });
  }

  return (
    <div className="d-flex  min-vh-100">
      <div className="p-4  gap-3 ">
        <Link to="/onboarding">
          <button className="btn btn-secondary mb-3 d-flex gap-2">
            <i className="bi bi-caret-left"></i>Go Back
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
        style={{
          background: "rgba(237, 242, 246, 1)",
          paddingRight: "10px",
          position: "relative",
        }}
      >
        {/* Alert / warning */}
        {showWarning.status && (
          <div
            style={{
              position: "absolute",
              top: "6%",
              left: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="alert walkthrough_alert alert-warning"
            role="dialog"
          >
            {showWarning.message}
            <div
              onClick={() => setShowWarning({ status: false, message: "" })}
              className=""
              style={{
                fontWeight: "bold",
                paddingLeft: "50px",
                cursor: "pointer",
              }}
            >
              <IoClose />
            </div>
          </div>
        )}

        <section className="w-100 d-flex flex-column px-4  justify-content-center align-items-center">
          <div
            className="w-100 d-flex  justify-content-end align-items-center mt-5 pr-4"
            style={{ gap: "7rem" }}
          >
            <div
              className="input-group input-group-sm mb-3  w-50  "
              style={{ height: "5vh" }}
            >
              <span className="input-group-text" id="inputGroup-sizing-sm">
                <i className="bi bi-search"></i>
              </span>
              <input
                type="search"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="Search for skills"
                value={q}
                onChange={(e) => {
                  setSearchParams((prev) => {
                    return {
                      ...prev,
                      q: e.target.value,
                    };
                  });
                }}
              />
            </div>
            <p className="d-flex gap-2 align-items-center">
              Support <i className="bi bi-info-circle"></i>
            </p>
          </div>
          <p
            style={{
              color: "#8B8B8B",
            }}
          >
            (You can select up to 5. Add/Edit later)
          </p>
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
                        src={item.imageUrl}
                        alt={item.skillName}
                        style={{ width: "20px" }}
                      />
                      <p className="text-center mt-2 pr-2 fw-semibold">
                        {item.skillName}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
          {/*  */}
          {allSkills?.map((skills, index) => {
            return (
              <section key={index} className="mt-2">
                <h5 style={{ padding: "0.7rem 0rem" }}>{skills._id}</h5>
                <div className="d-flex justify-content-start align-items-center flex-wrap">
                  {skills.skills
                    .slice(0, showMore[skills._id] ? skills.skills.length : 10)
                    .map((item, index) => {
                      {
                        /* showMore[section.title] ? section.items.length : 10 */
                      }
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
                            src={item.imageUrl}
                            alt={item.skillName}
                            style={{ width: "20px" }}
                          />
                          <p className="text-center mt-2 pr-2 fw-semibold">
                            {item.skillName}
                          </p>
                        </div>
                      );
                    })}
                  <p onClick={() => toggleShowMore(skills._id)}>
                    <a className="link-offset-2 link-underline link-underline-opacity-0 d-flex justify-content-center align-items-center">
                      {showMore[skills._id] ? "Show less" : "Show more"}
                      {showMore[skills._id] ? (
                        <i className="bi bi-caret-up-fill"></i>
                      ) : (
                        <i className="bi bi-caret-down-fill"></i>
                      )}
                    </a>
                  </p>
                </div>
              </section>
            );
          })}
          {/*  */}
        </div>

        {/* <Link to={"/dashboard"}>  */}
        <section className="w-100 d-flex justify-content-end p-3">
          <button className="btn btn-primary" onClick={handleOnboarding}>
            Get Started
          </button>
        </section>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Walktrough;
