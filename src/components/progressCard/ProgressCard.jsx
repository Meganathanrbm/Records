import React from "react";
import "./progressCard.css";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const ProgressCard = ({ data }) => {
  return (
    <div className="progressCard">
      <div className="porgressCard__wrapper">
        <img
          src={data?.courseMetaData?.thumbnails?.medium?.url}
          alt=""
          width={"230px"}
        />
        <Link to={`/learning-content/${data?.youtubeCourseId}`}>
          <h6>
            {data?.courseMetaData?.title} <IoMdArrowForward />
          </h6>
        </Link>
        <div className="progressCard__wrapper_progress">
          <p>Progress</p>
          <progress
            style={{ marginRight: "5px" }}
            id="file"
            max="100"
            value={data?.courseProgress}
          ></progress>
          {data?.courseProgress}%
        </div>

        <small>
          Learnings from <span style={{ fontWeight: "bold" }}>Youtube</span>
        </small>
      </div>
    </div>
  );
};

export default ProgressCard;
