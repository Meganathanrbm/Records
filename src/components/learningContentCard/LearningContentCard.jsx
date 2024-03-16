import React from "react";
import "./learningContentCard.css";
import { HiOutlineDotsVertical } from "react-icons/hi";

const LearningContentCard = ({ time, content }) => {
  return (
    <div className="learningContentCard">
      <div className="learningContentCard__time">
        <small>{time}</small>
        <div className="learningContentCard__p">
          <p>{content}</p>
          <div>
            <HiOutlineDotsVertical fontSize={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningContentCard;
