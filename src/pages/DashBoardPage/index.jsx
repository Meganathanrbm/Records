import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./dashboard.css";

import { useRecoilState } from "recoil";
import { IoMdArrowForward, IoIosArrowForward } from "react-icons/io";
import { FaMedal } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

import currentUserState from "../../store/user.store";
import ProgressCard from "../../components/progressCard/ProgressCard";
import DashboardFooterCard from "../../components/dashboardFooterCard/DashBoardFooterCard";
import HeatmapCalender from "./HeatmapCalender";

import thumbnail from "../../assets/thumbnail.webp";
import youtube from "../../assets/Youtube.png";
import linkedin from "../../assets/Linkedin.png";
import coursera from "../../assets/Coursera.png";
import udemy from "../../assets/Udemy.png";
import calender from "../../assets/calender.png";
import userApi from "../../apis/user.api";

const DashBoard = () => {
  const [currentLoggedInUser, setCurrentLoggedInUser] =
    useRecoilState(currentUserState);
  const [dashboardData, setDashboardData] = useState(null);
  console.log(dashboardData);
  useEffect(() => {
    userApi.dashboardData({
      success: (res) => {
        console.log("Dashboard data Success", res);
        setDashboardData(res.data);
      },
      error: (err) => {
        console.log("Dashboard Error", err);
      },
    });
  }, []);
  return (
    <div className="dashboard__wrapper">
      <div className="dashboard__section1">
        <div className="dashboard__container1">
          <div className="dashboard__header">
            <h1>Welcome back, {currentLoggedInUser.name}</h1>
            <p>You can now your YouTube Playlists into Courses</p>
            <button>
              Explore Now <IoMdArrowForward />
            </button>
          </div>
        </div>

        {/* Course In-Progress */}
        <div className="dashboard__container2">
          <h4>Course In-Progress</h4>
          <div className="dashboard__container2_progress">
            {dashboardData?.coursesInProgress.map((course) => (
              <ProgressCard data={course} />
            ))}

            <p className="dashboard__container3_seeAll">
              See all <IoIosArrowForward />
            </p>
          </div>
        </div>

        <div className="dashboard__container3">
          <div className="dashboard__container3__wrapper">
            <div className="dashboard__container3_cards">
              <DashboardFooterCard img={coursera} title={"Coursera"} />
              <DashboardFooterCard img={youtube} title={"Youtube"} />
              <DashboardFooterCard
                img={udemy}
                title={"Udemy"}
                para={`Connect Your Udemy and bring all your learning and certifications`}
              />
              <DashboardFooterCard img={linkedin} title={"Linkedin"} />
            </div>

            <div className="dashbord__container3__dropdown">
              <p>
                Choose from your Favourite <br /> Course Provider
              </p>
              <div className="dashbord__container3__dropdownMenu">
                <select name="" id="cars">
                  <option value="">Select</option>
                  <option value="">#</option>
                  <option value="">#</option>
                  <option value="">#</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard__seciton2">
        <div className="dashboard__section2_warpper">
          <div className="dashboard__section2__skill">
            <h4>Skill Badges</h4>
            <div className="dashboard__seciton2_role_wrapper">
              <div className="dashboard__seciton2_role_wrapper_interest">
                <div className="dashboard__section2__role">
                  <FaMedal fontSize={40} />
                  <p>
                    {
                      dashboardData?.skillRepository?.skillBadges
                        ?.roleBasedCount
                    }
                  </p>
                </div>
                <p>Role Based</p>
              </div>
              <div className="dashboard__seciton2_role_wrapper_interest">
                <div className="dashboard__section2__role">
                  <FaMedal fontSize={40} />
                  <p>
                    {" "}
                    {
                      dashboardData?.skillRepository?.skillBadges
                        ?.interestBasedCount
                    }
                  </p>
                </div>
                <p>Interest Based</p>
              </div>
            </div>
          </div>

          {/* Learning Goal */}
          <div className="dashboard__section2_learningGoal">
            <div>
              <div className="progress-bar">
                <p className="dashboare__section2_val">
                  {(dashboardData?.goal?.goalDone /
                    dashboardData?.goal?.goalTarget) *
                    100}
                  %
                </p>
                <progress
                  value={dashboardData?.goal?.goalDone}
                  min="0"
                  max={dashboardData?.goal?.goalTarget}
                  style={{ visibility: "hidden", height: 0, width: 0 }}
                >
                  {dashboardData?.goal?.goalDone}
                </progress>
              </div>
            </div>

            <div className="dashboard__section2_text">
              <h4>Learning Goal</h4>
              <p>
                {dashboardData?.goal?.goalDone} /{" "}
                {dashboardData?.goal?.goalTarget} hours
              </p>
            </div>
          </div>

          <div className="dashboard__section2_active">
            <h4>Learning Activities</h4>
            <HeatmapCalender learningData={dashboardData?.learningActivities} />
          </div>

          <div className="dashboard__section2_performance">
            <div>
              <h4>MoM Peerformance</h4>
              <p>
                <FaArrowTrendUp />
                {dashboardData?.momPercentage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
