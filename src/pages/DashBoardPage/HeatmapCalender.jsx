import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./heatmapcalender.css";

const HeatmapCalender = ({ learningData }) => {

  const [contributeData, setcontributeData] = useState();
  const date = new Date(learningData && learningData[0].date);
  const endDate = new Date(
    learningData && learningData[learningData.length - 1].date
  );

  // Create an array of day numbers for the month (1 to )
  const daysArray = Array(35).fill(0);
  const start = date.getDay();
  const end = endDate.getDate();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    setcontributeData(learningData);
  }, [learningData]);
  return (
    <div
      style={{
        border: "1px solid lightgray",
        borderRadius: "15px",
        padding: "12px",
      }}
      className="tw-border-2 tw-mt-3 tw-rounded-xl tw-p-3"
    >
      <ul
        style={{
          paddingLeft: "0",
          paddingInlineStart: "0",
        }}
        className="heatmap-week-container"
      >
        {daysOfWeek.map((week, i) => (
          <li key={i} className="heatmap-week tw-text-xs tw-font-semibold">
            {week}
          </li>
        ))}
      </ul>
      <div className="heatmap-calendar">
        {daysArray.map((day, i) => (
          <div
            key={i}
            data-tooltip-id="day-tooltip"
            className={`${
              i >= start && i <= end
                ? contributeData && contributeData[i - start + 1]?.learned >= 24
                  ? "first-order "
                  : contributeData &&
                    contributeData[i - start + 1]?.learned >= 16 &&
                    contributeData &&
                    contributeData[i - start + 1]?.learned < 24
                  ? "second-order"
                  : contributeData &&
                    contributeData[i - start + 1]?.learned >= 8 &&
                    contributeData &&
                    contributeData[i - start + 1]?.learned < 16
                  ? "third-order"
                  : "fourth-order"
                : "empty-day"
            } heatmap-day `}
            data-tooltip-content={
              i >= start && i <= end
                ? `${
                    contributeData && contributeData[i - start + 1]?.learned
                  }  Contributions`
                : ""
            }
          ></div>
        ))}
      </div>
      <Tooltip id="day-tooltip" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "15px",
        }}
        className="d-flex tw-justify-between tw-mt-4"
      >
        <a
          style={{
            fontSize: "14px",
            textDecoration: "underline",
          }}
          className="tw-text-xs tw-underline"
          href="#"
        >
          How it works?
        </a>
        {/* color scale */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "14px",
            alignItems: "center",
          }}
          className="d-flex tw-justify-center tw-text-xs tw-items-center"
        >
          Less
          <div
            style={{
              height: "16px",
              width: "16px",
              borderRadius: "5px",
              margin: "0 2px",
            }}
            className="tw-h-4 tw-w-4 tw-rounded-md tw-mx-[1.5px] fourth-order"
          ></div>
          <div
            style={{
              height: "16px",
              width: "16px",
              borderRadius: "5px",
              margin: "0 2px",
            }}
            className="tw-h-4 tw-w-4 tw-rounded-md tw-mx-[1.5px] third-order"
          ></div>
          <div
            style={{
              height: "16px",
              width: "16px",
              borderRadius: "5px",
              margin: "0 2px",
            }}
            className="tw-h-4 tw-w-4 tw-rounded-md tw-mx-[1.5px] second-order"
          ></div>
          <div
            style={{
              height: "16px",
              width: "16px",
              borderRadius: "5px",
              margin: "0 2px",
            }}
            className="tw-h-4 tw-w-4 tw-rounded-md tw-mx-[1.5px] first-order"
          ></div>
          More
        </div>
      </div>
    </div>
  );
};

export default HeatmapCalender;
