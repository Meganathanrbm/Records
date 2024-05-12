import React from "react";
import "./learningContentCard.css";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const LearningContentCard = ({
  time,
  content,
  handleDeleteNote,
  handleEditNote,
  courseId,
  videoId,
}) => {
  return (
    <div className="learningContentCard">
      <div className="learningContentCard__time">
        <small>
          {time < 3600
            ? `${Math.floor(time / 60)}:${(time % 60)
                .toString()
                .padStart(2, "0")}`
            : `${Math.floor(time / 3600)}:${Math.floor((time % 3600) / 60)
                .toString()
                .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`}
        </small>
        <div className="learningContentCard__p">
          <p>{content}</p>
          <div>
            <HiOutlineDotsVertical
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ cursor: "pointer" }}
              fontSize={30}
            />
            <ul className="dropdown-menu">
              <li
                onClick={() => handleEditNote(content, time)}
                style={{
                  padding: "5px 10px",
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <MdModeEdit />
                Edit
              </li>
              <li
                onClick={() => handleDeleteNote(time)}
                style={{
                  padding: "5px 10px",
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <MdDelete />
                Delete
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningContentCard;
