import React from "react";
import "./pipelineCard.css";
import thumbnail from "../../assets/thumbnail.webp";
import { HiOutlineDotsVertical } from "react-icons/hi";

const PipelineCard = ({ img, company, data, }) => {
  return (
    <div className="pipelineCard">
      <div className="pipelineCard__wrapper">
        <div className="pipelineCard__img">
          <img
            src={data?.courseMetaData.thumbnails.default.url}
            alt=""
            width={"150px"}
            style={{
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="pipelineCard__text">
          <h6>{data?.courseMetaData?.title}</h6>
          <small>{data?.courseMetaData?.channelTitle}</small>
          <div style={{
            marginTop:"5px"
          }}>
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
