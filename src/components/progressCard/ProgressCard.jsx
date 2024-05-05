import React from "react";
import "./progressCard.css";
import { IoMdArrowForward } from "react-icons/io";

const ProgressCard = ({ data }) => {
  return (
    <div className="progressCard">
      <div className="porgressCard__wrapper">
        <img
          src={data?.courseMetaData?.thumbnails?.medium?.url}
          alt=""
          width={"230px"}
        />
        <h6>
          {data?.courseMetaData?.title} <IoMdArrowForward />
        </h6>
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
          Learnings from <span style={{ fontWeight: "bold" }}>Udemy</span>
        </small>
      </div>
    </div>
  );
};

export default ProgressCard;
