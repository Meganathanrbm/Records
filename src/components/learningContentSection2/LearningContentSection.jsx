import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./learningContentSection.css";
import { CiClock2 } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import learningApi from "../../apis/learning.api";
import PipelineCard from "../pipelineCard/PipelineCard";

const LearningContentSection = ({ courseId, videoIndex, setVideoIndex }) => {
  const [data, setData] = useState();
  useEffect(() => {
    learningApi.getCourse({
      suffPath: courseId,
      success: (res) => {
        console.log("get course success");
        setData(res?.data?.courseContent);
      },
      error: (err) => {
        console.log("get course failed", err);
      },
    });
  }, []);
  return (
    <div className="learningContentSection">
      <h4>Course Content</h4>
      <div className="learningContentSection__wrapper">
        <div className="accordion" id="accordionExample">
          {/* <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <p>
                  Section 1: Introduction
                  <div>1/11 3min</div>
                </p>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      1. The Internet Overview{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 3mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      2.The HTTP protocol{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 4mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      3. The HTTPS Protocol{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 3mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      4. The SMTP Protocol and Local Mail{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 1mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      5. Outbound Mail Delivery{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 2mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      6. Network Basics- LAN and WAN{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 4mins
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <p>
                  Section 2: The Web Development
                  <div>1/11 3min</div>
                </p>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      1. The Internet Overview{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 3mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      2.The HTTP protocol{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 4mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      3. The HTTPS Protocol{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 3mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      4. The SMTP Protocol and Local Mail{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 1mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      5. Outbound Mail Delivery{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 2mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      6. Network Basics- LAN and WAN{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 4mins
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <p>
                  Section 3: Planing a Website <div>1/11 5mins</div>
                </p>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      1. The Internet Overview{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 3mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      2.The HTTP protocol{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 4mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      3. The HTTPS Protocol{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 3mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      4. The SMTP Protocol and Local Mail{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 1mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      5. Outbound Mail Delivery{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 2mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      6. Network Basics- LAN and WAN{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 4mins
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <p>
                  Section 4: Planing a Website <div>1/11 5mins</div>
                </p>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      1. The Internet Overview{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 3mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      2.The HTTP protocol{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 4mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      3. The HTTPS Protocol{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 3mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      4. The SMTP Protocol and Local Mail{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 1mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      5. Outbound Mail Delivery{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 2mins
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" id="" name="" value="" />
                      6. Network Basics- LAN and WAN{" "}
                      <div className="accordion__time">
                        <CiClock2 /> 4mins
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          {data?.map((item, i) => (
            <div
              onClick={() => setVideoIndex(item.position)}
              key={i}
              style={
                videoIndex == item.position
                  ? {
                      border: "1px solid lightgray",
                      padding: "10px",
                      borderRadius: "10px",
                      display: "flex",
                      margin: "10px",
                      justifyContent: "space-between",
                      gap: "10px",
                      width: "100%",
                      alignItems: "start",
                      height: "auto",
                      backgroundColor: "aliceblue",
                      cursor: "pointer",
                    }
                  : {
                      border: "1px solid lightgray",
                      padding: "10px",
                      borderRadius: "10px",
                      display: "flex",
                      margin: "10px",
                      justifyContent: "space-between",
                      gap: "10px",
                      width: "100%",
                      alignItems: "start",
                      height: "auto",

                      cursor: "pointer",
                    }
              }
              className="courseContentBox"
            >
              <img
                style={{
                  borderRadius: "5px",
                  width: "150px",
                }}
                src={item.thumbnails.medium.url}
                alt=""
              />
              <Link></Link>
              <p
                style={{
                  fontWeight: "700",
                  marginTop: "10px",
                  fontSize: "14px",
                }}
              >
                {item.videoTitle.length < 33 ? item.videoTitle: item.videoTitle.slice(0,33)+"..."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningContentSection;
