import React from "react";
import "./learningContentCard.css";
import { HiOutlineDotsVertical } from "react-icons/hi";
import feedIcon from "../../assets/svg/feedBtn.svg";
import plusIcon from "../../assets/svg/plusIcon.svg";

const LearningContentCard = ({ time, content }) => {

  const dropdown = [
    { name: "Update Notes" },
    {name:"Delete Notes"},
  ];

  return (
    <div className="learningContentCard">
      <div className="learningContentCard__time">
        <small>{time}</small>
        <div className="learningContentCard__p">
          <p>{content}</p>
          <div>
            
            <div className="dropdown">
              <HiOutlineDotsVertical fontSize={30} 
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              width: "25px",
              height: "25px",
              cursor: "pointer",
            }}
            />
              <ul className="dropdown-menu mr-3">
                {dropdown.map((item, index) => {
                  return (
                    <li key={index}>
                      <a className="dropdown-item" href="#">
              
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningContentCard;
