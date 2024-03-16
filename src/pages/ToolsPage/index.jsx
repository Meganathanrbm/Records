import React, { useState } from "react";
import toolCard from "../../constants/toolspage.constant";
import YouTubeCourse from "./YoutubeCourse";

const Tools = () => {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div className="" style={{ overflow: "auto" }}>
      <h3 className="mb-3">My Tools</h3>
      {buttonClicked ? (
        <YouTubeCourse />
      ) : (
        <ToolsCards setButtonClicked={setButtonClicked} />
      )}
    </div>
  );
};

function ToolsCards({ setButtonClicked }) {
  return (
    <div className="row gap-2 w-100 justify-content-around ">
      {toolCard.map((item, index) => {
        return (
          <div
            key={index}
            className="col-3 gap-3 p-4 border rounded-3 d-flex flex-column justify-content-center align-items-center"
          >
            <div className="d-flex justify-content-center align-items-center gap-2">
              <img
                src={item.icon}
                className="card-img-top"
                alt="..."
                style={{ width: "2vw" }}
              />
              <h5>{item.title}</h5>
            </div>

            <p className="text-center">{item.description}</p>
            {item.btn && (
              <button
                onClick={() => setButtonClicked(true)}
                className="btn d-flex gap-2"
                style={{
                  backgroundColor: "rgba(235, 124, 73, 1) rgba(240, 79, 82, 1)",
                  color: "white",
                }}
              >
                Use Now <i className="bi bi-arrow-right-short"></i>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Tools;
