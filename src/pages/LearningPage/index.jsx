import React from "react";
import "./learning.css";
import { FaCheck } from "react-icons/fa6";
import LearningCard from "../../components/learningCard/LearningCard";
import PipelineCard from "../../components/pipelineCard/PipelineCard";
import { HiOutlineDotsVertical } from "react-icons/hi";
import Ulogo from "../../assets/u-logo.png";
import Ylogo from "../../assets/y-logo.png";
import Clogo from "../../assets/c-logo.png";

const Learning = () => {
  return (
    <div className="learning__wrapper">
      <div className="learning__section">
        <h4 className="pb-3">My Learnings</h4>
        <div className="learning__card_section">
          <LearningCard val={70} />
          <LearningCard val={20} />
          <LearningCard val={50} />
          <LearningCard val={30} />
        </div>
      </div>

      <div className="learning__section2">
        <div className="learning__section2__button">
          <button
            style={{
              color: "white",

              background:
                "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",
              border: "none",

              maxWidth: "250px",
              fontSize: "14px",
            }}
          >
            Add New Learnings +
          </button>
        </div>

        <div className="learing__section2_learningGoal">
          <div class="progress-bar">
            <p>41%</p>
            <progress
              value="7"
              min="0"
              max="100"
              style={{ visibility: "hidden", height: 0, width: 0 }}
            >
              71%
            </progress>
          </div>

          <div className="searning__section2_goal">
            <div>
              <h4>Monthly Learning Goal</h4>
              <small>
                Set the target and accomplish by tracking in real time
              </small>
              <p>23/60 hours</p>
            </div>
            <div>
              <HiOutlineDotsVertical fontSize={30} />
            </div>
          </div>
        </div>

        <div className="learning__pipeline">
          <h4>Pipeline</h4>
          <div className="learning__card">
            <PipelineCard
              accadamy={"Ren Segal"}
              course={"UI/UX Fundamentals"}
              img={Ulogo}
              company={"Udemy"}
            />
            <PipelineCard
              accadamy={"TCS Accadamy"}
              course={"Master Front End Development"}
              img={Ylogo}
              company={"YouTube"}
            />
            <PipelineCard
              accadamy={"UX/UI Guru"}
              course={"User Interface Designing MasterClass"}
              img={Clogo}
              company={"Coursera"}
            />
          </div>
        </div>

        <div className="learning__completed">
          <h4>
            Completed <FaCheck />
          </h4>
          <PipelineCard
            accadamy={"UI Geek"}
            img={Ulogo}
            company={"Udemy"}
            course={"UI/UX Basics A-Z"}
          />
        </div>
      </div>
    </div>
  );
};

export default Learning;
