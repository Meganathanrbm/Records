import React from "react";
import "./pipelineCard.css";
import thumbnail from "../../assets/thumbnail.webp";
import { HiOutlineDotsVertical } from "react-icons/hi";

const PipelineCard = ({ img, company, course, accadamy }) => {
  return (
    <div className="pipelineCard">
      <div className="pipelineCard__wrapper">
        <div className="pipelineCard__img">
          <img src={thumbnail} alt="" width={"150px"} />
        </div>
        <div className="pipelineCard__text">
          <h6>{course}</h6>
          <small>{accadamy}</small>
          <div>
            <img src={img} width={"25px"} alt="" />
            <p>{company}</p>
          </div>
        </div>
      </div>

      <div>
        <HiOutlineDotsVertical fontSize={30} />
      </div>
    </div>
  );
};

export default PipelineCard;
