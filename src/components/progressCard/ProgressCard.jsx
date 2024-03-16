import React from "react";
import "./progressCard.css";
import { IoMdArrowForward } from "react-icons/io";

const ProgressCard = ({ img, title, progress }) => {
  return (
    <div className="progressCard">
      <div className="porgressCard__wrapper">
        <img src={img} alt="" width={"250px"} />
        <h6>
          {title} <IoMdArrowForward />
        </h6>
        <div className="progressCard__wrapper_progress">
          <p>Progress</p>
          <progress id="file" max="100" value={progress}></progress>
          {progress}%
        </div>

        <small>Learnings from Udemy</small>
      </div>
    </div>
  );
};

export default ProgressCard;
