import React from "react";
import "./pipelineCard.css";
import thumbnail from "../../assets/thumbnail.webp";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";

const PipelineCard = ({
  img,
  company,
  data,
  tripleDot,
  thumbnails,
  title,
  desc,
}) => {
  return (
    <div className="pipelineCard">
      <div className="pipelineCard__wrapper">
        <div className="pipelineCard__img">
          <img
            src={thumbnails}
            alt=""
            width={"150px"}
            style={{
              borderRadius: "5px",
            }}
          />
        </div>
        <Link to={`/learning-content/${data?.youtubeCourseId}`}>
          <div className="pipelineCard__text">
            <h6>{title}</h6>
            <small>{desc}</small>
            <div
              style={{
                marginTop: "5px",
              }}
            >
              {img && <img src={img} width={"25px"} alt="" />}
              {company && <p>{company}</p>}
            </div>
          </div>
        </Link>
      </div>

      <div>{tripleDot && <HiOutlineDotsVertical fontSize={30} />}</div>
    </div>
  );
};

export default PipelineCard;
