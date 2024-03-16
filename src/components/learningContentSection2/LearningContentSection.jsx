import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./learningContentSection.css";
import { CiClock2 } from "react-icons/ci";

const LearningContentSection = () => {
  return (
    <div className="learningContentSection">
      <h4>Course Content</h4>
      <div className="learningContentSection__wrapper">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
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
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
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
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
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
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
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
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
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
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
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
        </div>
      </div>
    </div>
  );
};

export default LearningContentSection;
