import React from "react";
import "./DashBoardFooterCard.css";
import { IoMdAdd } from "react-icons/io";
import { MdDownloadDone } from "react-icons/md";

const DashboardFooterCard = ({ img, title }) => {
  return (
    <div className="dashboardFooterCard">
      <div className="dashboardFooterCard__logo_title">
        <div className="dashboardFooterCard__img">
          <img src={img} alt="" width={"50px"} />
        </div>
        <div className="dashboardFooterCard__title_p">
          <h5>{title}</h5>
          <p>
            Connect Your Udemy and bring all your <br /> learning and
            certifications
          </p>
        </div>
        <div className="dashboardFooterCard__icons">
          {title === "Udemy" ? (
            <MdDownloadDone
              className="dahsboardFooterCard__check"
              fontSize={30}
            />
          ) : (
            <IoMdAdd className="dashboardFooterCard__icon" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardFooterCard;
