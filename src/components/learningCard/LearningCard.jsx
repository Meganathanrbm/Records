import React from "react";
import "./learningCard.css";
import thumbnail from "../../assets/thumbnail.webp";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const LearningCard = ({ val, data }) => {
  return (
    <div className="learningCard">
      <div className="learningCard__wrapper">
        <Link to={{ pathname: "/learning-content", state: { data } }}>
          <div className="learningCard__img">
            <img
              src={data?.courseMetaData?.thumbnails?.medium?.url}
              alt=""
              width={"200px"}
            />
          </div>
        </Link>

        <div className="learningCard__content">
          <h6>{data?.courseMetaData?.title}</h6>
          <div className="learningCard__progress">
            <p>Progress</p>
            <div className="learningCard__progress_per">
              <progress value={data?.progress} max="100">
                {data?.progress}
              </progress>
              <p>{data?.progress}%</p>
            </div>
          </div>
          <div className="learningCard__button">
            <p>
              Enrolled On <span>Youtube</span>
            </p>
            <Link to={{ pathname: "/learning-content", state: { data } }}>
              <button>
                Continue Learning <FiArrowUpRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCard;
