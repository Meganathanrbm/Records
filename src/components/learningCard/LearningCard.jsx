import React from "react";
import "./learningCard.css";
import thumbnail from "../../assets/thumbnail.webp";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const LearningCard = ({val}) => {
  return (
    <div className="learningCard">
      <div className="learningCard__wrapper">
        <Link to={"/learning-content"}>
          <div className="learningCard__img">
            <img src={thumbnail} alt="" width={"200px"} />
          </div>
        </Link>

        <div className="learningCard__content">
          <h6>Interaction Design</h6>
          <div className="learningCard__progress">
            <p>Progress</p>
            <div className="learningCard__progress_per">
              <progress value={val} max="100">
                {val}
              </progress>
              <p>{val}%</p>
            </div>
          </div>
          <div className="learningCard__button">
            <p>
              Enrolled On <span>Udemy</span>
            </p>
            <button>
              Continue Learning <FiArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCard;
